export interface LocaleInfoInterface {
  name: string; // O nome amigavel para o local, ex USA
  locale: string; // O codigo local, ex. en-US
  flag: string; // O Segundo caractere utilizado para montar o nome do icone
  selected: boolean; // Se este é o local selecionado
}
