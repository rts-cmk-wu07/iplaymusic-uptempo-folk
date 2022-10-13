import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../Contexts/TokenContext";
import { useNavigate } from "react-router-dom";
import CategoriesData from "../Component/CDB";
//import { IoIosMore } from "react-icons/io";
const Categories = () => {
    const navigate = useNavigate();
    var [token] = useContext(TokenContext);
    var [content, setContent] = useState([]);

    useEffect(
        function () {
            axios.get("https://api.spotify.com/v1/browse/categories", {
                headers: {
                    Authorization: "Bearer " + token.access_token,
                },
            })
                .then((response) => setContent(response.data.categories.items));
        },
        [token, setContent]
    );
        console.log("categories", content)

    return (
        <div className="ml-5 mr-5 ">

            <h1 className="text-4xl  font-bold bg-clip-text bg-gradient-to-r text-transparent from-[#EE0979] to-[#FF6A00] pt-20 pb-10 ">Categories</h1>
            <div className=" overflow-y-scroll h-[73vh] ">
                {content.map((item) => (
                    <div className="pb-3">
                        <div className="bg-primaryColor rounded-md p-3 pl-2 flex justify-between" key={item.id}>
                            <button onClick={() => navigate(`/categories/${item.id}`)} className="ml-2 font-bold text-white">{item.name}</button>
                            
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>);
}
/*<button className=" align-middle pr-2">
                                <IoIosMore color="white" size={40} />
                            </button>*/
export default Categories;