import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';


const Home: NextPage = () => {
  return (
    <div
      className='flex flex-col items-center justify-center min-h-screen w-full'
      style={{ backgroundColor: '#1E1E1E' }} // Set background color for the entire page
    >
      <Head>
        <title>Face Photo Restorer</title>
        <style>{`
          body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            background-color: #1E1E1E; // Set the same background color for body and html
          }
        `}</style>
      </Head>
      <Header />
      <main className='flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-20'>
        <a
          href='https://twitter.com/nutlope/status/1704894145003741611'
          target='_blank'
          rel='noreferrer'
          
        >
          
        </a>
        <h1 className='mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-200 sm:text-7xl'>
          Upload blurry face photos to enhance them using AI{' '}
        </h1>

        <p className='mx-auto mt-12 max-w-xl text-lg text-slate-400 leading-7'>
        Got old, blurry face photos? Let PicPerfecter's AI bring them back to life, preserving those memories for the future. It's completely free – restore your photos today!
        </p>
        <div className='flex justify-center space-x-4'>
          <Link
            className='bg-[#A89732] rounded-xl text-grey font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-[#FFD700] transition-colors duration-300'
            href='/restore'
          >
            Restore your photos
          </Link>
        </div>
        <div className='flex justify-between items-center w-full flex-col sm:mt-10 mt-6'>
          <div className='flex flex-col space-y-10 mt-4 mb-16'>
            <div className='flex sm:space-x-2 sm:flex-row flex-col'>
              <div>
                <h2 className='mb-1 font-medium text-lg text-slate-200'>Original Photo</h2>
                <Image
                  alt='Original photo me and my bro'
                  src='/darragh.png'
                  className='w-96 h-96 rounded-2xl'
                  width={400}
                  height={400}
                />
              </div>
              <div className='sm:mt-0 mt-8'>
                <h2 className='mb-1 font-medium text-lg text-slate-200'>Restored Photo</h2>
                <Image
                  alt='Restored photo of my and my bro'
                  width={400}
                  height={400}
                  src='/darragh-new.png'
                  className='w-96 h-96 rounded-2xl sm:mt-0 mt-2'
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
