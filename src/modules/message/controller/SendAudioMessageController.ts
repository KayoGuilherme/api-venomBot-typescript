import { Request, Response } from "express";
import { container } from "tsyringe";
import { SendAudioMessageUseCase } from "../usecases/SendAudioMessageUseCase";

export class SendAudioMessageController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { to, audioPath } = req.body;

      if (!to || !audioPath) {
        return res.status(400).json({
          error: "'to' (número de telefone) e 'audioPath' (URL do áudio) são obrigatórios.",
        });
      }

      const sendAudioMessageUseCase = container.resolve(SendAudioMessageUseCase);
      const result = await sendAudioMessageUseCase.execute(to, audioPath);

      return res.status(200).json({
        success: true,
        result,
      });
    } catch (error: any) {
      console.error("Erro ao enviar áudio:", error);
      return res.status(500).json({
        error: error.message || "Erro interno do servidor",
      });
    }
  }
}
