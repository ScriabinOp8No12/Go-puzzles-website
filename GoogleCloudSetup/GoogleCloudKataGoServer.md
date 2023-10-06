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

Static now: 34.118.131.136

1st time:
34.118.131.136
