import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { AppUser } from './app-user.entity';

@Entity({ schema: 'soundground', name: 'comment' })
export class Comment {
  @PrimaryGeneratedColumn('increment', { name: 'comment_id' })
  commentId: number;

  @Column({ name: 'text', type: 'text' })
  text: string;

  @Column({ name: 'posted_at', type: 'timestamp' })
  postedAt: Date;

  @Column({ name: 'track_id' })
  trackId: number;

  @Column({ name: 'user_id' })
  userId: number;

  @ManyToOne(() => AppUser, (user) => user.comments)
  user: AppUser;
}
