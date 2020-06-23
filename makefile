run:
	deno run --allow-read --allow-write --allow-net --allow-env main.ts
	 docker build -t app . && docker run -it --init -p 8080:8080 app

	gcloud builds submit --tag gcr.io/mahotacrm/agnus-00001-qas
	gcloud run deploy agnusapi --image gcr.io/mahotacrm/agnus-00001-qas --platform managed --region us-east4 --allow-unauthenticated