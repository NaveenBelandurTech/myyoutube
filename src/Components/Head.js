import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appslice";
import { useState } from "react";
import { useEffect } from "react";
import { GOOGLE_SEARCH_API } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";

export const Head = () => {
  const [search, setSearch] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const Dispatch = useDispatch();

  const ResponseData = useSelector((data) => {
    return data?.Search;
  });

  const handleClicked = () => {
    Dispatch(toggleMenu());
  };

  useEffect(() => {
    // debounce
    // making the api call at after every key press
    // comparing the with 2 api call is 200ms
    // will decline the api call
    const timer = setTimeout(() => {
      if (ResponseData[search]) {
        setSuggestion(ResponseData[search]);
      } else {
        ApiCall();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const ApiCall = async () => {
    const response = await fetch(
      "https://corsproxy.io/?" + GOOGLE_SEARCH_API + search,
    );
    const dataRes = await response.json();
    setSuggestion(dataRes[1]);
    Dispatch(
      cacheResult({
        [search]: dataRes[1],
      }),
    );
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div
        className="flex col-span-1 "
        style={{ alignItems: "center" }}
        onClick={handleClicked}
      >
        <GiHamburgerMenu size={30} style={{ cursor: "pointer" }} />
        <img
          className="h-8 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/YouTube_2024.svg/2560px-YouTube_2024.svg.png"
          alt="you tube logo"
        />
      </div>
      <div className="col-span-10 px-10 relative">
        <div className="flex">
          <input
            className="w-1/2 border border-gray-400 px-4 py-2 rounded-l-full focus:outline-none"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            <IoSearchOutline />
          </button>
        </div>

        {showSuggestions && suggestion.length > 0 && (
          <div className="fixed  bg-white w-1/2 mt-1 rounded-lg shadow-lg border border-gray-200">
            <ul className='py-1 px-1 '>
              {suggestion &&
                suggestion?.map((Data) => {
                  return <li className='px-1 py-1 mx-1 my-1 hover:bg-sky-600 hover:text-white cursor-pointer'> 🔍 {" "}{Data}</li>;
                })}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 flex">
        <FaUserCircle size={30} />
      </div>
    </div>
  );
};
