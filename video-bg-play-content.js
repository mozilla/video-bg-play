'use strict';

// Page Visibility API
Object.defineProperties(document.wrappedJSObject,
  { 'hidden': {value: false}, 'visibilityState': {value: 'visible'} });

document.addEventListener(
  'visibilitychange', evt => evt.stopImmediatePropagation(), true);

// Fullscreen API
document.addEventListener('fullscreenchange', evt => {
  Object.defineProperties(document.wrappedJSObject,
    { 'fullscreenEnabled': {value: true},
      'fullscreen': {value: true},
      'fullscreenElement': {value: document.fullscreenElement.wrappedJSObject}});
  document.addEventListener(
    'fullscreenchange', evt => evt.stopImmediatePropagation(), true);
}, { capture: true, once: true });
