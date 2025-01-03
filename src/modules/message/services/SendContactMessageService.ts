import { injectable } from "tsyringe";
import { initClient, getClient } from "../../../config/venom";

@injectable()
export class SendContactService {
  async sendContact(to: string, contactsId: string | string[], name?: string) {
    // Validação no Service
    if (!to.match(/^\d+@c\.us$/)) {
      throw new Error("Número do destinatário inválido.");
    }

    if (typeof contactsId === "string" && !contactsId.match(/^\d+@c\.us$/)) {
      throw new Error("ID de contato inválido.");
    }

    if (Array.isArray(contactsId)) {
      contactsId.forEach((id) => {
        if (!id.match(/^\d+@c\.us$/)) {
          throw new Error(`ID de contato inválido: ${id}`);
        }
      });
    }

    await initClient();
    const client = getClient();
    const result = await client.sendContactVcard(to, contactsId, name || "Contato");
    console.log("Contato enviado com sucesso:", result);
    return result;
  }
}
