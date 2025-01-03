import { Request, Response } from "express";
import { container } from "tsyringe";
import { SendAudioMessageUseCase } from "../usecases/SendAudioMessageUseCase";

export class SendMidiaMessageController {
  async handle(req: Request, res: Response): Promise<any> {
    try {
      const { to, videoPath, caption } = req.body;

      if (!to || !videoPath) {
        return res.status(400).json({
          error: "'to' (número de telefone) e 'videoPath' (URL do video) são obrigatórios.",
        });
      }

      const sendAudioMessageUseCase = container.resolve(SendAudioMessageUseCase);
      const result = await sendAudioMessageUseCase.execute(to, videoPath);

      return res.status(200).json({
        success: true,
        result,
      });
    } catch (error: any) {
      console.error("Erro ao enviar video:", error);
      return res.status(500).json({
        error: error.message || "Erro interno do servidor",
      });
    }
  }
}
