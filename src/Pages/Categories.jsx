import CategoriesData from "../Component/CDB";
import { IoIosMore } from "react-icons/io";
const Categories = () => {
    return (
        <div>
            <h1 className="text-4xl">Categories</h1>
            <div className="pt-5">
                {CategoriesData.map((item) => (
                    <div className="pb-3">
                        <div className="bg-pink-600 border-black border">
                            <button className="ml-2 text-white font-bold">{item.CategoryName}</button>
                            <button className=" align-middle ml-60">
                                <IoIosMore color="white" size={40} />
                            </button>
                        </div>
                        <div>
                            {item.SubcategoryName}
                        </div>
                    </div>
                ))}
            </div>
        </div>);
}

export default Categories;