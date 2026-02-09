import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isAdmin] = useState(true);

  const navItems = [
    { id: 'home', icon: 'Home', label: 'Главная' },
    { id: 'meters', icon: 'Gauge', label: 'Счётчики' },
    { id: 'payments', icon: 'CreditCard', label: 'Платежи' },
    { id: 'chat', icon: 'MessageSquare', label: 'Чат' },
    { id: 'voting', icon: 'Vote', label: 'Голосования' },
    { id: 'history', icon: 'History', label: 'История' },
    { id: 'cameras', icon: 'Video', label: 'Видео' },
    { id: 'profile', icon: 'User', label: 'Профиль' }
  ];

  const metersData = [
    { type: 'Холодная вода', value: '124', unit: 'м³', icon: 'Droplet', color: 'text-blue-400' },
    { type: 'Горячая вода', value: '86', unit: 'м³', icon: 'Flame', color: 'text-orange-400' },
    { type: 'Электричество', value: '3420', unit: 'кВт·ч', icon: 'Zap', color: 'text-yellow-400' },
    { type: 'Газ', value: '52', unit: 'м³', icon: 'Wind', color: 'text-purple-400' }
  ];

  const chatMessages = [
    { id: 1, user: 'Иван Петров', text: 'Когда будет ремонт подъезда?', time: '10:30', apartment: '45' },
    { id: 2, user: 'Мария Сидорова', text: 'Отличная идея с новыми камерами!', time: '11:15', apartment: '12' },
    { id: 3, user: 'Алексей Кузнецов', text: 'Нужно обсудить новый тариф на отопление', time: '12:00', apartment: '67' }
  ];

  const votingPolls = [
    { id: 1, title: 'Установка новых камер наблюдения', votes: 45, total: 60, status: 'active' },
    { id: 2, title: 'Ремонт детской площадки', votes: 52, total: 60, status: 'active' },
    { id: 3, title: 'Замена лифтов', votes: 38, total: 60, status: 'completed' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-gray-900">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <header className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gradient mb-2">МойДом+</h1>
              <p className="text-gray-400">Управление домом онлайн</p>
            </div>
            <div className="flex items-center gap-4">
              {isAdmin && (
                <Badge className="gradient-purple-pink text-white px-4 py-2">
                  <Icon name="Shield" size={16} className="mr-2" />
                  Администратор
                </Badge>
              )}
              <Avatar className="h-12 w-12 border-2 border-purple-500">
                <AvatarFallback className="gradient-purple-pink text-white font-semibold">АК</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <nav className="bg-card/50 backdrop-blur-lg rounded-2xl p-2 border border-purple-500/20">
            <div className="flex gap-2 overflow-x-auto">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? 'default' : 'ghost'}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 whitespace-nowrap transition-all ${
                    activeTab === item.id 
                      ? 'gradient-purple-pink text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-purple-500/10'
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  <span className="hidden sm:inline">{item.label}</span>
                </Button>
              ))}
            </div>
          </nav>
        </header>

        <main className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {activeTab === 'home' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-card/50 backdrop-blur-lg border-purple-500/20 hover-scale">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Квартира 42</CardTitle>
                    <Icon name="Home" className="text-purple-400" size={24} />
                  </div>
                  <CardDescription>Подъезд 3, этаж 5</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Собственник</span>
                      <span className="text-white font-medium">Алексей Кузнецов</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Площадь</span>
                      <span className="text-white font-medium">68 м²</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-lg border-purple-500/20 hover-scale">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Баланс</CardTitle>
                    <Icon name="Wallet" className="text-green-400" size={24} />
                  </div>
                  <CardDescription>Коммунальные услуги</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-400 mb-2">0 ₽</div>
                  <p className="text-sm text-gray-400">Задолженность отсутствует</p>
                  <Button className="w-full mt-4 gradient-blue-purple text-white">
                    Оплатить услуги
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-lg border-purple-500/20 hover-scale">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Уведомления</CardTitle>
                    <Badge className="bg-red-500 text-white">3</Badge>
                  </div>
                  <CardDescription>Новые сообщения</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Bell" className="text-yellow-400 mt-1" size={18} />
                      <div className="text-sm">
                        <p className="text-white">Новое голосование</p>
                        <p className="text-gray-400 text-xs">2 часа назад</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="MessageSquare" className="text-blue-400 mt-1" size={18} />
                      <div className="text-sm">
                        <p className="text-white">Ответ в чате</p>
                        <p className="text-gray-400 text-xs">5 часов назад</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {metersData.map((meter, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-lg border-purple-500/20 hover-scale">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{meter.type}</CardTitle>
                      <Icon name={meter.icon} className={meter.color} size={24} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white mb-2">
                      {meter.value} <span className="text-lg text-gray-400">{meter.unit}</span>
                    </div>
                    <Button variant="outline" className="w-full mt-2 border-purple-500/30 hover:bg-purple-500/10">
                      Передать показания
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'meters' && (
            <div className="grid md:grid-cols-2 gap-6">
              {metersData.map((meter, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-lg border-purple-500/20">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{meter.type}</CardTitle>
                      <Icon name={meter.icon} className={meter.color} size={28} />
                    </div>
                    <CardDescription>Последние показания: {new Date().toLocaleDateString()}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-4xl font-bold text-white mb-2">
                        {meter.value} <span className="text-xl text-gray-400">{meter.unit}</span>
                      </div>
                      <p className="text-sm text-gray-400">Предыдущие: {parseInt(meter.value) - 15} {meter.unit}</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Новые показания</label>
                      <Input 
                        type="number" 
                        placeholder="Введите показания" 
                        className="bg-background/50 border-purple-500/30"
                      />
                    </div>
                    <Button className="w-full gradient-purple-pink text-white">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить показания
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'payments' && (
            <div className="space-y-6">
              <Card className="bg-card/50 backdrop-blur-lg border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Текущий баланс</CardTitle>
                  <CardDescription>Состояние расчётов за текущий месяц</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-green-500/10 rounded-xl border border-green-500/20">
                      <Icon name="CheckCircle" className="text-green-400 mx-auto mb-3" size={32} />
                      <div className="text-3xl font-bold text-green-400">0 ₽</div>
                      <p className="text-sm text-gray-400 mt-2">Задолженность</p>
                    </div>
                    <div className="text-center p-6 bg-blue-500/10 rounded-xl border border-blue-500/20">
                      <Icon name="Calendar" className="text-blue-400 mx-auto mb-3" size={32} />
                      <div className="text-3xl font-bold text-blue-400">8 450 ₽</div>
                      <p className="text-sm text-gray-400 mt-2">К оплате за месяц</p>
                    </div>
                    <div className="text-center p-6 bg-purple-500/10 rounded-xl border border-purple-500/20">
                      <Icon name="TrendingUp" className="text-purple-400 mx-auto mb-3" size={32} />
                      <div className="text-3xl font-bold text-purple-400">7 890 ₽</div>
                      <p className="text-sm text-gray-400 mt-2">Средний платёж</p>
                    </div>
                  </div>
                  <Button className="w-full mt-6 gradient-blue-purple text-white text-lg py-6">
                    <Icon name="CreditCard" size={20} className="mr-2" />
                    Оплатить коммунальные услуги
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-lg border-purple-500/20">
                <CardHeader>
                  <CardTitle>История платежей</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { date: '15.01.2026', amount: '8 320 ₽', status: 'paid' },
                      { date: '15.12.2025', amount: '8 150 ₽', status: 'paid' },
                      { date: '15.11.2025', amount: '7 980 ₽', status: 'paid' }
                    ].map((payment, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-background/30 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon name="CheckCircle" className="text-green-400" size={20} />
                          <div>
                            <p className="text-white font-medium">{payment.amount}</p>
                            <p className="text-sm text-gray-400">{payment.date}</p>
                          </div>
                        </div>
                        <Badge className="bg-green-500/20 text-green-400">Оплачено</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'chat' && (
            <Card className="bg-card/50 backdrop-blur-lg border-purple-500/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">Общий чат дома</CardTitle>
                    <CardDescription>Обсуждение общедомовых вопросов</CardDescription>
                  </div>
                  {isAdmin && (
                    <Badge className="gradient-pink-orange text-white">
                      <Icon name="Shield" size={14} className="mr-1" />
                      Модератор
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96 pr-4">
                  <div className="space-y-4">
                    {chatMessages.map((message) => (
                      <div key={message.id} className="p-4 bg-background/30 rounded-lg hover:bg-background/40 transition-colors">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10 border border-purple-500/30">
                              <AvatarFallback className="gradient-purple-pink text-white text-sm">
                                {message.user.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-white font-medium">{message.user}</p>
                              <p className="text-xs text-gray-400">Кв. {message.apartment} · {message.time}</p>
                            </div>
                          </div>
                          {isAdmin && (
                            <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 hover:bg-red-500/10">
                              <Icon name="Trash2" size={16} />
                            </Button>
                          )}
                        </div>
                        <p className="text-gray-300 ml-13">{message.text}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="mt-4 flex gap-2">
                  <Input 
                    placeholder="Написать сообщение..." 
                    className="bg-background/50 border-purple-500/30"
                  />
                  <Button className="gradient-purple-pink text-white">
                    <Icon name="Send" size={18} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'voting' && (
            <div className="space-y-6">
              {votingPolls.map((poll) => (
                <Card key={poll.id} className="bg-card/50 backdrop-blur-lg border-purple-500/20 hover-scale">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{poll.title}</CardTitle>
                      <Badge className={poll.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}>
                        {poll.status === 'active' ? 'Активно' : 'Завершено'}
                      </Badge>
                    </div>
                    <CardDescription>
                      Проголосовало: {poll.votes} из {poll.total} квартир
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="w-full bg-background/50 rounded-full h-3 overflow-hidden">
                        <div 
                          className="h-full gradient-purple-pink rounded-full transition-all"
                          style={{ width: `${(poll.votes / poll.total) * 100}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>{Math.round((poll.votes / poll.total) * 100)}% проголосовало</span>
                        <span>{poll.total - poll.votes} осталось</span>
                      </div>
                      {poll.status === 'active' && (
                        <div className="grid grid-cols-2 gap-3">
                          <Button className="gradient-purple-pink text-white">
                            <Icon name="ThumbsUp" size={18} className="mr-2" />
                            За
                          </Button>
                          <Button variant="outline" className="border-red-500/30 hover:bg-red-500/10 text-red-400">
                            <Icon name="ThumbsDown" size={18} className="mr-2" />
                            Против
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'history' && (
            <Card className="bg-card/50 backdrop-blur-lg border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-2xl">История операций</CardTitle>
                <CardDescription>Все действия по вашей квартире</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { icon: 'Send', text: 'Переданы показания счётчика воды', time: '2 дня назад', color: 'text-blue-400' },
                    { icon: 'CreditCard', text: 'Оплачены коммунальные услуги', time: '5 дней назад', color: 'text-green-400' },
                    { icon: 'Vote', text: 'Участие в голосовании', time: '1 неделю назад', color: 'text-purple-400' },
                    { icon: 'MessageSquare', text: 'Сообщение в чате', time: '2 недели назад', color: 'text-pink-400' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-background/30 rounded-lg">
                      <div className={`p-3 rounded-full bg-background/50 ${item.color}`}>
                        <Icon name={item.icon} size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium">{item.text}</p>
                        <p className="text-sm text-gray-400">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'cameras' && (
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'Главный вход', location: 'Подъезд 1', status: 'online' },
                { name: 'Детская площадка', location: 'Двор', status: 'online' },
                { name: 'Парковка', location: 'Задний двор', status: 'online' },
                { name: 'Подъезд 3', location: 'Вход', status: 'offline' }
              ].map((camera, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-lg border-purple-500/20 hover-scale">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{camera.name}</CardTitle>
                      <Badge className={camera.status === 'online' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}>
                        <div className={`w-2 h-2 rounded-full ${camera.status === 'online' ? 'bg-green-400' : 'bg-red-400'} mr-2 animate-pulse`} />
                        {camera.status === 'online' ? 'Онлайн' : 'Офлайн'}
                      </Badge>
                    </div>
                    <CardDescription>{camera.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-background/50 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="Video" className="text-gray-600" size={48} />
                    </div>
                    <Button className="w-full gradient-blue-purple text-white" disabled={camera.status === 'offline'}>
                      <Icon name="Play" size={18} className="mr-2" />
                      Смотреть трансляцию
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="max-w-2xl mx-auto">
              <Card className="bg-card/50 backdrop-blur-lg border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Профиль пользователя</CardTitle>
                  <CardDescription>Личная информация и настройки</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-6">
                    <Avatar className="h-24 w-24 border-4 border-purple-500">
                      <AvatarFallback className="gradient-purple-pink text-white text-3xl font-bold">АК</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">Алексей Кузнецов</h3>
                      <p className="text-gray-400">Квартира 42, подъезд 3</p>
                      {isAdmin && (
                        <Badge className="gradient-purple-pink text-white">
                          <Icon name="Shield" size={14} className="mr-1" />
                          Администратор
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-400">Email</label>
                      <Input value="alexey.k@example.com" className="bg-background/50 border-purple-500/30 mt-1" />
                    </div>
                    <div>
                      <label className="text-sm text-gray-400">Телефон</label>
                      <Input value="+7 (999) 123-45-67" className="bg-background/50 border-purple-500/30 mt-1" />
                    </div>
                    <div>
                      <label className="text-sm text-gray-400">Площадь квартиры</label>
                      <Input value="68 м²" className="bg-background/50 border-purple-500/30 mt-1" disabled />
                    </div>
                  </div>

                  <Button className="w-full gradient-purple-pink text-white">
                    <Icon name="Save" size={18} className="mr-2" />
                    Сохранить изменения
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;