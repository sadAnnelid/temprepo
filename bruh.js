const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('whalecum')
    }
    if(req.url === '/trial'){
        res.end("<h1> bhor bhor bhor </h1>")
    }
    res.end('error')
})

server.listen(6969)