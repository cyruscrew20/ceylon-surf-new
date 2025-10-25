import { useState } from 'react';

export default function PackagesPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    numberOfPeople: '',
    sessionType: '',
    location: '',
    date: '',
    specialNotes: '',
  });

  const packages = [
    {
      title: 'Lifestyle Photography',
      subtitle: 'Lifestyle (casual)',
      price: '$99',
      features: [
        '01 hour coverage (flexible)',
        'High resolution 30 edited images (Digital)',
        'Estimated turnaround: 4-7 days',
      ],
      description: 'Perfect for surf lifestyle, beach moments, and candid portraits surf shots',
    },
    {
      title: 'Solo Session',
      subtitle: 'Solo (just yourself)',
      price: '$149',
      features: [
        '01 hour coverage (flexible)',
        'High resolution 30 edited images (Digital)',
        'Estimated turnaround: 4-7 days',
      ],
      description: 'Perfect for individual surfers seeking dynamic in-water shots.',
    },
    {
      title: 'Group Session',
      subtitle: 'Group photo session 2-3 surfers (cost can be shared)',
      price: '$199',
      features: [
        '01 hour coverage (flexible)',
        'High resolution 30 edited images (Digital)',
        'Estimated turnaround: 4-7 days',
      ],
      description: 'Ideal for friends or couples who surf together, capturing both individual and group moments',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl text-center mb-20 font-jura tracking-wide">
          OUR PACKAGES
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-jura mb-2">{pkg.title}</h3>
              <p className="text-sm text-gray-600 font-poppins mb-4">{pkg.subtitle}</p>
              <p className="text-4xl font-bold mb-6 font-jura">{pkg.price}</p>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-700 font-poppins flex items-start">
                    <span className="mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-gray-600 font-poppins mb-6">{pkg.description}</p>

              <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors font-poppins">
                BOOK NOW
              </button>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-12 font-jura">Make it your way!</h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <h3 className="text-xl font-jura mb-4">Personal Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-4 py-3 font-poppins focus:outline-none focus:border-gray-500"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-4 py-3 font-poppins focus:outline-none focus:border-gray-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-4 py-3 font-poppins focus:outline-none focus:border-gray-500"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-4 py-3 font-poppins focus:outline-none focus:border-gray-500"
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-4 py-3 font-poppins focus:outline-none focus:border-gray-500"
                />
                <select
                  name="numberOfPeople"
                  value={formData.numberOfPeople}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-4 py-3 font-poppins focus:outline-none focus:border-gray-500"
                >
                  <option value="">No of people</option>
                  <option value="1">1 person</option>
                  <option value="2">2 people</option>
                  <option value="3">3 people</option>
                  <option value="4+">4+ people</option>
                </select>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-jura mb-4">Photoshoot Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <select
                  name="sessionType"
                  value={formData.sessionType}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-4 py-3 font-poppins focus:outline-none focus:border-gray-500 md:col-span-2"
                >
                  <option value="">Photo session type</option>
                  <option value="lifestyle">Lifestyle Photography</option>
                  <option value="solo">Solo Session</option>
                  <option value="group">Group Session</option>
                </select>
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-4 py-3 font-poppins focus:outline-none focus:border-gray-500"
                />
                <input
                  type="date"
                  name="date"
                  placeholder="Date"
                  value={formData.date}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-4 py-3 font-poppins focus:outline-none focus:border-gray-500"
                />
                <textarea
                  name="specialNotes"
                  placeholder="Special Notes"
                  value={formData.specialNotes}
                  onChange={handleChange}
                  rows={4}
                  className="border border-gray-300 rounded px-4 py-3 font-poppins focus:outline-none focus:border-gray-500 md:col-span-2"
                />
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-black text-white px-12 py-3 rounded-full hover:bg-gray-800 transition-colors font-poppins"
              >
                REQUEST A QUOTE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
