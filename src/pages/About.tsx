import React from 'react';
import TitleSlider from "../components/layout/TitleSlider"; // .tsx uzantısı kaldırıldı
import type {PageId} from '../types'; // PageId türünü import ettik
// PageId türünü import ettik
import "../pages/About/About.scss";


// Props arayüzünü tanımlıyoruz
interface AboutProps {
    onChangePage: (page: PageId) => void;
}

const About: React.FC<AboutProps> = ({ onChangePage }) => {
    return (
        <div className="about-root">
            <div className="about-wrapper">

                {/* Sol Taraf: Görsel */}
                <div className="image-container">
                    {/* Görsel yolu public klasörüne göre olmalı */}
                    <img src="/img/cv-foto.png" alt="Ayhan Furkan Çağdaş" />
                </div>

                {/* Sağ Taraf: Metin ve Butonlar */}
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
                            ikili ilişkileri iyi, temiz ve kısa kod yazılımına önem veren,
                            sorumluluk bilinci olan, stres yönetiminde başarılıyım.
                        </p>
                        <p>
                            Yenilikleri takip eden ve uyum sağlayan mid level full-stack developer
                            ve project manager asistanıyım. Teknik doküman okuyup takip edebilecek
                            kadar İngilizce bilgisine sahibim.
                        </p>
                    </div>

                    <div className="button-block">
                        <div className="download-button">
                            <a href="/files/ayhan_furkan-cagdas_cv.pdf" download className="btn btn-primary-outline">
                                Download CV
                            </a>
                        </div>
                        <div className="contact-button">
                            <button
                                className="btn btn-secondary-outline"
                                onClick={() => onChangePage("contact")}
                            >
                                Contact
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;