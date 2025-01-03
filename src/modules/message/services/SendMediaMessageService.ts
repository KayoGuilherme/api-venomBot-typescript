import { injectable } from "tsyringe";
import { initClient, getClient } from "../../../config/venom";

@injectable()
export class SendMediaMessageService {
  async sendVideo(to: string, videoPath: string, caption?: string) {
    await initClient();

    const client = getClient();
    const formattedNumber = to.includes("@") ? to : `${to}@c.us`;

    try {
      const result = await client.sendFile(formattedNumber, videoPath, "video.mp4", caption || "");
      console.log("Vídeo enviado com sucesso:", result);
      return result;
    } catch (error) {
      console.error("Erro ao enviar vídeo:", error);
      throw new Error("Erro ao enviar vídeo.");
    }
  }

}
