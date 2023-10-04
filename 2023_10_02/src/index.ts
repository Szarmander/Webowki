import { createServer } from "http";
import { readFile, writeFile } from "fs/promises";

interface IAPI{
  id: number,
  name: string
}

const HOSTNAME = "127.0.0.1";
const PORT = 3000;
const API: IAPI[] = [ {
  id: 1,
  name: 'Jakubek'
}, {
  id: 2,
  name: "Hugciu"
}, {
  id: 3,
  name: "Mateuszek"
}];

const server = createServer(async (req, res) => {
  const url: string | undefined = req.url;
  const method = req.method;

  if(url === '/') {
    res.statusCode = 200;
    const html = await readFile("./templates/index.html")
    res.setHeader('content-type', 'text/html');
    res.write(html);
    res.end();
  }
  else if(url === "/kontakt" && method === 'POST') {
    const body = []
    req.on('data', (chunk) => {
      console.log(chunk.toString())
      body.push(chunk)
    })
    req.on('end', async () => {
      const parsedBody = Buffer.concat(body).toString()
      const message = parsedBody.split('=')[1]

      await writeFile(`contact/message-${Date.now().toString()}.txt`, message)
      res.statusCode = 302;
      res.setHeader('Location', '/')
      return res.end()

    })
  }
  else if (url === "/dziekujemy") {
    res.statusCode = 200;
    const html = await readFile("./templates/thanks.html");
    res.setHeader("content-type", "text/html");
    res.write(html);
    res.end();
  }
  else if (url === "/api") {
    res.statusCode = 200;
    res.setHeader("content-type", "application/json");
    res.write(JSON.stringify(API));
    res.end();
  } else {
    res.statusCode = 404;
    res.setHeader("content-type", "application/json");
    res.write("Error 404: Strona nie istnieje");
    res.end();
  }

});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});
