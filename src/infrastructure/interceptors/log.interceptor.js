export class LogInterceptor {
  constructor(context) {
    this.context = context;
  }

  intercept(action, details = {}) {
    console.info(`[${this.context}] Acción nueva rara: ${action}`, details);
  }
}
