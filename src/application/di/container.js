import { CounterMemoryRepository } from '../../infrastructure/repositories/counter.memory.repository.js';
import { CounterService } from '../../domain/services/counter.service.js';
import { LogInterceptor } from '../../infrastructure/interceptors/log.interceptor.js';
import { IncrementCounterUseCase } from '../use-cases/increment-counter.usecase.js';

export const container = {
  repository: new CounterMemoryRepository(),
  interceptor: new LogInterceptor('App'),
};

container.service = new CounterService(container.repository);
container.incrementUseCase = new IncrementCounterUseCase(container.service, container.interceptor);
