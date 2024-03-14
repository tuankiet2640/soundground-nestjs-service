import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany, JoinColumn
} from "typeorm";
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

  //user create comments
  @ManyToOne(() => AppUser, (user) => user.comments)
  @JoinColumn({ name: 'user_id' })
  user: AppUser;

  //track relation here
  @ManyToOne(() => Track, (track) => track.comments)
  @JoinColumn({ name: 'track_id' })
  track: Track | null;

  //comments on comments (child comments)
  @OneToMany(() => Comment, (comment) => comment.parent)
  childComments: Comment[];

  //parent comment relation
  @ManyToOne(() => Comment, (comment) => comment.childComments, { nullable: true })
  @JoinColumn({ name: 'parent_comment_id' })
  parent: Comment | null;

  //comments on playlists
  @ManyToOne(() => Playlist, (playlist) => playlist.comments, { nullable: true })
  @JoinColumn({ name: 'playlist_id' })
  playlist: Playlist | null;
}
