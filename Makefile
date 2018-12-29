deploy:
	npm run build
	cd .vuepress/dist
	echo 'www.airdb.com' > CNAME
	git init
	git add -A
	git commit -m"update deploy"
	git push github.com/airdb/airdb.github.io master
