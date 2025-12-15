// ...existing code...
const fs = require('fs').promises;
const path = require('path');

(async () => {
  try {
    const filePath = path.join(__dirname, 'user.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const users = JSON.parse(data);
    users.forEach(user => console.log(user.name));
  } catch (err) {
    console.log(err);
  }
})();

fetch("./user.json")
.then(response => response.json())
.then( user => {
  user.forEach(user=>console.log(user.name));
})
.catch(err => console.log(err))