import { injectable } from "tsyringe";
import { initClient, getClient } from "../../../config/venom";

@injectable()
export class SendDocumentMessageService {

  async sendDocument(to: string, documentPath: string, fileName?: string, caption?: string) {
    await initClient();

    const client = getClient();
    const formattedNumber = to.includes("@") ? to : `${to}@c.us`;

    try {
      const result = await client.sendFile(formattedNumber, documentPath, fileName || "document", caption || "");
      console.log("Documento enviado com sucesso:", result);
      return result;
    } catch (error) {
      console.error("Erro ao enviar documento:", error);
      throw new Error("Erro ao enviar documento.");
    }
  }
}
