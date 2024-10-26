5 commands to check status of certbot / let's encrypt expiration date, stopping nginx, then renewing and checking certbot status

sudo certbot certificates
sudo systemctl stop nginx
sudo certbot renew
sudo systemctl start nginx
sudo systemctl status nginx
