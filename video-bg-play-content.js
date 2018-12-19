'use strict';

// Page Visibility API
Object.defineProperties(document.wrappedJSObject,
  { 'hidden': {value: false}, 'visibilityState': {value: 'visible'} });

window.addEventListener(
  'visibilitychange', evt => evt.stopImmediatePropagation(), true);
