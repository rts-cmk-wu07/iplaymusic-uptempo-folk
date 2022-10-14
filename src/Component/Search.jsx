import { BiSearchAlt } from "react-icons/bi";
import { IoChevronBack } from "react-icons/io5";
import { useState } from "react";
import SearchResultItem from "./SearchResultItem";
const Search = () => {
  const [searchClicked, setSearchClicked] = useState(false);

  const dummySearchNixon = [
    {
      name: "Richard Nixon",
      type: "artist",
      feat: "",
      imgSrc: "http://placekitten.com/200/200",
    },
    {
      name: "Song is for singing",
      type: "song",
      feat: "Richard Nixon",
      imgSrc: "http://placekitten.com/50/50",
    },
    {
      name: "Is that a pipe?",
      type: "song",
      feat: "Richard Nixon",
      imgSrc: "http://placekitten.com/199/199",
    },
    {
      name: "Buy me a country",
      type: "song",
      feat: "Richard Nixon",
      imgSrc: "http://placekitten.com/198/198",
    },
    {
      name: "Everyone is having a hell of a time",
      type: "song",
      feat: "Richard Nixon",
      imgSrc: "http://placekitten.com/180/180",
    },
    {
      name: "Not like other boys",
      type: "Album",
      feat: "Richard Nixon",
      imgSrc: "http://placekitten.com/400/400",
    },
    {
      name: "Not a chance in hell",
      type: "Album",
      feat: "Richard Nixon",
      imgSrc: "http://placekitten.com/401/401",
    },
    {
      name: "Nixon sunday mornings",
      type: "playlist",
      feat: "Richard Nixon",
      imgSrc: "http://placekitten.com/500/500",
    },
    {
      name: "Nixon does impressions",
      type: "playlist",
      feat: "Richard Nixon",
      imgSrc: "http://placekitten.com/502/502",
    },
    {
      name: "Long winter's blues",
      type: "playlist",
      feat: "Richard Nixon, Monica Lewinsky, Linda Lovelace",
      imgSrc: "http://placekitten.com/600/600",
    },
  ];

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
            <section className="mt-1 ml-1 mb-0 justify-self-center mr-7 border-2 border-[#FF1168] rounded-lg h-[85%] w-[98%]">
              <div className="px-2 overflow-y-scroll h-[36.5rem]">
                <table>
                  <tbody>
                    {dummySearchNixon.map((item) => (
                      <SearchResultItem item={item} />
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
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
