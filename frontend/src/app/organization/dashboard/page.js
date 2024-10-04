import ResponsiveDrawer from "../components/drawer";
import OCards from './OrgCards';

export default function Home() {
    return (
        <ResponsiveDrawer>
            <OCards /> {/* Pass OCards as children to ResponsiveDrawer */}
        </ResponsiveDrawer>
    );
}
