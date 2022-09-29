import { BiSearchAlt } from "react-icons/bi";
import { IoChevronBack } from "react-icons/io5";
import { useState } from "react";
const Search = () => {
  const [searchClicked, setSearchClicked] = useState(false);
  return (
    <div className="z-10 flex py-2 px-6 mt-auto dark:text-white relative">
      {!searchClicked && (
        <button
          onClick={(event) => {
            setSearchClicked(true);
          }}
        >
          <BiSearchAlt size={30} />
        </button>
      )}
      {searchClicked && (
        <div className="fixed right-0 top-0 bottom-0 w-screen h-screen bg-transparent">
          <div className="h-[83%] w-screen bg-white text-black dark:bg-secondaryColor dark:text-white">
            <section className="flex justify-between">
              <button
                className="text-black dark:text-white flex py-7 px-6 mt-auto"
                onClick={(event) => {
                  setSearchClicked(false);
                  //pressPause();
                }}
              >
                <IoChevronBack color="black dark:white" size="30" />
              </button>
              <form
                className="flex
            "
              >
                <label htmlFor=""></label>
                <input
                  className="text-black dark:bg-secondaryColor dark:text-white w-[90%] m-2 border-none font-[15px] p-5"
                  type="search"
                  name="search"
                  id="search"
                  placeholder="What do you wanna hear?"
                />
              </form>
            </section>
            <section className="mt-1 ml-1 mb-0 justify-self-center mr-7 border-2 border-[#FF1168] rounded-lg h-[85%] w-[98%]"></section>
          </div>
          <div
            onClick={(event) => {
              setSearchClicked(false);
              //pressPause();
            }}
            className="bg-transparent h-[17%] w-full"
          ></div>
        </div>
      )}
    </div>
  );
};

export default Search;
