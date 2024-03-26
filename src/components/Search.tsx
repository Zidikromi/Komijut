import React, { useEffect, useState } from "react";
import { GetSearch } from "../lib/api";
import { SearchGet } from "../lib/types";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";

const SearchInput = () => {
  const [searchInput, setSearchInput] = useState(""); // State untuk menyimpan nilai input pencarian
  const [searchResults, setSearchResults] = useState<SearchGet[]>([]); // State untuk menyimpan hasil pencarian

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
      SearchData(searchInput); // Panggil fungsi pencarian jika input memiliki lebih dari 3 karakter
    } else {
      setSearchResults([]); // Kosongkan hasil pencarian jika input kurang dari atau sama dengan 3 karakter
    }
  }, [searchInput]); // Memicu efek ini setiap kali nilai searchInput berubah

  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchInput(event.target.value); // Mengubah nilai input pencarian saat input berubah
  };

  return (
    <div className="container ml-auto px-6 mt-2 flex justify-end">
      <div>
        <input
          type="text"
          placeholder="SEARCH"
          value={searchInput}
          onChange={handleInputChange}
          className="border bg-[#F5EEE7] border-white rounded-2xl py-2 px-4 flex text-[#D6A76F] focus:outline-none focus:border-white h-[31.41px] w-[179.69px] text-sm placeholder-[#D6A76F] focus:placeholder:hidden placeholder:text-right  placeholder:text-xs placeholder:font-bold"
          style={{ fontFamily: 'NamaFont, sans-serif' }}
        />
        {searchResults.length > 0 && ( // Tambahkan kondisi disini
          <ul className="menu menu-sm bg-[#FFEBD8] w-[179.69px] rounded-box border-white mt-0.5 absolute z-10 border gap-2">
            {searchResults.map((result, index) => (
              <React.Fragment key={index}>
                <Link to={result.endpoint.startsWith('/') ? result.endpoint.substring(1) : result.endpoint} className="flex gap-2 mt-1 bg-white bg-opacity-20 border-white border rounded-box max-h-[107px]">
                  <img src={result.image} alt="" className="w-[68.3px] h-[107px] object-cover rounded-lg" />
                  <div className="flex flex-col justify-center">
                    <div className="text-[13px] font-semibold flex items-center text-[#8C6D48]" style={{ fontFamily: 'Utendo, sans-serif' }}>{result.title}</div>
                    <div className="text-[10px] font-medium flex items-center text-[#8C6D48]" style={{ fontFamily: 'Utendo, sans-serif' }}>{result.type}</div>
                  </div>
                </Link>
              </React.Fragment>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-1 px-1 ">
        <GoSearch color="white" size={20} />
      </div>
    </div>
  );
};

export default SearchInput;
