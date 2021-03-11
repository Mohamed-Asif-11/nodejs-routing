var server=require('./server');
var router=require('./router');
var handler=require('./handler');

var handle={};
handle["/hi"]=handler.hi;
handle["/hello"]=handler.hello;

server.serverstart(router.route,handle);