import React, { memo } from "react";
import type { HeaderProps } from "../types/common.types";
import "./Header.scss";

const Header: React.FC<HeaderProps> = memo(({ onToggleSidebar, isSidebarOpen }) => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-logo">
                    <img src="/img/cv-foto.png" alt="Logo" className="header-logo-img" />
                    <h2 className="header-title">Ayhan Furkan ÇAĞDAŞ</h2>
                </div>
                <button
                    className={`hamburger ${isSidebarOpen ? "active" : ""}`}
                    onClick={onToggleSidebar}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
});

Header.displayName = "Header";

export default Header;
