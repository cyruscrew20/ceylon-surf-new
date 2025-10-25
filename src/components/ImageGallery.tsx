import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { GalleryImage } from '../types/gallery';

interface ImageGalleryProps {
  featuredOnly?: boolean;
}

export default function ImageGallery({ featuredOnly = false }: ImageGalleryProps) {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, [featuredOnly]);

  async function fetchImages() {
    try {
      let query = supabase
        .from('gallery_images')
        .select('*')
        .order('order_index', { ascending: true });

      if (featuredOnly) {
        query = query.eq('featured', true);
      }

      const { data, error } = await query;

      if (error) throw error;
      setImages(data || []);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="aspect-[3/4] bg-gray-200 animate-pulse rounded"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="aspect-[3/4] overflow-hidden group cursor-pointer"
            >
              <img
                src={image.image_url}
                alt={image.alt_text}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
