import NavBar from "../dashboard/components/Navbar";
import Profile from "./components/profile";
import Aboutme from "./components/aboutme";

export default function Page() {
    
    return(
        <>
            <NavBar />
            <Profile />
            <Aboutme />
        </>
    );
}