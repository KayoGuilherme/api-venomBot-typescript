import "reflect-metadata";
import express, { Application } from "express";
import "./infra/container/dependencyInjection";

import { routes } from "./infra/http/routes/routes";
import { initClient } from "./config/venom";

const app: Application = express();
app.use(express.json());
app.use(routes);
app.use(express.json());


(async () => {
  try {
    console.log('Initializing Venom client...');
    await initClient();
    console.log('Venom client is ready!');

    app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000');
    });
  } catch (error) {
    console.error('Failed to initialize Venom client:', error);
    process.exit(1);
  }
})();