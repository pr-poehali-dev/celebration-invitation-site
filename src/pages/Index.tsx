import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendance: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за подтверждение участия!");
  };

  return (
    <div className="min-h-screen relative" style={{
      fontFamily: "'Comfortaa', sans-serif",
      backgroundImage: `url('https://cdn.poehali.dev/files/0ab15cd7-a95a-44a4-b265-1ce743a12588.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/25 backdrop-blur-[0.5px]"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center max-w-4xl px-6">
          <div className="mb-8">

            <h1 className="text-6xl md:text-8xl font-bold tracking-wider mb-6 text-black"
                style={{ fontFamily: "'Great Vibes', cursive", fontWeight: 400 }}>
              Приглашение
            </h1>

          </div>
          
          <div className="space-y-8 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            {/* Photo of the couple */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/files/af56435b-f44d-4a13-a678-05f1fadda37c.jpg" 
                  alt="Молодожены" 
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
            
            <p className="font-semibold text-black text-xl"
               style={{ fontFamily: "'Comfortaa', sans-serif" }}>
              В этот трогательный день, мы хотим оказаться в окружении самых дорогих нам людей!
            </p>
            <p className="text-black font-thin text-4xl"
               style={{ fontFamily: "'Great Vibes', cursive" }}>
              С огромной радостью приглашаем разделить с нами этот волшебный момент!
            </p>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Date & Time */}
            <Card className="bg-white/95 backdrop-blur-md border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Icon name="Calendar" size={48} className="text-green-800 mx-auto mb-4" />
                  <h3 className="text-2xl text-black mb-4 font-bold"
                      style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                    Дата и время
                  </h3>
                </div>
                <div className="space-y-3">
                  <p className="text-3xl font-bold text-black"
                     style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                    21 сентября 2025
                  </p>
                  <p className="text-3xl text-black font-semibold"
                     style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                    19:00
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="bg-white/95 backdrop-blur-md border-green-800/30 hover:border-green-800/50 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Icon name="MapPin" size={48} className="text-green-800 mx-auto mb-4" />
                  <h3 className="text-2xl text-black mb-4 font-bold"
                      style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                    Место проведения
                  </h3>
                </div>
                <div className="space-y-2">
                  <p className="text-lg text-black font-semibold"
                     style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                    г. Уфа
                  </p>
                  <p className="text-lg text-black font-semibold"
                     style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                    ул. Златоустовская, 20
                  </p>
                  <p className="text-lg text-black font-semibold"
                     style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                    корпус 2
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dress Code & Gift Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Dress Code */}
            <div className="text-center bg-white/90 backdrop-blur-md rounded-lg p-8 shadow-xl border border-slate-200">
              <div className="mb-8">
                <Icon name="Shirt" size={48} className="text-green-800 mx-auto mb-4" />
                <h3 className="text-4xl text-black mb-6 font-thin"
                    style={{ fontFamily: "'Great Vibes', cursive" }}>
                  Дресс-код
                </h3>
                <div className="relative">
                  <div className="text-4xl font-bold mb-4 text-black"
                       style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                    Black Tie
                  </div>
                  <div className="text-lg font-semibold text-black"
                       style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                    Торжественный стиль
                  </div>
                </div>
              </div>
            </div>

            {/* Gift Info */}
            <div className="text-center bg-white/90 backdrop-blur-md rounded-lg p-8 shadow-xl border border-slate-200">
              <div className="mb-8">
                <Icon name="Gift" size={48} className="text-green-800 mx-auto mb-4" />
                <h3 className="text-4xl text-black mb-6 font-thin"
                    style={{ fontFamily: "'Great Vibes', cursive" }}>
                  О подарках
                </h3>
                <div className="text-base leading-relaxed">
                  <p className="mb-4 text-black font-semibold"
                     style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                    Мы не хотим обременять вас поиском подарка, поэтому лучшим выбором будет вклад на исполнение мечты нашей молодой семьи.
                  </p>
                  <p className="text-black text-lg font-bold"
                     style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                    И руки будут всегда готовы для объятий)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Form */}
      <section className="py-20 px-6 relative">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl text-black mb-4 font-thin"
                style={{ fontFamily: "'Great Vibes', cursive" }}>
              Подтверждение участия
            </h2>

          </div>

          <Card className="bg-white/95 backdrop-blur-md border-slate-200 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-black mb-2 block font-bold"
                           style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                      Имя
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-white border-slate-300 text-black focus:border-slate-600 focus:ring-slate-600/20 font-semibold"
                      style={{ fontFamily: "'Comfortaa', sans-serif" }}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-black mb-2 block font-bold"
                           style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-white border-slate-300 text-black focus:border-slate-600 focus:ring-slate-600/20 font-semibold"
                      style={{ fontFamily: "'Comfortaa', sans-serif" }}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="attendance" className="text-black mb-2 block font-bold"
                         style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                    Подтверждение участия
                  </Label>
                  <select
                    id="attendance"
                    value={formData.attendance}
                    onChange={(e) => setFormData({...formData, attendance: e.target.value})}
                    className="w-full bg-white border border-slate-300 text-black rounded-md px-3 py-2 focus:border-slate-600 focus:ring-slate-600/20 font-semibold"
                    style={{ fontFamily: "'Comfortaa', sans-serif" }}
                    required
                  >
                    <option value="">Выберите вариант</option>
                    <option value="yes">Да, буду присутствовать</option>
                    <option value="no">К сожалению, не смогу прийти</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-black mb-2 block font-bold"
                         style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                    Сообщение (необязательно)
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-white border-slate-300 text-black focus:border-slate-600 focus:ring-slate-600/20 font-semibold"
                    style={{ fontFamily: "'Comfortaa', sans-serif" }}
                    rows={4}
                  />
                </div>

                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-green-800 to-green-700 text-white font-bold px-6 py-3 rounded-full hover:from-green-900 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm leading-tight max-w-xs mx-auto"
                    style={{ fontFamily: "'Comfortaa', sans-serif" }}
                  >
                    Отправить<br />подтверждение
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 relative">
        <div className="max-w-2xl mx-auto text-center bg-white/90 backdrop-blur-md rounded-lg p-8 shadow-xl border border-slate-200">
          <h3 className="text-2xl text-black mb-8 font-bold"
              style={{ fontFamily: "'Comfortaa', sans-serif" }}>
            Контактная информация
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Phone" size={20} className="text-green-800" />
              <span className="text-black font-bold"
                    style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                +7 987 096-18-43
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Mail" size={20} className="text-green-800" />
              <span className="text-black font-bold"
                    style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                regina-bulatova1997@mail.ru
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-300/50 relative">
        <div className="max-w-4xl mx-auto text-center bg-white/80 backdrop-blur-sm rounded-lg p-6">

          <p className="text-black text-xl font-bold"
             style={{ fontFamily: "'Comfortaa', sans-serif" }}>
            Ждем вас с нетерпением!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;