
"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

type Language = "uz" | "ru" | "en"

interface LanguageStore {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  uz: {
    // Navigation
    "nav.home": "Bosh sahifa",
    "nav.menu": "Menyu",
    "menu.subtitle": "Bizning keng assortimentimizdan o'zingizga yoqqan taomni tanlang",
    "nav.checkout": "To'lov",
    "nav.orders": "Buyurtmalar",
    "nav.tables": "Stollar",
    "nav.delivery": "Yetkazib berish",
    "nav.about": "Biz haqimizda",
    "nav.contact": "Aloqa",
    "nav.cart": "Savat",

    // Hero
    "hero.title": "Amur Restoraniga Xush Kelibsiz",
    "hero.subtitle": "Eng mazali taomlar va tez yetkazib berish xizmati",
    "hero.orderNow": "Buyurtma berish",
    "hero.learnMore": "Batafsil",
    "hero.xizmat": "sifatli xizmat kafolati bilan",
    "hero.national": "O'zbekistonning eng mazali milliy taomlarini buyurtma qiling.",
    "hero.minute": "daqiqa",
    "hero.map": "Joylashuv",
    "hero.phone": "Aloqa",

    // About
    "about.one": "Nega Amur Restorani?",
    "about.des": "30-40 daqiqa ichida sizning uyingizgacha yetkazib beramiz",
    "about.feature.fastDeliveryTitle": "Tez Yetkazib Berish",
    "about.feature.fastDeliveryDesc": "30-40 daqiqa ichida sizning uyingizgacha yetkazib beramiz",
    "about.feature.qualityGuaranteeTitle": "Sifat Kafolati",
    "about.feature.qualityGuaranteeDesc": "Faqat yangi va sifatli mahsulotlardan foydalanmiz",
    "about.feature.deliveryTitle": "Yetkazib Berish",
    "about.feature.deliveryDesc": "Sizni uyingizga yetkazib berish xizmati.",
    "about.feature.supportTitle": "10:00-00:00 Qo'llab-quvvatlash",
    "about.feature.supportDesc": "Har qanday savolingiz bo'lsa, biz doimo yordam berishga tayyormiz",

    // Categories
    "categories.title": "Taom turlari",
    "categories.items": "ta mahsulot",
    "categories.all": "Barchasi",

    // Featured
    "featured.title": "Mashhur taomlar",
    "featured.popular": "Mashhur",

    // Food
    "food.addToCart": "Savatga qo'shish",
    "food.price": "Narx",
    "food.available": "Mavjud",
    "food.unavailable": "Mavjud emas",
    "food.lowStock": "Kam qoldi",
    "food.outOfStock": "Tugagan",
    "food.rating": "Reyting",
    "food.viewMenu": "Menuni ko'rish", // NEW

    // Search & Sort
    "search.placeholder": "Taom qidirish...",
    "search.noResults": "Hech narsa topilmadi",
    "search.noResultsDesc": "Qidiruv so'zini o'zgartiring yoki boshqa kategoriyani tanlang",
    "sort.title": "Saralash",
    "sort.name": "Nom bo'yicha",
    "sort.priceLow": "Arzon narx",
    "sort.priceHigh": "Qimmat narx",
    "sort.rating": "Reyting bo'yicha",

    // Cart
    "cart.title": "Savat",
    "cart.empty": "Savat bo'sh",
    "cart.total": "Jami",
    "cart.checkout": "To'lash",
    "cart.continue": "Xarid davom etish",
    "cart.remove": "O'chirish",
    "cart.quantity": "Miqdor",
    "cart.subtotal": "Oraliq jami",
    "cart.delivery": "Yetkazib berish",
    "cart.tax": "Soliq",
    "cart_empty_title": "Savat bo'sh", // NEW
    "cart_empty_description": "Buyurtma berish uchun avval taomlarni savatga qo'shing", // NEW

    // Orders
    "orders.title": "Buyurtmalar",
    "orders.status": "Holat",
    "orders.pending": "Kutilmoqda",
    "orders.preparing": "Tayyorlanmoqda",
    "orders.ready": "Tayyor",
    "orders.delivered": "Yetkazildi",
    "orders.cancelled": "Bekor qilindi",
    "orders.track": "Kuzatish",
    "orders.orderNumber": "Buyurtma raqami",
    "orders.orderDate": "Buyurtma sanasi",
    "orders.totalAmount": "Umumiy summa",

    // Tables
    "tables.title": "Stollar",
    "tables.available": "Bo'sh",
    "tables.occupied": "Band",
    "tables.reserved": "Bron qilingan",
    "tables.book": "Bron qilish",
    "tables.capacity": "Sig'im",

    // Delivery
    "delivery.title": "Yetkazib berish",
    "delivery.address": "Manzil",
    "delivery.phone": "Telefon",
    "delivery.time": "Vaqt",
    "delivery.free": "Bepul yetkazib berish",
    "delivery.cost": "Yetkazib berish narxi",

    // About
    "about.title": "Biz haqimizda",
    "about.description": "Biz sifatli taomlar va professional xizmat ko'rsatishga ixtisoslashganmiz",
    "about.fastDelivery": "Tez yetkazib berish",
    "about.fastDeliveryDesc": "30 daqiqada yetkazib beramiz",
    "about.gpsTracking": "GPS kuzatuv",
    "about.gpsTrackingDesc": "Buyurtmangizni real vaqtda kuzating",
    "about.support": "24/7 qo'llab-quvvatlash",
    "about.supportDesc": "Har doim sizning xizmatingizdamiz",

    // Contact
    "contact.title": "Biz bilan bog'laning",
    "contact.description": "Savollaringiz bormi? Biz bilan bog'laning!",
    "contact.getInTouch": "Aloqa ma'lumotlari",
    "contact.sendMessage": "Xabar yuborish",
    "contact.address": "Manzil",
    "contact.phone": "Telefon",
    "contact.email": "Email",
    "contact.hours": "Ish vaqti",
    "contact.name": "Ismingiz",
    "contact.subject": "Mavzu",
    "contact.message": "Xabaringiz",
    "contact.send": "Yuborish",

    // Auth
    "auth.login": "Kirish",
    "auth.register": "Ro'yxatdan o'tish",
    "auth.logout": "Chiqish",
    "auth.email": "Email",
    "auth.password": "Parol",
    "auth.confirmPassword": "Parolni tasdiqlang",
    "auth.forgotPassword": "Parolni unutdingizmi?",

    // Common
    "common.loading": "Yuklanmoqda...",
    "common.error": "Xatolik yuz berdi",
    "common.success": "Muvaffaqiyatli",
    "common.cancel": "Bekor qilish",
    "common.save": "Saqlash",
    "common.edit": "Tahrirlash",
    "common.delete": "O'chirish",
    "common.confirm": "Tasdiqlash",
    "common.back": "Orqaga",
    "common.next": "Keyingi",
    "common.previous": "Oldingi",
    "common.close": "Yopish",
    "common.optional": "ixtiyoriy", // NEW

    //footer
    "footer.one": "Dushanba - Yakshanba",
    "footer.two": "Tezkor havolalar",
    "footer.logo": "Amur Restorani",
    "footer.day": "Har kuni ish",

    // Seating Areas
    "seating.title": "Restoran Joylari",
    "seating.subtitle": "Har xil tadbirlar uchun qulay o'tirish joylari",
    "seating.booking_prompt": "uchun bron qilish oynasi ochiladi",
    "seating.popular": "Mashhur",
    "seating.premium": "Premium",
    "seating.book_now": "Bron qilish",
    "seating.call": "Qo'ng'iroq",
    "seating.zal1.name": "Zal-1",
    "seating.zal1.description": "Asosiy zal, oilaviy va do'stlar bilan dam olish uchun",
    "seating.zal1.capacity": "20-30 kishi",
    "seating.zal2.name": "Zal-2",
    "seating.zal2.description": "Kichik tadbirlar va muhim uchrashuvlar uchun",
    "seating.zal2.capacity": "15-20 kishi",
    "seating.terrace.name": "Terassa",
    "seating.terrace.description": "Ochiq havoda dam olish, tabiat bilan birga",
    "seating.terrace.capacity": "25-35 kishi",
    "seating.vip.name": "VIP Zal",
    "seating.vip.description": "Maxsus tadbirlar va muhim mehmonlar uchun",
    "seating.vip.capacity": "10-15 kishi",
    "seating.price.free": "Bepul",
    "seating.feature.air_conditioner": "Konditsioner",
    "seating.feature.wifi": "Wi-Fi",
    "seating.feature.music_system": "Musiqa tizimi",
    "seating.feature.projector": "Proyektor",
    "seating.feature.special_service": "Maxsus xizmat",
    "seating.feature.open_air": "Ochiq havo",
    "seating.feature.view": "Manzara",
    "seating.feature.bbq_zone": "Barbekyu zonasi",
    "seating.feature.private_entrance": "Alohida kirish",
    "seating.feature.premium_service": "Premium xizmat",
    "seating.feature.special_menu": "Maxsus menyu",
    // Currency
    currency: "so'm",

    // Checkout Page NEW translations
    "place_order_heading": "Buyurtma berish",
    "personal_info_title": "Shaxsiy ma'lumotlar",
    "full_name_label": "To'liq ism *",
    "phone_number_label": "Telefon raqam *",
    "phone_number_readonly_tooltip": "Telefon raqamni o'zgartirib bo'lmaydi",
    "email_label": "Email (ixtiyoriy)",
    "delivery_type_title": "Yetkazib berish turi",
    "delivery_option_delivery": "Yetkazib berish",
    "delivery_option_delivery_description": "Sizning manzilingizga yetkazib beramiz",
    "delivery_option_pickup": "O'zi olib ketish",
    "delivery_option_pickup_description": "Restoranidan o'zingiz olib ketasiz",
    "delivery_option_at_restaurant": "Restoranda",
    "delivery_option_at_restaurant_description": "Restoran ichida iste'mol qilasiz",
    "delivery_address_title": "Yetkazib berish manzili",
    "address_label": "Manzil *",
    "address_placeholder": "To'liq manzilingizni kiriting",
    "getting_location_button": "Joylashuv aniqlanmoqda...",
    "detect_location_button": "Joriy joylashuvni aniqlash",
    "selected_table_title": "Tanlangan stol",
    "selected_table_description": "Siz bu stoldan buyurtma berasiz. Taomlar to'g'ridan-to'g'ri bu stolga yetkaziladi.",
    "payment_method_title": "To'lov usuli",
    "payment_method_cash": "Naqd pul",
    "payment_method_card": "Bank kartasi",
    "payment_method_click": "Click",
    "payment_method_payme": "Payme",
    "special_instructions_title": "Qo'shimcha izohlar",
    "special_instructions_placeholder": "Maxsus talablar yoki izohlar (ixtiyoriy)",
    "order_summary_title": "Buyurtma xulosasi",
    "food_price_label": "Taomlar narxi:",
    "delivery_fee_label": "Yetkazib berish:",
    "total_label": "Jami:",
    "submitting_order_button": "Buyurtma berilmoqda...",
    "login_to_order_button": "Avval tizimga kiring",
    "place_order_button": "Buyurtma berish",
    "order_confirmation_note": "Buyurtma bergandan so'ng, siz bilan bog'lanamiz",
    "geolocation_not_supported_title": "Geolocation qo'llab-quvvatlanmaydi",
    "geolocation_not_supported_description": "Brauzeringiz geolocation xizmatini qo'llab-quvvatlamaydi",
    "location_detected_title": "Joylashuv aniqlandi",
    "location_detected_description": "Sizning joylashuvingiz muvaffaqiyatli aniqlandi",
    "location_detection_failed_title": "Joylashuvni aniqlab bo'lmadi",
    "location_detection_failed_description": "Joylashuvni aniqlashda xatolik yuz berdi. Qo'lda kiriting.",
    "order_created_title": "Buyurtma yaratildi! 🎉",
    "order_created_description": "Buyurtma raqami: {{orderId}}. Taxminiy vaqt: {{estimatedTime}} daqiqa", // Supports interpolation
    "error_occurred_title": "Xatolik yuz berdi",
    "order_creation_failed_generic_description": "Buyurtma yaratishda xatolik yuz berdi. Qaytadan urinib ko'ring.",
    "sum": "so'm", // Currency key for formatPrice
  },
  ru: {
    // Navigation
    "nav.home": "Главная",
    "nav.menu": "Меню",
    "menu.subtitle": "Выберите понравившееся блюдо из нашего широкого ассортимента",
    "nav.checkout": "Оплата",
    "nav.orders": "Заказы",
    "nav.tables": "Столы",
    "nav.delivery": "Доставка",
    "nav.about": "О нас",
    "nav.contact": "Контакты",
    "nav.cart": "Корзина",

    // Hero
    "hero.title": "Добро пожаловать в ресторан Амур",
    "hero.subtitle": "Самые вкусные блюда и быстрая доставка",
    "hero.orderNow": "Заказать сейчас",
    "hero.learnMore": "Подробнее",
    "hero.national": "Закажите самые вкусные национальные блюда Узбекистана.",
    "hero.xizmat": "с гарантией качественного обслуживания",
    "hero.minute": "минута",
    "hero.map": "Местоположение",
    "hero.phone": "Контакт",

    // Categories
    "categories.title": "Категории блюд",
    "categories.items": "продуктов",
    "categories.all": "Все",

    //About
    "about.des": "Мы доставим вам домой в течение 30-40 минут.",
    "about.feature.fastDeliveryTitle": "Быстрая доставка",
    "about.feature.fastDeliveryDesc": "Мы доставим к вам домой в течение 30-40 минут",
    "about.feature.qualityGuaranteeTitle": "Гарантия качества",
    "about.feature.qualityGuaranteeDesc": "Используем только свежие и качественные продукты",
    "about.feature.deliveryTitle": "Доставка",
    "about.feature.deliveryDesc": "Служба доставки к вашему дому.",
    "about.feature.supportTitle": "Поддержка 10:00-00:00",
    "about.feature.supportDesc": "Если у вас есть вопросы, мы всегда готовы помочь",

    // Featured
    "featured.title": "Популярные блюда",
    "featured.popular": "Популярный",

    // Food
    "food.addToCart": "В корзину",
    "food.price": "Цена",
    "food.available": "Доступно",
    "food.unavailable": "Недоступно",
    "food.lowStock": "Мало осталось",
    "food.outOfStock": "Нет в наличии",
    "food.rating": "Рейтинг",
    "food.viewMenu": "Посмотреть меню", // NEW

    // Search & Sort
    "search.placeholder": "Поиск блюд...",
    "search.noResults": "Ничего не найдено",
    "search.noResultsDesc": "Измените поисковый запрос или выберите другую категорию",
    "sort.title": "Сортировка",
    "sort.name": "По названию",
    "sort.priceLow": "Сначала дешевые",
    "sort.priceHigh": "Сначала дорогие",
    "sort.rating": "По рейтингу",

    // Cart
    "cart.title": "Корзина",
    "cart.empty": "Корзина пуста",
    "cart.total": "Итого",
    "cart.checkout": "Оформить заказ",
    "cart.continue": "Продолжить покупки",
    "cart.remove": "Удалить",
    "cart.quantity": "Количество",
    "cart.subtotal": "Промежуточный итог",
    "cart.delivery": "Доставка",
    "cart.tax": "Налог",
    "cart_empty_title": "Корзина пуста", // NEW
    "cart_empty_description": "Чтобы сделать заказ, сначала добавьте блюда в корзину", // NEW

    // Orders
    "orders.title": "Заказы",
    "orders.status": "Статус",
    "orders.pending": "Ожидает",
    "orders.preparing": "Готовится",
    "orders.ready": "Готов",
    "orders.delivered": "Доставлен",
    "orders.cancelled": "Отменен",
    "orders.track": "Отследить",
    "orders.orderNumber": "Номер заказа",
    "orders.orderDate": "Дата заказа",
    "orders.totalAmount": "Общая сумма",

    // Tables
    "tables.title": "Столы",
    "tables.available": "Свободен",
    "tables.occupied": "Занят",
    "tables.reserved": "Забронирован",
    "tables.book": "Забронировать",
    "tables.capacity": "Вместимость",

    // Delivery
    "delivery.title": "Доставка",
    "delivery.address": "Адрес",
    "delivery.phone": "Телефон",
    "delivery.time": "Время",
    "delivery.free": "Бесплатная доставка",
    "delivery.cost": "Стоимость доставки",

    // About
    "about.title": "О нас",
    "about.description": "Мы специализируемся на качественных блюдах и профессиональном обслуживании",
    "about.fastDelivery": "Быстрая доставка",
    "about.fastDeliveryDesc": "Доставляем за 30 минут",
    "about.gpsTracking": "GPS отслеживание",
    "about.gpsTrackingDesc": "Отслеживайте заказ в реальном времени",
    "about.support": "Поддержка 24/7",
    "about.supportDesc": "Всегда к вашим услугам",
    "about.one": "Почему ресторан «Амур»?",

    // Contact
    "contact.title": "Свяжитесь с нами",
    "contact.description": "Есть вопросы? Свяжитесь с нами!",
    "contact.getInTouch": "Контактная информация",
    "contact.sendMessage": "Отправить сообщение",
    "contact.address": "Адрес",
    "contact.phone": "Телефон",
    "contact.email": "Email",
    "contact.hours": "Время работы",
    "contact.name": "Ваше имя",
    "contact.subject": "Тема",
    "contact.message": "Ваше сообщение",
    "contact.send": "Отправить",

    //footer
    "footer.one": "Понедельник - Воскресенье",
    "footer.two": "Быстрые ссылки",
    "footer.logo": "Ресторан Амур",
    "footer.day": "Работайте каждый день",

    // Auth
    "auth.login": "Войти",
    "auth.register": "Регистрация",
    "auth.logout": "Выйти",
    "auth.email": "Email",
    "auth.password": "Пароль",
    "auth.confirmPassword": "Подтвердите пароль",
    "auth.forgotPassword": "Забыли пароль?",

    // Common
    "common.loading": "Загрузка...",
    "common.error": "Произошла ошибка",
    "common.success": "Успешно",
    "common.cancel": "Отмена",
    "common.save": "Сохранить",
    "common.edit": "Редактировать",
    "common.delete": "Удалить",
    "common.confirm": "Подтвердить",
    "common.back": "Назад",
    "common.next": "Далее",
    "common.previous": "Предыдущий",
    "common.close": "Закрыть",
    "common.optional": "необязательно", // NEW

    // Seating Areas
    "seating.title": "Места в ресторане",
    "seating.subtitle": "Удобные места для различных мероприятий",
    "seating.booking_prompt": "откроется окно бронирования",
    "seating.popular": "Популярный",
    "seating.premium": "Премиум",
    "seating.book_now": "Забронировать",
    "seating.call": "Позвонить",
    "seating.zal1.name": "Зал-1",
    "seating.zal1.description": "Основной зал для семейного отдыха и встреч с друзьями",
    "seating.zal1.capacity": "20-30 человек",
    "seating.zal2.name": "Зал-2",
    "seating.zal2.description": "Для небольших мероприятий и важных встреч",
    "seating.zal2.capacity": "15-20 человек",
    "seating.terrace.name": "Терраса",
    "seating.terrace.description": "Отдых на свежем воздухе, на природе",
    "seating.terrace.capacity": "25-35 человек",
    "seating.vip.name": "VIP Зал",
    "seating.vip.description": "Для особых мероприятий и важных гостей",
    "seating.vip.capacity": "10-15 человек",
    "seating.price.free": "Бесплатно",
    "seating.feature.air_conditioner": "Кондиционер",
    "seating.feature.wifi": "Wi-Fi",
    "seating.feature.music_system": "Музыкальная система",
    "seating.feature.projector": "Проектор",
    "seating.feature.special_service": "Специальное обслуживание",
    "seating.feature.open_air": "Открытый воздух",
    "seating.feature.view": "Вид",
    "seating.feature.bbq_zone": "Зона барбекю",
    "seating.feature.private_entrance": "Отдельный вход",
    "seating.feature.premium_service": "Премиум обслуживание",
    "seating.feature.special_menu": "Специальное меню",
    // Currency
    currency: "сум",

    // Checkout Page NEW translations
    "place_order_heading": "Оформление заказа",
    "personal_info_title": "Личная информация",
    "full_name_label": "Полное имя *",
    "phone_number_label": "Номер телефона *",
    "phone_number_readonly_tooltip": "Номер телефона не может быть изменен",
    "email_label": "Электронная почта (необязательно)",
    "delivery_type_title": "Тип доставки",
    "delivery_option_delivery": "Доставка",
    "delivery_option_delivery_description": "Мы доставим на ваш адрес",
    "delivery_option_pickup": "Самовывоз",
    "delivery_option_pickup_description": "Вы заберете из ресторана",
    "delivery_option_at_restaurant": "В ресторане",
    "delivery_option_at_restaurant_description": "Вы будете есть внутри ресторана",
    "delivery_address_title": "Адрес доставки",
    "address_label": "Адрес *",
    "address_placeholder": "Введите ваш полный адрес",
    "getting_location_button": "Определение местоположения...",
    "detect_location_button": "Определить текущее местоположение",
    "selected_table_title": "Выбранный стол",
    "selected_table_description": "Вы будете заказывать с этого стола. Блюда будут доставлены прямо к этому столу.",
    "payment_method_title": "Способ оплаты",
    "payment_method_cash": "Наличные",
    "payment_method_card": "Банковская карта",
    "payment_method_click": "Click",
    "payment_method_payme": "Payme",
    "special_instructions_title": "Дополнительные примечания",
    "special_instructions_placeholder": "Особые пожелания или комментарии (необязательно)",
    "order_summary_title": "Сводка заказа",
    "food_price_label": "Стоимость блюд:",
    "delivery_fee_label": "Доставка:",
    "total_label": "Итого:",
    "submitting_order_button": "Размещение заказа...",
    "login_to_order_button": "Пожалуйста, войдите сначала",
    "place_order_button": "Разместить заказ",
    "order_confirmation_note": "После оформления заказа мы свяжемся с вами",
    "geolocation_not_supported_title": "Геолокация не поддерживается",
    "geolocation_not_supported_description": "Ваш браузер не поддерживает службу геолокации",
    "location_detected_title": "Местоположение определено",
    "location_detected_description": "Ваше местоположение успешно определено",
    "location_detection_failed_title": "Не удалось определить местоположение",
    "location_detection_failed_description": "Произошла ошибка при определении местоположения. Введите вручную.",
    "order_created_title": "Заказ создан! 🎉",
    "order_created_description": "Номер заказа: {{orderId}}. Приблизительное время: {{estimatedTime}} минут", // Supports interpolation
    "error_occurred_title": "Произошла ошибка",
    "order_creation_failed_generic_description": "Произошла ошибка при создании заказа. Пожалуйста, попробуйте еще раз.",
    "sum": "сум", // Currency key for formatPrice
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.menu": "Menu",
    "menu.subtitle": "Choose your favorite dish from our wide assortment",
    "nav.checkout": "Checkout",
    "nav.orders": "Orders",
    "nav.tables": "Tables",
    "nav.delivery": "Delivery",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cart": "Cart",

    // Hero
    "hero.title": "Welcome to Amur Restaurant",
    "hero.subtitle": "Delicious food and fast delivery service",
    "hero.orderNow": "Order Now",
    "hero.learnMore": "Learn More",
    "hero.national": "Order the most delicious national dishes of Uzbekistan.",
    "hero.xizmat": "with a guarantee of quality service",
    "hero.minute": "minute",
    "hero.map": "Location",
    "hero.phone": "Contact",

    // Categories
    "categories.title": "Food Categories",
    "categories.items": "items",
    "categories.all": "All",

    // Featured
    "featured.title": "Featured Foods",
    "featured.popular": "Popular",

    // Food
    "food.addToCart": "Add to Cart",
    "food.price": "Price",
    "food.available": "Available",
    "food.unavailable": "Unavailable",
    "food.lowStock": "Low Stock",
    "food.outOfStock": "Out of Stock",
    "food.rating": "Rating",
    "food.viewMenu": "View Menu", // NEW

    // Search & Sort
    "search.placeholder": "Search foods...",
    "search.noResults": "No results found",
    "search.noResultsDesc": "Change your search term or select a different category",
    "sort.title": "Sort by",
    "sort.name": "Name",
    "sort.priceLow": "Price: Low to High",
    "sort.priceHigh": "Price: High to Low",
    "sort.rating": "Rating",

    // Cart
    "cart.title": "Shopping Cart",
    "cart.empty": "Your cart is empty",
    "cart.total": "Total",
    "cart.checkout": "Checkout",
    "cart.continue": "Continue Shopping",
    "cart.remove": "Remove",
    "cart.quantity": "Quantity",
    "cart.subtotal": "Subtotal",
    "cart.delivery": "Delivery",
    "cart.tax": "Tax",
    "cart_empty_title": "Your cart is empty", // NEW
    "cart_empty_description": "To place an order, first add dishes to your cart", // NEW

    // Orders
    "orders.title": "Orders",
    "orders.status": "Status",
    "orders.pending": "Pending",
    "orders.preparing": "Preparing",
    "orders.ready": "Ready",
    "orders.delivered": "Delivered",
    "orders.cancelled": "Cancelled",
    "orders.track": "Track",
    "orders.orderNumber": "Order Number",
    "orders.orderDate": "Order Date",
    "orders.totalAmount": "Total Amount",

    // Tables
    "tables.title": "Tables",
    "tables.available": "Available",
    "tables.occupied": "Occupied",
    "tables.reserved": "Reserved",
    "tables.book": "Book",
    "tables.capacity": "Capacity",

    // Delivery
    "delivery.title": "Delivery",
    "delivery.address": "Address",
    "delivery.phone": "Phone",
    "delivery.time": "Time",
    "delivery.free": "Free delivery",
    "delivery.cost": "Delivery cost",

    // About
    "about.title": "About Us",
    "about.description": "We specialize in quality food and professional service",
    "about.fastDelivery": "Fast Delivery",
    "about.fastDeliveryDesc": "We deliver in 30 minutes",
    "about.gpsTracking": "GPS Tracking",
    "about.gpsTrackingDesc": "Track your order in real-time",
    "about.support": "24/7 Support",
    "about.supportDesc": "Always at your service",
    "about.one": "Why Amur Restaurant?",
    "about.des": "We will deliver to your home within 30-40 minutes.",
    "about.feature.fastDeliveryTitle": "Fast Delivery",
    "about.feature.fastDeliveryDesc": "We will deliver to your home within 30-40 minutes.",
    "about.feature.qualityGuaranteeTitle": "Quality Guarantee",
    "about.feature.qualityGuaranteeDesc": "We use only fresh and high-quality products.",
    "about.feature.deliveryTitle": "Delivery Service",
    "about.feature.deliveryDesc": "Delivery service to your home.",
    "about.feature.supportTitle": "10:00-00:00 Support",
    "about.feature.supportDesc": "If you have any questions, we are always ready to help.",
    // "about"

    // Contact
    "contact.title": "Contact Us",
    "contact.description": "Have questions? Get in touch with us!",
    "contact.getInTouch": "Get in Touch",
    "contact.sendMessage": "Send Message",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.hours": "Working Hours",
    "contact.name": "Your Name",
    "contact.subject": "Subject",
    "contact.message": "Your Message",
    "contact.send": "Send",

    //footer
    "footer.one": "Monday - Sunday",
    "footer.two": "Quick links",
    "footer.logo": "Amur Restaurant",
    "footer.day": "Work every day",

    // Auth
    "auth.login": "Login",
    "auth.register": "Register",
    "auth.logout": "Logout",
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.confirmPassword": "Confirm Password",
    "auth.forgotPassword": "Forgot Password?",

    // Common
    "common.loading": "Loading...",
    "common.error": "An error occurred",
    "common.success": "Success",
    "common.cancel": "Cancel",
    "common.save": "Save",
    "common.edit": "Edit",
    "common.delete": "Delete",
    "common.confirm": "Confirm",
    "common.back": "Back",
    "common.next": "Next",
    "common.previous": "Previous",
    "common.close": "Close",
    "common.optional": "optional", // NEW

    // Seating Areas
    "seating.title": "Restaurant Seating",
    "seating.subtitle": "Comfortable seating areas for various events",
    "seating.booking_prompt": "booking window will open",
    "seating.popular": "Popular",
    "seating.premium": "Premium",
    "seating.book_now": "Book Now",
    "seating.call": "Call",
    "seating.zal1.name": "Hall-1",
    "seating.zal1.description": "Main hall for family and friends gatherings",
    "seating.zal1.capacity": "20-30 people",
    "seating.zal2.name": "Hall-2",
    "seating.zal2.description": "For small events and important meetings",
    "seating.zal2.capacity": "15-20 people",
    "seating.terrace.name": "Terrace",
    "seating.terrace.description": "Outdoor relaxation, close to nature",
    "seating.terrace.capacity": "25-35 people",
    "seating.vip.name": "VIP Hall",
    "seating.vip.description": "For special events and important guests",
    "seating.vip.capacity": "10-15 people",
    "seating.price.free": "Free",
    "seating.feature.air_conditioner": "Air Conditioner",
    "seating.feature.wifi": "Wi-Fi",
    "seating.feature.music_system": "Music System",
    "seating.feature.projector": "Projector",
    "seating.feature.special_service": "Special Service",
    "seating.feature.open_air": "Open Air",
    "seating.feature.view": "View",
    "seating.feature.bbq_zone": "BBQ Zone",
    "seating.feature.private_entrance": "Private Entrance",
    "seating.feature.premium_service": "Premium Service",
    "seating.feature.special_menu": "Special Menu",
    // Currency
    currency: "UZS",

    // Checkout Page NEW translations
    "place_order_heading": "Place Order",
    "personal_info_title": "Personal Information",
    "full_name_label": "Full Name *",
    "phone_number_label": "Phone Number *",
    "phone_number_readonly_tooltip": "Phone number cannot be changed",
    "email_label": "Email (optional)",
    "delivery_type_title": "Delivery Type",
    "delivery_option_delivery": "Delivery",
    "delivery_option_delivery_description": "We deliver to your address",
    "delivery_option_pickup": "Pickup",
    "delivery_option_pickup_description": "You pick up from the restaurant",
    "delivery_option_at_restaurant": "At the Restaurant",
    "delivery_option_at_restaurant_description": "You will dine inside the restaurant",
    "delivery_address_title": "Delivery Address",
    "address_label": "Address *",
    "address_placeholder": "Enter your full address",
    "getting_location_button": "Detecting location...",
    "detect_location_button": "Detect Current Location",
    "selected_table_title": "Selected Table",
    "selected_table_description": "You will order from this table. Dishes will be delivered directly to this table.",
    "payment_method_title": "Payment Method",
    "payment_method_cash": "Cash",
    "payment_method_card": "Bank Card",
    "payment_method_click": "Click",
    "payment_method_payme": "Payme",
    "special_instructions_title": "Special Instructions",
    "special_instructions_placeholder": "Special requests or comments (optional)",
    "order_summary_title": "Order Summary",
    "food_price_label": "Food Price:",
    "delivery_fee_label": "Delivery:",
    "total_label": "Total:",
    "submitting_order_button": "Submitting Order...",
    "login_to_order_button": "Please log in first",
    "place_order_button": "Place Order",
    "order_confirmation_note": "After placing the order, we will contact you",
    "geolocation_not_supported_title": "Geolocation not supported",
    "geolocation_not_supported_description": "Your browser does not support geolocation service",
    "location_detected_title": "Location detected",
    "location_detected_description": "Your location was successfully detected",
    "location_detection_failed_title": "Failed to detect location",
    "location_detection_failed_description": "An error occurred while detecting location. Please enter manually.",
    "order_created_title": "Order created! �",
    "order_created_description": "Order number: {{orderId}}. Estimated time: {{estimatedTime}} minutes", // Supports interpolation
    "error_occurred_title": "An error occurred",
    "order_creation_failed_generic_description": "An error occurred while creating the order. Please try again.",
    "sum": "UZS", // Currency key for formatPrice
  },
}

export const useLanguage = create<LanguageStore>()(
  persist(
    (set, get) => ({
      language: "uz",
      setLanguage: (language) => set({ language }),
      t: (key, replacements?: Record<string, string | number>) => {
        const { language } = get()
        let translation = (translations as any)[language][key] || key;

        if (replacements) {
          for (const [placeholder, value] of Object.entries(replacements)) {
            translation = translation.replace(new RegExp(`{{${placeholder}}}`, 'g'), String(value));
          }
        }
        return translation;
      },
    }),
    {
      name: "language-storage",
    },
  ),
)
