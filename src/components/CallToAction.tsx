interface CallToActionProps {
  onNavigate: (page: string) => void;
}

export default function CallToAction({ onNavigate }: CallToActionProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl mb-4"
          style={{ fontFamily: 'Jokerman, cursive' }}
        >
          Make it your way!
        </h2>
        <p
          className="text-gray-600 mb-8"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Tell us what you're looking for, it's customizable for you.
        </p>
        <button
          onClick={() => onNavigate('packages')}
          className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          REQUEST A QUOTE
        </button>
      </div>
    </section>
  );
}
