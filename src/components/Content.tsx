import { AnimatePresence, motion } from "framer-motion";

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
                            <>
                                <h2>Hakkımda</h2>
                                <p>Bu sayfada hakkımda bilgiler yer alacak.</p>
                            </>
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