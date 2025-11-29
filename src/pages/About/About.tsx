import React, { memo, useCallback } from "react";
import TitleSlider from "../../components/layout/TitleSlider";
import { PageId } from "../../types";
import "./About.scss";

interface AboutProps {
    onChangePage: (page: PageId) => void;
}

const About: React.FC<AboutProps> = memo(({ onChangePage }) => {
    const handleContactClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onChangePage("contact");
    }, [onChangePage]);

    return (
        <div className="about-root">
            <div className="about-wrapper">
                <div className="image-container">
                    <img 
                        src="/img/cv-foto.png" 
                        alt="Ayhan Furkan Çağdaş" 
                        loading="lazy"
                    />
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
                            Uzun yıllar yönetici konumunda iş deneyimi olan, ekip çalışmasına yatkın, 
                            ikili ilişkileri iyi, temiz ve kısa kod yazılımına önem veren, sorumluluk 
                            bilinci olan, stres yönetiminde başarılıyım.
                        </p>
                        <p>
                            Yenilikleri takip eden ve uyum sağlayan mid level full-stack developer ve 
                            project manager assistanım. Teknik doküman okuyup takip edebilecek kadar 
                            İngilizce bilgisine sahibim.
                        </p>
                    </div>
                    <div className="button-block">
                        <a 
                            href="/files/ayhan_furjan-cagdas_cv.pdf" 
                            download 
                            className="btn btn-primary-outline"
                            aria-label="Download CV"
                        >
                            Download CV
                        </a>
                        <a
                            href="#contact"
                            className="btn btn-secondary-outline"
                            onClick={handleContactClick}
                            aria-label="Go to contact page"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
});

About.displayName = "About";

export default About;
