import Link from 'next/link';

export default function MovieCard({ movie }: { movie: any }) {
  return (
    <Link href={`/movie/${movie.id}`} className="bg-gray-800 rounded p-4 hover:bg-gray-700 transition">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full rounded"
      />
      <h3>{movie.original_language}</h3>
      <h2 className="mt-2 text-lg font-bold">{movie.title}</h2>
      <p className="text-sm text-gray-400">{movie.release_date}</p>
      <p className="text-sm text-gray-400">{movie.vote_average} IMB</p>
      <p className="text-sm text-gray-400">Movie Count : {movie.vote_count}</p>
    </Link>
  );
}
