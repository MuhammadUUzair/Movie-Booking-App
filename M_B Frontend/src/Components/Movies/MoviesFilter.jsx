
import { languages } from "../../Utils/constants";


const MoviesFilter = () => {

    return (
        <div className="w-full md:w-1/4 p-4 space-y-6 ">
            <h2 className="text-2xl font-semibold">Filters</h2>

            {/* Language */}
            <div className="bg-white p-4 rounded-md">
                <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Languages</span>
                    <button className="text-[#f74362] cursor-pointer">Clear</button>
                </div>

                <div className="flex flex-wrap gap-2">
                    {
                        languages.map((lang, i) => (
                            <span key={i} className="text-[#f74362] text-sm  px-3 py-1 rounded border hover:bg-gray-100
                            cursor-pointer border-gray-200">{lang}</span>
                        ))
                    }
                </div>
            </div>
            {/* Similar blocks for genres and format */}
            <div className="bg-white  p-4 rounded ">
                <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold ">Genres</span>
                    <button className="text-[#f74362] cursor-pointer" >Clear</button>
                </div>
            </div>

            <div className="bg-white  p-4 rounded ">
                <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Format</span>
                    <button className="text-[#f74362] cursor-pointer">Clear</button>
                </div>
            </div>

            <button className="w-full border border-[#f74362] rounded text-[#f74362] hover:bg-[#f74362] hover:text-white 
            transition cursor-pointer  py-1">
                Browse by Cinemas
            </button>
        </div>
    )

}
export default MoviesFilter;