import { Request, Response } from "express";
import { container } from "tsyringe";

import { SendDocumentMessageUseCase } from "../usecases/SendDocumentMessageUseCase";

export class SendDocumentMessageController {
  async handle(req: Request, res: Response): Promise<any> {
    try {
      const {to, fileName, caption } = req.body;
      const documentPath = req.file?.path || req.body.document;

      if (!to || !documentPath) {
        return res.status(400).json({
          error: "'to' (número de telefone) e 'documentPath' (Documento) são obrigatórios.",
        });
      }

      const sendDocumentMessageUseCase = container.resolve(SendDocumentMessageUseCase);
      const result = await sendDocumentMessageUseCase.execute(to, documentPath, fileName, caption);

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
