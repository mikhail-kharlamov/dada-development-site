import { useState, type FormEvent } from "react";
import { cases } from "./content/cases";
import {
  faqItems,
  navItems,
  processSteps,
  proofItems,
  services,
  whyItems
} from "./content/siteContent";

const featuredCase = cases.find((item) => item.featured);
const secondaryCases = cases.filter((item) => !item.featured);

type ContactFormState = {
  name: string;
  company: string;
  contact: string;
  projectBrief: string;
};

const initialFormState: ContactFormState = {
  name: "",
  company: "",
  contact: "",
  projectBrief: ""
};

export default function App() {
  const [formState, setFormState] = useState<ContactFormState>(initialFormState);
  const [activeFaqId, setActiveFaqId] = useState<string>(faqItems[0].id);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  if (featuredCase === undefined) {
    throw new Error("Featured case is required");
  }

  return (
    <div className="page-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <header className="site-header">
        <a className="brand-mark" href="#top">
          <span className="brand-mark__label">Dada Development</span>
          <span className="brand-mark__note">software engineering company</span>
        </a>

        <nav className="main-nav" aria-label="Основная навигация">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <button className="ghost-button" type="button" onClick={scrollToContact}>
          Обсудить проект
        </button>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero__copy">
            <div className="eyebrow">Официальная разработка ПО из России</div>
            <h1>Разрабатываем программные продукты, автоматизацию и AI-решения для бизнеса</h1>
            <p className="hero__lead">
              Dada Development проектирует веб-системы, CRM/ERP, микросервисные
              платформы, рекомендательные механики, Telegram-ботов, парсинг и
              цифровые сервисы под реальные процессы компании.
            </p>

            <div className="hero__actions">
              <button className="primary-button" type="button" onClick={scrollToContact}>
                Обсудить проект
              </button>
              <a className="text-link" href="#cases">
                Посмотреть кейсы
              </a>
            </div>

            <ul className="hero__signals" aria-label="Ключевые преимущества">
              <li>Официальное юрлицо в России</li>
              <li>Сложные продуктовые и внутренние системы</li>
              <li>Собственные продукты и коммерческая разработка</li>
            </ul>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="signal-card signal-card--large">
              <span>Product systems</span>
              <strong>CRM / ERP / AI</strong>
            </div>
            <div className="signal-card signal-card--stacked">
              <span>Microservices</span>
              <strong>Dada-Tuda</strong>
            </div>
            <div className="signal-card signal-card--floating">
              <span>Automation</span>
              <strong>Data pipelines</strong>
            </div>
            <div className="hero-grid" />
          </div>
        </section>

        <section className="proof-strip section section--compact" aria-label="Подтверждение экспертизы">
          {proofItems.map((item) => (
            <article key={item.value} className="proof-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <span className="eyebrow">Что делаем</span>
            <h2>Собираем цифровые решения вокруг логики бизнеса, а не вокруг шаблонов</h2>
            <p>
              От внутренних платформ и AI-автоматизации до клиентских интерфейсов,
              Telegram-сценариев и data infrastructure.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article key={service.id} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <strong>{service.outcome}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--cases" id="cases">
          <div className="section-heading">
            <span className="eyebrow">Кейсы</span>
            <h2>
              Работаем как с продуктовыми сервисами и автоматизацией, так и с
              продающими digital-инструментами
            </h2>
            <p>
              Ниже проекты разного масштаба: от собственных платформ и AI-механики
              до коммерческих лендингов, Telegram-ботов и data-сервисов.
            </p>
          </div>

          <article className="case-feature">
            <div className="case-feature__meta">
              <span className="eyebrow">Flagship case</span>
              <h3>{featuredCase.title}</h3>
              <p className="case-feature__subtitle">{featuredCase.subtitle}</p>
              <p>{featuredCase.summary}</p>
            </div>

            <div className="case-feature__body">
              <div>
                <span>Контекст</span>
                <p>{featuredCase.challenge}</p>
              </div>
              <div>
                <span>Что сделали</span>
                <p>{featuredCase.solution}</p>
              </div>
              <div>
                <span>Почему это важно клиенту</span>
                <p>{featuredCase.impact}</p>
              </div>
              <ul className="tag-list" aria-label="Теги flagship-кейса">
                {featuredCase.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </article>

          <div className="cases-grid">
            {secondaryCases.map((item) => (
              <article key={item.id} className="case-card">
                <div className="case-card__topline">
                  <span>{item.domain}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="case-card__subtitle">{item.subtitle}</p>
                <p>{item.summary}</p>
                <div className="case-card__detail">
                  <strong>Как подаём ценность</strong>
                  <p>{item.impact}</p>
                </div>
                <ul className="tag-list" aria-label={`Теги кейса ${item.title}`}>
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="process">
          <div className="section-heading">
            <span className="eyebrow">Процесс</span>
            <h2>Работаем как инженерный партнёр, а не как студия одноразовой сдачи</h2>
            <p>
              Сначала понимаем, где у бизнеса узкое место. Затем проектируем,
              собираем, запускаем и помогаем развивать решение дальше.
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <article key={step.id} className="process-card">
                <span className="process-card__index">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--dark">
          <div className="section-heading section-heading--inverse">
            <span className="eyebrow">Почему Dada</span>
            <h2>Сильный инженерный бэкграунд без отрыва от бизнес-задачи</h2>
            <p>
              Нам можно доверить и быстрый прикладной запуск, и архитектурно сложную
              систему, которая станет частью операционного контура компании.
            </p>
          </div>

          <div className="why-grid">
            {whyItems.map((item) => (
              <article key={item.title} className="why-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="faq">
          <div className="section-heading">
            <span className="eyebrow">FAQ</span>
            <h2>Частые вопросы перед стартом проекта</h2>
            <p>
              Если задача нестандартная, это нормально. Мы как раз сильны там, где
              типовые сценарии уже не работают.
            </p>
          </div>

          <div className="faq-list">
            {faqItems.map((item) => {
              const isActive = item.id === activeFaqId;
              return (
                <article key={item.id} className={`faq-item${isActive ? " faq-item--active" : ""}`}>
                  <button
                    type="button"
                    className="faq-item__trigger"
                    onClick={() => setActiveFaqId(isActive ? "" : item.id)}
                  >
                    <span>{item.question}</span>
                    <span>{isActive ? "−" : "+"}</span>
                  </button>
                  {isActive ? <p>{item.answer}</p> : null}
                </article>
              );
            })}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card">
            <div className="contact-card__copy">
              <span className="eyebrow">Контакт</span>
              <h2>Обсудим проект, который должен работать на бизнес, а не просто выглядеть современно</h2>
              <p>
                Если вам нужен официальный подрядчик из России для продукта,
                автоматизации, CRM/ERP, data-сервиса, Telegram-инструмента или
                сложной внутренней платформы, Dada Development можно подключать к
                задаче уже сейчас.
              </p>
              <ul className="contact-points">
                <li>Кастомная разработка под реальные процессы</li>
                <li>Сильная инженерная и продуктовая база</li>
                <li>Уверенная работа с AI, automation и data</li>
              </ul>
            </div>

            <form className="contact-form" onSubmit={handleFormSubmit}>
              <label>
                Ваше имя
                <input
                  name="name"
                  value={formState.name}
                  onChange={(event) =>
                    setFormState((current) => ({ ...current, name: event.target.value }))
                  }
                  placeholder="Как к вам обращаться"
                />
              </label>
              <label>
                Компания
                <input
                  name="company"
                  value={formState.company}
                  onChange={(event) =>
                    setFormState((current) => ({ ...current, company: event.target.value }))
                  }
                  placeholder="Название компании"
                />
              </label>
              <label>
                Контакт
                <input
                  name="contact"
                  value={formState.contact}
                  onChange={(event) =>
                    setFormState((current) => ({ ...current, contact: event.target.value }))
                  }
                  placeholder="Telegram, email или телефон"
                />
              </label>
              <label>
                Кратко о задаче
                <textarea
                  name="projectBrief"
                  value={formState.projectBrief}
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      projectBrief: event.target.value
                    }))
                  }
                  placeholder="Что хотите разработать, автоматизировать или улучшить"
                  rows={5}
                />
              </label>
              <button className="primary-button primary-button--full" type="submit">
                Запланировать разговор
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Dada Development</span>
        <span>Программные продукты, автоматизация, AI и data-services для бизнеса</span>
      </footer>
    </div>
  );
}
