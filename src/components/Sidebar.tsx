import type {MenuItem} from "../types/MenuItem";
import "./Sidebar.scss";
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
                        onClick={() => onChangePage(item.id)}
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
    );
};

export default Sidebar;
