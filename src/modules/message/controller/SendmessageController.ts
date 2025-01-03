import { Request, Response } from "express";
import { container } from "tsyringe";
import { SendMessageUseCase } from "../usecases/SendMessageUseCase";

export class SendMessageController {
  async handle(req: Request, res: Response): Promise<any> {
    try {
      const { to, message, imagePath, caption } = req.body;

      if (!to) {
        return res.status(400).json({ error: "'to' é obrigatório." });
      }

      const sendMessageUseCase = container.resolve(SendMessageUseCase);
      const result = await sendMessageUseCase.execute(to, message, imagePath, caption);

      return res.status(200).json({ success: true, result });
    } catch (error) {
      console.error("Erro ao enviar mensagem ou imagem:", error);
      return res.status(500).json({ error: error || "Erro interno do servidor" });
    }
  }
}
