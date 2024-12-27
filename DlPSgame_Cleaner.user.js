// ==UserScript==
// @name         DlPSgame Cleaner
// @version      0.4
// @description  Reflow the website header after adblock hides the ads!
// @author       Hosamn
// @downloadURL  https://github.com/hosamn/userscripts/raw/main/DlPSgame_Cleaner.user.js
// @updateURL    https://github.com/hosamn/userscripts/raw/main/DlPSgame_Cleaner.user.js
// @match        *://dlpsgame.com/*
// @match        *://dlpsgame.org/*
// @exclude      https://dlpsgame.com/home/
// @exclude      https://dlpsgame.org/home/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=playstation.com
// ==/UserScript==

(function() {
    'use strict';

    // Hide the big gap above header
    document.getElementById("header").style.marginTop = "0"
    document.getElementById("header").style.padding = "0 0"

    // Re-Style header
    document.getElementById("header").style.backgroundImage = "url(https://dlpsgame.org/wp-content/uploads/2015/06/media-51973.jpg)"

    // Hide the 'social' icons in the header
    document.getElementById("block_social").remove()

    // Hide porn icon
    document.getElementById("menu-item-12083").remove()
    document.getElementById("HTML1").childNodes[7].childNodes[51].remove()

    // Remove the big box at page head
    document.getElementsByClassName("widget-content")[1][1][1].lastElementChild.remove()
    // https://dlpsgame.com/wp-content/uploads/2015/06/media-51973.jpg

    // Increase the size of the Game Name
    document.getElementsByTagName("h1").item(0).style.fontSize = "300%"
    document.getElementsByClassName("fb-like")[0].parentElement.childNodes[2].remove()
    document.getElementsByClassName("fb-like")[0].remove()

})();
