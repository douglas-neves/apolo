export interface ThemeInterface {
  id: number;
  template: string;
  selected: boolean;
}

export class Theme implements ThemeInterface {
  public id = 0;
  public template = '';
  public selected = false;

  constructor(dto: ThemeInterface) {
    Object.assign(this, dto);
  }
}
