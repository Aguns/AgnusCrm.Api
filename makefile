run:
	deno run --allow-read --allow-write --allow-net --allow-env bin/server.ts
	docker build -t app . && docker run -it --init -p 4000:4000 app

	gcloud builds submit --tag gcr.io/mahotacrm/agnus-00001-qas
	gcloud run deploy agnusapi --image gcr.io/mahotacrm/agnus-00001-qas --platform managed --region us-east4 --allow-unauthenticated
	heroku create --buildpack https://github.com/chibat/heroku-buildpack-deno.git
	git push heroku master

	heroku apps:lit-hamlet-48026 agnusapi

	heroku run deno -L=debug  --allow-net  --allow-env --allow-write --allow-read --allow-plugin --unstable main.ts --port=5000 --app agnusapi