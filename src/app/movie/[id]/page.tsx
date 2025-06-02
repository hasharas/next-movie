import { getMovieDetails } from '@/lib/tmdb'
import {notFound} from 'next/navigation'

export default async function MovieDetails({ params }: { params: { id: string } }) {
  const movie = await getMovieDetails(params.id)

  if (!movie) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <img className='' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p className="mt-4">{movie.overview}</p>
      <p className="mt-2 text-gray-400">Release Date: {movie.release_date}</p>
    </div>
  )
}
