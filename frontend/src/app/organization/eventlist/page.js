import ResponsiveDrawer from "../components/drawer";
import EventList from "./eventlist";

export default function Home(){

    return(
        <>
            <ResponsiveDrawer>
                <EventList />
            </ResponsiveDrawer>
        </>
    );
}