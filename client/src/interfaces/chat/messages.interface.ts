export interface Message {
  id: number;
  conversationId: number;
  userId: string;
  text: string | null;
  image: string | null;
  createdAt: Date;
  owner: boolean;
}
