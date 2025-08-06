import { useEffect, useRef } from 'react';

interface UnicornStudioProps {
  projectId: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

export function UnicornStudio({ 
  projectId, 
  width = '100%', 
  height = '900px',
  className = ''
}: UnicornStudioProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if UnicornStudio is already loaded
    if (window.UnicornStudio) {
      if (!window.UnicornStudio.isInitialized) {
        window.UnicornStudio.init();
        window.UnicornStudio.isInitialized = true;
      }
      return;
    }

    // Initialize UnicornStudio
    window.UnicornStudio = { isInitialized: false };

    // Create and load the script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js';
    script.onload = () => {
      if (!window.UnicornStudio.isInitialized) {
        window.UnicornStudio.init();
        window.UnicornStudio.isInitialized = true;
      }
    };

    // Append script to head
    (document.head || document.body).appendChild(script);

    // Cleanup function
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      data-us-project={projectId}
      style={{ width, height }}
      className={`rounded-2xl overflow-hidden shadow-2xl ${className}`}
    />
  );
}

// Add TypeScript declarations
declare global {
  interface Window {
    UnicornStudio: {
      isInitialized: boolean;
      init: () => void;
    };
  }
} 