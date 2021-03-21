const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const fs = require('fs');

require('dotenv').config();
const app = express();
app.use(helmet());
app.use(morgan('dev'));

let minecraftMessages;

app.get('/', (req, res) => {
  res.status(200).send('Hello');
});
app.get('/message', (req, res) => {
  res.status(200).send(minecraftMessages);
});

app.get('/message/:id', (req, res) => {
  res.status(200).send(findId(req.params.id));
});

app.post('addMessage/:username:message', function (req, res) {
  res.status(200).send(addEvent(req.params.username, req.params.message));
});

const PORT = process.env.PORT || 5555;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
loadMessages();
console.log('finished with setup');

function getHighestId() {
  return Math.max(...minecraftMessages.map((el) => el.id)) + 1;
}

function addEvent(username, message) {
  minecraftMessages.push({ id: getHighestId(), username, message });
  writeMessages();
  return true;
}

function findId(id) {
  if (minecraftMessages.find((message) => message.id == id)) return minecraftMessages.find((message) => message.id == id);
  return false;
}

function loadMessages() {
  try {
    let rawdata = fs.readFileSync('model/messages.json');
    minecraftMessages = JSON.parse(rawdata).minecraftMessages;
  } catch (e) {
    console.log(e);
  }
}

function writeMessages() {
  const data = JSON.stringify(minecraftMessages);
  fs.writeFile('model/messages.json', data, (err) => {
    if (err) {
      throw err;
    }
    console.log('Data saved');
  });
}
