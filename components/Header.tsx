import Image from 'next/image';
import Link from 'next/link';

export default function Header({ photo }: { photo?: string | undefined }) {
  return (
    <header 
      className='flex justify-between items-center w-full mt-0 border-b-2 pb-4 sm:px-4 px-2' 
      style={{ backgroundColor: '#a89732', width: '100vw' }}
    >
      <Link href='/' className='flex space-x-2'>
        <h1 className='mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-200 sm:text-5xl'>
          PicPerfecter 📷
        </h1>
      </Link>
      {photo ? (
        <Image
          alt='Profile picture'
          src={photo}
          className='w-10 rounded-full translate-y-[8px]'  // 5px downward shift
          width={32}
          height={28}
        />
      ) : (
        <div className='flex space-x-6 items-center translate-y-[8px]'>  
          <Link
            href='/'
            className='border-r border-gray-700 pr-4 space-x-2 hover:text-blue-400 transition hidden sm:flex'
          >
            <p className='font-medium text-base text-white'>Home</p>
          </Link>
          <Link
            href='/restore'
            className='border-gray-700 pr-3 space-x-2 hover:text-blue-400 transition hidden sm:flex'
          >
            <p className='font-medium text-base text-white'>Restore</p>
          </Link>
        </div>
      )}
    </header>
  );
}
