FROM oven/bun:1 AS base 
WORKDIR /usr/src/app 

# install dependencies 
COPY package.json bun.lockb /usr/src/app/
RUN bun install

COPY . . 

ENTRYPOINT ["bun", "run", "test"]