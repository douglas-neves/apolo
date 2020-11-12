export interface LogoInterface {
  image: string;
}

export class Logo implements LogoInterface {
  public image = '';

  constructor(dto: LogoInterface) {
    Object.assign(this, dto);
  }
}
