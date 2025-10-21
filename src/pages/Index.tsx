import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Свяжусь с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const services = [
    {
      title: "Школьная программа",
      description: "5-11 классы: алгебра, геометрия, подготовка к ОГЭ и ЕГЭ",
      icon: "BookOpen"
    },
    {
      title: "Высшая математика",
      description: "Для студентов: математический анализ, линейная алгебра, дифференциальные уравнения",
      icon: "GraduationCap"
    },
    {
      title: "Индивидуальный подход",
      description: "Занятия адаптированы под ваш уровень и цели",
      icon: "User"
    }
  ];

  const prices = [
    {
      title: "Школьники",
      price: "1500 ₽",
      duration: "60 минут",
      features: ["Индивидуальные занятия", "Помощь с домашними заданиями", "Подготовка к контрольным"]
    },
    {
      title: "Подготовка к экзаменам",
      price: "2000 ₽",
      duration: "90 минут",
      features: ["ОГЭ / ЕГЭ", "Разбор типовых заданий", "Практические тесты"]
    },
    {
      title: "Студенты",
      price: "2500 ₽",
      duration: "90 минут",
      features: ["Высшая математика", "Помощь с курсовыми", "Подготовка к сессии"]
    }
  ];

  const reviews = [
    {
      name: "Анна Петрова",
      text: "Отличный репетитор! Дочь подготовилась к ЕГЭ и получила 92 балла. Спасибо за терпение и профессионализм!",
      rating: 5
    },
    {
      name: "Дмитрий Иванов",
      text: "Помог разобраться с высшей математикой. Объясняет понятно, всегда на связи. Рекомендую!",
      rating: 5
    },
    {
      name: "Елена Смирнова",
      text: "Сын стал лучше понимать математику, оценки улучшились. Занятия проходят интересно и продуктивно.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Репетитор по математике</h1>
            <div className="hidden md:flex gap-6">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">Обо мне</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#prices" className="text-foreground hover:text-primary transition-colors">Цены</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button asChild>
              <a href="#booking">Записаться</a>
            </Button>
          </div>
        </div>
      </nav>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Помогу понять математику и полюбить её
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Индивидуальные занятия для школьников и студентов. Подготовка к экзаменам, помощь с домашними заданиями, разбор сложных тем.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#booking">Записаться на занятие</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#about">Узнать больше</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://v3b.fal.media/files/b/lion/WC1DkXX_NeZfCd3oIMG_X_output.png" 
                alt="Математика" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Обо мне</h2>
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg mb-4">
                Выпускник СУНЦ МГУ и МФТИ — лучшей школы и вуза России по физико-математическому направлению.
              </p>
              <p className="text-lg mb-4">
                ЕГЭ: русский язык — 96 баллов, математика — 100 баллов, физика — 100 баллов. Призер и победитель перечневых олимпиад по математике и физике.
              </p>
              <p className="text-lg mb-4">
                Более 5 лет опыта подготовки к ОГЭ и ЕГЭ. Мой подход: объясняю сложное простым языком, нахожу индивидуальный путь к каждому ученику.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100</div>
                  <div className="text-muted-foreground">баллов ЕГЭ</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">МФТИ</div>
                  <div className="text-muted-foreground">выпускник</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Цены</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {prices.map((price, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{price.title}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{price.price}</span>
                    <span className="text-muted-foreground ml-2">/ {price.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {price.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Icon name="Check" className="text-primary mr-2 mt-0.5" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" asChild>
                    <a href="#booking">Записаться</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Отзывы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4">Запись на занятие</h2>
          <p className="text-center text-muted-foreground mb-12">
            Заполните форму, и я свяжусь с вами для согласования времени
          </p>
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите, какая помощь нужна, какой уровень подготовки..."
                    className="mt-2"
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Mail" className="mx-auto mb-4 text-primary" size={32} />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">tutor@example.com</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Phone" className="mx-auto mb-4 text-primary" size={32} />
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="MessageCircle" className="mx-auto mb-4 text-primary" size={32} />
                <h3 className="font-semibold mb-2">Telegram</h3>
                <p className="text-muted-foreground">@math_tutor</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/50 py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>&copy; 2024 Репетитор по математике. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;