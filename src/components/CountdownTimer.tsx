import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });

  useEffect(() => {
    // Дата свадьбы: 21 сентября 2025, 19:00
    // Используем более надёжный формат даты для iOS Safari
    const weddingDate = new Date(2025, 8, 21, 19, 0, 0); // месяц 8 = сентябрь (0-индексированный)

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        setTimeLeft({ days, hours, minutes });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center bg-white/50 backdrop-blur-md rounded-lg p-6 shadow-xl border border-slate-200 max-w-2xl mx-auto">
      <h3 className="text-3xl text-black mb-6 font-thin"
          style={{ fontFamily: "'Great Vibes', cursive" }}>
        До нашего особенного дня осталось:
      </h3>
      
      <div className="grid grid-cols-3 gap-8">
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-green-800 mb-2"
               style={{ fontFamily: "'Tinos', serif" }}>
            {timeLeft.days}
          </div>
          <div className="text-lg text-black font-semibold"
               style={{ fontFamily: "'Tinos', serif" }}>
            {timeLeft.days === 1 ? 'день' : 
             timeLeft.days >= 2 && timeLeft.days <= 4 ? 'дня' : 'дней'}
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-green-800 mb-2"
               style={{ fontFamily: "'Tinos', serif" }}>
            {timeLeft.hours}
          </div>
          <div className="text-lg text-black font-semibold"
               style={{ fontFamily: "'Tinos', serif" }}>
            {timeLeft.hours === 1 ? 'час' :
             timeLeft.hours >= 2 && timeLeft.hours <= 4 ? 'часа' : 'часов'}
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-green-800 mb-2"
               style={{ fontFamily: "'Tinos', serif" }}>
            {timeLeft.minutes}
          </div>
          <div className="text-lg text-black font-semibold"
               style={{ fontFamily: "'Tinos', serif" }}>
            {timeLeft.minutes === 1 ? 'минута' :
             timeLeft.minutes >= 2 && timeLeft.minutes <= 4 ? 'минуты' : 'минут'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;