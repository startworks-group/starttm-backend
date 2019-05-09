initialize:
	- docker-compose up -d
	#- docker exec -it starttm-ws sh cp .env.docker .env
	#- docker exec -it starttm-ws npm install
	#- docker exec -it starttm-ws adonis key:generate
	#- docker exec -it starttm-ws adonis migration:run --force
	#- docker-compose stop

start:
	- docker-compose up

stop:
	- docker-compose stop

sh:
	- docker exec -it starttm-ws sh

bash:
	- docker exec -it starttm-ws bash