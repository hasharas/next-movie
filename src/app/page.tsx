import { getTrendingMovies } from '@/lib/tmdb'
import MovieCard from '@/components/MovieCard'

export default async function Home() {
  const movies = await getTrendingMovies()

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
      {movies.map((movie: any) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}
