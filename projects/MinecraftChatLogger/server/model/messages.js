let minecraftMessages = [];

function getHighestId() {
  return Math.max(...minecraftMessages.map((el) => el.id)) + 1;
}

function addEvent(username, message) {
  minecraftMessages.push({ id: getHighestId(), username, message });
  return true;
}

module.export = {
  addEvent: addEvent,
};
