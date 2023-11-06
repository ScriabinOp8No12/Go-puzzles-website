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

***************

To setup the scheduler that auto turns the VM on and off, we go to the "instance schedules" tab / "create new schedule" or some text similar to that from the VM page, fill out the form.
Select the scheduler, and attach our VM to it, we need add permissions to the service account now

1. Create a Custom Role to start and stop our VM instance:

Go to the Google Cloud Console.
Navigate to IAM & Admin and select Roles from the side menu.
Click the + Create Role button at the top of the page.
On the Create Role page, give your role a Title, ID, and Description.
In the Permissions tab, click Add Permissions.
In the "Filter permissions" field, type compute.instances.start and select it from the list. Repeat this step for compute.instances.stop.
Once both permissions are added, click the Add button.
Click the Create button to create the role.

2. Assign the Custom Role to Your Service Account:

Still in the Google Cloud Console, navigate to IAM & Admin and select IAM.
Find the service account that needs the permissions. This will likely be the service account mentioned in the error (service-270793765303@compute-system.iam.gserviceaccount.com).
Click the pencil icon next to the service account to edit its permissions.
Click the + Add Another Role button.
In the "Select a role" field, start typing the name of the custom role you just created and select it from the list that appears.
Click Save to apply the changes.

The correct service account is actually found by following the below steps:

Login to the Google Cloud Console
To to IAM & Admin
Select IAM in the left panel
Click the box Include Google-provided role grants on the right side of the window. This enables showing Google-managed service accounts.
Locate the service account. Press CTRL-F5 to open a search box. Enter the text compute-system.
Click the pencil icon to edit the service account.
Click ADD ANOTHER ROLE
In the role filter enter Compute. Select Compute Instance Admin (v1).
Click SAVE

Now we can add the VM to the scheduler!
