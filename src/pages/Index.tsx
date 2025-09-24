import React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-tech-light via-white to-tech-light font-open-sans">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-tech-light sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-tech-blue to-tech-accent rounded-lg flex items-center justify-center animate-glow">
                <Icon name="Cpu" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-roboto font-bold text-tech-gray">TechService</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-tech-gray hover:text-tech-blue transition-colors duration-300">Услуги</a>
              <a href="#pricing" className="text-tech-gray hover:text-tech-blue transition-colors duration-300">Прайс</a>
              <a href="#about" className="text-tech-gray hover:text-tech-blue transition-colors duration-300">О нас</a>
              <Button className="bg-tech-blue hover:bg-tech-blue/90 text-white px-6">
                <Icon name="Phone" size={16} className="mr-2" />
                Связаться
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-tech-blue/10 text-tech-blue border-tech-blue/20 px-4 py-2">
              Профессиональный ремонт с 2015 года
            </Badge>
            <h1 className="text-5xl md:text-7xl font-roboto font-bold text-tech-gray mb-6 leading-tight">
              Компьютерная
              <br />
              <span className="bg-gradient-to-r from-tech-blue to-tech-accent bg-clip-text text-transparent">
                Мастерская
              </span>
            </h1>
            <p className="text-xl text-tech-gray/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Профессиональный ремонт компьютеров, ноутбуков и периферийного оборудования. 
              Быстро, качественно, с гарантией.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-tech-blue hover:bg-tech-blue/90 text-white px-8 py-4 text-lg animate-scale-in">
                <Icon name="Wrench" size={20} className="mr-2" />
                Заказать ремонт
              </Button>
              <Button variant="outline" size="lg" className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white px-8 py-4 text-lg">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-roboto font-bold text-tech-gray mb-4">Наши услуги</h2>
            <p className="text-tech-gray/70 text-lg">Полный спектр услуг по ремонту и обслуживанию техники</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Monitor",
                title: "Ремонт компьютеров",
                description: "Диагностика и ремонт настольных ПК любой сложности",
                features: ["Замена комплектующих", "Чистка от пыли", "Установка ПО", "Восстановление данных"]
              },
              {
                icon: "Laptop",
                title: "Ремонт ноутбуков",
                description: "Профессиональный ремонт портативных устройств",
                features: ["Замена экранов", "Ремонт клавиатур", "Чистка системы охлаждения", "Замена батарей"]
              },
              {
                icon: "Mouse",
                title: "Ремонт периферии",
                description: "Восстановление работоспособности периферийных устройств",
                features: ["Ремонт принтеров", "Восстановление мышек", "Ремонт клавиатур", "Настройка роутеров"]
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-tech-blue to-tech-accent rounded-2xl flex items-center justify-center mb-6 group-hover:animate-glow">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-roboto font-semibold text-tech-gray mb-4">{service.title}</h3>
                  <p className="text-tech-gray/70 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-tech-gray/80">
                        <Icon name="Check" size={16} className="text-tech-blue mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-roboto font-bold text-tech-gray mb-4">Прайс-лист</h2>
            <p className="text-tech-gray/70 text-lg">Честные цены без скрытых доплат</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { service: "Диагностика ПК", price: "500₽", time: "30 мин" },
              { service: "Чистка от пыли", price: "800₽", time: "1 час" },
              { service: "Установка Windows", price: "1200₽", time: "2 часа" },
              { service: "Замена термопасты", price: "600₽", time: "45 мин" },
              { service: "Ремонт материнской платы", price: "от 2000₽", time: "1-3 дня" },
              { service: "Восстановление данных", price: "от 1500₽", time: "2-5 дней" },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300 bg-white/60 backdrop-blur-sm border border-tech-light/50">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-roboto font-medium text-tech-gray">{item.service}</h3>
                    <Badge variant="outline" className="text-tech-blue border-tech-blue/30">
                      {item.time}
                    </Badge>
                  </div>
                  <p className="text-2xl font-roboto font-bold text-tech-blue">{item.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-tech-blue hover:bg-tech-blue/90 text-white px-8 py-3">
              <Icon name="FileText" size={20} className="mr-2" />
              Скачать полный прайс-лист
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-r from-tech-gray to-secondary">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-roboto font-bold mb-6">О нашей мастерской</h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Мы работаем с 2015 года и за это время отремонтировали более 5000 устройств. 
                Наша команда состоит из сертифицированных специалистов с многолетним опытом.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-roboto font-bold text-tech-accent mb-2">5000+</div>
                  <p className="text-white/80">Отремонтированных устройств</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-roboto font-bold text-tech-accent mb-2">98%</div>
                  <p className="text-white/80">Довольных клиентов</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-roboto font-bold text-tech-accent mb-2">24/7</div>
                  <p className="text-white/80">Поддержка клиентов</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-roboto font-bold text-tech-accent mb-2">1 год</div>
                  <p className="text-white/80">Гарантия на работы</p>
                </div>
              </div>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-tech-gray">
                <Icon name="MapPin" size={20} className="mr-2" />
                Найти нас на карте
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-tech-blue to-tech-accent rounded-2xl shadow-2xl flex items-center justify-center">
                <Icon name="Settings" size={120} className="text-white/20" />
                <div className="absolute inset-0 bg-tech-blue/20 rounded-2xl animate-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tech-gray text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-tech-blue to-tech-accent rounded-lg flex items-center justify-center">
                  <Icon name="Cpu" size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-roboto font-bold">TechService</h3>
              </div>
              <p className="text-white/70 mb-4">
                Профессиональная компьютерная мастерская с многолетним опытом работы.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-white hover:text-tech-accent">
                  <Icon name="Phone" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:text-tech-accent">
                  <Icon name="Mail" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:text-tech-accent">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-roboto font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <p className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@techservice.ru
                </p>
                <p className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  г. Москва, ул. Примерная, д. 123
                </p>
                <p className="flex items-center">
                  <Icon name="Clock" size={16} className="mr-2" />
                  Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-roboto font-semibold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2">
                <a href="#services" className="block text-white/80 hover:text-tech-accent transition-colors">Услуги</a>
                <a href="#pricing" className="block text-white/80 hover:text-tech-accent transition-colors">Прайс-лист</a>
                <a href="#about" className="block text-white/80 hover:text-tech-accent transition-colors">О нас</a>
                <a href="#" className="block text-white/80 hover:text-tech-accent transition-colors">Гарантии</a>
                <a href="#" className="block text-white/80 hover:text-tech-accent transition-colors">Отзывы</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 TechService. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;