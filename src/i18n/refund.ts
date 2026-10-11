import type { Section } from '../components/LegalPage.astro';

// Дату змінити на день підключення домену dimproekt.com (офіційний запуск сайту)
export const LAUNCH_DATE = { uk: '[дата запуску сайту]', en: '[site launch date]' };

export const REFUND = {
  uk: {
    title: 'Правила повернення та відшкодування',
    seoTitle: 'Правила повернення та відшкодування | ДІМПРОЕКТ',
    seoDescription: 'У яких випадках ДІМПРОЕКТ повертає кошти за готові проекти та послуги проектування і як звернутися.',
    toc: 'Зміст',
    intro: 'Ця сторінка описує, у яких випадках ми повертаємо кошти за готові проекти та послуги проектування і як звернутися, якщо з замовленням щось не так.',
    sections: [
      { title: 'Готові проекти (файли PDF)', body: [
        'Готовий проект — це цифровий товар. Ми надсилаємо його електронною поштою, і повернути його неможливо. Тому після надсилання файлів оплата не повертається і проект не обмінюється на інший (пункт 1 частини п\'ятої статті 13 Закону України «Про захист прав споживачів»).',
        'До надсилання файлів ви можете відмовитися від замовлення. Ми повернемо всю суму протягом 7 календарних днів.',
      ] },
      { title: 'Якщо з файлом щось не так', body: [
        'Перевірте файли після отримання. Якщо файл не відкривається, пошкоджений, неповний або не відповідає опису на сторінці проекту, напишіть нам протягом 14 календарних днів. Ми перевіримо звернення і протягом 3 робочих днів безоплатно надішлемо справний файл або відсутні аркуші.',
        'Помилки в кресленнях ми виправляємо безоплатно протягом 10 робочих днів, зокрема якщо їх виявлено під час будівництва.',
        'Кошти повертаємо лише тоді, коли ми не усунули недолік у ці строки.',
      ] },
      { title: 'Що не є підставою для повернення', body: [
        ['Проект не підійшов до ділянки, ґрунтів або містобудівних обмежень.', 'Ви передумали будувати або обрали інший проект.', 'Вам відмовили в дозвільних документах з причин, не пов\'язаних з помилками в проекті.'],
        'Перед купівлею ми безоплатно відповімо на запитання про проект і допоможемо перевірити, чи підходить він для вашої ділянки.',
      ] },
      { title: 'Прив\'язка до ділянки та індивідуальне проектування', body: [
        'Від цих послуг можна відмовитися в будь-який час до завершення робіт. Ви оплачуєте фактично виконану частину, решту ми повертаємо протягом 7 календарних днів. Вартість уже переданого готового проекту не повертається.',
      ] },
      { title: 'Як звернутися', body: [
        'Напишіть на dimproekt.am@gmail.com або в WhatsApp чи Telegram. У зверненні вкажіть:',
        ['номер договору або назву проекту й дату купівлі;', 'прізвище та ім\'я покупця;', 'короткий опис проблеми;', 'знімок екрана або номер аркуша з помилкою.'],
        'Ми відповімо протягом 2 робочих днів.',
        'Кошти повертаємо тим самим способом, яким надійшла оплата. Комісію банку чи платіжної системи за повернення ми не відшкодовуємо.',
      ] },
    ] as Section[],
    outro: (d: string) => `Правила діють з ${d}.`,
  },
  en: {
    title: 'Return and refund policy',
    seoTitle: 'Return and refund policy | DIMPROEKT',
    seoDescription: 'When DIMPROEKT refunds payment for ready-made house designs and design services, and how to contact us.',
    toc: 'Contents',
    intro: 'This page describes when we refund payment for ready-made designs and design services, and how to get in touch if something is wrong with your order.',
    sections: [
      { title: 'Ready-made designs (PDF files)', body: [
        'A ready-made design is a digital product. We send it by e-mail, and it cannot be returned. Therefore, once the files have been sent, the payment is not refunded and the design is not exchanged for another one (Article 13, part 5, clause 1 of the Law of Ukraine “On Consumer Rights Protection”).',
        'Before the files are sent, you may cancel the order. We will refund the full amount within 7 calendar days.',
      ] },
      { title: 'If something is wrong with a file', body: [
        'Please check the files after you receive them. If a file does not open, is damaged, incomplete or does not match the description on the project page, write to us within 14 calendar days. We will review your request and, within 3 working days, send a working file or the missing sheets free of charge.',
        'We correct errors in the drawings free of charge within 10 working days, including errors found during construction.',
        'We refund payment only if we have not fixed the defect within these terms.',
      ] },
      { title: 'What is not a reason for a refund', body: [
        ['The design did not suit the plot, the soil or urban planning restrictions.', 'You changed your mind about building or chose another design.', 'You were refused permit documents for reasons not related to errors in the design.'],
        'Before you buy, we will answer your questions about the design free of charge and help you check whether it suits your plot.',
      ] },
      { title: 'Site adaptation and custom design', body: [
        'You can cancel these services at any time before the work is completed. You pay for the part actually done, and we refund the rest within 7 calendar days. The price of a ready-made design that has already been delivered is not refunded.',
      ] },
      { title: 'How to contact us', body: [
        'Write to dimproekt.am@gmail.com or via WhatsApp or Telegram. In your message, please include:',
        ['the contract number, or the project name and the purchase date;', 'the buyer’s full name;', 'a short description of the problem;', 'a screenshot or the number of the sheet with the error.'],
        'We will reply within 2 working days.',
        'We refund payment by the same method it was received. We do not cover the bank or payment system fee for the refund.',
      ] },
    ] as Section[],
    outro: (d: string) => `This policy is effective from ${d}.`,
  },
};
