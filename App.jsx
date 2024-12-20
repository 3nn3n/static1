import Main from "./components/Main"
import Navbar from "./components/Navbar"

import { HashRouter as Router } from "react-router-dom";

export default function App() {
    return (
        <Router>
        <>
            <Navbar />
            <Main />
        </>
        </Router>
    )
}
