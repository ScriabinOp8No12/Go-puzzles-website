*** Run the following commands, then create the following file

sudo nano /etc/systemd/system/katago-server.service

[Unit]
Description=KataGo Server Service

[Service]
ExecStart=/home/situationpuzzles/.nvm/versions/node/v16.19.1/bin/node /home/situationpuzzles/katago_gpu_app/katago-server.js
WorkingDirectory=/home/situationpuzzles/katago_gpu_app
User=situationpuzzles
Restart=always
Environment="PATH=/home/situationpuzzles/.nvm/versions/node/v16.19.1/bin:/opt/conda/bin:$PATH"
Environment=PYTHONPATH=/opt/conda/bin/python3

[Install]
WantedBy=multi-user.target

*** Reload the systemd manager config, enable the new service, and start it

sudo systemctl daemon-reload
sudo systemctl enable katago-server.service
sudo systemctl start katago-server.service

*** Verify the service is running:

sudo systemctl status katago-server.service

*** Reload the Systemd Daemon and restart the service:

sudo systemctl daemon-reload
sudo systemctl restart katago-server.service

*** Check the status:

sudo systemctl status katago-server.service

****** Not working, use absolute path to python3, and update node.js application

which python3

gives output of:

/opt/conda/bin/python3
