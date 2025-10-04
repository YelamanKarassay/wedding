import 'aos/dist/aos.css';
import AddressBlock from './AddressBlock';
import InvitationBlock from './InvitationBlock';
import MusicButton from './MusicButton';
import { Program } from './Proggram';
import RespectBlock from './RespectBlock';
import RsvpForm from './RsvpForm';
import WeddingCalendar from './WeddingCalendar';
import WeddingCountdown from './WeddingCountdown';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const logo = currentLang === 'kk' ? './kazlogo2.jpeg' : './salogo.png';

  return (
    <>
      <div className="h-[740px] relative">
        <img src={logo} alt="logo" className='h-[740px] w-full object-contain' />
      </div>

      <MusicButton />
      <InvitationBlock />
      <WeddingCalendar />
      <WeddingCountdown />
      <RespectBlock />
      <Program />
      <AddressBlock />
      <RsvpForm />
    </>
  );
}
