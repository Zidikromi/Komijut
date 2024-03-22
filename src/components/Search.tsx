

const SearchInput = () => {
  return (
    <div className="container mx-auto mt-8 px-4 flex justify-end">
      <input
        type="text"
        placeholder="Search"
        className="border border-gray-300 rounded-2xl py-2 px-4 focus:outline-none focus:border-red-800 h-10"
      />
    </div>
  );
};

export default SearchInput;
