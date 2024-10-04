import ResponsiveDrawer from "../components/drawer";
import AddEvent from './addeventContent';

export default function Home(){

    return(
        <>
            <ResponsiveDrawer>
                <AddEvent />
            </ResponsiveDrawer>
        </>
    );
}