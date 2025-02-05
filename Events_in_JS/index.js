const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`Data Received with user ${name} with id:${id}!`);
});

customEmitter.on("response", () => {
  console.log(`Some other Logic Here!`);
});

// First Listen for the event and only then emit it. Do not do the vice versa.
customEmitter.emit("response", 'SK', 21);
