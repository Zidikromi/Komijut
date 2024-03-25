import React, { useEffect, useState } from "react";
import { GetSearch } from "../lib/api";
import { SearchGet } from "../lib/types";
import { Link } from "react-router-dom";

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
          placeholder="Search"
          value={searchInput} // Nilai input terikat ke state searchInput
          onChange={handleInputChange} // Panggil fungsi saat input berubah
          className="border border-gray-300 rounded-2xl py-2 px-4 focus:outline-none focus:border-red-800 h-10 w-56"
        />
        {searchResults.length > 0 && ( // Tambahkan kondisi disini
          <ul className="menu menu-sm bg-base-200 w-56 rounded-box absolute z-10">
            {searchResults.map((result, index) => (
              <React.Fragment key={index}>
                <Link to={result.endpoint.startsWith('/') ? result.endpoint.substring(1) : result.endpoint} className="flex gap-2 mt-1">
                  <img src={result.image} alt="" className="w-16 h-16 object-cover" />
                  <div className="text-xs flex items-center">{result.title}</div>
                </Link>
                {index !== searchResults.length - 1 && <hr className="my-1" />}
              </React.Fragment>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
