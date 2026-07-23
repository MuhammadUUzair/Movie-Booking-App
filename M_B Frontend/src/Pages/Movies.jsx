import MoviesFilter from "../Components/Movies/MoviesFilter";
import MovieList from "../Components/Movies/MoviesList";
import BannerSlider from "../Components/Shared/BannerSlider";

const Movies = () => {
    return (
        <div>
            <BannerSlider />
            <div className="flex flex-col md:flex-row bg-[#f5f5f5] min-h-screen md:px-25 pb-10 pt-8">
                <MoviesFilter />
                <MovieList/>
            </div>

        </div>
    )
}

export default Movies;