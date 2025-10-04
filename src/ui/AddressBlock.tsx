import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

export default function AddressBlock() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="flex flex-col items-center bg-[#fbfbfb] text-black p-4 rounded-md w-full max-w-sm mx-auto"
      data-aos="fade-up"
    >
      <h2 className="text-xl text-[#52503f] font-bold mb-2 text-center">{t('address_title')}</h2>

      <p className="text-center text-lg mb-4 text-[#b3ac92] whitespace-pre-line">
        {t('address_location')}
      </p>

      <a
        href="https://2gis.kz/almaty/geo/70000001024247901"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black"
      >
        <div className="flex items-center gap-2" data-aos="zoom-in">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 animate-bounce"
            fill="#b3ac92"
            viewBox="0 0 384 512"
          >
            <path d="M168 0C75.1 0 0 75.1 0 168c0 87.2 66.2 159.2 152 167.4V512h80V335.4C321.8 327.2 384 255.2 384 168 384 75.1 308.9 0 216 0H168zm48 240c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z" />
          </svg>
          <span className="text-lg font-semibold text-black">{t('address_button')}</span>
        </div>
      </a>
    </div>
  );
}
