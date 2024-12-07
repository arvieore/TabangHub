"use client";

import ResponsiveDrawer from "../components/sidebar";
import EventList from './events';

export default function Home() {
    return (
        <>
        <ResponsiveDrawer />
            <EventList />
        </>
    );
}
