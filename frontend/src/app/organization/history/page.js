import ResponsiveDrawer from "../components/drawer";
import EventHistory from './eventHistory';

export default function Home(){

    return(
        <>
        <ResponsiveDrawer>
            <EventHistory />
        </ResponsiveDrawer>
        </>
    );
}