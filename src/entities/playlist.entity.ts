import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Track } from "./track.entity";

@Entity({ schema: 'soundground', name: 'playlist' })

export class Playlist {
  @PrimaryGeneratedColumn('increment', { name: 'playlist_id' })
  playlistId: number;

  @Column({ name: 'title', length: 255 })
  title: string;

  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @Column({ name: 'user_id' })
  userId: number;

  @OneToMany(() => Track, (track) => track.playlist)
  tracks: Track[];
}
