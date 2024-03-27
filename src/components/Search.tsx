import React, { useEffect, useState } from "react";
import { GetSearch } from "../lib/api";
import { SearchGet } from "../lib/types";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";

const SearchInput = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState<SearchGet[]>([]);

  const SearchData = async (q: string) => {
    try {
      const searchdata = await GetSearch(q);

      if (searchdata && searchdata.data) {
        setSearchResults(searchdata.data);
      }
    } catch (error) {
      console.error("Error fetching recommended data:", error);
    }
  };

  useEffect(() => {
    if (searchInput.length > 3) {
      SearchData(searchInput);
    } else {
      setSearchResults([]);
    }
  }, [searchInput]);

  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="container ml-auto px-2 lg:pr-[58px] mt-2 flex justify-end">
      <div>
        <input
          type="text"
          placeholder="SEARCH"
          value={searchInput}
          onChange={handleInputChange}
          className="border bg-[#F5EEE7] border-white rounded-2xl py-2 px-4 flex text-[#D6A76F] focus:outline-none focus:border-white h-[31.41px] w-[179.69px] text-sm placeholder-[#D6A76F] focus:placeholder:hidden placeholder:text-right  placeholder:text-xs placeholder:font-bold"
          style={{ fontFamily: 'NamaFont, sans-serif' }}
        />
        {searchResults.length > 0 && (
          <ul className="px-2 bg-[#FFEBD8] w-[179.69px] max-h-[500px] rounded-box border-white mt-0.5 absolute z-10 border gap-2 overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 #f1f1f1' }}>            {searchResults.map((result, index) => (
            <React.Fragment key={index}>
              <Link to={result.endpoint.startsWith('/') ? result.endpoint.substring(1) : result.endpoint} className="flex gap-2 mt-1 bg-white bg-opacity-20 border-white border rounded-box max-h-[107px]">
                <img src={result.image} alt="" className="w-[68.3px] h-[107px] object-cover rounded-lg" />
                <div className="flex flex-col justify-center">
                  <div className="text-[13px] font-semibold flex items-center text-[#8C6D48]" style={{ fontFamily: 'Utendo, sans-serif' }}>
                    <p className="leading-4 line-clamp-2">{result.title}</p>
                  </div>
                  <div className="text-[10px] font-medium flex items-center text-[#8C6D48]" style={{ fontFamily: 'Utendo, sans-serif' }}>{result.type}</div>
                </div>
              </Link>
            </React.Fragment>
          ))}
          </ul>
        )}
      </div>
      <div className="mt-1.5 px-1 hidden md:flex">
        <GoSearch color="white" size={20} />
      </div>
    </div>
  );
};

export default SearchInput;
