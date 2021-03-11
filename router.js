function route(handle,pathname,response)
{
	if(typeof handle[pathname]==='function')
	{
		handle[pathname](response);

	}
	else
	{
		response.writeHead(404,{"Content-type":"text/plain"});
		response.write("Error 404 page not found");
		response.end();
	}
}
exports.route=route;