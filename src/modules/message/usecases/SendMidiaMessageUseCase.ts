import { injectable, inject } from "tsyringe";
import { SendMediaMessageService } from "../services/SendMediaMessageService";

@injectable()
export class SendAudioMessageUseCase {
  constructor(
    @inject(SendMediaMessageService)
    private sendMidiaMessageService: SendMediaMessageService
  ) {}

  async execute(to: string, videoPath: string, caption?: string) {
    if (!to) {
      throw new Error("Número de telefone é obrigatório.");
    }

    if (!videoPath) {
      throw new Error("Url do video é obrigatória.");
    }
    return await this.sendMidiaMessageService.sendVideo(to, videoPath, caption);
  }
}
