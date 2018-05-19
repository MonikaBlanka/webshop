RUN
----
0. Start MongoDB (mongod)
1. Start SASS compiler (Scout App)
2. Start server (npm start)

INSTALLATION
----
0. Install Git
1. Clone repository (git clone https://)
2. Install NodeJS (LTS)
3. Install SASS compiler (Scout App)
4. Add your local repository to the SASS compiler
5. Install MongoDB (Community Server)
6. Create /data/db/ folders (for MongoDB)
7. Install supervisor (npm install supervisor -g)
8. Install node modules (npm install)
9. Install Certbot
10. Request certificate using Certbot
    (sudo certbot certonly --standalone -d domain.com)
11. Copy all .pem files to repository/ssl
    (cp cert.pem /home/centos/repository/ssl/cert.pem -L)

PRODUCTION SERVER
----
Operating System: **CentOS 7**

Git
~~~~~~~~
sudo yum install git	
~~~~~~~~

Screen
~~~~~~~~
sudo yum install screen  
~~~~~~~~

NodeJS
~~~~~~~~
sudo yum install epel-release
sudo yum install nodejs
sudo npm install supervisor -g
~~~~~~~~

MongoDB
~~~~~~~~
configure YUM: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/
sudo yum install -y mongodb-org
sudo service mongod start
sudo chkconfig mongod on
~~~~~~~~

Certbot
~~~~~~~~
details: https://certbot.eff.org/lets-encrypt/centosrhel7-other
sudo yum -y install yum-utils
sudo yum-config-manager --enable rhui-eu-central-1-rhel-server-extras rhui-eu-central-1-rhel-server-optional
sudo yum install certbot
~~~~~~~~
