export interface CHAT_DATA_TYPE {
  id: number;
  image: any;
  name: string;
  time: string;
  lastMessage: string;
  totalUnread: number;
}

export interface MESSAGE_DATA_TYPE {
  id: string;
  message: string;
  time: string;
}

export interface ITEM_STATUS {
  id: number;
  name?: string;
}
