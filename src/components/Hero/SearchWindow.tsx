import React from "react";

import { useAppDispatch, useAppSelector } from "@/redux-store/hooks"; 
import { toggleSearchWindow } from "@/redux-store/features/searchWindow/searchSlice";


const SearchWindow = () => {
  const dispatch = useAppDispatch();
  const isWindowOpen = useAppSelector((state) => state.search.isOpen)

  return (
    <div className={`bg-black/80 z-20 h-screen w-full fixed left-0 ${isWindowOpen ? "active-search-window" : "close-search-window"} flex flex-col justify-end`}>

      <div className="h-[90%] z-30 bg-white text-black rounded-tl-[45px] rounded-tr-[45px] pt-5">
        <div className="flex justify-center mb-10 ">
          <button onClick={()=> {dispatch(toggleSearchWindow())}} className="border border-black p-3 rounded-md">
            Cancel Search
          </button>
        </div>

        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Search"
            className="border border-black/65 p-3 rounded-md w-[80%] max-w-[300px] h-14 outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchWindow;
