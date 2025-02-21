import { injectable, inject } from "tsyringe";
import { SendMessageService } from "../services/SendMessageService";

@injectable()
export class SendMessageUseCase {
  constructor(
    @inject(SendMessageService) private sendMessageService: SendMessageService
  ) {}

  async execute(to: string, message: string) {
    if (!to) {
      throw new Error("Número de telefone é obrigatório.");
    }

    if (!message) {
      throw new Error("Mensagem de texto é obrigatória.");
    }


    return await this.sendMessageService.sendMessage(to, message);
  }
}
