const express = require('express');
const dns = require('dns2');
const app = express();
const cors =require("cors")
app.use(cors())
const dnsServer = dns.createServer();
dnsServer.listen(53);
dnsServer.on('request', (request, response) => {
    const { question } = request;
    console.log(question);
    // Your logic to handle DNS requests and provide responses
    response.end();
});
app.get('/', (req, res) => {
    res.send('MERN DNS Service is running!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
