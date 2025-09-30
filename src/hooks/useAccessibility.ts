import { useState, useEffect } from 'react';

type FontSize = 'normal' | 'large' | 'xlarge';

export const useAccessibility = () => {
  const [fontSize, setFontSize] = useState<FontSize>(() => {
    return (localStorage.getItem('metakids-font-size') as FontSize) || 'normal';
  });

  const [dyslexiaFont, setDyslexiaFont] = useState(() => {
    return localStorage.getItem('metakids-dyslexia-font') === 'true';
  });

  useEffect(() => {
    const body = document.body;
    
    // Remove all font size classes
    body.classList.remove('font-large', 'font-xlarge');
    
    // Add current font size class
    if (fontSize === 'large') body.classList.add('font-large');
    if (fontSize === 'xlarge') body.classList.add('font-xlarge');
    
    // Save to localStorage
    localStorage.setItem('metakids-font-size', fontSize);
  }, [fontSize]);

  useEffect(() => {
    const body = document.body;
    
    if (dyslexiaFont) {
      body.classList.add('dyslexia-font');
    } else {
      body.classList.remove('dyslexia-font');
    }
    
    localStorage.setItem('metakids-dyslexia-font', String(dyslexiaFont));
  }, [dyslexiaFont]);

  const increaseFontSize = () => {
    if (fontSize === 'normal') setFontSize('large');
    else if (fontSize === 'large') setFontSize('xlarge');
  };

  const decreaseFontSize = () => {
    if (fontSize === 'xlarge') setFontSize('large');
    else if (fontSize === 'large') setFontSize('normal');
  };

  const toggleDyslexiaFont = () => {
    setDyslexiaFont(!dyslexiaFont);
  };

  return {
    fontSize,
    dyslexiaFont,
    increaseFontSize,
    decreaseFontSize,
    toggleDyslexiaFont
  };
};
