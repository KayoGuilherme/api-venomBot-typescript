import { injectable, inject } from "tsyringe";
import { SendMessageService } from "../services/SendMessageService";
import { SendImageService } from "../services/SendImageService";

@injectable()
export class SendImageMessageUseCase {
  constructor(
    @inject(SendImageService) private sendImageService: SendImageService
  ) {}

  async execute(to: string, imagePath: string, caption?: string ) {
    if (!to) {
      throw new Error("Número de telefone é obrigatório.");
    }

    if (!imagePath) {
      throw new Error("Url da imagem é obrigatória.");
    }

    return await this.sendImageService.sendImage(to, imagePath, caption);
  }
}
