import Link from 'next/link';

const linkGroups = [
  {
    title: 'Services',
    links: [
      { label: 'YouTube Management', href: '/services/youtube' },
      { label: 'SEO Optimization', href: '/services/seo' },
      { label: 'Graphic Design', href: '/services/design' },
      { label: 'Content Strategy', href: '/services/content' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-8">
      {linkGroups.map((group) => (
        <div key={group.title}>
          <h3 className="text-lg font-semibold mb-4">{group.title}</h3>
          <ul className="space-y-2">
            {group.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
} 