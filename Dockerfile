FROM oven/bun:1 AS base 
WORKDIR /usr/src/app 

# install dependencies into temp directory 
FROM base AS install 
RUN mkdir -p /tmp/dev
COPY package.json bun.lockb /tmp/dev/
RUN cd /tmp/dev && bun install --frozen-lockfile 

# install with --production (exclude devDependencies)
RUN mkdir -p /tmp/prod
COPY package.json bun.lockb /tmp/prod/
RUN cd /tmp/prod && bun install --frozen-lockfile --production 

# copy node_modules from tmp dir 
# then copy all (non-ignored) project files into the image 
FROM base AS prerelease 
COPY --from=install /tmp/dev/node_modules node_modules
COPY . . 

ENV NODE_ENV=production 
RUN bun test 

FROM base AS release 
COPY --from=install /tmp/prod/node_modules node_modules
COPY --from=prerelease  /usr/src/app/ . 
COPY --from=prerelease /usr/src/app/package.json . 

# build the app 
RUN bun build ./src/main.ts --compile --outfile rbac

USER bun 
ENTRYPOINT [ "./rbac" ]