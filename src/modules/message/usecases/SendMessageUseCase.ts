import { injectable, inject } from "tsyringe";
import { SendMessageService } from "../services/SendMessageService";

@injectable()
export class SendMessageUseCase {
  constructor(
    @inject(SendMessageService) private sendMessageService: SendMessageService
  ) {}

  async execute(to: string, message: string, imagePath?: string, caption?: string) {
    if (!to) {
      throw new Error("Número de telefone é obrigatório.");
    }

    if (imagePath) {
      return await this.sendMessageService.sendImage(to, imagePath, caption);
    }

    if (!message) {
      throw new Error("Mensagem de texto é obrigatória se não houver imagem.");
    }


    return await this.sendMessageService.sendMessage(to, message);
  }
}
