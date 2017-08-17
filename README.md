[Zap](https://zap.jackmallers.com) Node.js
==================================

Node.js proxy for LND (will be moved to Electron [ipcRenderer](https://electron.atom.io/docs/api/ipc-renderer/) under [zap-desktop](https://github.com/LN-Zap/zap-desktop))

Join us on [slack](https://join.slack.com/t/zaphq/shared_invite/MjI2MTY4NTcwMDUyLTE1MDI2OTA0ODAtNTRjMTY4YTNjNA) to discuss development, design and product


## Install
---------------
At this point you should have BTCD and LND [installed](https://github.com/lightningnetwork/lnd/blob/master/docs/INSTALL.md) and running. Once you do you will need to generate your own NodeJS compatible certs:

```sh
# this is the path for Linux machines. Differs for Mac and Windows
cd ~/.lnd

openssl ecparam -genkey -name prime256v1 -out tls.key
openssl req -new -sha256 -key tls.key -out csr.csr -subj '/CN=localhost/O=lnd'
openssl req -x509 -sha256 -days 3650 -key tls.key -in csr.csr -out tls.cert
rm csr.csr
```

```sh
git clone https://github.com/LN-Zap/zap-nodejs.git
cd zap-nodejs
npm install
npm run dev
```

# Tests
----------------
```sh
npm run test
```