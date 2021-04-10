import { ISendMessageExecuter } from "../SendMessage/types";

interface QueueCounterInterface {
  add(): void;
  isMaxCountReached(): boolean;
  reset(): void;
}

export class QueueCounter implements QueueCounterInterface {
  private count = 0;
  constructor(private maxCount = 10) {}

  add() {
    this.count++;
  }

  isMaxCountReached() {
    return this.count === this.maxCount;
  }

  reset() {
    this.count = 0;
  }
}

class SendMessageCounter implements ISendMessageExecuter {
  private messages: string[] = [];

  constructor(private logSender: ISendMessageExecuter, private counter: QueueCounterInterface) {
    this.logSender = logSender;
    this.counter = counter;
  }

  private concatMessages(message: string) {
    this.messages = [...this.messages, message];
  }

  private joinMessages() {
    return this.messages.join(" ");
  }

  send(message: string) {
    this.counter.add();
    this.concatMessages(message);

    if (this.counter.isMaxCountReached()) {
      this.counter.reset();
      this.logSender.send(this.joinMessages());
    }
  }

  flush() {
    this.logSender.send(this.joinMessages());
    this.counter.reset();
  }
}

export default SendMessageCounter;
