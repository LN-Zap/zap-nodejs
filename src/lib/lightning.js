const grpc = require('grpc')

module.exports = (path, host) => {
  const rpc = grpc.load(path)

  return new rpc.lnrpc.Lightning(host, grpc.credentials.createInsecure())
}