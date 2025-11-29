import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import "./styles/global.scss";

function App() {
    const [activePage, setActivePage] = useState("about");

    return (
        <div className="app-container">
            <Sidebar activePage={activePage} onChangePage={setActivePage} />
            <Content activePage={activePage} onChangePage={setActivePage} />
        </div>
    );
}

export default App;
