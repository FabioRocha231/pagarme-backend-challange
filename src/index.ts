import express from "express";
import { routes } from "./routes/routes";
import bodyParser from "body-parser";

const processId = process.pid;

const app = express();
app.use(bodyParser.json());
app.use(routes);

const server = app.listen(3000, () => {
  console.log(`Server is Running on port ${3000}, pid: ${processId}`);
});
// capture unhandled errors
//if dont have this uncaughtException the system broke
process.on("uncaughtException", (error, origin) => {
  console.log(`\n${origin} signal received. \n${error}`);
});

//if dont have this unhandledRejection, the system throws a warning but dont broke the system
process.on("unhandledRejection", (error) => {
  console.log(`\nunhandledRejection signal received. \n${error}`);
});

//shot at CTRL C  in terminal -> multi platform
process.on("SIGINT", gracefulShutdown("SIGINT"));

process.on("SIGTERM", gracefulShutdown("SIGTERM"));

process.on("exit", (code) => {
  console.log("exit signal received", code);
});

setInterval(
  () =>
    server.getConnections((err, connections) =>
      console.log(`${connections} connections currently open`)
    ),
  10000
);

// let connections: any = [];

// server.on("connection", (connection) => {
//   connections.push(connection);
//   connection.on(
//     "close",
//     () => (connections = connections.filter((curr: any) => curr !== connection))
//   );
// });
// ------- gracefulShutdown

function gracefulShutdown(event: string) {
  return (code: NodeJS.Signals) => {
    console.log(`${event} received with ${code}`);
    // guarante nobody calls the application in the period
    // but if have user in the app, finish your req
    server.close(() => {
      console.log("http server closed");
      process.exit(code as any);
    });
  };
}
