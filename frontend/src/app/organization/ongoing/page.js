import ResponsiveDrawer from "../dashboard/components/drawer";
import OngoingEventContent from "./components/ongingeventContent";

export default function Event(){

    return(
        <>
        <ResponsiveDrawer>
            <OngoingEventContent />
        </ResponsiveDrawer>
        </>
    );
}