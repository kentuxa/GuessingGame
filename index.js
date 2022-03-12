const http = require("http");
const fs = require("fs");
const { URL } = require("url");

let secretNumber = Math.round(Math.random() * 100);
function handlerequest(req, res) {

    let parsedurl = new URL(req.url, "http://localhost");

    if (parsedurl.pathname == "/favicon.ico") {
        res.end(fs.readFileSync("favicon (1).ico"));
    }
    else if (parsedurl.pathname == "/VerificareNumarulSecret") {
        let number = parsedurl.searchParams.get("number");
        if (secretNumber > number) {
            res.end("too small");
        }
        else if (secretNumber < number) {
            res.end("too big");
        }
        else if (secretNumber == number) {
            res.end("gg!!");
        }
    }
    else if (parsedurl.pathname == "/") {
        res.end(fs.readFileSync("index.html"));

    }
    else {
        res.end("Raspuns.");
    }
}
let server = http.createServer(handlerequest);
server.listen(2222, () => {
    console.log("Server is up.");
})