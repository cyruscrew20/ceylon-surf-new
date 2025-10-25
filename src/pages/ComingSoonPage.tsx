import heroLogo from '../assets/hero-logo.svg';

interface ComingSoonPageProps {
  title: string;
}

export default function ComingSoonPage({ title }: ComingSoonPageProps) {
  return (
    <div className="pt-24 min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <img
          src={heroLogo}
          alt="Ceylon Surf Diary"
          className="w-48 mx-auto mb-8 opacity-50"
        />
        <h1
          className="text-5xl mb-6"
          style={{ fontFamily: 'Jokerman, cursive' }}
        >
          {title}
        </h1>
        <p
          className="text-2xl text-gray-400 mb-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Coming Soon
        </p>
        <p
          className="text-gray-600"
          style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.8' }}
        >
          We're working on something special. This page will be available soon.
          Stay tuned for updates!
        </p>
      </div>
    </div>
  );
}
