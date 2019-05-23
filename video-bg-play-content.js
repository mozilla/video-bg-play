'use strict';

const IS_YOUTUBE = window.location.hostname.search(/(?:^|.+\.)youtube.com/) > -1 ||
                   window.location.hostname.search(/(?:^|.+\.)youtube-nocookie.com/) > -1;
const IS_VIMEO = window.location.hostname.search(/(?:^|.+\.)vimeo.com/) > -1;

// Page Visibility API
Object.defineProperties(document.wrappedJSObject,
  { 'hidden': {value: false}, 'visibilityState': {value: 'visible'} });

window.addEventListener(
  'visibilitychange', evt => evt.stopImmediatePropagation(), true);

// Fullscreen API
if (IS_VIMEO) {
  window.addEventListener(
    'fullscreenchange', evt => evt.stopImmediatePropagation(), true);
}

// User activity tracking
if (IS_YOUTUBE) {
  const refreshInterval = 5 * 60 * 1000; // every 5 minutes
  waitForYoutubeLactInit(() => refreshLact(), refreshInterval);
}

function waitForYoutubeLactInit(aCallback, aCallbackInterval, aDelay = 1000) {
  let pageWin = window.wrappedJSObject;
  if (pageWin.hasOwnProperty('_lact')) {
    window.setInterval(aCallback, aCallbackInterval);
  } else {
    window.setTimeout(() => waitForYoutubeLactInit(aCallback,
                                                   aCallbackInterval,
                                                   aDelay * 2),
                      aDelay);
  }
}

function refreshLact() {
  window.wrappedJSObject._lact = Date.now();
}
