install:
	npm install

brain-games:
	node bin/brain-games.js

brain-even:
	bin/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

am-upd:
	make commit -am 'updated'