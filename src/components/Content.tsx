import { AnimatePresence, motion } from "framer-motion";
import React, { useMemo, memo } from "react";
import { About, Projects, Skills, Contact } from "../pages";
import type { PageId } from "../types";
import { PAGE_VARIANTS, PAGE_TRANSITION } from "../constants";
import "./Content.scss";

interface ContentProps {
    activePage: PageId;
    onChangePage: (page: PageId) => void;
}

// 1. DÜZELTME: onChangePage'i burada süslü parantez içine ekleyin
const Content: React.FC<ContentProps> = memo(({ activePage, onChangePage }) => {

    const pageContentMap: Record<PageId, React.ReactNode> = useMemo(() => ({
        // 2. DÜZELTME: Artık dummy fonksiyon yerine gerçek prop'u geçiyoruz
        about: <About onChangePage={onChangePage} />,
        projects: <Projects />,
        skills: <Skills />,
        contact: <Contact />,

        // 3. DÜZELTME: useMemo'nun bu fonksiyonu tanıması için dependency array'e ekleyin
    }), [onChangePage]);

    return (
        <div className="content-wrapper" style={{ flex: 1, overflow: "hidden" }}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={activePage}
                    variants={PAGE_VARIANTS}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={PAGE_TRANSITION}
                    className="content-container"
                    style={{ willChange: "transform, opacity" }}
                >
                    <div className="content">
                        {pageContentMap[activePage] || (
                            <motion.h2 variants={PAGE_VARIANTS}>Sayfa Bulunamadı</motion.h2>
                        )}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
});

Content.displayName = "Content";

export default Content;