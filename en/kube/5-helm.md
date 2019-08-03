# Helm Installation

## Requirements


## install Mysql

[mysql](https://8gwifi.org/docs/kube-mysql.jsp)

```
helm install --name mysql --set mysqlRootPassword=secret stable/mysql
MYSQL_ROOT_PASSWORD=$(kubectl get secret --namespace default mysql -o jsonpath="{.data.mysql-root-password}" | base64 --decode; echo)
kubectl port-forward svc/mysql 3306
```

