"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const server = (0, http_1.createServer)((req, res) => {
    res.statusCode = 200;
    res.setHeader("Contenty-Type", "text/html");
    res.end("Hello worldaaa");
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
//# sourceMappingURL=index.js.map