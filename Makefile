install:
	npm install

brain-games:
	bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

commit:
	git commit -am 'updated'

asciinema:
	asciinema rec