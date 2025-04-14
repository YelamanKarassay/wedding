import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function WeddingCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date('2025-08-09T17:30:00').getTime();

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
        src="https://static.tildacdn.pro/tild6638-3861-4431-a232-663731656538/f7d3130f-d801-4806-9.jpg"
        alt="Фоновое изображение"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      <div className="absolute inset-0 bg-[#00000078] bg-opacity-30" />

      <div className="relative z-10 text-center text-white">
        <h2 className="text-2xl md:text-3xl mb-4 font-semibold">
          До торжества осталось:
        </h2>
        <div className="flex gap-6 md:gap-12 justify-center">
          <div>
            <span className="text-4xl md:text-5xl font-bold">{timeLeft.days}</span>
            <div className="text-sm md:text-base font-light mt-1">ДНЕЙ</div>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-bold">{timeLeft.hours}</span>
            <div className="text-sm md:text-base font-light mt-1">ЧАСОВ</div>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-bold">{timeLeft.minutes}</span>
            <div className="text-sm md:text-base font-light mt-1">МИНУТ</div>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-bold">{timeLeft.seconds}</span>
            <div className="text-sm md:text-base font-light mt-1">СЕКУНД</div>
          </div>
        </div>
      </div>
    </div>
  );
}
