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

5. It WORKS!!!  I modified code to be formatted as similar as possible to the currently working local code, I made a new file called "katago-server-test.js"

6. Install moment.js and use it to format the date properly (current output lower down is not formatted properly yet)
7. ****** After we made the external IP address static, it now hangs when starting the VM instance, a simple hard page refresh let's us SSH into the VM instance


## Set up CORS on VM

1. npm install cors
2. const cors = require('cors') // add to top of katago-server.js
3. app.use(cors()); // Add this line right after helmet
4. app.use(cors({
  origin: 'https://your-web-app-domain.com' // Replace with your actual domain
}));
add the above once we get it working when Render pings our Google VM


## Set up HTTPS on Google Cloud

1. Certbot



## Load balancer stuff (didn't finish) -> thought this was doing https, but it's for load balancing the VMs instead...

1. Since our external IP address is already set to static, we can proceed to the next step of setting up the HTTPS load balancer
2. Search for network services, click it, select load balancing, click create a load balancer
3. Click start configuration for the HTTPs load balancer (left most one in our case)
4. Leave "From internet to my VMs or serverless services" and "Regional external Application Load Balancer" checked, click continue
5. Load Balancer name: https-load-balancer
Leave Region as is,
Change network to default, and click "reserve subnet", name it: load-balancer-subnet
Set ip address range to: 10.0.0.0/24
6. Name the New Frontend IP and port: http-frontend
Leave protocol as HTTP for now
Leave port as 80
Click dropdown on IP address which shows ephemeral by default, click "Create IP address"
Name it: https-static-ip
Leave description blank
7.

## Set up domain name
1. Purchase domain name from namecheap.com
2. Select Domain List from the left sidebar and click on the Manage button next to our domain.
Navigate to the Advanced DNS tab at the top of the page.
3. Modify the CNAME record for www.go-puzzles.com, host is set to: www, value is set to: nathan-auth-me-mf51.onrender.com, TTL is set to 30 min
4. Click "Add new record": select: ALIAS record, host is set to: @, value is set to: nathan-auth-me-mf51.onrender.com, TTL is set to 5 min

## Activating VM server and running postman request to that VM endpoint

1. node katago-server-test.js
2. Ping the server in our postman endpoint: post request to: http://34.118.131.136:3000/potential_puzzles/generate

Output looks like this right now (probably should use moment to format the createdAt and updatedAt date/time to match local code and for rendering properly on frontend)

{
    "createdPuzzles": [
        {
            "thumbnail": "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693682857/no_image_thumbnail_tpwuc0.jpg",
            "sgf_id": 31,
            "sgf_data": "(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2] RU[Chinese]SZ[19]KM[7.50]TM[300] GN[]PW[青瓦楼阁]PB[anning97]DT[2023-07-09]C[SGF generated by KaTrain 1.12.3ㅤ​]RE[B+Resign]KTV[1.0]RL[0]RN[3]TC[3]TT[30] ;B[qd] ;W[dp] ;B[pq] ;W[dd] ;B[cc] ;W[dc] ;B[cd] ;W[ce] ;B[be] ;W[bf] ;B[cf] ;W[de] ;B[bg] ;W[bd] ;B[af] ;W[bc] ;B[nc] ;W[qo] ;B[ql] ;W[op] ;B[oq] ;W[np] ;B[mr] ;W[lq] ;B[mq] ;W[mp] ;B[lp] ;W[kq] ;B[lo] ;W[rq] ;B[qr]C[Move 31: B R2 Score: W+3.9 Win rate: W 71.1% Estimated point loss: 4.3 Predicted top move was S2 (B+0.5). PV: BS2 K4 O6 P6 P7 O7 Q6 P5 P8 R3 R2 M6 Move was #96 according to policy (0.00%). Top policy move was K4 (40.0%). ㅤ​] ;W[rr] ;B[lr] ;W[kr] ;B[nq]C[Move 35: B O3 Score: W+8.9 Win rate: W 87.0% Estimated point loss: 4.4 Predicted top move was J4 (W+4.2). PV: BJ4 K4 K5 J3 H4 H3 G3 G4 G2 J5 H5 L5 J6 M6 N5 L4 Move was #33 according to policy (0.03%). Top policy move was J4 (29.8%). ㅤ​] ;W[on] ;B[jp] ;W[iq] ;B[ip] ;W[hq] ;B[go] ;W[fp] ;B[ol] ;W[nm] ;B[mk] ;W[rd] ;B[re] ;W[qc] ;B[rc] ;W[pd] ;B[qe] ;W[rb] ;B[sd] ;W[pe] ;B[pc] ;W[oc] ;B[qb] ;W[nd] ;B[ob] ;W[od]C[Move 60: W P16 Score: W+5.4 Win rate: W 78.3% Estimated point loss: 4.8 Predicted top move was M7 (W+10.4). PV: WM7 K7 L8 K8 L9 K9 L10 N12 Move was #134 according to policy (0.01%). Top policy move was M7 (32.0%). ㅤ​] ;B[mc] ;W[md] ;B[ld] ;W[le] ;B[ke] ;W[kf]C[Move 66: W L14 Score: W+0.5 Win rate: W 55.3% Estimated point loss: 5.4 Predicted top move was M14 (W+6.0). PV: WM14 F5 E5 L14 M13 P13 L13 L16 M7 K7 L9 Move was #3 according to policy (1.72%). Top policy move was M14 (75.8%). ㅤ​] ;B[kd])",
            "category": "other",
            "move_number": 31,
            "solution_coordinates": {
                "K4": [
                    "K4",
                    "K3",
                    "J4",
                    "J3",
                    "H3",
                    "H2",
                    "G3"
                ],
                "C18": [
                    "C18",
                    "B18",
                    "K4",
                    "K3",
                    "J4",
                    "J3"
                ],
                "R3": [
                    "R3",
                    "K4",
                    "Q5",
                    "Q6",
                    "Q4",
                    "P6"
                ],
                "N6": [
                    "N6",
                    "O6",
                    "K4"
                ],
                "S2": [
                    "S2",
                    "K4",
                    "O6",
                    "P6"
                ],
                "J4": [
                    "J4",
                    "K4",
                    "K5",
                    "J3"
                ],
                "P6": [
                    "P6",
                    "Q4"
                ]
            },
            "difficulty": 1500,
            "createdAt": "2023-10-06 22:26:22",
            "updatedAt": "2023-10-06 22:26:22"
        },
     <placeholder for remaining puzzles>
    ]
}
