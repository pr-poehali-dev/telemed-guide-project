import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/4de8daca-474d-4f36-8280-06f51ec2ee6e/files/ff4f3a38-8b3d-491f-81d2-816a0f3ece9a.jpg";

const steps = [
  {
    number: 1,
    icon: "Download" as const,
    title: "Установите приложения",
    color: "bg-medical-blue",
    content: (
      <div className="space-y-4">
        <div className="bg-medical-light-blue rounded-xl p-5">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg medical-gradient flex items-center justify-center flex-shrink-0">
              <Icon name="Smartphone" size={20} className="text-white" />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground">Приложение «Телемед52»</h4>
              <Badge variant="outline" className="mt-1 text-medical-blue border-medical-blue/30">Обязательно</Badge>
              <p className="text-sm text-muted-foreground mt-2">
                Ваш личный кабинет: история консультаций, протоколы и документы.
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                <strong>Важно:</strong> Авторизуйтесь через Госуслуги.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <a href="#" className="inline-flex items-center gap-1.5 text-xs bg-white px-3 py-2 rounded-lg border border-border hover:border-medical-blue/40 transition-colors">
                  <Icon name="Apple" size={14} /> App Store
                </a>
                <a href="#" className="inline-flex items-center gap-1.5 text-xs bg-white px-3 py-2 rounded-lg border border-border hover:border-medical-blue/40 transition-colors">
                  <Icon name="Play" size={14} /> Google Play
                </a>
                <a href="#" className="inline-flex items-center gap-1.5 text-xs bg-white px-3 py-2 rounded-lg border border-border hover:border-medical-blue/40 transition-colors">
                  <Icon name="Store" size={14} fallback="Download" /> RuStore
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-medical-light-green rounded-xl p-5">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-medical-green flex items-center justify-center flex-shrink-0">
              <Icon name="MessageCircle" size={20} className="text-white" />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground">Мессенджер Max</h4>
              <Badge variant="outline" className="mt-1 text-medical-green border-medical-green/30">Рекомендовано</Badge>
              <p className="text-sm text-muted-foreground mt-2">
                Чат-бот для уведомлений и связи с врачом в режиме онлайн. Найдите «Max» (бывший Telegram) в магазине приложений.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: 2,
    icon: "CalendarPlus" as const,
    title: "Запись на приём",
    color: "bg-medical-blue",
    content: (
      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <Card className="border-medical-blue/20 bg-medical-light-blue/50">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full medical-gradient flex items-center justify-center">
                  <span className="text-white text-xs font-bold">А</span>
                </div>
                <h4 className="font-heading font-semibold text-sm">Запись от врача</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Врач на очном приёме записал вас на телемедицину — ничего делать не нужно. Ждите уведомления в Max.
              </p>
            </CardContent>
          </Card>

          <Card className="border-medical-green/20 bg-medical-light-green/50">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full bg-medical-green flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Б</span>
                </div>
                <h4 className="font-heading font-semibold text-sm">Самостоятельно</h4>
              </div>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                <li>Откройте приложение Max</li>
                <li>Найдите бота: <strong className="text-foreground">@telemed_minzdrav_nn_bot</strong></li>
                <li>Нажмите «Запустить»</li>
                <li>Следуйте инструкциям бота</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },
  {
    number: 3,
    icon: "Video" as const,
    title: "Проведение консультации",
    color: "bg-medical-blue",
    content: (
      <div className="space-y-3">
        <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-border">
          <div className="w-8 h-8 rounded-full bg-medical-light-blue flex items-center justify-center flex-shrink-0">
            <Icon name="Clock" size={16} className="text-medical-blue" />
          </div>
          <div>
            <p className="text-sm font-medium">Ожидание</p>
            <p className="text-xs text-muted-foreground">За 5–10 минут до приёма убедитесь в стабильном интернете</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-border">
          <div className="w-8 h-8 rounded-full bg-medical-light-blue flex items-center justify-center flex-shrink-0">
            <Icon name="Bell" size={16} className="text-medical-blue" />
          </div>
          <div>
            <p className="text-sm font-medium">Старт</p>
            <p className="text-xs text-muted-foreground">Врач подключится в назначенное время — уведомление придёт в Max</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-border">
          <div className="w-8 h-8 rounded-full bg-medical-light-green flex items-center justify-center flex-shrink-0">
            <Icon name="Paperclip" size={16} className="text-medical-green" />
          </div>
          <div>
            <p className="text-sm font-medium">Общение</p>
            <p className="text-xs text-muted-foreground">Общайтесь в чате, прикрепляйте фото анализов и снимков через «скрепку»</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-border">
          <div className="w-8 h-8 rounded-full bg-medical-light-green flex items-center justify-center flex-shrink-0">
            <Icon name="CheckCircle" size={16} className="text-medical-green" />
          </div>
          <div>
            <p className="text-sm font-medium">Финал</p>
            <p className="text-xs text-muted-foreground">После беседы врач закроет консультацию</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: 4,
    icon: "FileCheck" as const,
    title: "Закрытие больничного листка",
    color: "bg-medical-green",
    content: (
      <div className="space-y-3">
        <div className="bg-gradient-to-r from-medical-light-green to-medical-light-blue rounded-xl p-5 border border-medical-green/20">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-medical-green flex items-center justify-center flex-shrink-0">
              <Icon name="ShieldCheck" size={20} className="text-white" />
            </div>
            <div>
              <p className="font-heading font-semibold text-foreground">
                Теперь продлить или закрыть больничный лист можно дистанционно!
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Без визита в поликлинику — всё через телемедицину.
              </p>
            </div>
          </div>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <Icon name="ChevronRight" size={16} className="text-medical-green mt-0.5 flex-shrink-0" />
            Уточните у врача возможность дистанционного закрытия/продления листка нетрудоспособности
          </li>
          <li className="flex items-start gap-2">
            <Icon name="ChevronRight" size={16} className="text-medical-green mt-0.5 flex-shrink-0" />
            При согласии врача консультация проходит по обычной схеме (Шаг 3)
          </li>
          <li className="flex items-start gap-2">
            <Icon name="ChevronRight" size={16} className="text-medical-green mt-0.5 flex-shrink-0" />
            После консультации больничный будет закрыт/продлён, информация автоматически уйдёт в Социальный фонд России
          </li>
        </ul>
      </div>
    ),
  },
  {
    number: 5,
    icon: "FolderOpen" as const,
    title: "Получение результатов",
    color: "bg-medical-blue",
    content: (
      <div className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Всю историю и документы вы найдёте в приложении «Телемед52»:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-medical-light-blue border border-medical-blue/10">
            <Icon name="Calendar" size={20} className="text-medical-blue" />
            <div>
              <p className="text-sm font-medium">Раздел «События»</p>
              <p className="text-xs text-muted-foreground">Запланированные приёмы</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-medical-light-green border border-medical-green/10">
            <Icon name="FileDown" size={20} className="text-medical-green" />
            <div>
              <p className="text-sm font-medium">Раздел «Закрытые»</p>
              <p className="text-xs text-muted-foreground">Протоколы (PDF) и документы</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: 6,
    icon: "Headphones" as const,
    title: "Техническая поддержка",
    color: "bg-medical-green",
    content: (
      <div className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Если у вас возникли вопросы или трудности:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="flex items-center gap-3 p-4 rounded-lg bg-white border border-border">
            <Icon name="Phone" size={20} className="text-medical-blue" />
            <div>
              <p className="text-sm font-medium">По телефону</p>
              <p className="text-xs text-muted-foreground">Контакт-центр ГКБ №40</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg bg-white border border-border">
            <Icon name="MessageCircle" size={20} className="text-medical-green" />
            <div>
              <p className="text-sm font-medium">Через бота Max</p>
              <p className="text-xs text-muted-foreground">@telemed_minzdrav_nn_bot</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const advantages = [
  { icon: "Clock" as const, title: "Экономия времени", desc: "Без поездок и очередей" },
  { icon: "MapPin" as const, title: "Доступность", desc: "Из любой точки" },
  { icon: "ShieldCheck" as const, title: "Безопасность", desc: "Защищённый канал связи" },
  { icon: "FileText" as const, title: "Документы", desc: "Всё в электронном виде" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with logos */}
      <header className="bg-white border-b border-border">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg medical-gradient flex items-center justify-center">
              <Icon name="Building2" size={24} className="text-white" />
            </div>
            <div>
              <p className="font-heading font-bold text-sm leading-tight">ГБУЗ НО</p>
              <p className="font-heading font-bold text-sm leading-tight">ГКБ № 40</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <p className="font-heading font-bold text-sm leading-tight text-right">Минздрав</p>
              <p className="font-heading text-xs text-muted-foreground text-right">Нижегородской области</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-medical-green flex items-center justify-center">
              <Icon name="Heart" size={24} className="text-white" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="medical-gradient text-white">
        <div className="max-w-3xl mx-auto px-4 py-10 sm:py-14">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1">
              <Badge className="bg-white/20 text-white border-0 mb-4 hover:bg-white/30">
                <Icon name="Wifi" size={14} className="mr-1" /> Онлайн-консультации
              </Badge>
              <h1 className="font-heading text-3xl sm:text-4xl font-bold leading-tight mb-3">
                Телемедицинская консультация
              </h1>
              <p className="text-white/85 text-lg leading-relaxed">
                Пошаговая инструкция для пациентов. Консультация врача — без поездок и очередей.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                {advantages.map((adv) => (
                  <div key={adv.title} className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                    <Icon name={adv.icon} size={16} />
                    <div>
                      <p className="text-xs font-semibold">{adv.title}</p>
                      <p className="text-[10px] text-white/70">{adv.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-4 border-white/20 flex-shrink-0 shadow-2xl">
              <img src={HERO_IMAGE} alt="Телемедицина" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground">Краткое руководство</h2>
          <p className="text-muted-foreground mt-2">Следуйте шагам — это займёт всего несколько минут</p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-[23px] top-[48px] bottom-[-32px] w-0.5 bg-gradient-to-b from-medical-blue/30 to-medical-green/30 hidden sm:block" />
                )}
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Icon name={step.icon} size={22} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        Шаг {step.number}
                      </span>
                      <h3 className="font-heading text-lg font-bold text-foreground">{step.title}</h3>
                    </div>
                    {step.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QR Code Section */}
      <section className="medical-gradient-light border-t border-border">
        <div className="max-w-3xl mx-auto px-4 py-10 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Icon name="QrCode" size={20} className="text-medical-blue" />
            <h2 className="font-heading text-xl font-bold text-foreground">Отсканируйте QR-код</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
            Наведите камеру телефона на QR-код, чтобы открыть эту инструкцию или перейти к записи на консультацию
          </p>
          <div className="inline-block bg-white p-6 rounded-2xl shadow-lg border border-border">
            <div className="w-48 h-48 bg-muted rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Icon name="QrCode" size={64} className="text-medical-blue mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">QR-код</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Закрытие листка нетрудоспособности — без посещения врача
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border">
        <div className="max-w-3xl mx-auto px-4 py-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-6 h-6 rounded medical-gradient flex items-center justify-center">
              <Icon name="Building2" size={12} className="text-white" />
            </div>
            <p className="font-heading font-semibold text-sm text-foreground">
              ГБУЗ НО ГКБ № 40
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            Нижегородская область &bull; Телемедицинские консультации
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
