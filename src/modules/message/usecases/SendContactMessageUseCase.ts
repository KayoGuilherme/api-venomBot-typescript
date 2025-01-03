import { injectable, inject } from "tsyringe";
import { SendContactService } from "../services/SendContactMessageService";


@injectable()
export class SendContactUseCase {
  constructor(
    @inject(SendContactService) private sendContactService: SendContactService
  ) {}

  async execute(to: string, contactsId: string | string[], name?: string) {
    return await this.sendContactService.sendContact(to, contactsId, name);
  }
}
