import { Request, Response } from "express";
import { container } from "tsyringe";
import { SendMessageUseCase } from "../usecases/SendMessageUseCase";
import { SendImageMessageUseCase } from "../usecases/SendImageMessageUseCase";

export class SendImageMessageController {
  async handle(req: Request, res: Response): Promise<any> {
    try {
      const { to,  caption } = req.body;
      const imagePath = req.file?.path || req.body.imagePath;

      if (!to) {
        return res.status(400).json({ error: "'to' é obrigatório." });
      }

      if (!imagePath) {
        return res.status(400).json({ error: " 'URL ' da imagem é obrigatorio." });
      }

      const sendImageMessageUseCase = container.resolve(SendImageMessageUseCase);
      const result = await sendImageMessageUseCase.execute(to, imagePath, caption );

      return res.status(200).json({ success: true, result });
    } catch (error) {
      console.error("Erro ao enviar imagem:", error);
      return res.status(500).json({ error: error || "Erro interno do servidor" });
    }
  }
}
