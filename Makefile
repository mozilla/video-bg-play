FILES := manifest.json \
         video-bg-play-content.js \
         $(wildcard _locales/*/messages.json) \
         icon.svg \
         README.md

video-bg-play.zip: $(FILES) Makefile
	rm -f video-bg-play.xpi
	zip video-bg-play.xpi $(FILES)
