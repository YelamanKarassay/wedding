import { useTranslation } from 'react-i18next';

export default function RespectBlock() {
  const { i18n } = useTranslation();
  const isKazakh = i18n.language === 'kk';

  return (
    <div className="text-center my-8 font-serif">
      <p className="text-[#b3ac92] text-xl mb-2 italic">
        {isKazakh ? 'Құрметпен,' : 'С уважением,'}
      </p>
      <h2 className="text-2xl text-[#b3ac92] italic font-bold">
        Валихан – Алмагуль {/*<br /> Ерлан – Тахмина*/}
      </h2>
      <p className="text-[#b3ac92] text-sm mt-1 italic">
        {isKazakh ? 'Той иелері' : ''}
      </p>
      <div
        className="mx-auto mt-4"
        style={{
          width: '100px',
          height: '2px',
          background: 'linear-gradient(to right, #b3ac92, rgba(0,0,0,0))',
        }}
      />
    </div>
  );
}
