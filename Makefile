all: dist/bitster.min.js

dist:
	mkdir -p dist

dist/bitster.min.js: dist src/bitster.js
	@echo "Building zpipe.min.js"
	cat src/header.js src/bitster.js src/footer.js | java -jar ~/closure-compiler/compiler.jar > dist/bitster.min.js

clean:
	rm -rf dist/ node_modules/

test: dist/bitster.min.js
	npm install -d
	@./node_modules/.bin/mocha --reporter list

.PHONY: test clean