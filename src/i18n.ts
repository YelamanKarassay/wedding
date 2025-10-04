import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  kk: {
    translation: {
      invite_title: 'Құрметті ағайын-туыс, бауырлар, құда-жекжат, нағашы-жиен, бөлелер, құрбы-құрдас, дос-жарандар, әріптестер!',
      invite_names: 'Еламан мен Әнелдің',
      invite_message: 'Сіздердің үйлену тойына арналған салтанатты ақ дастарханымыздың қадірлі қонағы болуына шақырамыз!',
      invite_text: 'құдалық рәсіміне арналған дастарханымыздың қадірлі қонағы болуға шақырамыз!',

      calendar_title: 'Той өтетін күн',
      calendar_date: '2025 жылғы 24 қазан, 13:00',
      calendar_month: 'Қазан 2025',
      calendar_days: ['ДС', 'СС', 'СР', 'БС', 'ЖМ', 'СБ', 'ЖС'],

      countdown_title: 'Тойға дейін қалды:',
      countdown_days: 'КҮН',
      countdown_hours: 'САҒАТ',
      countdown_minutes: 'МИНУТ',
      countdown_seconds: 'СЕКУНД',

      dress_code_title: 'Дресс-код:',
      dress_code_men: 'ерлер',
      dress_code_women: 'әйелдер',

      program_title: 'Кеш бағдарламасы:',
      program: [
        { time: '17:30', title: 'Қонақтарды қарсы алу' },
        { time: '18:00', title: 'Тойдың басталуы' },
        { time: '21:00', title: 'Кеш тәттілері' },
        { time: '23:30', title: 'Кештің аяқталуы' },
      ],

      address_title: 'Мекенжайы:',
      address_location: '«Premier Hall» мейрамханасы\nАлматы қ., Өмірзақов к-сі, 76',
      address_button: '2ГИС',

      rsvp_title: 'Сіздерді асыға күтеміз!',
      rsvp_subtitle: 'Тойға қатысатыныңызды растауыңызды сұраймыз',
      rsvp_name_label: 'Аты-жөніңіз',
      rsvp_name_placeholder: 'Сіздің атыңыз',
      rsvp_attendance_label: 'Тойға келесіз бе?',
      rsvp_yes: 'Қуана келемін!',
      rsvp_couple: 'Жұбыммен келемін',
      rsvp_no: 'Өкінішке орай, келе алмаймын',
      rsvp_submit: 'Жауап беру',
      rsvp_success: 'Жауабыңыз сәтті жіберілді!',
      rsvp_error: 'Қате пайда болды. Кейінірек қайталап көріңіз.',
      rsvp_name_error: 'Атыңызды енгізіңіз.',
      rsvp_attendance_error: 'Қатысатыныңызды белгілеңіз.',
    },
  },
  ru: {
    translation: {
      invite_title: 'Дорогие гости!',
      invite_names: 'Санжара и Айгерим',
      invite_message: 'Будем рады разделить с вами этот счастливый для нас день! Просим присоединиться к празднику и украсить его своим присутствием!',
      invite_text: 'Приглашаем Вас на свадебное торжество, посвященное бракосочетанию наших детей',

      calendar_title: 'Торжество состоится',
      calendar_date: '9 августа 2025 года, в 18:00',
      calendar_month: 'Август 2025',
      calendar_days: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],

      countdown_title: 'До торжества осталось:',
      countdown_days: 'ДНЕЙ',
      countdown_hours: 'ЧАСОВ',
      countdown_minutes: 'МИНУТ',
      countdown_seconds: 'СЕКУНД',

      dress_code_title: 'Дресс-код:',
      dress_code_men: 'мужчины',
      dress_code_women: 'женщины',

      program_title: 'Программа вечера:',
      program: [
        { time: '17:30', title: 'Сбор гостей' },
        { time: '18:00', title: 'Начало торжества' },
        { time: '21:00', title: 'Сладости вечера' },
        { time: '23:30', title: 'Окончание вечера' },
      ],

      address_title: 'Ждем Вас по адресу:',
      address_location: 'Ресторан «Grandfestival»\nг. Астана, ул. Достык 4',
      address_button: '2ГИС',

      rsvp_title: 'Будем очень рады видеть Вас!',
      rsvp_subtitle: 'Просим подтвердить своё присутствие на торжестве',
      rsvp_name_label: 'ФИО',
      rsvp_name_placeholder: 'Ваше имя',
      rsvp_attendance_label: 'Придете/приедете на свадьбу?',
      rsvp_yes: 'С удовольствием буду!',
      rsvp_couple: 'Приду/приеду с парой',
      rsvp_no: 'К сожалению, не смогу',
      rsvp_submit: 'Отправить ответ',
      rsvp_success: 'Ваш ответ успешно отправлен!',
      rsvp_error: 'Произошла ошибка. Повторите попытку позже.',
      rsvp_name_error: 'Пожалуйста, введите Ваше имя.',
      rsvp_attendance_error: 'Укажите, придёте ли Вы.',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'kk',
    fallbackLng: 'kk',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
