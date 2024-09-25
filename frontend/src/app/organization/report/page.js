import ResponsiveDrawer from "../dashboard/components/drawer";
import EventReport from "./components/report";

export default function Home(){

    return(
        <>
            <ResponsiveDrawer>
                <EventReport />
            </ResponsiveDrawer>
        </>
    );
}