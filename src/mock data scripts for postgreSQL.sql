-- Insert mock data for app_user table
INSERT INTO soundground.app_user (username, email, password, date_joined, is_active)
VALUES
  ('user1', 'user1@example.com', 'password123', CURRENT_TIMESTAMP, true),
  ('user2', 'user2@example.com', 'password456', CURRENT_TIMESTAMP, true),
  ('user3', 'user3@example.com', 'password789', CURRENT_TIMESTAMP, false);

-- Insert mock data for track table
INSERT INTO soundground.track (title, upload_date, artwork, genre, plays_count, audio_path, status, user_id)
VALUES
  ('Track 1', CURRENT_TIMESTAMP, 'https://example.com/artwork1.jpg', 'Rock', 100, 'https://example.com/track1.mp3', 'active', 1),
  ('Track 2', CURRENT_TIMESTAMP, 'https://example.com/artwork2.jpg', 'Pop', 200, 'https://example.com/track2.mp3', 'active', 2),
  ('Track 3', CURRENT_TIMESTAMP, 'https://example.com/artwork3.jpg', 'Indie', 50, 'https://example.com/track3.mp3', 'inactive', 1);

-- Insert mock data for playlist table
INSERT INTO soundground.playlist (title, created_at, user_id)
VALUES
  ('Playlist 1', CURRENT_TIMESTAMP, 1),
  ('Playlist 2', CURRENT_TIMESTAMP, 2),
  ('Playlist 3', CURRENT_TIMESTAMP, 1);

-- Insert mock data for playlist_track table (many-to-many relationship between Track and Playlist)
INSERT INTO soundground.playlist_track (playlist_id, track_id)
VALUES
  (1, 1),
  (1, 2),
  (2, 2),
  (2, 3);

-- Insert mock data for comment table
INSERT INTO soundground.comment (text, posted_at, track_id, user_id, playlist_id)
VALUES
  ('Great track!', CURRENT_TIMESTAMP, 1, 2, NULL),
  ('I love this playlist!', CURRENT_TIMESTAMP, NULL, 1, 2),
  ('Nice work!', CURRENT_TIMESTAMP, 2, 3, NULL);

-- Insert mock data for track_like table (many-to-many relationship between Track and AppUser)
INSERT INTO soundground.track_like (track_id, user_id)
VALUES
  (1, 2),
  (2, 1),
  (3, 3);

-- Insert mock data for track_repost table (many-to-many relationship between Track and AppUser)
INSERT INTO soundground.track_repost (track_id, user_id)
VALUES
  (1, 3),
  (2, 2);

-- Insert mock data for playlist_creator table (many-to-many relationship between Playlist and AppUser)
INSERT INTO soundground.playlist_creator (playlist_id, user_id)
VALUES
  (1, 1),
  (2, 2),
  (3, 1);

-- Insert mock data for playlist_like table (many-to-many relationship between Playlist and AppUser)
INSERT INTO soundground.playlist_like (playlist_id, user_id)
VALUES
  (1, 2),
  (2, 3);