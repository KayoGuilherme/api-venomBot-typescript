import { injectable } from "tsyringe";
import { initClient, getClient } from "../../../config/venom";

@injectable()
export class SendMessageService {
  async sendMessage(to: string, message: string) {
    await initClient(); 

    const client = getClient(); 
    const formattedNumber = to.includes("@") ? to : `${to}@c.us`;

    try {
      const result = await client.sendText(formattedNumber, message);
      console.log("Mensagem enviada com sucesso:", result);
      return result;
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      throw new Error("Erro ao enviar mensagem.");
    }
  }


  async sendImage(to: string, imagePath: string, caption?: string) {
    await initClient();

    const client = getClient();
    const formattedNumber = to.includes("@") ? to : `${to}@c.us`;

    try {
      const result = await client.sendImage(formattedNumber, imagePath, "image", caption || "");
      console.log("Imagem enviada com sucesso:", result);
      return result;
    } catch (error) {
      console.error("Erro ao enviar imagem:", error);
      throw new Error("Erro ao enviar imagem.");
    }
  }
}


