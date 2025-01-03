import { Router } from "express";
import { SendMessageController } from "../../../../modules/message/controller/SendmessageController";
import { SendImageMessageController } from "../../../../modules/message/controller/SendImageMessageController";
import { SendMidiaMessageController } from "../../../../modules/message/controller/SendMidiaMessageController";
import { SendDocumentMessageController } from "../../../../modules/message/controller/SendDocumentController";
import { upload } from "../../../../config/multerConfig";
import { SendContactController } from "../../../../modules/message/controller/SendContactMessageController";

const messageRoutes = Router();

const sendMessageController = new SendMessageController();
const sendImageMessageController = new SendImageMessageController();
const sendAudioMessageController = new SendMessageController(); 
const sendMidiaMessageController = new SendMidiaMessageController();
const sendDocumentMessageController = new SendDocumentMessageController();
const sendContactsMessageController = new SendContactController();


messageRoutes.post("/sendMessage", sendMessageController.handle);
messageRoutes.post("/sendImageMessage", sendImageMessageController.handle);
messageRoutes.post("/sendAudioMessage", sendAudioMessageController.handle);
messageRoutes.post("/sendMidiaMessage", sendMidiaMessageController.handle);
messageRoutes.post("/sendDocumentMessage", upload.single("document"), sendDocumentMessageController.handle);
messageRoutes.post("/sendContactMessage", sendContactsMessageController.handle);


export { messageRoutes };
