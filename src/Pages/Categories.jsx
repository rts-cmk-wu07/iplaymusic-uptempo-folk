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
                            <button className="ml-2 text-white font-bold dark:text-black">{item.CategoryName}</button>
                            <button className=" align-middle ml-60">
                                <IoIosMore color="white" size={40} />
                            </button>
                        </div>
                        <div className="text-black dark:text-white">
                            <a>{item.SubcategoryName}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>);
}

export default Categories;