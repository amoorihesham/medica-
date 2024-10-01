import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/branding/logo.png';

const LogoNav = () => {
  return (
    <Link
      href='/'
      style={{ display: 'flex', alignItems: 'flex-end', color: 'white' }}
    >
      <Image
        src={logo}
        width={85}
        height={60}
        alt='Medica Plus Logo'
        className='me-2'
      />
      MedicaPlus
    </Link>
  );
};

export default LogoNav;
