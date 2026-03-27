# Dada Development Site

Промо-сайт Dada Development на `React + TypeScript + Vite`.

Сайт сделан как современный одностраничный лендинг для компании-разработчика ПО с акцентом на:
- заказную разработку для бизнеса;
- CRM / ERP и внутреннюю автоматизацию;
- AI-решения, рекомендательные механики и data-services;
- кейсы компании, включая `Dada-Tuda`, Telegram-ботов и автоматизацию контентных процессов.

## Stack

- `React 18`
- `TypeScript`
- `Vite`
- `Vitest`
- `Testing Library`

## Project Structure

```text
src/
  content/
    cases.ts
    siteContent.ts
  test/
    App.test.tsx
    setup.ts
  App.tsx
  main.tsx
  styles.css
  types.ts
vercel.json
```

Контент вынесен в typed-модули:
- `src/content/cases.ts` — кейсы и flagship-блок;
- `src/content/siteContent.ts` — навигация, услуги, proof, процесс, FAQ и преимущества.

## Local Run

Установка зависимостей:

```bash
npm install
```

Запуск dev-сервера:

```bash
npm run dev
```

Приложение по умолчанию будет доступно через Vite local dev server.

## Verification

Тесты:

```bash
npm test
```

Production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Vercel Deploy

В репозитории уже добавлен `vercel.json`, поэтому проект можно деплоить на Vercel как обычное Vite-приложение.

Рекомендуемые настройки:
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

Если подключать через Vercel UI:
1. Import Git Repository.
2. Выбрать репозиторий `dada-development-site`.
3. Проверить, что Vercel определил Vite-проект.
4. Нажать Deploy.

## Notes

- `Dada-Tuda` в кейсах подан как флагманский продуктовый кейс команды.
- Контент сейчас статический и редактируется прямо в исходниках.
- Если понадобится форма с реальной отправкой, её можно подключить отдельным API или serverless endpoint без полной переработки структуры сайта.
