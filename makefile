run:
	bun start | pino-pretty

build:
	docker build -t rbac:0.0.1 . 

docker-run:
	docker run rbac:0.0.1 