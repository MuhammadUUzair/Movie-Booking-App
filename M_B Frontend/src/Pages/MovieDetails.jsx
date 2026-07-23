import m4 from "../assets/m4.avif";
const movie ={
      
        id: 4,
        title: "F1: The Movie",
        genre: "Action/Drama/Sports",
        rating: 9.5,
        votes: "6.8K",
        img: m4,
        languages: ["English", "Hindi", "Tamil", "Telugu"],
        age: "UA16+",
      
}



const MovieDetails = () => {
    return (
        <>
            {/* MovieDetails Section */}

            <div className="relative text-white font-sans px-4 py-10"
                style={{
                    backgroundImage:`url(${movie.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "Center",
                    backgroundRepeat: "no-repeat",
    }}
            >
                {/* Overlay for darkness */}
                <div></div>
                {/* Actual Content */}
                <div>
                    {/* Poster */}
                    <div></div>
                    {/* Details */}
                    <div></div>
                    {/* Share Button */}
                    <div></div>
                </div>
            </div>

        </>
    )
}

export default MovieDetails;