var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  host: '"http://rapapi.org/mockjsdata/28987"',
  orderListImgHost: '"https://dev.1sju.com/yishuju-admin/file/get"',
  imgHost: '"https://dev.1sju.com/uploadFile"'
})
