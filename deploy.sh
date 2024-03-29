#!/bin/sh
echo -e "Current working directory:$1" 
pm2 delete personal-portfolio || true
PORT=1338 pm2 start $1/app.js -n personal-portfolio --watch
pm2 save
pm2 restart all
echo "Project deployed!"
