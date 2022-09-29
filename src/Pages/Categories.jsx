import CategoriesData from "../Component/CDB";
import { IoIosMore } from "react-icons/io";
const Categories = () => {
    return (
        <div>
            
            <h1 className="text-4xl font-bold bg-clip-text bg-gradient-to-r text-transparent from-[#EE0979] to-[#FF6A00] ">Categories</h1>
            <div className="pt-5">
                {CategoriesData.map((item) => (
                    <div className="pb-3">
                        <div className="bg-primaryColor  border-black border ">
                            <a><button className="ml-2 text-white font-bold dark:text-black">{item.CategoryName}</button></a>
                            <button className="align-middle ">
                                <IoIosMore color="white" size={40} />
                            </button>
                        </div>
                        <div className="flex text-black dark:text-white">
                            <a className="flex ml-10">{item.SubcategoryName}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>);
}

export default Categories;