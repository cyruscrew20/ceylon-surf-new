import Hero from '../components/Hero';
import ImageGallery from '../components/ImageGallery';
import OurStory from '../components/OurStory';
import CallToAction from '../components/CallToAction';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      <Hero />
      <ImageGallery featuredOnly={true} />
      <OurStory />
      <CallToAction onNavigate={onNavigate} />
    </div>
  );
}
