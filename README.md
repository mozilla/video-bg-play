# Video Background Play Fix

Firefox for Android can continue playing video even if you switch to another tab or app.
However, sites can detect these user actions with the [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API) and the [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API).
This add-on is designed to block events and properties exposed by the APIs.

## License

MIT.

## Technical detail

The add-on injects a content script to replace the properties exposed, and stops event from propagating when applicable.

### Page Visibility API

The add-on blocks `visibilitychange` event, and set `document.hidden` to be always `false` and `document.visibilityState` to be forever `visible`.

### Fullscreen API

The add-on freezes the properties upon the first fullscreen request. The properties are:

* `document.fullscreenEnabled`: `true`
* `document.fullscreen`: `true`
* `document.fullscreenElement`: the element that enters fullscreen

The first `fullscreenchange` event is allowed to passed through as usual.
Subsequent `fullscreenchange` events are blocked to keep the returned value of the API in the fullscreen state, even when the page exits the fullscreen.

## Sites

As a demonstration, the content script currently injects itself to the following sites:

* youtube.com
* vimeo.com
