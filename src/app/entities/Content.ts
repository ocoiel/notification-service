export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validadeContentLength(content: string): boolean {
    return content.length >= 3 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentLenghValid = this.validadeContentLength(content);
    if (!isContentLenghValid) {
      throw new Error('Content length must be between 3 and 240 characters');
    }

    this.content = content;
  }
}
