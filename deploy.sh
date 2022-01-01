#!/bin/sh
echo -e "Current working directory:$1" 
pm2 delete personal-portfolio || true
PORT=1338 pm2 start $1/app.js -n personal-portfolio --kill-timeout 600000
pm2 save
echo "Project deployed!"
exit
