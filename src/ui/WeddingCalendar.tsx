import { useTranslation } from 'react-i18next';

export default function WeddingCalendar() {
  const { t } = useTranslation();

  const daysOfWeek = t('calendar_days', { returnObjects: true }) as string[];
  const matrix = [
    [null, null, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 31, null, null],
  ];
  const highlightDay = 24;

  return (
    <div className="flex flex-col items-center bg-[#fbfbfb] text-black p-4 rounded-md w-full max-w-sm mx-auto shadow-lg">
      <h2 className="text-xl font-bold mb-2 text-center text-[#52503f]">
        {t('calendar_title')}
      </h2>
      <p className="text-center text-lg mb-4 text-[#b3ac92]">
        {t('calendar_date')}
      </p>
      <h3 className="text-lg uppercase tracking-widest font-semibold mb-4">
        {t('calendar_month')}
      </h3>
      <div className="grid grid-cols-7 gap-1 text-center text-xs w-full">
        {daysOfWeek.map(day => (
          <div key={day} className="font-medium opacity-75">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs w-full">
        {matrix.map((week, wIndex) =>
          week.map((day, dIndex) => {
            if (!day) {
              return <div key={`${wIndex}-${dIndex}`} className="py-1 h-11">&nbsp;</div>;
            }
            const isHighlighted = day === highlightDay;
            return (
              <div key={`${wIndex}-${dIndex}`} className="py-1 h-11">
                {isHighlighted ? (
                  <div className="inline-block relative w-8 h-8 flex items-center justify-center">
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold z-10 text-[#fbfbfb]">
                      {day}
                    </span>
                    <svg
                      className="w-8 h-8 animate-beat"
                      viewBox="0 0 24 24"
                      fill="#b3ac92"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                ) : (
                  day
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
