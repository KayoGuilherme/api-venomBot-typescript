import { container } from "tsyringe";
import { SendMessageService } from "../../modules/message/services/SendMessageService";
import { SendMessageUseCase } from "../../modules/message/usecases/SendMessageUseCase";
import 'reflect-metadata';

container.registerSingleton("SendMessageService", SendMessageService);
container.registerSingleton("SendMessageUseCase", SendMessageUseCase);
