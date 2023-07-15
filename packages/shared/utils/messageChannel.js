const {port1, port2 } = new MessageChannel();

port1.onmessage = function (e) {
  console.log(e)
  console.log(`收到了port2 发过来的消息${e}`)
}


port2.onmessage = function(e) {
  console.log(`收到了port1 发过来的消息${e}`)
}

port1.postMessage('我是port1')
port2.postMessage('我是port2')
