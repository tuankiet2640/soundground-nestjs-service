import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { AppUser } from './app-user.entity';
import { Track } from './track.entity';
import { Playlist } from './playlist.entity';

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

  //user create comments
  @ManyToOne(() => AppUser, (user) => user.comments)
  user: AppUser;

  //track relation here
  @ManyToOne(() => Track, (track) => track.comments)
  track: Track;

  //comments on comments
  @ManyToOne(() => Comment, (comment) => comment.comments)
  comments: Comment[];

  @ManyToOne(() => Comment, (comment) => comment.comments)
  parent: Comment;

  //comments on playlists
  @ManyToOne(() => Playlist, (playlist) => playlist.comments)
  playlist: Playlist;
}
