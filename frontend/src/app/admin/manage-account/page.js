"use client";
import ResponsiveDrawer from "../components/sidebar";
import ManageAccount from './manageaccount';
export default function Home() {
    return (
        <>
        <ResponsiveDrawer />
            <ManageAccount />
        </>
    );
}