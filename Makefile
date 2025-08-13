run brain-games:
	node bin/brain-games.js
run brain-even:
	node bin/brain-even.js

deps-install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .
