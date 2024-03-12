import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Track } from './track.entity';
import { Comment } from './comment.entity';

@Entity({ schema: 'soundground', name: 'app_user' })
export class AppUser {
  @PrimaryGeneratedColumn('increment', { name: 'user_id' })
  userId: number;

  @Column({ name: 'username', length: 255, unique: true })
  username: string;

  @Column({ name: 'email', length: 255, unique: true })
  email: string;

  @Column({ name: 'password', length: 255 })
  password: string;

  @Column({ name: 'date_joined', type: 'timestamp' })
  dateJoined: Date;

  @Column({ name: 'is_active' })
  isActive: boolean;

  @OneToMany(() => Track, (track) => track.user)
  tracks: Track[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
