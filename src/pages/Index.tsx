import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const QR_CODES_IMAGE = "https://cdn.poehali.dev/projects/4de8daca-474d-4f36-8280-06f51ec2ee6e/bucket/dae40218-c6b4-47d5-9e8e-27d03ff20440.jpg";
const INSTRUCTION_IMAGE = "https://cdn.poehali.dev/projects/4de8daca-474d-4f36-8280-06f51ec2ee6e/bucket/3d01832d-3262-4ebe-b619-0298f6d44c4f.jpg";
const HOSPITAL_LOGO = "https://nngkb40.ru/favicon.ico";
const MINZDRAV_LOGO = "https://zdrav-nnov.ru/bitrix/templates/minzdrav/img/gerb.png";

const steps = [
  {
    number: 1,
    icon: "Download" as const,
    title: "Установите приложение",
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
                Установите приложение <strong className="text-foreground">Телемед52</strong> на мобильное устройство в соответствии с вашей ОС и авторизуйтесь в нём через <strong className="text-foreground">Госуслуги</strong>.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Доступно для скачивания: <strong>App Store / Google Play / RuStore</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: 2,
    icon: "UserCheck" as const,
    title: "Авторизация",
    color: "bg-medical-blue",
    content: (
      <div className="space-y-3">
        <div className="bg-medical-light-green rounded-xl p-5">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-medical-green flex items-center justify-center flex-shrink-0">
              <Icon name="MessageCircle" size={20} className="text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                После установки приложения откройте <strong className="text-foreground">MAX</strong> и запустите чат-бот <strong className="text-foreground">@telemed_minzdrav_nn_bot</strong> для проведения телемедицинских консультаций врач-пациент.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Предоставьте доступ к своему номеру мобильного телефона.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: 3,
    icon: "FolderOpen" as const,
    title: "Личный кабинет",
    color: "bg-medical-blue",
    content: (
      <div className="space-y-3">
        <div className="grid gap-3">
          <div className="flex items-start gap-3 p-3 rounded-lg bg-medical-light-blue border border-medical-blue/10">
            <div className="w-8 h-8 rounded-full bg-medical-blue/20 flex items-center justify-center flex-shrink-0">
              <Icon name="CalendarClock" size={16} className="text-medical-blue" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Будущие</p>
              <p className="text-xs text-muted-foreground">Запланированные консультации (можно отменить &gt; 15 минут до начала)</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-medical-light-green border border-medical-green/10">
            <div className="w-8 h-8 rounded-full bg-medical-green/20 flex items-center justify-center flex-shrink-0">
              <Icon name="MessagesSquare" size={16} className="text-medical-green" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Текущие</p>
              <p className="text-xs text-muted-foreground">Консультация в работе, доступен чат</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-border">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
              <Icon name="FileCheck" size={16} className="text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Закрытые</p>
              <p className="text-xs text-muted-foreground">Завершённые консультации, документы и протоколы (PDF)</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: 4,
    icon: "CalendarPlus" as const,
    title: "Повторный приём",
    color: "bg-medical-green",
    content: (
      <div className="space-y-3">
        <div className="bg-gradient-to-r from-medical-light-green to-medical-light-blue rounded-xl p-5 border border-medical-green/20">
          <p className="text-sm text-muted-foreground">
            Врач на очном приёме запишет Вас на повторный приём по ТМК. Запись будет отображаться во вкладке <strong className="text-foreground">«Будущие»</strong>.
          </p>
          <p className="text-sm text-muted-foreground mt-3 font-medium">
            Вам поступит в MAX:
          </p>
          <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Icon name="Bell" size={14} className="text-medical-blue mt-0.5 flex-shrink-0" />
              уведомление о записи на ТМК
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Bell" size={14} className="text-medical-green mt-0.5 flex-shrink-0" />
              уведомление о начале ТМК
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Bell" size={14} className="text-medical-blue mt-0.5 flex-shrink-0" />
              уведомление о готовности протокола ТМК
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    number: 5,
    icon: "Calendar" as const,
    title: 'Раздел «События»',
    color: "bg-medical-blue",
    content: (
      <div className="space-y-3">
        <div className="bg-medical-light-blue rounded-xl p-5 border border-medical-blue/10">
          <p className="text-sm text-muted-foreground mb-3">
            Чтобы убедиться, что консультация назначена:
          </p>
          <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
            <li>Войдите в свой <strong className="text-foreground">Личный кабинет</strong></li>
            <li>Перейдите в раздел <strong className="text-foreground">«События»</strong></li>
            <li>В списке предстоящих событий вы увидите запланированную телемедицинскую консультацию с датой, временем и указанием врача</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    number: 6,
    icon: "Paperclip" as const,
    title: "Файлы",
    color: "bg-medical-green",
    content: (
      <div className="space-y-3">
        <div className="flex items-start gap-3 p-4 rounded-xl bg-medical-light-green border border-medical-green/10">
          <div className="w-10 h-10 rounded-full bg-medical-green flex items-center justify-center flex-shrink-0">
            <Icon name="Paperclip" size={20} className="text-white" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              Файлы (фото анализов, снимки и др.) прикрепляются через <strong className="text-foreground">скрепку</strong> в чате консультации.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: 7,
    icon: "Video" as const,
    title: "Консультация",
    color: "bg-medical-blue",
    content: (
      <div className="space-y-3">
        <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-border">
          <div className="w-8 h-8 rounded-full bg-medical-light-blue flex items-center justify-center flex-shrink-0">
            <Icon name="Clock" size={16} className="text-medical-blue" />
          </div>
          <div>
            <p className="text-sm font-medium">В назначенное время будьте онлайн</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-border">
          <div className="w-8 h-8 rounded-full bg-medical-light-blue flex items-center justify-center flex-shrink-0">
            <Icon name="Bell" size={16} className="text-medical-blue" />
          </div>
          <div>
            <p className="text-sm font-medium">Врач подключится, придёт уведомление</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-border">
          <div className="w-8 h-8 rounded-full bg-medical-light-green flex items-center justify-center flex-shrink-0">
            <Icon name="FileDown" size={16} className="text-medical-green" />
          </div>
          <div>
            <p className="text-sm font-medium">После завершения материалы будут в разделе «Закрытые»</p>
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
      <header className="bg-white border-b border-border">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={HOSPITAL_LOGO}
              alt="ГКБ №40"
              className="w-12 h-12 object-contain"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <div>
              <p className="font-heading font-bold text-sm leading-tight">ГБУЗ НО</p>
              <p className="font-heading font-bold text-sm leading-tight">ГКБ № 40</p>
              <p className="text-[10px] text-muted-foreground leading-tight">Автозаводский район</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="font-heading font-bold text-sm leading-tight">Минздрав</p>
              <p className="font-heading text-xs text-muted-foreground leading-tight">Нижегородской области</p>
            </div>
            <img
              src={MINZDRAV_LOGO}
              alt="Минздрав"
              className="w-12 h-12 object-contain"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
        </div>
      </header>

      <section className="medical-gradient text-white">
        <div className="max-w-3xl mx-auto px-4 py-10 sm:py-14">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1">
              <Badge className="bg-white/20 text-white border-0 mb-4 hover:bg-white/30">
                <Icon name="Wifi" size={14} className="mr-1" /> Онлайн-консультации
              </Badge>
              <h1 className="font-heading text-3xl sm:text-4xl font-bold leading-tight mb-3">
                Инструкция<br />«Врач — Пациент»
              </h1>
              <p className="text-white/85 text-lg leading-relaxed">
                Пошаговое руководство по телемедицинским консультациям. Без поездок и очередей.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
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
            <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-4 border-white/20 flex-shrink-0 shadow-2xl">
              <img src={INSTRUCTION_IMAGE} alt="Инструкция" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground">7 шагов к консультации</h2>
          <p className="text-muted-foreground mt-2">Следуйте шагам — это займёт всего несколько минут</p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.08}s` }}
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

      <section className="medical-gradient-light border-t border-border">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <Icon name="QrCode" size={20} className="text-medical-blue" />
              <h2 className="font-heading text-xl font-bold text-foreground">QR-коды для скачивания</h2>
            </div>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Отсканируйте QR-код камерой телефона, чтобы скачать приложения или перейти к чат-боту
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
            <img
              src={QR_CODES_IMAGE}
              alt="QR-коды: App Store, Google Play, RuStore и чат-бот для ТМК"
              className="w-full h-auto"
            />
          </div>

          <p className="text-center text-xs text-muted-foreground mt-4">
            Приложение «Телемед52» доступно для скачивания: App Store / Google Play / RuStore
          </p>
        </div>
      </section>

      <section className="bg-white border-t border-border">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="text-center mb-6">
            <h2 className="font-heading text-xl font-bold text-foreground">Техническая поддержка</h2>
            <p className="text-muted-foreground text-sm mt-1">Если у вас возникли вопросы или трудности</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="border-medical-blue/20">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-medical-light-blue flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={20} className="text-medical-blue" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm">По телефону</p>
                  <p className="text-xs text-muted-foreground">Контакт-центр ГКБ №40</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-medical-green/20">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-medical-light-green flex items-center justify-center flex-shrink-0">
                  <Icon name="MessageCircle" size={20} className="text-medical-green" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm">Через бота MAX</p>
                  <p className="text-xs text-muted-foreground">@telemed_minzdrav_nn_bot</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="medical-gradient text-white">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={HOSPITAL_LOGO} alt="ГКБ №40" className="w-8 h-8 object-contain brightness-0 invert" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <div>
                <p className="font-heading font-semibold text-sm">ГБУЗ НО ГКБ № 40</p>
                <p className="text-xs text-white/70">Нижегородская область</p>
              </div>
            </div>
            <p className="text-xs text-white/60 text-center sm:text-right">
              Телемедицинские консультации врач — пациент
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
