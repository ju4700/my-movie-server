import Link from 'next/link';

export default async function MoviePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filename = decodeURIComponent(slug);
  const title = filename.replace(/\.mp4$/, '');
  // Ensure the src is properly encoded for URL
  const videoSrc = `/movies/${encodeURIComponent(filename)}`;

  return (
    <div className="max-w-5xl mx-auto">
        <div className="mb-8 border-b border-zinc-800 pb-4">
             <Link href="/" className="inline-block text-zinc-500 hover:text-red-500 transition-colors text-xs font-bold uppercase tracking-widest border border-zinc-800 hover:border-red-500 px-4 py-2 bg-zinc-900">
                ← Back to List
             </Link>
        </div>
        
        <div className="border border-zinc-700 bg-black p-1 shadow-none">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <video controls className="w-full aspect-video bg-zinc-900 focus:outline-none" autoPlay>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
             </video>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6 bg-zinc-900 border border-zinc-800 p-8">
            <div className="flex-grow">
                 <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 uppercase tracking-wide">{title}</h1>
                 <div className="flex items-center gap-4 text-sm text-zinc-500 uppercase tracking-widest font-semibold">
                    <span>MP4 Format</span>
                    <span>•</span>
                    <span className="text-red-500">Stream Ready</span>
                 </div>
            </div>
            
            <a href={videoSrc} download={filename} className="flex-shrink-0 inline-flex items-center justify-center bg-zinc-100 text-black hover:bg-white font-bold py-4 px-8 uppercase tracking-widest text-sm transition-all rounded-none hover:scale-105 active:scale-95">
                Download Movie
            </a>
        </div>
    </div>
  );
}
