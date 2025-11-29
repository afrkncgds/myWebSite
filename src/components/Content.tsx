import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import "./Content.scss";


import Skills from "../pages/Skills.tsx";
import Projects from "../pages/Projects.tsx";
import TitleSlider from "../components/layout/TitleSlider.tsx";
import ContactPage from "../pages/Contact.tsx";


interface ContentProps {
    activePage: string;
    onChangePage: (page: string) => void;
}


const pageVariants = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -60 },
};

const Content: React.FC<ContentProps> = ({ activePage, onChangePage }) => {



    const pageContentMap: { [key: string]: React.ReactNode } = {
        "about": (
            <div className="about-root">
                <div className="about-wrapper">
                    <div className="image-container">
                        <img src="/img/cv-foto.png" alt="Profil" />
                    </div>
                    <div className="text-container">
                        <div className="title-item">

                            <TitleSlider />
                        </div>
                        <div className="mid-title-item">
                            <h3>Ayhan Furkan Çağdaş</h3>
                        </div>
                        <div className="text-block">
                            <p>
                                Uzun yıllar yönetici konumunda iş deneyimi olan, ekip çalışmasına yatkın, ikili ilişkileri iyi, temiz ve kısa kod yazılımına önem veren, sorumluluk bilinci olan, stres yönetiminde başarılıyım.
                            </p>
                            <p>
                                Yenilikleri takip eden ve uyum sağlayan mid level full-stack developer ve project manager assistanım. Teknik doküman okuyup takip edebilecek kadar İngilizce bilgisine sahibim.
                            </p>
                        </div>
                        <div className="button-block">
                            <div className="download-button">
                                <a href="/files/ayhan_furjan-cagdas_cv.pdf" download className="btn btn-primary-outline">
                                    Download CV
                                </a>
                            </div>
                            <div className="contact-button">
                                <a
                                    href="#contact"
                                    className="btn btn-secondary-outline"
                                    onClick={(e) => {
                                        e.preventDefault(); // Varsayılan bağlantı davranışını engeller
                                        onChangePage("contact"); // Üst bileşendeki durumu günceller
                                    }}
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        "projects": <Projects/>,
        "skills": <Skills />,
        "contact": (<ContactPage />
        )
    };

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
                    className="content-container"
                    style={{ willChange: "transform, opacity" }}
                >
                    <div className="content">
                        {/* activePage'e karşılık gelen içeriği dinamik olarak render et */}
                        {pageContentMap[activePage] || (
                            <motion.h2 variants={pageVariants}>Sayfa Bulunamadı</motion.h2>
                        )}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Content;