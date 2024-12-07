"use client";

import ResponsiveDrawer from "../components/sidebar";
import SummaryCards from './summary';

export default function Home() {
    return (
        <>
        <ResponsiveDrawer />
            <SummaryCards />
        </>
    );
}
