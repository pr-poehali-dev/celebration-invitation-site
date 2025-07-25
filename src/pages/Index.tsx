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
      fontFamily: "'Nunito', sans-serif",
      backgroundImage: `url('https://cdn.poehali.dev/files/1f1ebaa7-7fac-4ce7-8321-f639899be083.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center max-w-4xl px-6">
          <div className="mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent mx-auto mb-8"></div>
            <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6 text-slate-800"
                style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}>
              Приглашение
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto mb-12"></div>
          </div>
          
          <div className="space-y-8 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            <p className="font-medium text-slate-700">
              В этот трогательный день, мы хотим оказаться в окружении самых дорогих нам людей!
            </p>
            <p className="text-blue-700 font-semibold text-2xl"
               style={{ fontFamily: "'Dancing Script', cursive" }}>
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
                  <Icon name="Calendar" size={48} className="text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl text-slate-700 mb-4 font-bold"
                      style={{ fontFamily: "'Dancing Script', cursive" }}>
                    Дата и время
                  </h3>
                </div>
                <div className="space-y-3">
                  <p className="text-3xl font-bold text-slate-800">21 сентября 2025</p>
                  <p className="text-xl text-slate-600 font-medium">19:00</p>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="bg-white/95 backdrop-blur-md border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Icon name="MapPin" size={48} className="text-amber-600 mx-auto mb-4" />
                  <h3 className="text-2xl text-slate-700 mb-4 font-bold"
                      style={{ fontFamily: "'Dancing Script', cursive" }}>
                    Место проведения
                  </h3>
                </div>
                <div className="space-y-2">
                  <p className="text-lg text-slate-800 font-medium">г. Уфа</p>
                  <p className="text-lg text-slate-800 font-medium">ул. Златоустовская, 20</p>
                  <p className="text-lg text-slate-800 font-medium">корпус 2</p>
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
            <div className="text-center bg-white/90 backdrop-blur-md rounded-lg p-8 shadow-xl">
              <div className="mb-8">
                <Icon name="Shirt" size={48} className="text-slate-700 mx-auto mb-4" />
                <h3 className="text-2xl text-slate-700 mb-6 font-bold"
                    style={{ fontFamily: "'Dancing Script', cursive" }}>
                  Дресс-код
                </h3>
                <div className="relative">
                  <div className="text-4xl font-bold mb-4 text-slate-800"
                       style={{ fontFamily: "'Dancing Script', cursive" }}>
                    Black Tie
                  </div>
                  <div className="text-lg font-medium text-slate-600">Торжественный стиль</div>
                </div>
              </div>
            </div>

            {/* Gift Info */}
            <div className="text-center bg-white/90 backdrop-blur-md rounded-lg p-8 shadow-xl">
              <div className="mb-8">
                <Icon name="Gift" size={48} className="text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl text-slate-700 mb-6 font-bold"
                    style={{ fontFamily: "'Dancing Script', cursive" }}>
                  О подарках
                </h3>
                <div className="text-base leading-relaxed">
                  <p className="mb-4 text-slate-700 font-medium">
                    Мы не хотим обременять себя поиском подарка, лучшим выбором будет вклад на мечту в бюджет нашей молодой семьи.
                  </p>
                  <p className="text-blue-600 text-lg"
                     style={{ fontFamily: "'Dancing Script', cursive" }}>
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
            <h2 className="text-3xl text-slate-700 mb-4 font-bold"
                style={{ fontFamily: "'Dancing Script', cursive" }}>
              Подтверждение участия
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto"></div>
          </div>

          <Card className="bg-white/95 backdrop-blur-md border-slate-200 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-slate-700 mb-2 block font-semibold">Имя</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-white border-slate-300 text-slate-800 focus:border-blue-600 focus:ring-blue-600/20 font-medium"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-slate-700 mb-2 block font-semibold">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-white border-slate-300 text-slate-800 focus:border-blue-600 focus:ring-blue-600/20 font-medium"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="attendance" className="text-slate-700 mb-2 block font-semibold">Подтверждение участия</Label>
                  <select
                    id="attendance"
                    value={formData.attendance}
                    onChange={(e) => setFormData({...formData, attendance: e.target.value})}
                    className="w-full bg-white border border-slate-300 text-slate-800 rounded-md px-3 py-2 focus:border-blue-600 focus:ring-blue-600/20 font-medium"
                    required
                  >
                    <option value="">Выберите вариант</option>
                    <option value="yes">Да, буду присутствовать</option>
                    <option value="no">К сожалению, не смогу прийти</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-slate-700 mb-2 block font-semibold">Сообщение (необязательно)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-white border-slate-300 text-slate-800 focus:border-blue-600 focus:ring-blue-600/20 font-medium"
                    rows={4}
                  />
                </div>

                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-slate-700 text-white font-bold px-12 py-3 rounded-full hover:from-blue-700 hover:to-slate-800 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
                  >
                    ОТПРАВИТЬ ПОДТВЕРЖДЕНИЕ
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 relative">
        <div className="max-w-2xl mx-auto text-center bg-white/90 backdrop-blur-md rounded-lg p-8 shadow-xl">
          <h3 className="text-2xl text-slate-700 mb-8 font-bold"
              style={{ fontFamily: "'Dancing Script', cursive" }}>
            Контактная информация
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Phone" size={20} className="text-blue-600" />
              <span className="text-slate-800 font-semibold">+7 987 096-18-43</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Mail" size={20} className="text-amber-600" />
              <span className="text-slate-800 font-semibold">regina-bulatova1997@mail.ru</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-300/50 relative">
        <div className="max-w-4xl mx-auto text-center bg-white/80 backdrop-blur-sm rounded-lg p-6">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto mb-4"></div>
          <p className="text-slate-700 text-xl font-semibold"
             style={{ fontFamily: "'Dancing Script', cursive" }}>
            Ждем вас с нетерпением!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;