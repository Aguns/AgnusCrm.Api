run:
	deno run --allow-read --allow-write --allow-net --allow-env main.ts
	 docker build -t app . && docker run -it --init -p 8080:8080 app

	gcloud builds submit --tag gcr.io/mahotacrm/agnus-00001-qas
	gcloud run deploy agnusapi --image gcr.io/mahotacrm/agnus-00001-qas --platform managed --region us-east4 --allow-unauthenticated
	heroku create --buildpack https://github.com/chibat/heroku-buildpack-deno.git
	git push heroku master

	heroku apps:lit-hamlet-48026 agnusapi

	heroku run deno -L=debug run --allow-net --cached-only --allow-env --allow-write --allow-read --allow-plugin --unstable server.ts --port=${8080} --app agnusapi