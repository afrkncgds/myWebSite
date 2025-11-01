import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import "./index.css";

function App() {
    const [activePage, setActivePage] = useState("about");

    return (
        <div className="app-container">
            <Sidebar activePage={activePage} onChangePage={setActivePage} />
            <Content activePage={activePage} />
        </div>
    );
}

export default App;
