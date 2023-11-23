// ==UserScript==
// @name         thgss.com Cleaner
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to Clean thgss.com
// @author       Hosamn
// @match        https://thgss.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=thgss.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelector('body > iframe').remove()
    document.querySelector('.blockerAlert').remove()
    // document.querySelector('.CenterText > script').remove()
    // document.querySelector('.CenterText').textContent.replaceAll("best servers to save your data", "")
    document.querySelector('.CenterText').textContent = "Hello Hosam"


    // pre.textContent = pre.textContent.replaceAll('LLVM', "Ernst Blofeld");

})();