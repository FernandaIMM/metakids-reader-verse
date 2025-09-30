import { useState, useEffect } from 'react';

interface ReadingData {
  streak: number;
  lastReadDate: string;
  totalDaysRead: number;
  booksCompleted: number;
  weekProgress: number;
}

export const useReadingStreak = () => {
  const [readingData, setReadingData] = useState<ReadingData>(() => {
    const saved = localStorage.getItem('metakids-reading-data');
    return saved ? JSON.parse(saved) : {
      streak: 0,
      lastReadDate: '',
      totalDaysRead: 0,
      booksCompleted: 0,
      weekProgress: 0
    };
  });

  useEffect(() => {
    localStorage.setItem('metakids-reading-data', JSON.stringify(readingData));
  }, [readingData]);

  const markDayAsRead = () => {
    const today = new Date().toDateString();
    
    if (readingData.lastReadDate === today) {
      return; // Ya leído hoy
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();

    let newStreak = readingData.streak;
    
    if (readingData.lastReadDate === yesterdayStr) {
      newStreak += 1; // Continúa la racha
    } else if (readingData.lastReadDate !== today) {
      newStreak = 1; // Reinicia la racha
    }

    const newWeekProgress = readingData.lastReadDate === yesterdayStr 
      ? Math.min(readingData.weekProgress + 1, 7)
      : 1;

    setReadingData({
      ...readingData,
      streak: newStreak,
      lastReadDate: today,
      totalDaysRead: readingData.totalDaysRead + 1,
      weekProgress: newWeekProgress
    });
  };

  const incrementBooksCompleted = () => {
    setReadingData({
      ...readingData,
      booksCompleted: readingData.booksCompleted + 1
    });
  };

  return {
    ...readingData,
    markDayAsRead,
    incrementBooksCompleted
  };
};
