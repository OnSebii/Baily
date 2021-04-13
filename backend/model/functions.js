const fs = require('fs');
const path = require('path');

async function setStatus() {
  fs.writeFileSync(path.join(__dirname, 'csgo.json'), JSON.stringify({ isPlaying: true }));
  return { code: 200, data: 'ok' };
}

async function getProjects() {
  const rawdata = fs.readFileSync(path.join(__dirname, 'projects.json'));
  return { code: 200, data: JSON.parse(rawdata).projects };
}

// const time = 3600;
// setInterval(function () {
//   console.log('1');
// }, time);

module.exports = { setStatus, getProjects };
