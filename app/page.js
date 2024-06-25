"use client";
import React, { useState, useCallback, useRef } from "react";

import { toPng, toJpeg } from 'html-to-image';
import InviatationCard from "./InviatationCard";

export default function Home() {
  const [guestName, setGuestName] = useState('');
  const cardRef = useRef(null);

  const handleDownload = useCallback((format) => {
    if (cardRef.current === null || !guestName) {
      return;
    }

    const options = { cacheBust: true, width: 1850, height: 800 };

    if (format === 'png') {
      toPng(cardRef.current, options)
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = `invitation_${guestName}.png`;
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.error('Error generating PNG image:', err);
        });
    } else if (format === 'jpeg') {
      toJpeg(cardRef.current, { quality: 0.95, ...options })
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = `invitation_${guestName}.jpeg`;
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.error('Error generating JPEG image:', err);
        });
    }
  }, [guestName]);

  return (
    <div className="bg-black h-screen w-screen pt-14">
      <div className="flex flex-col items-center">
        <input 
          type="text" 
          value={guestName} 
          onChange={(e) => setGuestName(e.target.value)} 
          placeholder="Enter guest name" 
          className="mb-4 p-2 border border-gray-300 placeholder:text-black"
        />
        <div className="flex space-x-4">
          <button 
            onClick={() => handleDownload('png')} 
            className="mb-8 p-2 bg-yellow-500 text-black"
          >
            Download as PNG
          </button>
          <button 
            onClick={() => handleDownload('jpeg')} 
            className="mb-8 p-2 bg-yellow-500 text-black"
          >
            Download as JPG
          </button>
        </div>
      </div>
      <div ref={cardRef}>
        <InviatationCard guestName={guestName} />
      </div>
    </div>
  );
}
