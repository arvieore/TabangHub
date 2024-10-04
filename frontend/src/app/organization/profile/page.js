import ResponsiveDrawer from "../components/drawer";
import OrgProfile from "./orgprofile";

export default function Home(){

    return(
        <ResponsiveDrawer>
            <OrgProfile />
        </ResponsiveDrawer>
    );
}