#!/bin/bash

npm run build
cd .vuepress/dist || exit -1

echo 'airdb.com' > CNAME

git init
git add -A
git commit -m"update deploy"
git push -f https://github.com/airdb/airdb.github.io.git master
