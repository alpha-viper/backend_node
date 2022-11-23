const http=require('http');
const PORT=3000;

const server=http.createServer(function exec(request,response){
    if(request.url == '/home')
    {
        response.end('At the home page!');
    }
    else if(request.url == '/faq')
    {
        response.end("At the FAQ's page");
    }
    else
    {
        response.end('Welocme to the server');
    }
});

server.listen(PORT,function process(){
    console.log(`Server started on port ${PORT}`);
});