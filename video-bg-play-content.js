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
