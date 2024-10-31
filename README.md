# Двухстраничный сайт с формой обратной связи и backend

## Обзор проекта

Этот репозиторий содержит адаптивный двухстраничный сайт, написанный на React и TypeScript. Проект включает **главную страницу** и **страницу обратной связи** с формой, которая соединяется с простым backend-сервером. Сервер логирует данные из формы и возвращает ответ, зависящий от введенных данных. Приложение задеплоено и доступно для просмотра.

## Ссылки на проект

- **Демо**: [https://cad-test-task-teal.vercel.app/](https://cad-test-task-teal.vercel.app/)
- **Репозиторий с backend**: [https://github.com/Aliskhan228/cad-test-task-backend](https://github.com/Aliskhan228/cad-test-task-backend)

## Используемые технологии

### Frontend

- **React** (18.3.1): Компонентный подход к построению UI.
- **React Router DOM** (6.27.0): Маршрутизация на клиентской стороне.
- **Ant Design** (5.21.6): Библиотека компонентов для UI и форм.
- **Styled Components** (6.1.13): CSS-in-JS для кастомных стилей, включая эффекты стеклянного морфизма.
- **Axios** (1.7.7): Для отправки API-запросов на backend.
- **React Helmet Async** (2.0.5): Для управления метаданными SEO.
- **React Lite YouTube Embed** (2.4.0): Оптимизация встраивания видео для улучшения скорости загрузки.

### Backend

- **Node.js**: Сервер с использованием Express.
- **TypeScript**: Гарантирует типизацию по всему проекту.

## Основные функции

1. **Адаптивные макеты**: Используется CSS Grid и медиа-запросы для адаптации под мобильные, планшеты и десктопные экраны.
2. **Дизайн с эффектом стеклянного морфизма**: Элементы, такие как карточки и контейнеры, включают стеклянный эффект для современного UI.
3. **Анимированные карточки**: CSS-анимации (эффекты масштабирования и наведения) для улучшения интерактивности.
4. **Форма обратной связи с backend**:
   - Все поля обязательны для заполнения и проверяются.
   - При отправке формы происходит вызов API к backend, который логирует данные и возвращает персонализированное сообщение.
5. **SEO-оптимизация**:
   - На каждой странице добавлены метатеги для соцсетей (Open Graph и Twitter Cards).
   - Повышена производительность и оптимизация за счет семантической HTML-структуры и оптимизированной загрузки медиа.

## Установка и настройка

### Предварительные требования

- Node.js
- npm или yarn

### Установка

1. Клонируйте репозиторий:

   ```bash
   https://github.com/Aliskhan228/cad-test-task.git
   ```

2. Перейдите в директорию проекта:

   ```
    cd cad-test-task
   ```

3. Установите зависимости:

   ```
   npm install
   ```

   или, если вы используете yarn:

   ```
   yarn install
   ```

4. Запустите сервер:

   ```
   npm run dev
   ```

   или с помощью yarn:

   ```
   yarn dev
   ```

## Стили и дизайн

- **CSS-in-JS с Styled Components**: Все стили написаны с помощью Styled Components, что позволяет легко управлять темами и модуляризировать стили.

- Эффект стеклянного морфизма:

  ```css
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  ```

- **Адаптивная сетка**:

  ```css
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  ```

- **Кастомизация Ant Design**: Настройка состояний по умолчанию (фокус, активные) с помощью CSS для более точного соответствия дизайну.

## SEO и доступность

Каждая страница включает метаданные для SEO и соцсетей благодаря React Helmet Async. Семантические HTML-элементы улучшают доступность, с правильной иерархией заголовков и альтернативным текстом для изображений и видео.

## Оптимизация загрузки видео

YouTube-видео встроено с использованием библиотеки `react-lite-youtube-embed`, что ускоряет загрузку и улучшает производительность.

## Предположения и дополнительные возможности

- Backend логирует данные формы и возвращает ответ; задеплоен на Railway

- Для Core Web Vitals применена оптимизированная загрузка, что сокращает время загрузки для YouTube-видео.

## Автор

Aliskhan – Frontend разработчик

[GitHub](https://github.com/Aliskhan228)
