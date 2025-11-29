import React, { memo, useCallback } from "react";
import type { MenuItem } from "../types/MenuItem";
import type { SidebarProps, PageId } from "../types/common.types";
import "./Sidebar.scss";

const menuItems: MenuItem[] = [
    { id: "about", label: "Hakkımda" },
    { id: "projects", label: "Projeler" },
    { id: "skills", label: "Yetenekler" },
    { id: "contact", label: "İletişim" },
];

const Sidebar: React.FC<SidebarProps> = memo(({ 
    activePage, 
    onChangePage, 
    isMobileOpen = false, 
    onClose 
}) => {
    const handleMenuClick = useCallback((pageId: string) => {
        onChangePage(pageId as PageId);
        onClose?.();
    }, [onChangePage, onClose]);

    return (
        <>
            {/* Backdrop - sadece mobilde */}
            {isMobileOpen && <div className="sidebar-backdrop" onClick={onClose} />}
            
            <aside className={`sidebar ${isMobileOpen ? "mobile-open" : ""}`}>
                {/* Mobil kapatma butonu */}
                {isMobileOpen && onClose && (
                    <button className="sidebar-close" onClick={onClose} aria-label="Kapat">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                )}

                <div className="aside-top">
                    <div className="profile-image">
                        <img
                            src="/img/cv-foto.png"
                            alt="Profil"
                        />
                    </div>
                    <div className="aside-name">
                        <h2>Ayhan Furkan ÇAĞDAŞ</h2>
                    </div>
                </div>

                <ul className="aside-menu">
                    {menuItems.map((item) => (
                        <li
                            key={item.id}
                            className={activePage === item.id ? "active" : ""}
                            onClick={() => handleMenuClick(item.id)}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
                <div className="aside-bottom">
                    <div className="aside-links">
                        <a href="https://github.com/kullaniciadiniz" target="_blank" rel="noopener noreferrer"
                           className="aside-link">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/kullaniciadiniz" target="_blank" rel="noopener noreferrer"
                           className="aside-link">
                            LinkedIn
                        </a>
                        <a href="https://www.kisiselwebsiteniz.com" target="_blank" rel="noopener noreferrer"
                           className="aside-link">
                            Web Sitem
                        </a>
                    </div>
                    <div className="aside-copy">
                        &copy; {new Date().getFullYear()} Tüm hakları saklıdır.
                    </div>
                </div>
            </aside>
        </>
    );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
