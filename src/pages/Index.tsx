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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-green-50 to-pink-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-emerald-300 rotate-45 animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-rose-300 to-pink-300 rounded-full opacity-30"></div>
          <div className="absolute top-1/2 right-20 w-16 h-64 bg-gradient-to-b from-transparent via-emerald-300 to-transparent opacity-20 rotate-12"></div>
          <div className="absolute bottom-20 left-1/4 w-48 h-1 bg-gradient-to-r from-rose-300 to-emerald-300"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <div className="mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto mb-8"></div>
            <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6 font-serif text-gray-700">
              ПРИГЛАШЕНИЕ
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto mb-12"></div>
          </div>
          
          <div className="space-y-8 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            <p className="font-light">
              В этот трогательный день, мы хотим оказаться в окружении самых дорогих нам людей!
            </p>
            <p className="text-emerald-600 font-medium text-xl">
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
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-200 hover:border-emerald-300 transition-all duration-300 shadow-lg hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Icon name="Calendar" size={48} className="text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-light text-emerald-600 mb-4">ДАТА И ВРЕМЯ</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-3xl font-light text-gray-700">21 сентября 2025</p>
                  <p className="text-xl text-gray-600">19:00</p>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="bg-white/80 backdrop-blur-sm border-rose-200 hover:border-rose-300 transition-all duration-300 shadow-lg hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Icon name="MapPin" size={48} className="text-rose-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-light text-rose-600 mb-4">МЕСТО ПРОВЕДЕНИЯ</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-lg text-gray-700">г. Уфа</p>
                  <p className="text-lg text-gray-700">ул. Златоустовская, 20</p>
                  <p className="text-lg text-gray-700">корпус 2</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dress Code & Gift Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-rose-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Dress Code */}
            <div className="text-center">
              <div className="mb-8">
                <Icon name="Shirt" size={48} className="text-emerald-500 mx-auto mb-4" />
                <h3 className="text-2xl font-light text-emerald-600 mb-6">ДРЕСС-КОД</h3>
                <div className="relative">
                  <div className="text-4xl font-light mb-4 text-gray-700">Black Tie</div>
                  <div className="text-lg font-light text-gray-600">Торжественный стиль</div>
                </div>
              </div>
            </div>

            {/* Gift Info */}
            <div className="text-center">
              <div className="mb-8">
                <Icon name="Gift" size={48} className="text-rose-500 mx-auto mb-4" />
                <h3 className="text-2xl font-light text-rose-600 mb-6">О ПОДАРКАХ</h3>
                <div className="text-base leading-relaxed">
                  <p className="mb-4 text-gray-700">
                    Мы не хотим обременять себя поиском подарка, лучшим выбором будет вклад на мечту в бюджет нашей молодой семьи.
                  </p>
                  <p className="text-rose-500">
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
            <h2 className="text-3xl font-light text-emerald-600 mb-4">ПОДТВЕРЖДЕНИЕ УЧАСТИЯ</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto"></div>
          </div>

          <Card className="bg-white/90 backdrop-blur-sm border-emerald-200 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-emerald-600 mb-2 block font-medium">Имя</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-white border-emerald-300 text-gray-800 focus:border-emerald-500 focus:ring-emerald-200"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-rose-600 mb-2 block font-medium">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-white border-rose-300 text-gray-800 focus:border-rose-500 focus:ring-rose-200"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="attendance" className="text-emerald-600 mb-2 block font-medium">Подтверждение участия</Label>
                  <select
                    id="attendance"
                    value={formData.attendance}
                    onChange={(e) => setFormData({...formData, attendance: e.target.value})}
                    className="w-full bg-white border border-emerald-300 text-gray-800 rounded-md px-3 py-2 focus:border-emerald-500 focus:ring-emerald-200"
                    required
                  >
                    <option value="">Выберите вариант</option>
                    <option value="yes">Да, буду присутствовать</option>
                    <option value="no">К сожалению, не смогу прийти</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-rose-600 mb-2 block font-medium">Сообщение (необязательно)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-white border-rose-300 text-gray-800 focus:border-rose-500 focus:ring-rose-200"
                    rows={4}
                  />
                </div>

                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-emerald-400 to-rose-400 text-white font-medium px-12 py-3 rounded-full hover:from-emerald-500 hover:to-rose-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
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
      <section className="py-16 px-6 bg-gradient-to-t from-rose-50 to-green-50">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-light text-emerald-600 mb-8">КОНТАКТНАЯ ИНФОРМАЦИЯ</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Phone" size={20} className="text-emerald-500" />
              <span className="text-gray-700">+7 (XXX) XXX-XX-XX</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Mail" size={20} className="text-rose-500" />
              <span className="text-gray-700">example@email.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-emerald-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto mb-4"></div>
          <p className="text-emerald-600 font-light">
            Ждем вас с нетерпением!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;