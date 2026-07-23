import { allMovies, languages } from "../../Utils/constants";
import MovieCard from "./Moviecard";


const MovieList = () => {
    return (
        <div className="w-full md:w-3/4 p-4 ">
            <div className="flex flex-wrap gap-2 mb-4">
                {
                    languages.map((lang, i) => (
                        <span key={i} className="text-[#f74362] bg-white px-3 py-1 rounded-3xl border border-gray-200 text-sm cursor-pointer
                        hover:bg-gray-100">
                            {lang}
                        </span>
                    ))
                }
            </div>

            <div className="flex justify-between items-center bg-white px-6 py-6 rounded mb-6">
                <h3 className="font-semibold text-xl">Comming Soon</h3>
                <a href="#" className="text-red-500 text-sm font-medium">
                    Explore Upcoming Movies <span className="ml-1">→</span>
                </a>
            </div>

            <div className="flex flex-wrap gap-6">
                {/* Movie Card */}
                {
                    allMovies.map((movie,i) => (
                        // <img src={movie.img} alt="" />
                        <MovieCard key = {i} movie={movie} />
                    ))
                }
            </div>

        </div>
    )
}

export default MovieList;