
export interface Chat {
  _id: string;
  chatId: string;
  usuarios: number[];
  creadoEn: Date;
  chats: Message[];
}

export interface Message {
  usuarioId1: number;
  usuarioId2: number;
  mensaje: string;
  timestamp: Date;
}
