#!/bin/bash

. startFabric.sh javascript
cd javascript
node enrollAdmin.js
node registerUser.js
npm run dev
