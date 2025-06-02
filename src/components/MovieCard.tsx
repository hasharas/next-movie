import Link from 'next/link';

export default function MovieCard({ movie }: { movie: any }) {
  return (
    <Link href={`/movie/${movie.id}`} className="bg-gray-800 rounded p-4 hover:bg-gray-700 transition">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full rounded"
      />
      <h2 className="mt-2 text-lg font-bold">{movie.title}</h2>
      <p className="text-sm text-gray-400">{movie.release_date}</p>
    </Link>
  );
}
