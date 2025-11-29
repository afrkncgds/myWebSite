// src/components/layout/TitleSlider.tsx

import React, { useState, useEffect } from 'react';
import { type JobTitle, TITLES } from "../../data";


const TitleSlider: React.FC = () => {
    // 1. Durum (State): Şu anki gösterilen unvanın indeksi
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // 2. useEffect: Otomatik değişimi yöneten kısım
    useEffect(() => {
        // Belirli aralıklarla (örneğin 3 saniyede bir) indeksi artır
        const intervalId = setInterval(() => {
            // Bir sonraki indeksi hesapla (dizinin sonuna gelince başa dön)
            setCurrentIndex((prevIndex) => (prevIndex + 1) % TITLES.length);
        }, 3000); // 3000 milisaniye = 3 saniye

        // Bileşen DOM'dan kaldırıldığında (unmount) interval'i temizle
        return () => clearInterval(intervalId);
    }, []); // Boş bağımlılık dizisi, sadece bir kez çalışacağı anlamına gelir.

    // 3. Render: Şu anki unvanı göster
    const currentTitle: JobTitle = TITLES[currentIndex];

    // İstenen HTML yapısını kullanıyoruz
    return (
        <div className="title-item">
            {/* Unvanın tipinin JobTitle olduğu garanti altına alınmış olur */}
            <h2 className="title-text">{currentTitle}</h2>
            {/* İsteğe bağlı olarak ek bir açıklama eklenebilir */}
        </div>
    );
};

export default TitleSlider;