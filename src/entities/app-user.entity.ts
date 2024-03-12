import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Track } from './track.entity';
import { Comment } from './comment.entity';
import { Playlist } from './playlist.entity';

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

  //track creation
  @OneToMany(() => Track, (track) => track.user)
  tracks: Track[];

  //comments
  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  //liked tracks
  @ManyToMany(() => Track, (track) => track.likes)
  likedTracks: Track[];

  //track reposts
  @ManyToMany(() => Track, (track) => track.reposts)
  repostedTracks: Track[];

  //followers of users
  @ManyToMany(() => AppUser, (user) => user.following)
  followers: AppUser[];

  @ManyToMany(() => AppUser, (user) => user.followers)
  following: AppUser[];

  //followers of playlists
  @ManyToMany(() => Playlist, (playlist) => playlist.likes)
  followersPlaylists: AppUser[];

  //created playlists
  @OneToMany(() => Playlist, (playlist) => playlist.creator)
  @JoinTable({
    name: 'playlist_creator',
    joinColumn: { name: 'user_id', referencedColumnName: 'userId' },
    inverseJoinColumn: {
      name: 'playlist_id',
      referencedColumnName: 'playlistId',
    },
  })
  createdPlaylists: Playlist[];
}
