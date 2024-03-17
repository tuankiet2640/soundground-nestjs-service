import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity, JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { Track } from './track.entity';
import { AppUser } from './app-user.entity';
import { Comment } from './comment.entity';

@Entity({ schema: 'soundground', name: 'playlist' })
export class Playlist extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'playlist_id' })
  playlistId: number;

  @Column({ name: 'title', length: 255 })
  title: string;

  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  //tracks and playlists
  @ManyToMany(() => Track, (track) => track.playlists)
  tracks: Track[];

  //user create playlists
  @ManyToOne(() => AppUser, (user) => user.createdPlaylists)
  @JoinColumn({ name: 'user_id' })
  creator: AppUser;

  // followers of playlists
  @ManyToMany(() => AppUser, (user) => user.followersPlaylists)
  @JoinTable({
    name: 'playlist_like',
    joinColumn: { name: 'playlist_id', referencedColumnName: 'playlistId' },
    inverseJoinColumn: { name: 'user_id', referencedColumnName: 'userId' },
  })
  followers: AppUser[];

  //comments on playlists
  @OneToMany(() => Comment, (comment) => comment.playlist)
  comments: Comment[];
}
