# Format
# Target: dependencies
# 	command1
#	command2
#	command3


install:
	npm install

test: install
	npm run test

start_dev: install
	npm run dev

lint: install
	npm run lint