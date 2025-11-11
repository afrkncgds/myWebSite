import { AnimatePresence, motion } from "framer-motion";
import "./Content.scss";
interface ContentProps {
    activePage: string;
}

const pageVariants = {
    initial: { opacity: 0, y: 60 },   // sayfa aşağıdan geliyor
    animate: { opacity: 1, y: 0 },    // yerine oturuyor
    exit: { opacity: 0, y: -60 },     // yukarı doğru kayboluyor
};

const Content: React.FC<ContentProps> = ({ activePage }) => {
    return (
        <div className="content-wrapper" style={{ flex: 1, overflow: "hidden" }}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={activePage}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="content-container" // sağ alanın dış kapsayıcısı
                    style={{ willChange: "transform, opacity" }}
                >
                    <div className="content">
                        {activePage === "about" && (
                            <div className="about-root">
                                <div className="about-wrapper">
                                    <div className="image-container">
                                        <img
                                            src="/img/cv-foto.png"
                                            alt="Profil"

                                        />
                                    </div>
                                    <div className="text-container">
                                        <div className="title-item">
                                            <h2>Front-end Develooper</h2>
                                        </div>
                                        <div className="mid-title-item">
                                            <h3>Ayhan Furkan Çağdaş</h3>
                                        </div>
                                        <div className="text-block">
                                            <p>
                                                Uzun yıllar yönetici konumunda iş deneyimi olan, ekip çalışmasına yatkın, ikili ilişkileri iyi, temiz ve kısa kod yazılımına önem veren, sorumluluk bilinci olan, stres yönetiminde başarılı, yenilikleri takip eden ve uyum sağlayan mid level full-stack developer ve project manager assistanım. Teknik doküman okuyup takip edebilecek kadar İngilizce bilgisine sahibim.
                                            </p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        )}

                        {activePage === "projects" && (
                            <>
                                <h2>Projeler</h2>
                                <p>Burada projelerim listelenecek.</p>
                            </>
                        )}

                        {activePage === "contact" && (
                            <>
                                <h2>İletişim</h2>
                                <p>İletişim bilgilerim burada.</p>
                            </>
                        )}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Content;