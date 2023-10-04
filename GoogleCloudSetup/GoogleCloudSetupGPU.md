## Creating a GPU VM on Google Cloud Compute Engine

1. Go to https://console.cloud.google.com/compute/ and click "Create Instance" button
2. Change "Region" to northamerica-northeast1-c (Montreal one?) -> FINALLY IT WORKS (had to upgrade to paid account, increase quota from 0 to 1, then pick Montreal as the region)
3. Select the GPU tab, NVIDIA Tesla K80, N1 series, 1 GPU. n1-standard-1 (1 vCPU, 3.75 GB memory) It's about 36 cents an hour, or 259 a month
4. Leave VM provisioning model as Standard (not Spot)
5. Click the following 2 checkboxes: Allow HTTP traffic and Allow HTTPS traffic in the Firewall section, then click create instance
6. On the main page of the Google Cloud Console, click "Activate Full Account" or whatever similar text there is under the free trial text. Google Cloud doesn't let you use GPUs under the Free Tier
7. Increase GPU quota from 0 to 1, there was an error and I could click the button to increase the quota.  A simple 2 question form showed up on the right of the screen, I clicked the field that showed 0, and changed it to 1, then clicked next.  I received an email confirmation within 30 seconds saying my quota was approved, and that it could take 15 minutes to have the changes take effect.
