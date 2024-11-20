/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { X } from 'lucide-react';



const ACT6900 = () => {
 const [activeWindow, setActiveWindow] = useState(null);
 const [startMenuOpen, setStartMenuOpen] = useState(false);

 // Window content for each icon
 const windowContents = {
  mycomputer: {
    title: 'X.exe',
    content: (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">X</h2>
        <p><a href="https://x.com/ACT6900" className="text-blue-500 hover:underline">
        https://x.com/ACT6900
          </a></p>
        <img src="icons/xs.png" alt="X " className="mb-4" />
        
      </div>
    )
  },
  darkmaze: {
    title: 'PumpFun.exe',
    content: (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">PUMPFUN</h2>
        <p>
          <a href="https://pump.fun/coin/AMYathtzia6LsRtj1MKTZKwrKnvV7FAwtr6JHhxpump" className="text-blue-500 hover:underline">
          https://pump.fun/coin/AMYathtzia6LsRtj1MKTZKwrKnvV7FAwtr6JHhxpump
          </a>
        </p>
        <img src="icons/pumps.png" alt="PumpFun " className="mb-4" />
        
      </div>
    )
  },
  
  instakarma: {
    title: 'Telegram.exe',
    content: (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">TELEGRAM</h2>
        <p><a href="https://t.me/ACT6900" className="text-blue-500 hover:underline">
        https://t.me/ACT6900
          </a></p>
        <img src="icons/TS.png" alt="Telegram " className="mb-4" />
        
      </div>
    )
  },
  network: {
    title: 'Contract Address.exe',
    content: (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">CONTRACT ADDRESS</h2>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-300"></div>
            <span>AMYathtzia6LsRtj1MKTZKwrKnvV7FAwtr6JHhxpump</span>
          </div>
        </div>
      </div>
    )
  },
  totem: {
    title: 'Act6900.exe',
    content: (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">ACT6900</h2>
        <p>Welcome to Act6900.</p>
        <img src="icons/log.jpg" alt="Act6900 " className="mb-4" />
        
      </div>
    )
  },
  eyes: {
    title: 'Nudes',
    content: (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">Nudes </h2>
        <p>You are bad boy Senpai HUH!</p>
        <img src="/icons/nud.jpeg" alt="Eyes " className="mb-4" />
        
      </div>
    )
  }
};

const DesktopIcon = ({ icon }) => (
  <div 
    className="w-28 text-center mb-1 cursor-pointer p-1 hover:bg-blue-900/20"
    onClick={() => setActiveWindow(icon.id)}
  >
    <div className="mx-auto w-8 h-8 mb-1 border border-gray-400 shadow-sm">
      <img 
        src={icon.imgSrc}
        alt={icon.name}
        className="w-full h-full object-contain"
      />
    </div>
    <div className="text-white text-xs whitespace-pre-line shadow-sm bg-black px-1">{icon.name}</div>
  </div>
);


DesktopIcon.propTypes = {
  icon: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,  // Add this line to validate imgSrc
  }).isRequired
};

 
 const Window = ({ id, onClose }) => {
   const content = windowContents[id];
   return (
     <div className="fixed top-1/4 left-1/4 w-96 bg-gray-200 border-t border-l border-gray-400 border-b-2 border-r-2 border-gray-600 shadow-lg">
       <div className="bg-blue-900 text-white px-2 py-1 flex justify-between items-center">
         <span>{content.title}</span>
         <button onClick={onClose} className="bg-red-500 px-2">
           <X size={16} />
         </button>
       </div>
       <div className="p-1">
         {content.content}
       </div>
     </div>
   );
 };
 
 Window.propTypes = {
   id: PropTypes.string.isRequired,
   onClose: PropTypes.func.isRequired
 };

 const StartMenu = () => (
   <div className="fixed bottom-8 left-0 w-48 bg-gray-200 border border-gray-400 shadow-lg">
     <div className="py-1">
       <div className="px-4 py-2 hover:bg-blue-900 hover:text-white cursor-pointer flex items-center">
         <span className="w-6 h-6 mr-2 bg-gray-400"></span>
         Programs
       </div>
       <div className="px-4 py-2 hover:bg-blue-900 hover:text-white cursor-pointer flex items-center">
         <span className="w-6 h-6 mr-2 bg-gray-400"></span>
         Documents
       </div>
       <div className="px-4 py-2 hover:bg-blue-900 hover:text-white cursor-pointer flex items-center">
         <span className="w-6 h-6 mr-2 bg-gray-400"></span>
         Settings
       </div>
       <div className="px-4 py-2 hover:bg-blue-900 hover:text-white cursor-pointer flex items-center">
         <span className="w-6 h-6 mr-2 bg-gray-400"></span>
         Find
       </div>
       <div className="px-4 py-2 hover:bg-blue-900 hover:text-white cursor-pointer flex items-center">
         <span className="w-6 h-6 mr-2 bg-gray-400"></span>
         Help
       </div>
       <div className="px-4 py-2 hover:bg-blue-900 hover:text-white cursor-pointer flex items-center">
         <span className="w-6 h-6 mr-2 bg-gray-400"></span>
         Run...
       </div>
       <div className="border-t border-gray-400 my-1"></div>
       <div className="px-4 py-2 hover:bg-blue-900 hover:text-white cursor-pointer flex items-center">
         <span className="w-6 h-6 mr-2 bg-gray-400"></span>
         Shut Down...
       </div>
     </div>
   </div>
 );

 const icons = [
  { id: 'mycomputer', name: 'X.exe', type: 'exe', imgSrc: '/icons/x-icon.PNG' },
  { id: 'darkmaze', name: 'PumpFun.exe', type: 'exe', imgSrc: 'icons/IMG_3026.PNG' },
  { id: 'instakarma', name: 'Telegram.exe', type: 'exe', imgSrc: '/icons/telegram-icon.PNG' },
  { id: 'network', name: 'Contract Address.exe', type: 'exe', imgSrc: '/icons/network-icon.PNG' },
  { id: 'totem', name: 'Act6900.exe', type: 'exe', imgSrc: '/icons/act6900-icon.PNG' },
  
   { id: 'eyes', name: 'Nudes.exe', type: 'exe', imgSrc: '/icons/nudes.png' },
   { id: 'recycle', name: 'Recycle Bin', type: 'bin' },
   { id: 'omage', name: 'Omage.apk', type: 'apk' },
   { id: 'krokodil', name: 'Krokodil.exe', type: 'exe' },
   { id: 'escape', name: 'Escape from VR.html', type: 'html' },
   { id: 'frustration', name: 'Frustration.exe', type: 'exe' },
   { id: 'tidal', name: 'Tidal Rave.exe', type: 'exe' },
   { id: 'tag', name: 'Tag Light.exe', type: 'exe' }
 ];

 return (
   <div className="h-screen overflow-hidden relative">
     <video 
       className="fixed top-0 left-0 min-w-full min-h-full object-cover -z-10"
       autoPlay 
       muted 
       loop 
     >
       <source src="/act_wallpaper.mp4" type="video/mp4" />
     </video>

     {/* Desktop Icons */}
     <div className="p-2 flex space-x-8">
       {/* First Column - 3 icons */}
       <div className="flex flex-col items-start w-28 space-y-4">
         {icons.filter(icon => ['mycomputer', 'darkmaze', 'instakarma'].includes(icon.id))
           .map(icon => (
             <DesktopIcon key={icon.id} icon={icon} />
         ))}
       </div>
       
       {/* Second Column - 2 icons */}
       <div className="flex flex-col items-start w-28 space-y-4">
         {icons.filter(icon => ['network', 'totem'].includes(icon.id))
           .map(icon => (
             <DesktopIcon key={icon.id} icon={icon} />
         ))}
       </div>
       
       {/* Third Column - 1 icon */}
       <div className="flex flex-col items-start w-28">
         {icons.filter(icon => ['eyes'].includes(icon.id))
           .map(icon => (
             <DesktopIcon key={icon.id} icon={icon} />
         ))}
       </div>
     </div>

     {/* Active Window */}
     {activeWindow && (
       <Window 
         id={activeWindow}
         onClose={() => setActiveWindow(null)}
       />
     )}

     {/* Taskbar */}
     <div className="fixed bottom-0 left-0 right-0 h-8 bg-gray-200 border-t border-white flex items-center">
       <button 
         //onClick={() => setStartMenuOpen(!startMenuOpen)}
         onClick={() => (window.location.href = 'https://pump.fun/coin/AMYathtzia6LsRtj1MKTZKwrKnvV7FAwtr6JHhxpump')}
         className="h-6 px-2 mx-1 flex items-center bg-gray-200 border border-gray-400 hover:bg-gray-300"
       >
         <span className="font-bold">Start</span>
       </button>
       
       {activeWindow && (
         <div className="h-6 px-2 mx-1 bg-gray-300 border-t border-l border-gray-400 border-b border-r border-gray-600">
           {icons.find(i => i.id === activeWindow)?.name}
         </div>
       )}
       
       <div className="ml-auto border-l border-gray-400 h-full flex items-center px-2">
         4:20 PM
       </div>
     </div>

     {/* Start Menu */}
     {startMenuOpen && <StartMenu />}
    </div>
  );
};

export default ACT6900;