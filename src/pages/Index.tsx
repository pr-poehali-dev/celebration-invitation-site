import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import CountdownTimer from "@/components/CountdownTimer";
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
      fontFamily: "'Tinos', serif",
      backgroundImage: `url('https://cdn.poehali.dev/files/0ab15cd7-a95a-44a4-b265-1ce743a12588.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      {/* Vintage overlay for better text readability */}
      <div className="absolute inset-0 bg-amber-50/20 backdrop-blur-[0.5px]"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex justify-center overflow-hidden items-center">
        <div className="relative z-10 text-center">
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wider text-black"
                style={{ fontFamily: "'Great Vibes', cursive", fontWeight: 400 }}>
              Приглашение
            </h1>

            {/* Names with floral decoration */}
            <div className="w-64 md:w-72">
              <img 
                src="https://cdn.poehali.dev/files/d909215b-c57a-4dd9-9bd5-3f34d8422471.png" 
                alt="Руслан и Регина" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story and Timer Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-black text-2xl md:text-3xl font-normal leading-tight"
             style={{ fontFamily: "'Great Vibes', cursive" }}>
            Однажды мы нашли друг друга и поняли, что идти дальше мы хотим только вместе. Совсем скоро настанет день рождения нашей семьи, и мы будем рады, если вы проведёте этот счастливый день с нами!
          </p>

          {/* Countdown Timer */}
          <CountdownTimer />
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Date & Time */}
            <Card className="bg-white/50 backdrop-blur-md border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-xl hover:shadow-2xl rounded-xl">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Icon name="Calendar" size={48} className="text-green-800 mx-auto mb-4" />
                  <h3 className="text-4xl text-black mb-6 font-thin"
                      style={{ fontFamily: "'Great Vibes', cursive" }}>
                    Дата и время
                  </h3>
                </div>
                <div className="space-y-3">
                  <p className="text-2xl font-bold text-black text-center"
                     style={{ fontFamily: "'Tinos', serif" }}>
                    21 сентября 2025<br />19:00
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="bg-white/50 backdrop-blur-md border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-xl hover:shadow-2xl rounded-xl">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Icon name="MapPin" size={48} className="text-green-800 mx-auto mb-4" />
                  <h3 className="text-4xl text-black mb-6 font-thin"
                      style={{ fontFamily: "'Great Vibes', cursive" }}>
                    Место проведения
                  </h3>
                </div>
                <div className="space-y-2">
                  <p className="text-lg text-black font-semibold"
                     style={{ fontFamily: "'Tinos', serif" }}>
                    г. Уфа
                  </p>
                  <p className="text-lg text-black font-semibold"
                     style={{ fontFamily: "'Tinos', serif" }}>
                    ул. Златоустовская, 20 к2
                  </p>
                  <div className="mt-4">
                    <button
                      onClick={() => window.open('https://maps.google.com/?q=г.+Уфа,+ул.+Златоустовская,+20+к2', '_blank')}
                      className="inline-flex items-center space-x-2 bg-transparent border-2 border-green-800 text-green-800 font-semibold px-4 py-2 rounded-lg hover:bg-green-800 hover:text-white transition-all duration-300"
                      style={{ fontFamily: "'Tinos', serif" }}
                    >
                      <Icon name="MapPin" size={16} />
                      <span>Построить маршрут</span>
                    </button>
                  </div>
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
            <div className="text-center bg-white/50 backdrop-blur-md rounded-lg p-8 shadow-xl border border-slate-200">
              <div className="mb-8">
                <Icon name="Shirt" size={48} className="text-green-800 mx-auto mb-4" />
                <h3 className="text-4xl text-black mb-6 font-thin"
                    style={{ fontFamily: "'Great Vibes', cursive" }}>
                  Детали
                </h3>
                <div className="text-base leading-relaxed text-center">
                  <p className="mb-4 text-black font-semibold"
                     style={{ fontFamily: "'Tinos', serif" }}>
                    У нас нет строгого дресс-кода в выборе праздничного наряда, но по правилам площадки необходимо наличие второй обуви.
                  </p>
                  <p className="mb-4 text-black font-semibold"
                     style={{ fontFamily: "'Tinos', serif" }}>
                    Мы сделали выбор в пользу формата 18+, поэтому просим оставить детей в надежных руках на этот вечер.
                  </p>
                  <p className="text-black font-semibold"
                     style={{ fontFamily: "'Tinos', serif" }}>
                    На нашем празднике мы отдаем предпочтение безалкогольным напиткам, но мы не ограничиваем гостей в желании принести с собой свой любимый алкогольный напиток.
                  </p>
                </div>
              </div>
            </div>

            {/* Gift Info */}
            <div className="text-center bg-white/50 backdrop-blur-md rounded-lg p-8 shadow-xl border border-slate-200">
              <div className="mb-8">
                <Icon name="Gift" size={48} className="text-green-800 mx-auto mb-4" />
                <h3 className="text-4xl text-black mb-6 font-thin"
                    style={{ fontFamily: "'Great Vibes', cursive" }}>
                  О подарках
                </h3>
                <div className="text-base leading-relaxed">
                  <p className="mb-4 text-black font-semibold"
                     style={{ fontFamily: "'Tinos', serif" }}>
                    Ваше присутствие в день нашей свадьбы - самый значимый подарок для нас!
                  </p>
                  <p className="text-black font-semibold"
                     style={{ fontFamily: "'Tinos', serif" }}>
                    Ваши улыбки и смех подарят нам незабываемое счастье в этот день, а пожелания в конвертах помогут осуществить наши мечты!
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

          <Card className="bg-white/50 backdrop-blur-md border-slate-200 shadow-2xl rounded-xl">
            <CardContent className="p-8">
              <form 
                action="https://formspree.io/f/xpwzggnb"
                method="POST"
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-black mb-2 block font-bold"
                           style={{ fontFamily: "'Tinos', serif" }}>
                      Имя
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-white/50 border-slate-200 text-black focus:border-slate-400 focus:ring-slate-400/20 font-semibold rounded-lg"
                      style={{ fontFamily: "'Tinos', serif" }}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-black mb-2 block font-bold"
                           style={{ fontFamily: "'Tinos', serif" }}>
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-white/50 border-slate-200 text-black focus:border-slate-400 focus:ring-slate-400/20 font-semibold rounded-lg"
                      style={{ fontFamily: "'Tinos', serif" }}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="attendance" className="text-black mb-2 block font-bold"
                         style={{ fontFamily: "'Tinos', serif" }}>
                    Подтверждение участия
                  </Label>
                  <select
                    id="attendance"
                    name="attendance"
                    value={formData.attendance}
                    onChange={(e) => setFormData({...formData, attendance: e.target.value})}
                    className="w-full bg-white/50 border border-slate-200 text-black rounded-lg px-3 py-2 focus:border-slate-400 focus:ring-slate-400/20 font-semibold"
                    style={{ fontFamily: "'Tinos', serif" }}
                    required
                  >
                    <option value="">Выберите вариант</option>
                    <option value="yes">Да, буду присутствовать</option>
                    <option value="no">К сожалению, не смогу прийти</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-black mb-2 block font-bold"
                         style={{ fontFamily: "'Tinos', serif" }}>
                    Сообщение (необязательно)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-white border-slate-300 text-black focus:border-slate-600 focus:ring-slate-600/20 font-semibold"
                    style={{ fontFamily: "'Tinos', serif" }}
                    rows={4}
                  />
                </div>

                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    className="bg-transparent border-2 border-green-800 text-green-800 font-bold px-6 py-3 rounded-full hover:bg-green-800 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg text-sm leading-tight max-w-xs mx-auto"
                    style={{ fontFamily: "'Tinos', serif" }}
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
        <div className="max-w-2xl mx-auto text-center bg-white/50 backdrop-blur-md rounded-xl p-8 shadow-xl border border-slate-200">
          <h3 className="text-2xl text-black mb-8 font-bold"
              style={{ fontFamily: "'Tinos', serif" }}>
            Контактная информация
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Phone" size={20} className="text-green-800" />
              <span className="text-black font-bold"
                    style={{ fontFamily: "'Tinos', serif" }}>
                +7 987 096-18-43
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Mail" size={20} className="text-green-800" />
              <span className="text-black font-bold"
                    style={{ fontFamily: "'Tinos', serif" }}>
                regina-bulatova1997@mail.ru
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-amber-300/30 relative">
        <div className="max-w-4xl mx-auto text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-slate-200/30">

          <p className="text-black text-xl font-bold"
             style={{ fontFamily: "'Tinos', serif" }}>
            Ждем вас с нетерпением!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;