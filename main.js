const fs = require('fs');
const path = require('path');


function checkFolderExists(folderName) {
    const rootDir = path.resolve(__dirname);
    const folderPath = path.join(rootDir, folderName);
    return fs.existsSync(folderPath) && fs.lstatSync(folderPath).isDirectory();
}


const folderName = 'test';
console.log(checkFolderExists(folderName) ? `${folderName} exists` : `${folderName} does not exist`);


const http = require('http');
const fs = require('fs');


const usersData = fs.readFileSync('users.json', 'utf8');


http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(usersData);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
}).listen(3000, () => {
    console.log('Server is listening on port http://localhost:3000');
});


const http = require('http');

http.createServer((req, res) => {
    if (req.method === 'GET') {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(randomNumber.toString());
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
}).listen(3000, () => {
    console.log('Server is listening on port http://localhost:3000');
});

const http = require('http');

const tableData = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Emily Johnson', age: 22 }
];

const htmlTable = `
<!DOCTYPE html>
<html>
<head>
    <title>Simple Table</title>
</head>
<body>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
        </tr>
        ${tableData.map(row => `
        <tr>
            <td>${row.id}</td>
            <td>${row.name}</td>
            <td>${row.age}</td>
        </tr>`).join('')}
    </table>
</body>
</html>
`;

http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlTable);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
}).listen(3000, () => {
    console.log('Server is listening on port http://localhost:3000');
});
