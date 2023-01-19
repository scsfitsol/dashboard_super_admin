#!/bin/bash

sudo chmod -R 777 /root/dashboard_super_admin

cd /root/dashboard_super_admin

npm i --legacy-peer-deps

npm run build

pm2 restart 1
