const server = require("./app");
const PORT = 3001;

server.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});
