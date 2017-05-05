'use strict';

Object.defineProperties(document.wrappedJSObject,
  { 'hidden': {value: false}, 'visibilityState': {value: 'visible'} });

document.addEventListener(
  'visibilitychange', evt => evt.stopImmediatePropagation(), true);
