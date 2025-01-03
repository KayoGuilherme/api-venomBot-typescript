import { injectable, inject } from "tsyringe";
import { SendAudioMessageService } from "../services/SendAudioMesssageService";

@injectable()
export class SendAudioMessageUseCase {
  constructor(
    @inject(SendAudioMessageService)
    private sendAudioMessageService: SendAudioMessageService
  ) {}

  async execute(to: string, audioPath?: string) {
    if (!to) {
      throw new Error("Número de telefone é obrigatório.");
    }

    if (!audioPath) {
      throw new Error("Url do áudio é obrigatória.");
    }
    return await this.sendAudioMessageService.sendAudio(to, audioPath);
  }
}
