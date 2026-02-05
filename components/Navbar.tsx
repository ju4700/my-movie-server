import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter uppercase">
          LinkUp<span className="text-red-500">BD</span>
        </Link>
        <div className="flex gap-8 text-sm font-medium tracking-widest uppercase text-gray-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/" className="hover:text-white transition-colors">
            Movies
          </Link>
          <Link href="/" className="hover:text-white transition-colors">
            Request
          </Link>
        </div>
      </div>
    </nav>
  );
}
