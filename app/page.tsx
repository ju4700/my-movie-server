import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function Home() {
  const moviesDir = path.join(process.cwd(), 'public/movies');
  let movies: string[] = [];

  try {
    movies = fs.readdirSync(moviesDir).filter(file => file.endsWith('.mp4'));
  } catch (err) {
    console.error("Error reading movies directory:", err);
  }

  return (
    <div>
        <h1 className="text-3xl font-bold mb-8 uppercase tracking-widest border-l-4 border-red-600 pl-4">Latest Uploads</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => {
            const slug = encodeURIComponent(movie);
            const name = movie.replace(/\.mp4$/, '');
            
            return (
            <Link href={`/movie/${slug}`} key={movie} className="group block">
                <div className="bg-zinc-900 border border-zinc-800 p-0 h-full hover:border-zinc-500 transition-colors rounded-none outline-none">
                <div className="aspect-video bg-zinc-800 flex items-center justify-center text-zinc-600 group-hover:text-zinc-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-all"></div>
                     <span className="text-5xl font-light z-10">▶</span>
                </div>
                <div className="p-6">
                    <h2 className="text-xl font-bold mb-2 truncate group-hover:text-white text-gray-200">{name}</h2>
                    <div className="flex justify-between items-center mt-4">
                        <span className="text-xs text-red-500 font-bold uppercase tracking-widest">Watch</span>
                        <span className="text-xs text-zinc-600 uppercase">Movie</span>
                    </div>
                </div>
                </div>
            </Link>
            );
        })}
        
        {movies.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-12 border border-zinc-800 bg-zinc-900">
                <p>No movies found in public/movies directory.</p>
            </div>
        )}
        </div>
    </div>
  );
}
