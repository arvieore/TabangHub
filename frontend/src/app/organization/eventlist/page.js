import ResponsiveDrawer from "../dashboard/components/drawer";
import EventList from "./components/eventlist";

export default function Home(){

    return(
        <>
            <ResponsiveDrawer>
                <EventList />
            </ResponsiveDrawer>
        </>
    );
}