Run:
sudo systemctl stop katago-server.service

Then check katago stopped:
sudo systemctl status katago-server.service

Following is what we should see
(base) situationpuzzles@katago-nvidia-t4-cuda:~/katago_gpu_app$ sudo systemctl stop katago-server.service
(base) situationpuzzles@katago-nvidia-t4-cuda:~/katago_gpu_app$ sudo systemctl status katago-server.service
● katago-server.service - KataGo Server Service
     Loaded: loaded (/etc/systemd/system/katago-server.service; enabled; vendor preset: enabled)
     Active: inactive (dead) since Thu 2023-12-28 19:06:38 UTC; 4s ago
    Process: 3413 ExecStart=/home/situationpuzzles/.nvm/versions/node/v16.19.1/bin/node /home/situationpuzzles/katago_gpu_a>
   Main PID: 3413 (code=killed, signal=TERM)
        CPU: 240ms

Dec 28 19:04:33 katago-nvidia-t4-cuda systemd[1]: katago-server.service: Scheduled restart job, restart counter is at 3.
Dec 28 19:04:33 katago-nvidia-t4-cuda systemd[1]: Stopped KataGo Server Service.
Dec 28 19:04:33 katago-nvidia-t4-cuda systemd[1]: Started KataGo Server Service.
Dec 28 19:04:34 katago-nvidia-t4-cuda node[3413]: HTTPS Server running on https://0.0.0.0:8081
Dec 28 19:06:38 katago-nvidia-t4-cuda systemd[1]: Stopping KataGo Server Service...
Dec 28 19:06:38 katago-nvidia-t4-cuda systemd[1]: katago-server.service: Succeeded.
Dec 28 19:06:38 katago-nvidia-t4-cuda systemd[1]: Stopped KataGo Server Service.
lines 1-14/14 (END)

****** To turn it back on automatically, do this:

sudo systemctl start katago-server.service

otherwise for testing temporarily, just use
node katago-server.js
