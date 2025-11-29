import { useState, useCallback, useMemo } from "react";
import { Header, Sidebar, Content } from "./components";
import { useSidebar } from "./hooks";
import { DEFAULT_PAGE } from "./constants";
import type { PageId } from "./types";
import "./styles/global.scss";

const App: React.FC = () => {
    const [activePage, setActivePage] = useState<PageId>(DEFAULT_PAGE);
    const { isOpen: isSidebarOpen, toggle: toggleSidebar, close: closeSidebar } = useSidebar();

    const handlePageChange = useCallback((page: PageId) => {
        setActivePage(page);
        closeSidebar();
    }, [closeSidebar]);

    const headerProps = useMemo(() => ({
        onToggleSidebar: toggleSidebar,
        isSidebarOpen: isSidebarOpen,
    }), [toggleSidebar, isSidebarOpen]);

    const sidebarProps = useMemo(() => ({
        activePage,
        onChangePage: handlePageChange,
        isMobileOpen: isSidebarOpen,
        onClose: closeSidebar,
    }), [activePage, handlePageChange, isSidebarOpen, closeSidebar]);

    const contentProps = useMemo(() => ({
        activePage,
        onChangePage: handlePageChange,
    }), [activePage, handlePageChange]);

    return (
        <div className="app-container">
            <Header {...headerProps} />
            <Sidebar {...sidebarProps} />
            <Content {...contentProps} />
        </div>
    );
};

export default App;

