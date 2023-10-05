## Installing packages, and moving local python scripts to VM

1. sudo apt update && sudo apt upgrade -y
2. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
3. export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
4. nvm install 16.19.1
5. nvm use 16.19.1
6. cd ~   mkdir katago_gpu_app
7. cd katago_gpu_app npm init -y
8. npm install express helmet pythonia

-----
9.
nano GCP_parse_katago_larget_point_mistakes.py
nano GCP_sgf_to_largest_mistakes.py

Then copy paste the GCP_ ... python scripts from the GoogleCloudSetup folder into the file.  Ctrl + o, hit enter, Ctrl + x

10. Test python script by going to the folder where the script is located (~/katago_gpu_app) then running
cd ~/katago_gpu_app
python3 GCP_sgf_to_largest_mistakes.py
