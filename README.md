# BlueCloud
A cloud-based file storage system.


## Restarting mongod in case of crash

```
sudo chown -R mongodb:mongodb /var/lib/mongodb 
sudo chown mongodb:mongodb /tmp/mongodb-27017.sock
service mongod start
```