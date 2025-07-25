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
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-yellow-400 rotate-45 animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full opacity-20"></div>
          <div className="absolute top-1/2 right-20 w-16 h-64 bg-gradient-to-b from-transparent via-yellow-400 to-transparent opacity-10 rotate-12"></div>
          <div className="absolute bottom-20 left-1/4 w-48 h-1 bg-yellow-400"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <div className="mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8"></div>
            <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6 font-serif">
              ПРИГЛАШЕНИЕ
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-12"></div>
          </div>
          
          <div className="space-y-8 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            <p className="font-light">
              В этот трогательный день, мы хотим оказаться в окружении самых дорогих нам людей!
            </p>
            <p className="text-yellow-400 font-medium text-xl">
              С огромной радостью приглашаем разделить с нами этот волшебный момент!
            </p>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Date & Time */}
            <Card className="bg-gradient-to-br from-gray-900 to-black border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Icon name="Calendar" size={48} className="text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-light text-yellow-400 mb-4">ДАТА И ВРЕМЯ</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-3xl font-light">21 сентября 2025</p>
                  <p className="text-xl">19:00</p>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="bg-gradient-to-br from-gray-900 to-black border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Icon name="MapPin" size={48} className="text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-light text-yellow-400 mb-4">МЕСТО ПРОВЕДЕНИЯ</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-lg">г. Уфа</p>
                  <p className="text-lg">ул. Златоустовская, 20</p>
                  <p className="text-lg">корпус 2</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dress Code & Gift Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Dress Code */}
            <div className="text-center">
              <div className="mb-8">
                <Icon name="Shirt" size={48} className="text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-light text-yellow-400 mb-6">ДРЕСС-КОД</h3>
                <div className="relative">
                  <div className="text-4xl font-light mb-4">Black Tie</div>
                  <div className="text-lg font-light">Торжественный стиль</div>
                </div>
              </div>
            </div>

            {/* Gift Info */}
            <div className="text-center">
              <div className="mb-8">
                <Icon name="Gift" size={48} className="text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-light text-yellow-400 mb-6">О ПОДАРКАХ</h3>
                <div className="text-base leading-relaxed">
                  <p className="mb-4">
                    Мы не хотим обременять себя поиском подарка, лучшим выбором будет вклад на мечту в бюджет нашей молодой семьи.
                  </p>
                  <p className="text-yellow-400/80">
                    И руки будут всегда готовы для объятий)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Form */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-yellow-400 mb-4">ПОДТВЕРЖДЕНИЕ УЧАСТИЯ</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
          </div>

          <Card className="bg-gradient-to-br from-gray-900 to-black border-yellow-400/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-yellow-400 mb-2 block">Имя</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-black/50 border-yellow-400/30 text-white focus:border-yellow-400"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-yellow-400 mb-2 block">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-black/50 border-yellow-400/30 text-white focus:border-yellow-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="attendance" className="text-yellow-400 mb-2 block">Подтверждение участия</Label>
                  <select
                    id="attendance"
                    value={formData.attendance}
                    onChange={(e) => setFormData({...formData, attendance: e.target.value})}
                    className="w-full bg-black/50 border border-yellow-400/30 text-white rounded-md px-3 py-2 focus:border-yellow-400"
                    required
                  >
                    <option value="">Выберите вариант</option>
                    <option value="yes">Да, буду присутствовать</option>
                    <option value="no">К сожалению, не смогу прийти</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-yellow-400 mb-2 block">Сообщение (необязательно)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-black/50 border-yellow-400/30 text-white focus:border-yellow-400"
                    rows={4}
                  />
                </div>

                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-medium px-12 py-3 rounded-none hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
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
      <section className="py-16 px-6 bg-gradient-to-t from-black to-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-light text-yellow-400 mb-8">КОНТАКТНАЯ ИНФОРМАЦИЯ</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Phone" size={20} className="text-yellow-400" />
              <span>+7 (XXX) XXX-XX-XX</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Mail" size={20} className="text-yellow-400" />
              <span>example@email.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-yellow-400/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-4"></div>
          <p className="text-yellow-400/60 font-light">
            Ждем вас с нетерпением!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;