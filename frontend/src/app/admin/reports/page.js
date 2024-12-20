"use client";
import ResponsiveDrawer from "../components/sidebar";
import ReportsDetails from './reports';
export default function Home() {
    return (
        <>
        <ResponsiveDrawer />
            <ReportsDetails />
        </>
    );
}