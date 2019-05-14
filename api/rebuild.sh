cd ../client
grunt build
cd ../api
killall -9 node
node api.js
