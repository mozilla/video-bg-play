'use strict';

const IS_YOUTUBE = window.location.hostname.endsWith('youtube.com') ||
                   window.location.hostname.endsWith('youtube-nocookie.com');
const IS_VIMEO = window.location.hostname.endsWith('vimeo.com');

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
  waitForYoutubeLactInit(() => refreshLact(), 1000);
}

function waitForYoutubeLactInit(aCallback, aDelay) {
  let pageWin = window.wrappedJSObject;
  if (pageWin.hasOwnProperty('_lact')) {
    window.setInterval(() => refreshLact(), 5 * 60 * 1000);
  } else {
    window.setTimeout(() => waitForYoutubeLactInit(aCallback, aDelay * 2), aDelay);
  }
}

function refreshLact() {
  window.wrappedJSObject._lact = Date.now();
}
