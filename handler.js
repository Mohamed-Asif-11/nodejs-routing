function hi(response)
{
	response.writeHead(200,{"Content-type":"text/plain"});
	response.write("Hi welcome");
	response.end();

}
function hello(response)
{
	response.writeHead(404,{"Content-type":"text/plain"});
	response.write("Hello buddy");
	response.end();

}
exports.hi=hi;
exports.hello=hello;