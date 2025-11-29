export type PageId = "about" | "projects" | "skills" | "contact";

export interface PageNavigationProps {
    activePage: PageId;
    onChangePage: (page: PageId) => void;
}

export interface SidebarProps extends PageNavigationProps {
    isMobileOpen?: boolean;
    onClose?: () => void;
}

export interface HeaderProps {
    onToggleSidebar: () => void;
    isSidebarOpen: boolean;
}
