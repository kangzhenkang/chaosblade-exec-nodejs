export class ActionModel {
  private name: string;
  private flags: Map<string, string> = new Map();

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  addFlag(key: string, value: string): void {
    this.flags.set(key, value);
  }

  getFlag(key: string): string {
    return this.flags.get(key);
  }
}