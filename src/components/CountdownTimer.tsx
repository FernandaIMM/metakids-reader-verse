import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  targetDate: string;
  onComplete?: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate, onComplete }: CountdownTimerProps) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    
    if (difference <= 0) {
      onComplete?.();
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center bg-primary/10 rounded-lg p-4 min-w-[80px]">
      <span className="text-3xl md:text-4xl font-bold text-primary">{String(value).padStart(2, '0')}</span>
      <span className="text-xs md:text-sm text-muted-foreground mt-1">{label}</span>
    </div>
  );

  return (
    <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-secondary" />
        <h3 className="text-lg font-semibold text-foreground">Próxima Sesión</h3>
      </div>
      
      <div className="flex justify-center gap-2 md:gap-4 flex-wrap">
        <TimeUnit value={timeLeft.days} label="Días" />
        <TimeUnit value={timeLeft.hours} label="Horas" />
        <TimeUnit value={timeLeft.minutes} label="Minutos" />
        <TimeUnit value={timeLeft.seconds} label="Segundos" />
      </div>
    </div>
  );
};

export default CountdownTimer;
