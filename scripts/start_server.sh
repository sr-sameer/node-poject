#!/bin/bash
# Navigate to the project directory
cd /home/ec2-user/my-node-app

# Start the Node.js application using PM2
pm2 start src/server.ts --name "my-node-app" --watch
