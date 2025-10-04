import { useState, useEffect, FormEvent } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import { useTranslation } from 'react-i18next';

type FeedbackType = { type: 'success' | 'error'; text: string } | null;

export default function RsvpForm() {
  const [fullname, setFullname] = useState('');
  const [attendance, setAttendance] = useState('');
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const [feedback, setFeedback] = useState<FeedbackType>();

  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => setFeedback(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!fullname.trim()) {
      setFeedback({ type: 'error', text: t('rsvp_name_error') });
      return;
    }
    if (!attendance) {
      setFeedback({ type: 'error', text: t('rsvp_attendance_error') });
      return;
    }
    setLoading(true);
    try {
      await addDoc(collection(db, 'rsvps'), {
        fullname,
        attendance,
        submittedAt: new Date(),
      });
      setFeedback({ type: 'success', text: t('rsvp_success') });
      setFullname('');
      setAttendance('');
    } catch (error) {
      console.error('Ошибка при отправке ответа:', error);
      setFeedback({ type: 'error', text: t('rsvp_error') });
    }
    setLoading(false);
  };

  const renderRadioOption = (value: string, labelText: string) => {
    const isChecked = attendance === value;
    return (
      <label className="flex items-center text-[#52503f] cursor-pointer">
        <input
          type="radio"
          name="attendance"
          value={value}
          checked={isChecked}
          onChange={(e) => setAttendance(e.target.value)}
          className="hidden"
        />
        <span
          className={`w-5 h-5 mr-2 inline-block rounded-full border flex items-center justify-center 
            ${isChecked ? 'border-[#b3ac92] bg-[#b3ac92]' : 'border-gray-400 bg-white'}`}
        >
          {isChecked && <span className="w-3 h-3 rounded-full bg-white" />}
        </span>
        {labelText}
      </label>
    );
  };
  renderRadioOption;
  onSubmit

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-md bg-[#fbfbfb] p-6 rounded-md overflow-hidden">
        <div className="text-center mb-6 font-serif">
          <h1 className="text-2xl text-[#b3ac92] mb-4 italic">
            {t('rsvp_title')}
          </h1>
          <h1 className="text-2xl text-[#b3ac92] mb-4 italic">
            {t('rsvp_title2')}
          </h1>


          <div className="relative w-[250px] h-36 mx-auto overflow-hidden">
            <img
              src="https://optim.tildacdn.pro/tild6663-3137-4361-b135-663737366637/-/resize/724x/-/format/webp/Vector.png"
              alt="Ornament"
              className="absolute top-3 left-1 animate-spin-slow "
              style={{
                width: '250px',
                height: '250px',
                transformOrigin: 'center center',
              }}
            />
          </div>

        </div>

        {feedback && (
          <div
            className={`
              absolute bottom-4 right-4 p-4 border-l-4 rounded shadow transition-transform duration-300
              ${
                feedback.type === 'success'
                  ? 'border-[#52503f] bg-[#e6e2d2] text-[#52503f]'
                  : 'border-red-500 bg-red-100 text-red-700'
              }
            `}
          >
            {feedback.text}
          </div>
        )}

        {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-white opacity-90 z-50">
            <svg
              className="animate-spin h-10 w-10 text-[#b3ac92]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
          </div>
        )}

      </div>
    </div>
  );
}
