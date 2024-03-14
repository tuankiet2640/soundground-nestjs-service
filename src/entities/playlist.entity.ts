import {
  Column, CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { Track } from './track.entity';
import { AppUser } from './app-user.entity';
import { Comment } from './comment.entity';

@Entity({ schema: 'soundground', name: 'playlist' })
export class Playlist {
  @PrimaryGeneratedColumn('increment', { name: 'playlist_id' })
  playlistId: number;

  @Column({ name: 'title', length: 255 })
  title: string;

  @Column({ name: 'created_at', type: 'timestamp' })
  @CreateDateColumn()
  createdAt: Date;

  @Column({ name: 'user_id' })
  userId: number;

  //tracks and playlists
  @ManyToMany(() => Track, (track) => track.playlists)
  tracks: Track[];

  //user create playlists
  @ManyToMany(() => AppUser, (user) => user.createdPlaylists)
  @JoinTable({
    name: 'playlist_creator',
    joinColumn: { name: 'playlist_id', referencedColumnName: 'playlistId' },
    inverseJoinColumn: { name: 'user_id', referencedColumnName: 'userId' },
  })
  creator: AppUser;

  // followers of playlists
  @ManyToMany(() => AppUser, (user) => user.followersPlaylists)
  @JoinTable({
    name: 'playlist_like',
    joinColumn: { name: 'playlist_id', referencedColumnName: 'playlistId' },
    inverseJoinColumn: { name: 'user_id', referencedColumnName: 'userId' },
  })
  likes: AppUser[];

  //comments on playlists
  @OneToMany(() => Comment, (comment) => comment.playlist)
  comments: Comment[];
}
