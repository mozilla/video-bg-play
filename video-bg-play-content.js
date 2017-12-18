'use strict';

// Page Visibility API
Object.defineProperties(document.wrappedJSObject,
  { 'hidden': {value: false}, 'visibilityState': {value: 'visible'} });

window.addEventListener(
  'visibilitychange', evt => evt.stopImmediatePropagation(), true);
window.addEventListener(
  'blur', evt => evt.stopImmediatePropagation(), true);

// Fullscreen API
window.addEventListener('fullscreenchange', evt => {
  Object.defineProperties(document.wrappedJSObject,
    { 'fullscreenEnabled': {value: true},
      'fullscreen': {value: true},
      'fullscreenElement': {value: document.fullscreenElement.wrappedJSObject}});
  window.addEventListener(
    'fullscreenchange', evt => evt.stopImmediatePropagation(), true);
}, { capture: true, once: true });
