## Creating a GPU VM on Google Cloud Compute Engine

1. Go to https://console.cloud.google.com/compute/ and click "Create Instance" button
2. Change "Region" to northamerica-northeast1-c (Montreal one?) -> FINALLY IT WORKS (had to upgrade to paid account, increase quota from 0 to 1, then pick Montreal as the region)
3. Select the GPU tab, NVIDIA Tesla K80, N1 series, 1 GPU. n1-standard-1 (1 vCPU, 3.75 GB memory) It's about 36 cents an hour, or 259 a month
4. Leave VM provisioning model as Standard (not Spot)
5. Click the following 2 checkboxes: Allow HTTP traffic and Allow HTTPS traffic in the Firewall section, then click create instance
6. On the main page of the Google Cloud Console, click "Activate Full Account" or whatever similar text there is under the free trial text. Google Cloud doesn't let you use GPUs under the Free Tier
7. Increase GPU quota from 0 to 1, there was an error and I could click the button to increase the quota.  A simple 2 question form showed up on the right of the screen, I clicked the field that showed 0, and changed it to 1, then clicked next.  I received an email confirmation within 30 seconds saying my quota was approved, and that it could take 15 minutes to have the changes take effect.

--------------------------------------------------------------------------------
## GPU VM setup, installing KataGo, copying/creating KataGo python script from local machine

1. SSH into the GPU instance, type Y to install the required nvidia drivers
2. Confirm everything was installed properly by typing:
python3 --version
nvcc --version
nvidia-smi

Output confirms python 3.10, with cuda 11.8 installed (driver supports CUDA 12.0),

3. Run the following commands:
sudo apt update
sudo apt upgrade -y
sudo apt install git nano wget -y

## Using ***** CUDA ***** backend instead of openCL like local machine
4. git clone https://github.com/lightvector/KataGo.git
4a. cd KataGo/cpp
4b.
sudo apt update
sudo apt install cmake g++ zlib1g-dev libzip-dev libeigen3-dev libssl-dev
4c. cmake . -DUSE_BACKEND=CUDA
4d. make -j 4

## Make directory structure the same as local machine
5. mkdir -p ~/katago/KataGo
5a. mv * ~/katago/KataGo/
5b. rm -rf ~/KataGo (We got a duplicate because we git cloned into the root of our vm)


## Download the strongest / most updated new b-18 model (as of 10/4/2023)

6. mkdir ~/katago/models
6a. wget -P ~/katago/models/ https://media.katagotraining.org/uploaded/networks/models/kata1/kata1-b18c384nbt-s7529928448-d3667707199.bin.gz
6b. gunzip ~/katago/models/kata1-b18c384nbt-s7529928448-d3667707199.bin.gz

## Change config of analysis_example
7. cd ~/katago/KataGo/configs$
nano analysis_example.cfg
7a. Change maxVisits from 500 to 50, ctrl + O (o as in output), hit enter, then ctrl + X

8. cd ~/katago/KataGo$
First tuning / benchmark test on GTP_example.cfg (changed from 500 visits to 50 visits, just like for analysis_example.cfg):
8a. ~/katago/KataGo/katago benchmark -model ~/katago/models/kata1-b18c384nbt-s7529928448-d3667707199.bin -config ~/katago/KataGo/configs/gtp_example.cfg
8b. It wants it at 8 for numSearchThreads (it shows it is set at 6)
8c. nano /home/situationpuzzles/katago/KataGo/configs/gtp_example.cfg
## 8d. Run KataGo with a simple one line json to test it's speed and to make sure it works!
MAKE SURE NOT TO INCLUDE THE .gz at the end of .bin, otherwise it can't find it, somehow we had .gz at the end of our local vscode script here, and it worked!?!?

## Add the following command to the startup script for when the GPU instance boots up?
~/katago/KataGo/katago analysis -model ~/katago/models/kata1-b18c384nbt-s7529928448-d3667707199.bin -config ~/katago/KataGo/configs/analysis_example.cfg

Use this one line json string, containing 67 moves as a test (*** TOOK only ~ 5.5 seconds! *** ):

{"id":"sgfTest3","rules":"chinese","komi":7.5,"boardXSize":19,"boardYSize":19,"initialPlayer":"W","analyzeTurns":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],"initialStones":[],"moves":[["B","R16"],["W","D4"],["B","Q3"],["W","D16"],["B","C17"],["W","D17"],["B","C16"],["W","C15"],["B","B15"],["W","B14"],["B","C14"],["W","D15"],["B","B13"],["W","B16"],["B","A14"],["W","B17"],["B","O17"],["W","R5"],["B","R8"],["W","P4"],["B","P3"],["W","O4"],["B","N2"],["W","M3"],["B","N3"],["W","N4"],["B","M4"],["W","L3"],["B","M5"],["W","S3"],["B","R2"],["W","S2"],["B","M2"],["W","L2"],["B","O3"],["W","P6"],["B","K4"],["W","J3"],["B","J4"],["W","H3"],["B","G5"],["W","F4"],["B","P8"],["W","O7"],["B","N9"],["W","S16"],["B","S15"],["W","R17"],["B","S17"],["W","Q16"],["B","R15"],["W","S18"],["B","T16"],["W","Q15"],["B","Q17"],["W","P17"],["B","R18"],["W","O16"],["B","P18"],["W","P16"],["B","N17"],["W","N16"],["B","M16"],["W","M15"],["B","L15"],["W","L14"],["B","L16"]]}

9. cd ~
9a. mkdir katago_python_scripts


****** Command fails now, VM somehow doesn't have nvidia driver anymore

sudo apt-get install --reinstall nvidia-driver-470 (failed!)
sudo reboot
sudo apt-get update

***** Above failed *****
created a snapshot of "instance-1" immediately after Nvidia driver is now missing

**** TRYING OPENCL BACKEND instead of being forced to use CUDA ****

1. Create new GPU VM (identical to other one)
2. cd ~
3. git clone https://github.com/lightvector/KataGo.git ~/katago/KataGo
4. cd ~/katago/KataGo/cpp
5. sudo apt update
sudo apt install cmake g++ zlib1g-dev libzip-dev libeigen3-dev libssl-dev ocl-icd-opencl-dev
cmake . -DUSE_BACKEND=OPENCL
make -j 4

Follow above steps, now cpp folder is here... lol? So have to change a few paths, see below...

6. cd ~/katago/KataGo/cpp/configs$
7. nano gtp_example.cfg (change max visits to 50, numSearchThreads to 8)
8. ~/katago/KataGo/cpp/katago benchmark -model ~/katago/models/kata1-b18c384nbt-s7529928448-d3667707199.bin -config ~/katago/KataGo/cpp/configs/gtp_example.cfg

Logs when running benchmark for opencl:

Testing using 800 visits.
  If you have a good GPU, you might increase this using "-visits N" to get more accurate results.
  If you have a weak GPU and this is taking forever, you can decrease it instead to finish the benchmark faster.

You are currently using the OpenCL version of KataGo.
If you have a strong GPU capable of FP16 tensor cores (e.g. RTX2080), using the Cuda version of KataGo instead may give a mild performance boost.

9. nano analysis_example.cfg -> change maxVisits to 50 from 500

10. ~/katago/KataGo/cpp/katago analysis -model ~/katago/models/kata1-b18c384nbt-s7529928448-d3667707199.bin -config ~/katago/KataGo/cpp/configs/analysis_example.cfg
11. {"id":"sgfTest3","rules":"chinese","komi":7.5,"boardXSize":19,"boardYSize":19,"initialPlayer":"W","analyzeTurns":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],"initialStones":[],"moves":[["B","R16"],["W","D4"],["B","Q3"],["W","D16"],["B","C17"],["W","D17"],["B","C16"],["W","C15"],["B","B15"],["W","B14"],["B","C14"],["W","D15"],["B","B13"],["W","B16"],["B","A14"],["W","B17"],["B","O17"],["W","R5"],["B","R8"],["W","P4"],["B","P3"],["W","O4"],["B","N2"],["W","M3"],["B","N3"],["W","N4"],["B","M4"],["W","L3"],["B","M5"],["W","S3"],["B","R2"],["W","S2"],["B","M2"],["W","L2"],["B","O3"],["W","P6"],["B","K4"],["W","J3"],["B","J4"],["W","H3"],["B","G5"],["W","F4"],["B","P8"],["W","O7"],["B","N9"],["W","S16"],["B","S15"],["W","R17"],["B","S17"],["W","Q16"],["B","R15"],["W","S18"],["B","T16"],["W","Q15"],["B","Q17"],["W","P17"],["B","R18"],["W","O16"],["B","P18"],["W","P16"],["B","N17"],["W","N16"],["B","M16"],["W","M15"],["B","L15"],["W","L14"],["B","L16"]]}

Took 8 seconds instead of 5.5 seconds when using CUDA backend... YIKES!
