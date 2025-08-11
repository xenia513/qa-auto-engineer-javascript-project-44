run:
	node bin/brain-games.js

deps-install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .
