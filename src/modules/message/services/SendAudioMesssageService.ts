import { injectable } from "tsyringe";
import { initClient, getClient } from "../../../config/venom";

@injectable()
export class SendAudioMessageService {
  // Método para enviar áudio
  async sendAudio(to: string, audioPath: string) {
    await initClient();

    const client = getClient();
    const formattedNumber = to.includes("@") ? to : `${to}@c.us`;

    try {
      const result = await client.sendVoice(formattedNumber, audioPath);
      console.log("Áudio enviado com sucesso:", result);
      return result;
    } catch (error) {
      console.error("Erro ao enviar áudio:", error);
      throw new Error("Erro ao enviar áudio.");
    }
  }
}
