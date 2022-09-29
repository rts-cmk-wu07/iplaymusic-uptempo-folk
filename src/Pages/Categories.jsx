import CategoriesData from "../Component/CDB";
import { IoIosMore } from "react-icons/io";
const Categories = () => {
    return (
        <div className="ml-5 mr-5">
            
            <h1 className="text-4xl font-bold bg-clip-text bg-gradient-to-r text-transparent from-[#EE0979] to-[#FF6A00] pt-20  ">Categories</h1>
            <div className="pt-5">
                {CategoriesData.map((item) => (
                    <div className="pb-3">
                        <div className="bg-primaryColor rounded-md p-1 pl-2 flex justify-between">
                            <button className="ml-2 font-bold text-white">{item.CategoryName}</button>
                            <button className=" align-middle pr-2">
                                <IoIosMore color="white" size={40} />
                            </button>
                        </div>
                        <div className="text-white dark:text-white">
                            <a>{item.SubcategoryName}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>);
}

export default Categories;