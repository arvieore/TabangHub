import NavBar from "./components/Navbar";


export default function RootLayout({ children }) {
    return (
      <>
      <NavBar />
      {children}
      </>
    );
  }