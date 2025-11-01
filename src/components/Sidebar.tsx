import type {MenuItem} from "../types/MenuItem";

type SidebarProps = {
    activePage: string;
    onChangePage: (page: string) => void;
};

const menuItems: MenuItem[] = [
    { id: "about", label: "Hakkımda" },
    { id: "projects", label: "Projeler" },
    { id: "skills", label: "Yetenekler" },
    { id: "contact", label: "İletişim" },
];

const Sidebar = ({ activePage, onChangePage }: SidebarProps) => {
    return (
        <aside className="sidebar">
            <h2 className="logo">Elişa Çağdaş</h2>
            <ul>
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        className={activePage === item.id ? "active" : ""}
                        onClick={() => onChangePage(item.id)}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
