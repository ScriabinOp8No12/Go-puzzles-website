## Installing packages, and moving local python scripts to VM

1. sudo apt update && sudo apt upgrade -y
2. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
3. export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
4. nvm install 16.19.1
5. nvm use 16.19.1
6. cd ~
mkdir katago_gpu_app
7. cd katago_gpu_app
npm init -y
8. npm install express helmet pythonia

-----
9.
nano GCP_parse_katago_largest_point_mistakes.py
nano GCP_sgf_to_largest_mistakes.py

Then copy paste the GCP_ ... python scripts from the GoogleCloudSetup folder into the file.  Ctrl + o, hit enter, Ctrl + x

10. Test python script by going to the folder where the script is located (~/katago_gpu_app) then running
cd ~/katago_gpu_app
python3 GCP_sgf_to_largest_mistakes.py

11. After stopping then restarting the VM for the ~third/fourth time, I get the same error, nvidia-smi is just not there anymore

12. sudo apt-get install linux-headers-`uname -r` (DID THIS JUST FIX IT??!?!?!?!?)
nvidia-smi works now... wow

Count of stops and starts to instance and if nvidia-smi still works: ||||
Count of GPU start and stops: |||


## Setting up KataGo server

1. Configure permanent external ip address -> it won't change after we start and stop the VM instance
Type "VPC network" into the search bar at the top, select VPC networks
On the left sidebar, click IP addresses, select the VM with cuda
Click the 3 dots, click "promote to static IP address"

2. Click the 3 dots on the external ip address one, do the same thing.  Maybe it didn't show up until we made the internal ip address static?  Idk, it seems to work now?

In our VM, it should show the "external ip address" even when the VM is off!  That means it's working
Test to see if the external ip address changes after we start stop then start the cuda VM

Static now, External IP Address is: 34.118.131.136

## Setup firewall rules

1. Search up VPC network, and click VPC networks
Click firewall from the left sidebar

2. Click "Create firewall rules" from the top of the page
3. Fill out the form and click create, see image in /GoogleCloudSetup/screenshots/Firewall rule page 10_6_23 to see the inputs used
4. Find our CUDA VM and click on it, then click edit
5. Scroll down to "Network tags" and add katago-server

## Adding katago-server.js to VM and running the server with the python scripts

1. go into the katago_gpu_app folder, and
nano katago-server.js
2. Copy paste our katago-server.js file from this GoogleCloudSetup folder, ctrl + o, hit enter, ctrl + x (same 3 steps)
3. Within the same directory, run:
node katago-server.js

The server will show:
(base) situationpuzzles@katago-nvidia-t4-cuda:~/katago_gpu_app$ node katago-server.js
Server running on http://0.0.0.0:3000

4. In postman, go to the post route: http://34.118.131.136:3000/potential_puzzles/generate
