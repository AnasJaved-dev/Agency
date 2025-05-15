import { useState } from "react";
import Image from "next/image";
import { Youtube, FiEdit2 } from "lucide-react";

const categories = [
  { key: "youtube", label: "YouTube Services", icon: <Youtube size={20} /> },
  { key: "design", label: "Design Services", icon: <FiEdit2 size={20} /> },
];

const portfolioItems = {
  youtube: [
    {
      title: "Channel Audit Case Study",
      description: "Comprehensive SEO audit for a gaming channel resulting in 30% growth.",
      imageUrl: "/images/portfolio/youtube-audit.jpg",
    },
    {
      title: "Optimization & SEO",
      description: "Keyword research and metadata optimization for viral tech content.",
      imageUrl: "/images/portfolio/youtube-seo.jpg",
    },
    {
      title: "Channel Branding",
      description: "Custom thumbnails + banner design + SEO pipeline setup.",
      imageUrl: "/images/portfolio/youtube-branding.jpg",
    },
  ],
  design: [
    {
      title: "YouTube Thumbnails",
      description: "High-CTR thumbnails that boosted click-through by 40%.",
      imageUrl: "/images/portfolio/thumbnails.jpg",
    },
    {
      title: "Social Media Posters",
      description: "Engaging Instagram posters for product launches.",
      imageUrl: "/images/portfolio/posters.jpg",
    },
    {
      title: "Campaign Graphics",
      description: "Facebook + Twitter posts for seasonal campaigns.",
      imageUrl: "/images/portfolio/social-posts.jpg",
    },
  ],
};

export default function PortfolioSection() {
  const [active, setActive] = useState("youtube");

  return (
    <section className="section-wrapper py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Portfolio</h2>
        <div className="flex justify-center mb-8 space-x-4">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`flex items-center gap-2 px-4 py-2 font-medium rounded-full transition 
                ${active === cat.key ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolioItems[active].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
