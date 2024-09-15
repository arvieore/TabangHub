import NavBar from "./dashboard/components/Navbar";


export default function RootLayout({ children }) {
    return (
      <>
      <NavBar />
      {children}
      </>
    );
  }