import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

export default function WeddingCountdown() {
  const { t } = useTranslation();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date('2025-10-24T13:00:00+05:00').getTime();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div
      className="relative w-full h-[450px] flex items-center justify-center"
      data-aos="fade-in"
    >
      <img
        src="kazakh_couple.jpeg"
        alt="Фоновое изображение"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      <div className="absolute inset-0 bg-[#00000078] bg-opacity-30" />

      <div className="relative z-10 text-center text-white">
        <h2 className="text-2xl md:text-3xl mb-4 font-semibold">
          {t('countdown_title')}
        </h2>
        <div className="flex gap-6 md:gap-12 justify-center">
          <div>
            <span className="text-4xl md:text-5xl font-bold">{timeLeft.days}</span>
            <div className="text-sm md:text-base font-light mt-1">{t('countdown_days')}</div>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-bold">{timeLeft.hours}</span>
            <div className="text-sm md:text-base font-light mt-1">{t('countdown_hours')}</div>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-bold">{timeLeft.minutes}</span>
            <div className="text-sm md:text-base font-light mt-1">{t('countdown_minutes')}</div>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-bold">{timeLeft.seconds}</span>
            <div className="text-sm md:text-base font-light mt-1">{t('countdown_seconds')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
