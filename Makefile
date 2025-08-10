run:
	bin/nodejs-package.js 10

deps-install:
	npm ci

publish:
	npm publish --dry-run
