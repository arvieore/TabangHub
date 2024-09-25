import ResponsiveDrawer from "./components/drawer";
import OCards from './components/OrgCards';

export default function Home() {
    return (
        <ResponsiveDrawer>
            <OCards /> {/* Pass OCards as children to ResponsiveDrawer */}
        </ResponsiveDrawer>
    );
}
