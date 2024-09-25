import ResponsiveDrawer from "../dashboard/components/drawer";
import EventHistory from './components/eventHistory';

export default function Home(){

    return(
        <>
        <ResponsiveDrawer>
            <EventHistory />
        </ResponsiveDrawer>
        </>
    );
}