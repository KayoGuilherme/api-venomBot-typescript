import { Request, Response } from "express";
import { container } from "tsyringe";
import { SendContactUseCase } from "../usecases/SendContactMessageUseCase";

export class SendContactController {
  async handle(req: Request, res: Response): Promise<any> {
    try {
      const { to, contactsId, name } = req.body;

      if (!to || !contactsId) {
        return res.status(400).json({ error: "'to' e 'contactsId' são obrigatórios." });
      }

      const sendContactUseCase = container.resolve(SendContactUseCase);
      const result = await sendContactUseCase.execute(to, contactsId, name);

      return res.status(200).json({ success: true, result });
    } catch (error: any) {
      console.error("Erro ao enviar contato:", error);
      return res.status(500).json({ error: error.message || "Erro interno do servidor" });
    }
  }
}
