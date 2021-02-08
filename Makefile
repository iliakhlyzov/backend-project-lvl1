install:
	npm install

brain-games:
	bin/brain-games.js

brain-even:
	bin/games/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

commit:
	git commit -am 'updated'