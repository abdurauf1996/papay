const http = require("http");

const mongodb = require("mongodb");

connectionString =
  "mongodb+srv://vakhobovabdurauf:xw8uK63Wau1znpmG@ben.kgwux9o.mongodb.net/Reja?retryWrites=true&w=majority";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;
      const app = require("./app");

      const server = http.createServer(app);
      let PORT = 3001;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}  `
        );
      });
    }
  }
);
