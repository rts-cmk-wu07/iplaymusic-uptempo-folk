import Previous from "./Previous";
import Search from "./Search";

const SearchHeader = () => {
  return (
    <div className="h-[8%] fixed flex justify-between w-screen">
      <Previous />
      <Search />
    </div>
  );
};

export default SearchHeader;
