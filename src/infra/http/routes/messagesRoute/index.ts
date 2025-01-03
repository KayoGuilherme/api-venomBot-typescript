import { Router } from "express";
import { SendMessageController } from "../../../../modules/message/controller/SendmessageController";


const messageRoutes = Router();

const sendMessageController = new SendMessageController();


messageRoutes.post("/sendMessage", sendMessageController.handle );

export { messageRoutes };
