/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { AppUser } from './app-user.entity';
import { Playlist } from "./playlist.entity";

@Entity({ schema: 'soundground', name: 'track' })
export class Track {
  @PrimaryGeneratedColumn('increment', { name: 'track_id' })
  trackId: number;

  @Column({ name: 'title', length: 255 })
  title: string;

  @Column({ name: 'upload_date', type: 'timestamp' })
  uploadDate: Date;

  @Column({ name: 'artwork', length: 255 })
  artwork: string;

  @Column({ name: 'genre', length: 255 })
  genre: string;

  @Column({ name: 'plays_count' })
  playsCount: number;

  @Column({ name: 'audio_path', length: 255 })
  audioPath: string;

  @Column({ name: 'status', length: 50 })
  status: string;

  @Column({ name: 'user_id' })
  userId: number;

  @ManyToOne(() => AppUser, (user) => user.tracks)
  user: AppUser;

  @ManyToOne (() => Playlist, (playlist) => playlist.tracks)
  playlist: Playlist;
}
