Created account on Google Cloud
Setup a new project
Enabled billing ($300 free trial for 90 days gets activated)
Install Google Cloud SDK which includes CLI https://cloud.google.com/sdk?hl=en (follow step by step interactive tutorial)

To open Cloud Shell -> there's a small icon / button in the top right which shows "Activate Cloud Shell" if you hover over it

To exit configs / output -> press q OR ctrl c

## gcloud core commands (click enter to see more when we see a : at the end)

1. gcloud auth list
List the accounts that have credentials stored on the local system, once we click authorize, it sets our account as the default account

2. gcloud config list
List the properties in your active gcloud CLI configuration

3. gcloud info
View information about your gcloud CLI installation and the active configuration

4. gcloud help
View information about gcloud CLI

5. gcloud help compute instances create
View the help documentation for gcloud compute instances create

## gcloud concepts

1. gcloud help topic
See all available commands under gcloud topic

2. gcloud topic filters
See information on filtering

3. gcloud topic command-conventions
Learn more about gcloud command structure

## Creating a VM on Google Cloud Compute Engine

1. Go to https://console.cloud.google.com/compute/ and click "Create Instance" button
2. Change "Region" to Oregon and "Zone" to us-west1-a (default Las Vegas wasn't working)
3. Select the "E2" series, and use the e2-standard-2 (2 vCPU, 1 core, 8 GB memory) which is ~$50 a month
4. Select Standard for "Vm provisioning model", spot is ~$7 a month, but since we get $300 for 90 days, we can afford to just pay for the dedicated VM
5. [Leave as defaults!] Do NOT check "Enable display device", don't deploy a container, leave Boot disk values the same, (Debian GNU/Linus 11 (bullseye)), service account stays as "Compute Eingine default service account,
Access scopes -> "Allow default acccess"
6. For Firewall, check the boxes for "Allow HTTP traffic" "Allow HTTPS traffic
Don't pay for Observability - Ops Agent, leave that and advanced options blank

## Setup main application

1. Click the SSH button which is related to the VM, on the popup, click Authorize

2. Update the system by running: sudo apt-get update && sudo apt-get upgrade -y (this might take 5+ minutes)

3. Install node.js version 16.19.1 so it matches local copy:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc
nvm install 16.19.1

4. Directly upload .env files from local system into Google Cloud
nano .env
Copy the contents from our local .env file and paste them into the SSH terminal window.
Save and close (CTRL + O (O for output) to save, press enter to confirm, then CTRL + X to exit).

4a. View contents of .env: cat .env

5. Install Python and pipenv
sudo apt-get install -y python3.9 python3.9-venv python3.9-dev
sudo apt-get install -y python3-pip
pip3 install pipenv

5a. We get this warning: Installing collected packages: platformdirs, filelock, distlib, virtualenv, setuptools, pipenv
  WARNING: The script virtualenv is installed in '/home/situationpuzzles/.local/bin' which is not on PATH.
  Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.
  WARNING: The scripts pipenv and pipenv-resolver are installed in '/home/situationpuzzles/.local/bin' which is not on PATH.
  Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.

5b. To fix this, we are running these commands:
echo 'export PATH="$PATH:/home/situationpuzzles/.local/bin"' >> ~/.bashrc
source ~/.bashrc

6. Install git: sudo apt-get install -y git

7. git clone https://github.com/ScriabinOp8No12/Go-puzzles-website then cd into the project folder

8. [DONE, but too complicated, skipping rest of setup for now] Install Remote - SSH extension in VSCode to view the SSH Google Cloud files ("Remote - SSH Open any folder on a remote machine" from Microsoft)

9. pipenv install
