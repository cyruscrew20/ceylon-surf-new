/*
  # Create Gallery Images Table

  1. New Tables
    - `gallery_images`
      - `id` (uuid, primary key)
      - `image_url` (text) - URL of the image
      - `alt_text` (text) - Alternative text for accessibility
      - `featured` (boolean) - Whether image is featured on home page
      - `order_index` (integer) - Display order
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `gallery_images` table
    - Add policy for public read access (portfolio is public)
*/

CREATE TABLE IF NOT EXISTS gallery_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url text NOT NULL,
  alt_text text NOT NULL,
  featured boolean DEFAULT false,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view gallery images"
  ON gallery_images
  FOR SELECT
  TO anon
  USING (true);
