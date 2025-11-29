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

const Content: React.FC<ContentProps> = memo(({ activePage }) => {




    const pageContentMap: Record<PageId, React.ReactNode> = useMemo(() => ({
        about: <About />,
        projects: <Projects />,
        skills: <Skills />,
        contact: <Contact />,
    }), []);

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
                        {/* activePage'e karşılık gelen içeriği dinamik olarak render et */}
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