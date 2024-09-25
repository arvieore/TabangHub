import ResponsiveDrawer from "../dashboard/components/drawer";
import OrgProfile from "./components/orgprofile";

export default function Home(){

    return(
        <ResponsiveDrawer>
            <OrgProfile />
        </ResponsiveDrawer>
    );
}