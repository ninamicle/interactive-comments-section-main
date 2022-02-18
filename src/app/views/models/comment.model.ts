import { User } from './user.model';

export class CommentUser {
  id: number | null = null;
  content: string | null = null;
  createdAt: Date | null = null;
  score: number | null = null;
  user: User | null = null;
  replies: CommentUser[] | null = null;
}
