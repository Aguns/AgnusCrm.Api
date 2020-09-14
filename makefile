run:
	deno run --allow-read --allow-write --allow-net --allow-env --allow-plugin --unstable bin/server.ts
	docker build -t app . && docker run -it --init -p 4000:4000 app

	##google cloud
	gcloud builds submit --tag gcr.io/mahotacrm/agnus-00001-qas
	gcloud run deploy agnusapi --image gcr.io/mahotacrm/agnus-00001-qas --platform managed --region us-east4 --allow-unauthenticated
	git push heroku master

	##heroku
	heroku apps:lit-hamlet-48026 agnusapi
	heroku create --buildpack https://github.com/chibat/heroku-buildpack-deno.git
	heroku run deno -L=debug  --allow-net  --allow-env --allow-write --allow-read --allow-plugin --unstable main.ts --port=5000 --app agnusapi

	##docker
	docker-compose up