import m4 from "../assets/m4.avif";
import { MdShare } from "react-icons/md";
import { filters } from "../Utils/constants";
import TheaterTimings from "../Components/Movies/TheaterTiminigs";
const movie = {

    id: 4,
    title: "F1: The Movie",
    genre: ["Action", "Drama", "Sports"],
    rating: 9.5,
    votes: "6.8K",
    img: m4,
    languages: ["English", "Hindi", "Tamil", "Telugu"],
    format: ["2D", "3D", "IMAX", "3D"],
    Certification: "UA16+",
    duration: "2h 24m",
    releaseDate: "2023-09-15",
    discription: `F1: The Movie is a thrilling documentary that takes you behind the scenes of the high-octane world of Formula 1 
        racing. Directed by the acclaimed filmmaker, this movie offers an in-depth look at the 2023 Formula 1 season, showcasing the
        intense competition, cutting-edge technology, and the personal stories of the drivers and teams. With breathtaking footage
        from some of the most iconic circuits around the globe, F1: The Movie captures the speed, precision, and drama that define
        this exhilarating sport. Whether you're a die-hard F1 fan or new to the world of motorsport, this film promises an 
        unforgettable cinematic experience that celebrates the passion and dedication of everyone involved in Formula 1.`,
}

const MovieDetails = () => {
    return (
        <>
            {/* MovieDetails Section */}

            <div className="relative text-white font-sans px-4 py-10"
                style={{
                    backgroundImage: `url(${movie.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "Center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Overlay for darkness */}
                <div className=" absolute inset-0 bg-black opacity-70"></div>
                {/* Actual Content */}
                <div className=" relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
                    {/* Poster */}
                    <div>
                        <img
                            src={movie.img}
                            alt={movie.title}
                            className="rounded-xl w-52 shadow-xl" />
                    </div>
                    {/* Details */}
                    <div className="flex flex-col justify-start flex-1">
                        <h1 className=" text-4xl font-bold mb-4">{movie.title}</h1>
                        <div className="flex items-center gap-4 mb-3">
                            <div className="bg-[#3a3a3a] px-4 py-2 rounded-md flex items-center gap-2 text-sm">
                                <span className="text-pink-500 font-bold">
                                    ★ {movie.rating}
                                </span>
                                <span className="text-gray-300">
                                    {movie.votes} Votes
                                </span>
                                <button className="cursor-pointer bg-[#2f2f2f] ml-6 px-4 py-2 rounded-md hover:bg-[#4a4a4a]">
                                    Rate Now
                                </button>
                            </div>

                        </div>

                        <div className="flex items-center gap-3 text-sm mb-4">
                            <span className="bg-[#3a3a3a] px-4 py-1 rounded">
                                {movie.format.join(" | ")}
                            </span>
                            <span className="bg-[#3a3a3a] px-3 py-1 rounded">
                                {movie.languages.join(" | ")}
                            </span>

                        </div>

                        <p className=" text-sm text-gray-300 mb-4">
                            {movie.duration} • {movie.genre.join(", ")} •{" "}
                            {movie.Certification} •{" "}
                            {movie.releaseDate}
                        </p>

                        <div>
                            <h2 className=" text-xl font-bold mb-2"> About the movie</h2>
                            <p className=" text-sm text-gray-300 leading-relaxed">
                                {movie.discription}
                            </p>
                        </div>
                    </div>
                    {/* Share Button */}
                    <div className="absolute top-0 right-0 cursor-pointer">
                        <button className="cursor-pointer bg-[#3a3a3a] px-4 py-2 rounded text-sm flex items-center gap-2">
                            <MdShare /> Share
                        </button>

                    </div>

                </div>
            </div>

            {/* Show Timings */}
            <div className="max-w-7xl mx-auto mt-8 ">

                {/* Filters */}
                <div className=" flex flex-wrap items-center gap-2 mb-2">
                    {
                        filters.map((filter, i) => (
                            <button key={i} className=" border border-gray-300  px-5 py-1 rounded-lg text-sm hover:bg-gray-100
                             cursor-pointer"
                            > {filter}
                            </button>
                        ))
                    }

                </div>
                <hr className="my-2 border-gray-200" />

                {/* Avalability Status */}
                <div className=" flex items-center gap-4 rounded mb-1 py-2 text-sm px-8 bg-gray-200">
                    <span className=" flex items-center gap-1">
                        <span className=" w-2 h-2 mr-1 bg-black rounded-full inline-block"></span>
                        <small className=" font-semibold text-gray-500">Available</small>
                    </span>
                    <span className=" flex items-center gap-1">
                        <span className=" w-2 h-2 mr-1 font-semibold bg-yellow-400 rounded-full inline-block"></span>
                        <small className=" font-semibold text-gray-500">Filling Fast</small>
                    </span>
                    <span className=" flex items-center gap-1">
                        <span className=" w-2 h-2 mr-1 font-semibold bg-red-400 rounded-full inline-block"></span>
                        <small className=" font-semibold text-gray-500">Almost full</small>
                    </span>

                </div>

                {/* Theater Timings */}
                <TheaterTimings/>
            </div>

        </>
    )
}

export default MovieDetails;