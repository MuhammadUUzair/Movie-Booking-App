import dayjs from 'dayjs'
import { useState } from 'react';

const TheaterTimings = () => {
    const today = dayjs();
    
    
    const [selectedDate, setSelectedDate] = useState(today);
    const formattedDate = selectedDate.format('dd/mm/yyyy')
    const next7days = Array.from({ length:7}, (_,i) => (today.add(i,"day")))
    
    // const next7days = [];
    // for(let i = 0; i<7 ; i++){
    //     next7days.push(today.add(i,"day"))

    // }
    // console.log("next 7 D: ", next7days)

   

    return (
     <>
     <hr className=" my-2 border-gray-200"/>
     <div className=" flex items-center gap-2 mb-4 overflow-x-auto py4 px-2">
        {
            next7days.map((date,i)=>{
                const isSelected = selectedDate.isSame(date,"day")
                return(
                    <button
                    key={i}
                    onClick={()=> setSelectedDate(date)}
                    className={`flex cursor-pointer flex-col border border-gray-200 items-center px-3 py-2 rounded-lg min-w-12.5
                ${isSelected ? "bg-black text-white font-semibold" : "text-black hover:bg-gray-100"}`}
                    >
                        <span className=' text-sm font-black'>{date.format("D")}</span>
                        <span className=' text-xs'>{date.format("ddd")}</span>
                        <span className=' text-[10px]'>{date.format("MMM").toUpperCase()}</span>
                    </button>
                )
            })
        }
        
     </div>
     </>
    )
}

export default TheaterTimings;