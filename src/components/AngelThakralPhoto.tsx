import React, { useState, useEffect, useRef } from 'react';
import { Camera, UploadCloud, Check, RefreshCw } from 'lucide-react';

interface AngelThakralPhotoProps {
  className?: string;
  size?: string;
  editable?: boolean;
}

export const AngelThakralPhoto: React.FC<AngelThakralPhotoProps> = ({
  className = '',
  size = 'w-52 h-52 sm:w-60 sm:h-60',
  editable = true
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const [currentFallbackIndex, setCurrentFallbackIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [justUpdated, setJustUpdated] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  // Default image source hierarchy:
  // 1. /1190567.png (User file in public folder)
  // 2. /angel-thakral.png
  // 3. /angel-thakral.svg (Custom illustrated vector portrait capturing Angel Thakral's exact likeness)
  // 4. /1190567.svg
  // 5. High-definition executive portrait fallback
  const defaultSources = [
    '/1190567.png',
    '/angel-thakral.png',
    '/angel-thakral.svg',
    '/1190567.svg',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop'
  ];

  // Retrieve any previously saved custom upload from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('markflura_angel_photo');
      if (saved && saved.startsWith('data:image')) {
        setCustomPhoto(saved);
      }
    } catch {
      // Ignore storage errors in private browsing
    }
  }, []);

  const handleImageError = () => {
    if (customPhoto) {
      // If custom photo failed, fall back to defaults
      setCustomPhoto(null);
    } else if (currentFallbackIndex < defaultSources.length - 1) {
      setCurrentFallbackIndex((prev) => prev + 1);
    }
  };

  const handleProcessFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    setIsUploading(true);

    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        setCustomPhoto(dataUrl);
        try {
          localStorage.setItem('markflura_angel_photo', dataUrl);
        } catch {
          // localStorage quote safety
        }

        // Also persist to server disk via /api/upload-founder-photo
        try {
          await fetch('/api/upload-founder-photo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ image: dataUrl, filename: file.name })
          });
        } catch {
          // Silent fallback - localStorage already has it
        }

        setIsUploading(false);
        setJustUpdated(true);
        setTimeout(() => setJustUpdated(false), 3000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleProcessFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleProcessFile(file);
    }
  };

  const activeSrc = customPhoto || defaultSources[currentFallbackIndex];

  return (
    <div className={`relative group ${size} ${className}`}>
      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        aria-label="Upload Angel Thakral founder portrait"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Illuminated Gold Ambient Halo */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-amber-500/40 via-amber-300/20 to-transparent blur-md pointer-events-none transition-opacity duration-300 group-hover:opacity-100" />

      {/* Main Circular Portrait Container with Drag & Drop */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative w-full h-full rounded-full overflow-hidden border-2 transition-all duration-300 p-1 shadow-2xl shadow-amber-950/40 ${
          isDragging
            ? 'border-amber-400 scale-105 bg-amber-500/10'
            : 'border-amber-500/40 bg-zinc-950'
        }`}
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 relative">
          <img
            src={activeSrc}
            alt="Angel Thakral — Founder of Markflura"
            referrerPolicy="no-referrer"
            onError={handleImageError}
            className="w-full h-full object-cover object-top filter brightness-105 contrast-105 transition-all duration-500 group-hover:scale-105"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Drag Overlay State */}
          {isDragging && (
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xs flex flex-col items-center justify-center text-center p-4">
              <UploadCloud className="w-8 h-8 text-amber-400 animate-bounce mb-2" />
              <span className="text-xs font-semibold text-white">Drop Angel's Photo Here</span>
            </div>
          )}

          {/* Hover / Click Upload Overlay for easy 1-click update */}
          {editable && !isDragging && (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center cursor-pointer p-4 text-center backdrop-blur-[2px]"
            >
              <Camera className="w-6 h-6 text-amber-300 mb-1" />
              <span className="text-[11px] font-semibold text-white leading-tight">
                {isUploading ? 'Uploading...' : 'Change / Drop Photo'}
              </span>
              <span className="text-[9px] text-amber-300/80 mt-0.5">Click to choose file</span>
            </div>
          )}
        </div>
      </div>

      {/* Floating Status / Upload Success Pill */}
      {justUpdated ? (
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-950/90 border border-emerald-500/50 shadow-xl backdrop-blur-md flex items-center gap-1.5 whitespace-nowrap z-10 animate-fade-in">
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-300">
            Portrait Updated
          </span>
        </div>
      ) : (
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-zinc-950/90 border border-amber-500/50 shadow-xl backdrop-blur-md flex items-center gap-1.5 whitespace-nowrap z-10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300">
            Founder · Markflura
          </span>
        </div>
      )}

      {/* Quick Update Button */}
      {editable && (
        <div className="pt-4 flex justify-center w-full">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-[11px] font-medium text-zinc-300 hover:text-amber-300 border border-zinc-700/80 hover:border-amber-500/40 transition-all shadow-md cursor-pointer"
            title="Upload or change Angel Thakral's photo"
          >
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span>Upload Photo (1190567.png)</span>
          </button>
        </div>
      )}
    </div>
  );
};
