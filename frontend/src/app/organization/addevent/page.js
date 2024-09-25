import ResponsiveDrawer from "../dashboard/components/drawer";
import AddEvent from "./components/addeventContent";

export default function Home(){

    return(
        <>
            <ResponsiveDrawer>
                <AddEvent />
            </ResponsiveDrawer>
        </>
    );
}