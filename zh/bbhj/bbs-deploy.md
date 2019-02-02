

# PHP-FPM 配置

```
; /etc/php-fpm.d/www.conf
daemonize = yes


[www]
user = work
group = work

listen = 0.0.0.0:9000
; listen.allowed_clients is any.
; listen.allowed_clients = 127.0.0.1,10.0.1.144

pm = dynamic
pm.max_children = 50
pm.start_servers = 5
pm.min_spare_servers = 5
pm.max_spare_servers = 35

php_value[session.save_handler] = files
php_value[session.save_path]    = /var/lib/php/session
php_value[soap.wsdl_cache_dir]  = /var/lib/php/wsdlcache

access.log = /data/logs/php-fpm/$pool.access.log
access.format = "%R %u %s %m %{HTTP_HOST}e%r?%q"
slowlog = /data/logs/php-fpm/php-www-slow.log
php_admin_flag[log_errors] = on
php_admin_value[error_log] = /data/logs/php-fpm/php-www-error.log

chdir = /data/app/bbs.baobeihuijia.com
```
