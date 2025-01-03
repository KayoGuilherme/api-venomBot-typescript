import { injectable } from "tsyringe";
import { initClient, getClient } from "../../../config/venom";

@injectable()
export class SendContactService {
  async sendContact(to: string, contactsId: string | string[], name?: string) {
    // Validar número do destinatário
    const formattedNumber = to.includes("@") ? to : `${to}@c.us`;

    // Garantir que contactsId está no formato correto
    const formattedContacts = Array.isArray(contactsId)
      ? contactsId.map((id) => (id.includes("@") ? id : `${id}@c.us`))
      : contactsId.includes("@")
      ? contactsId
      : `${contactsId}@c.us`;

    try {
      await initClient();
      const client = getClient();

      const result = await client.sendContactVcard(formattedNumber, formattedContacts, name || "Contato");
      console.log("Contato enviado com sucesso:", result);
      return result;
    } catch (error) {
      console.error("Erro ao enviar contato:", error);
      throw new Error("Erro ao enviar contato.");
    }
  }
}
