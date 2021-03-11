var http=require('http');
var url=require('url');

function serverstart(route,handle)
{
	function onrequest(request,response)
	{
		var pathname=url.parse(request.url).pathname;
		route(handle,pathname,response);
	}
	http.createServer(onrequest).listen(8000);
}
exports.serverstart=serverstart;