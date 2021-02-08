install:
	npm install

brain-games:
	node bin/games/brain-games.js

brain-even:
	bin/games/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
