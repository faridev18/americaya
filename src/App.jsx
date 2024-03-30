import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import perso from './assets/perso.png';
import hello from './assets/hello.png';
import americaya from './assets/americaya.mp3';
import escalier from './assets/escalier.png';
import ImageWithSpeechBubble from './ImageWithSpeechBubble';

function App() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [animate, setAnimate] = useState(false);

  const startAnimationAndAudio = () => {
    const audio = new Audio(americaya);
    audio.play().catch(error => console.error("Error playing the audio", error));
    setShowOverlay(false);
    setAnimate(true);
  };

  return (
    <>
      {showOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex justify-center items-center">
          <button onClick={startAnimationAndAudio} className="px-6 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300">
            Démarrer l'animation
          </button>
        </div>
      )}

      <div className='h-screen flex'>
       
        <button onClick={() => window.location.reload()} className="mt-4 px-4 py-2 z-10 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition duration-300 ease-in-out transform -translate-x-1/2 left-1/2 fixed">
          Relancer
        </button>

        <div className='flex-1 relative'>
          <div className="image-with-speech-container">
            {animate && <motion.img src={perso} alt="" className='md:h-[400px] h-[300px]'
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ delay: 2, type: 'spring' }}
            />}
            {animate && <motion.div
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ delay: 2, type: 'spring' }}
              className=" absolute top-10 -right-24 border px-3 py-2 rounded-lg border-black">
              America ya !!!
            </motion.div>}
          </div>
          <img src={escalier} alt="" className='absolute bottom-0 xl:w-[500px] lg:w-[250px] w-0' />
        </div>
        <div className='flex-1  flex justify-end items-end'>
        {animate && <motion.div className='grid w-full md:grid-cols-4 grid-cols-3 gap-x-3 gap-y-6'
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            transition={{ delay: 3, type: 'spring' }}
          >
            <ImageWithSpeechBubble src={hello} alt="" text="hello :D" />
            <ImageWithSpeechBubble src={hello} alt="" text="hello :D" />
            <ImageWithSpeechBubble src={hello} alt="" text="hello :D" />
            <ImageWithSpeechBubble src={hello} alt="" text="hello :D" />
            <ImageWithSpeechBubble src={hello} alt="" text="hello :D" />
            <ImageWithSpeechBubble src={hello} alt="" text="hello :D" />
            <ImageWithSpeechBubble src={hello} alt="" text="hello :D" />
            <ImageWithSpeechBubble src={hello} alt="" text="hello :D" />
            <ImageWithSpeechBubble src={hello} alt="" text="hello :D" />
            <ImageWithSpeechBubble src={hello} alt="" text="hello :D" />
            <ImageWithSpeechBubble src={hello} alt="" text="hello :D" />
            <ImageWithSpeechBubble src={hello} alt="" text="hello :D" />

          </motion.div>}
        </div>
      </div>
      <div className=' fixed bottom-0 left-0 text-xs'>
        Made with 🧠+🧡 by <a className=' text-blue-700' href="farihane.com">Farihane</a>
      </div>
    </>
  );
}

export default App;
