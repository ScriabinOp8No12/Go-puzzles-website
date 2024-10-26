  // GNU nano 5.4                                                  vm.go-puzzles.com
server {
    listen 80;
    server_name vm.go-puzzles.com;

    location / {

        if ($request_method = 'OPTIONS') {
            add_header 'Access-Control-Allow-Origin' 'https://go-puzzles.com' always;
            add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS' always;
            add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,x>
            add_header 'Access-Control-Max-Age' 3600;
            add_header 'Content-Type' 'text/plain charset=UTF-8';
            add_header 'Content-Length' 0;
            return 204;
        }

        proxy_pass https://localhost:8081; # katago-server.js is running on post 8081 right now
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;

        # CORS Headers
        add_header 'Access-Control-Allow-Origin' 'https://go-puzzles.com' always;
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS' always;
        add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range' alwa>
        add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range' always;

        proxy_ssl_verify off; # Disabling SSL verification

    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/vm.go-puzzles.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/vm.go-puzzles.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}
