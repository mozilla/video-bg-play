FILES := video-bg-play-content.js \
	manifest.json \
	README.md

video-bg-play.zip: $(FILES) Makefile
	rm -f video-bg-play.zip
	zip video-bg-play.zip $(FILES)
