FROM hayd/alpine-deno:latest

EXPOSE 80
#The port that your application listens to.

WORKDIR /app

# Prefer not to run as root.
USER deno

# Cache the dependencies as a layer (the following two steps are re-run only when deps.ts is modified).
# Ideally cache deps.ts will download and compile _all_ external files used in main.ts.
COPY ./deps.ts .
RUN deno cache deps.ts

# These steps will be re-run upon each file change in your working directory:
COPY . .

# These are passed as deno arguments when run with docker:
CMD ["run", "--unstable","--allow-read" ,"--allow-write","--allow-net", "--allow-env","bin/server.ts"]