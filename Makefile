all: dist/bitster.min.js

dist:
	mkdir -p dist

dist/bitster.min.js: dist src/bitster.js
	@echo "Building bitster.min.js"
	cat src/header.js src/bitster.js src/footer.js | java -jar ~/closure-compiler/compiler.jar > dist/bitster.min.js

clean:
	rm -rf dist/

test: dist/bitster.min.js
	@./node_modules/.bin/mocha --reporter spec -u tdd

.PHONY: test clean
