import Nav from "./Nav";
import Search from "./Search";
import { Outlet } from "react-router-dom"

const Layout = () => {
    return ( <div>
        
        <Search/>
        <main>
            <Outlet/>
        </main>



        <Nav/>

    </div> );
}
 
export default Layout;