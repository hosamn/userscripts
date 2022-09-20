// ==UserScript==
// @name        Yahoo Mail - Ad Blocker
// @namespace   ymail_ads
// @description YMail Ads Remover. Hides all the Ad panels (Top, Left, Right) in the NEW Yahoo Mail and expands them to use the full screen, to make your Yahoo Mail completely equivalent to the Paid version for free! https://github.com/gbakeman/YMailEnhanced
// @include     *://*.mail.yahoo.com/*
// @include     *://mail.yahoo.com/*
// @version     1.8.1
// @author      Volkan K.
// @license     Apache License, Version 2.0; http://www.apache.org/licenses/LICENSE-2.0
// @grant       GM_addStyle
// @grant       unsafeWindow
// @require 	https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);

function AddStyle(cssText)
{
	//alert("addstyle call");// for debug
	let styleEl = document.createElement("style");
	styleEl.textContent = cssText;
	styleEl.setAttribute("type", "text/css");
	styleEl.setAttribute("id", "my_great_css");
	let headEl = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
	headEl.appendChild(styleEl);
	//alert(headEl); // for debug
}
function rem_w_parent (remove_list) {
	parent_suspects=jQuery(remove_list).parent();
	jQuery(remove_list).remove();
	parent_suspects.filter(":empty").remove();
}
function my_ad_remover() {
  //alert('test'); // for debugging.
	rem_w_parent("#slot_LREC, #slot_REC, #slot_MON, #theMNWAd, div[data-test-id='right-rail-ad'], a[data-test-id='pencil-ad'], .rightRailAdContainer, .mb, .left_mb, .ad-filler, .layoutfixer .c3, #mbAds, #tgtTL1, #theAd, #sb_rel_tgtTL1, #masSearchAd, .sky-ad, #mbRecAds, .adchoices, .adlink, .mb-list-ad, .mb-rec-ad, #slot_TL1, #slot_mbrec, #slot_MB, #mobilizer, #yucs-disclaimer, #dd_search_results_container, .search-message-container-ad, #emptyFolderVideo > .wrapperpane, .empty-folder-submsg2");
	if ( typeof unsafeWindow.NeoConfig !== 'undefined' ) {
		if ( typeof unsafeWindow.NeoConfig.noDarla !== 'undefined' ) { unsafeWindow.NeoConfig.noDarla=1; }
		if ( typeof unsafeWindow.NeoConfig.hasAds !== 'undefined' ) { unsafeWindow.NeoConfig.hasAds=0; }
		if ( typeof unsafeWindow.NeoConfig.prefetchAd !== 'undefined' ) { unsafeWindow.NeoConfig.prefetchAd=0; }
	}
	if ($("#my_great_css").length<1){
	//, #spritzAd
	AddStyle("\
#slot_LREC, #slot_REC, #slot_MON, #theMNWAd, div[data-test-id=\"right-rail-ad\"], a[data-test-id=\"pencil-ad\"], #mbAds, #tgtTL1, #theAd, #sb_rel_tgtTL1, #masSearchAd, .sky-ad, #mbRecAds, .adchoices, .adlink, .mb-list-ad, .mb-rec-ad, #slot_TL1, #slot_mbrec, #slot_MB, #mobilizer, #yucs-disclaimer, #dd_search_results_container, .search-message-container-ad, #emptyFolderVideo > .wrapperpane, .empty-folder-submsg2 { display:none !important; width:0px !important; position: absolute !important; left: -999px !important; top: -999px !important; padding: 0px !important; z-index: -999 !important; } \
#shellcontent,#toolbar,.messagepane .right-ar {right: 0px !important;} \
#main {max-width:none !important;} \
#shellnavigation {bottom: inherit !important; } \
#msg-list.with-right-rail .list-view-items { padding-right : 0px !important;} \
#main, #yucs, #yuhead-bucket {max-width:none !important} \
.fullpage #main, .fullpage #yucs, .fullpage #yuhead-bucket {margin-right:0 !important} \
.mb-rec-ad {display:none !important; height:0 !important; border:none !important; overflow-x:hidden !important} \
.mb-list-ad {display:none !important; height:0 !important; border:none !important; overflow-x:hidden !important} \
div[data-test-id='comms-properties-bar'] {flex-direction: column !important;height: auto !important} \
div[data-test-id='comms-properties'] {flex-direction: column !important;margin-top: 14px !important} \
div[data-test-id='comms-properties'] > a {margin-right: 0 !important; margin-bottom: 14px !important} \
span[data-test-id='settings-link-label'] {display:none !important} \
");
	}
	// Remove space in email list header
	$( 'li[data-test-id="infinite-scroll-ROW"]' ).css( "transform", function( index , style) {
		calc=12+index*32;
		return "translate3d(0,"+calc+"px,0)";
	});
	
	// Remove all transform css properties from the email list items.
	var masterEmailDiv = document.getElementById("mail-app-component");
	/*if (masterEmailDiv) {
		console.log("Found master div!");
		var emailElements = masterEmailDiv.getElementsByTagName("li");
		for (item of emailElements) {
			console.log("Removed transform element.");
			item.style.removeProperty("transform");
		}
	}
	else { console.log("Error: E-Mail div not found!"); }*/
	
	// Remove duplicate header
	/*console.log("Removing bad headers.");
	var badHeaderList = document.querySelectorAll("[data-test-id='infinite-scroll-SECTION']");
	for (var item of badHeaderList) {
		item.remove();
		console.log("Removed a potentially bad header.");
	}*/
}
my_ad_remover();
$( document ).ready(my_ad_remover);
window.addEventListener("DOMNodeInserted", my_ad_remover, false);

// for the old, 'Basic' Yahoo Mail. 
var oldYahooMailAds = $(".with-ads");
if(oldYahooMailAds.length>0)
{
	GM_addStyle("\
	.mb > .tbl{ display:none !important; width:0px !important; position: absolute !important; left: -999px !important; top: -999px !important; padding: 0px !important; z-index: -999 !important; } \
	");

	oldYahooMailAds.removeClass("with-ads").addClass("withoutad");
}