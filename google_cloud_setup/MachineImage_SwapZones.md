https://cloud.google.com/compute/docs/troubleshooting/troubleshooting-resource-availability?utm_source=devrel&utm_medium=api_error&utm_campaign=resource-error&authuser=1#reasons-recommendations

Above is page for seeing error messages, it says: A n1-standard-1 VM instance with 1 nvidia-tesla-t4 accelerator(s) is currently unavailable in the northamerica-northeast1-c zone. Alternatively, you can try your request again with a different VM hardware configuration or at a later time. For more information, see the troubleshooting documentation.

To create a machine image, go to the VM, click on it, click "create a machine image"
Give it a name, description, select the VM, leave multi-regional, and leave google-managed encryption key checked

Go to Create an instance, click "new VM instance from machine image, now select

Got it working in us-west4-b finally, external address is dynamic it seems, might have to
reattach existing static external ip address to it!

Reinstalled nvidia drivers, since I couldn't tell if they were on the machine or not anymore... with the following:

sudo /opt/deeplearning/install-driver.sh
Linux katago-new-region 5.10.0-27-cloud-amd64 #1 SMP Debian 5.10.205-2 (2023-12-31) x86_64

The following command for if it can't find the drivers didn't work initially, let's see if
after reinstalling the nvidia drivers that it works? (Issue was I was copy pasting the code from github, which has special syntax with ` in markdown`, copying the raw version worked)

sudo apt-get install linux-headers-`uname -r`

Had to release old static external ip address since it was in a different region as the new ip address, couldn't get it to simply transfer over to the new vm...

Log into namecheap, click on our domain, click advanced dns, change the A record to the new external static ip address

Wow, it just works... huh, that was faster than I thought (took 80 minutes to create new vm), deleted old vm now, looks like I never needed that extra static INTERNAL ip address, so this will
actually save me some money too I think, great!

---- Next day below:

One issue is it's not auto starting in the morning at 11am, it could be that it needs one extra day to work since I manually turned it off yesterday?

---- Didn't start the day after either, so let's user cloud scheduler instead

Search for cloud scheduler:

Name it, keep the region we are currently on selected, set a description

For Frequency, put 0 11 * * *

This should be daily at 11am, pick Mountain Standard Time

Need to write functions, so messed around with creating a new instance scheduler instead, let's see if that works tomorrow

Sent in a billing support ticket to Google Cloud, sent it from the wrong email address / account first, then sent the same one from the actual account,
let's see what they say the issue is?  I've spent another 30 minutes today and can't figure it out.

Update 1/19/2024: Looks like the current new VM takes 8-9 minutes past the initial startup time to actually start up, and the VM gets shut off roughly 8-9 minutes after the scheduled stop time too. So it was working all along!
