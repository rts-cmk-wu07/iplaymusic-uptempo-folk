import Previous from "./Previous";
import Search from "./Search";

const SearchHeader = ({ headText }) => {
  return (
    <div className="h-[8%] fixed flex justify-between w-screen z-10">
      <Previous />
      <p>{headText}</p>
      <Search />
    </div>
  );
};

export default SearchHeader;
