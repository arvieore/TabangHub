import ResponsiveDrawer from "../components/drawer";
import EventReport from "./report";

export default function Home(){

    return(
        <>
            <ResponsiveDrawer>
                <EventReport />
            </ResponsiveDrawer>
        </>
    );
}