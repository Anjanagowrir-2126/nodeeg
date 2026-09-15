http = require('http');
http.createServer(function(req,res){
    
    if(req.url=='/home'){
        res.write("welcome to home page");
        res.end();
    }
    else if(req.url=='/contact'){
        res.write("contact no:0414 2536487")
        res.end();
    }
    else{
        res.write("invalid");
        res.end();
    }
}).listen(8080)