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

  const logo = currentLang === 'kk' ? './kazlogo.png' : './salogo.png';

  return (
    <>
      <div className="h-[740px] relative">
        <img src="./main.jpg" className='h-[382px] w-full' alt="" />
        <div
          className="absolute top-[243px] left-0 w-full h-[140px]
          bg-gradient-to-b from-transparent via-[#fbfafb]/40 to-[#fbfafb] max-w-[500px] min-w-[300px]"
        />
        <div className="absolute top-[400px] left-0 w-full">
          <img src={logo} alt="logo" className='h-[336px] w-full' />
        </div>
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
