sudo certbot certificates
sudo systemctl stop nginx
sudo certbot renew
sudo systemctl start nginx
sudo systemctl status nginx

------------------------------

Check SSL certificates

stop nginx since certbot needs to run on port 80

run the renewal command (can only do it ~30 days before expiration) -> currently set to expire 1/6/2024

restart nginx and check its' status
