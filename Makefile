run brain-games:
	node bin/brain-games.js

run brain-even:
	node bin/brain-even.js

run brain-even:
	node bin/brain-calc.js

run brain-gcd:
	node bin/brain-gcd.js

run brain-progression:
	node bin/brain-progression.js

deps-install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .
