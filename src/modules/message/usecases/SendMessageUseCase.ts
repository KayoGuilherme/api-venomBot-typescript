import { injectable, inject } from "tsyringe";
import { SendMessageService } from "../services/SendMessageService";

@injectable()
export class SendMessageUseCase {
  constructor(
    @inject(SendMessageService) private sendMessageService: SendMessageService
  ) {}

  async execute(to: string, message: string) {
    if (!to || !message) {
      throw new Error("Número de telefone e mensagem são obrigatórios.");
    }
    return await this.sendMessageService.sendMessage(to, message);
  }
}
