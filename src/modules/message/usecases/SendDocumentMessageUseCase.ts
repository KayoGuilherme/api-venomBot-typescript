import { injectable, inject } from "tsyringe";
import { SendDocumentMessageService } from "../services/SendDocumentMessageService";

@injectable()
export class SendDocumentMessageUseCase {
  constructor(
    @inject(SendDocumentMessageService) private sendDocumentService: SendDocumentMessageService
  ) {}

  async execute(to: string, documentPath: string, fileName?: string, caption?: string ) {
    if (!to) {
      throw new Error("Número de telefone é obrigatório.");
    }

    if (!documentPath) {
      throw new Error("Url da imagem é obrigatória.");
    }

    if (!fileName) {
      throw new Error("Nome do arquivo é obrigatório.");
    }

    return await this.sendDocumentService.sendDocument(to, documentPath, fileName, caption);
  }
}
