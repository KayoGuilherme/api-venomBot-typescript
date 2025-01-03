import { Router } from "express";
import { messageRoutes } from "./messagesRoute";



const routes = Router();

routes.use( "/messages" ,messageRoutes);

export { routes };
