
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

    // Food
    "food.addToCart": "Savatga qo'shish",
    "food.price": "Narx",
    "food.available": "Mavjud",
    "food.unavailable": "Mavjud emas",
    "food.lowStock": "Kam qoldi",
    "food.outOfStock": "Tugagan",
    "food.rating": "Reyting",

    // Search & Sort
    "search.placeholder": "Taom qidirish...",
    "search.noResults": "Hech narsa topilmadi",
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
  },
  ru: {
    // Navigation
    "nav.home": "Главная",
    "nav.menu": "Меню",
    "nav.checkout": "Оплата",
    "nav.orders": "Заказы",
    "nav.tables": "Столы",
    "nav.delivery": "Доставка",
    "nav.about": "О нас",
    "nav.contact": "Контакты",
    "nav.cart": "Корзина",

    // Hero
    "hero.title": "Добро пожаловать в Amur",
    "hero.subtitle": "Самые вкусные блюда и быстрая доставка",
    "hero.orderNow": "Заказать",
    "hero.learnMore": "Подробнее",
    "hero.national": "Закажите самые вкусные национальные блюда Узбекистана.",
    "hero.xizmat": "с гарантией качественного обслуживания",
    "hero.minute": "минута",
    "hero.map": "расположение",
    "hero.phone": "контакт",

    // Categories
    "categories.title": "Категории блюд",
    "categories.items": "блюд",
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

    // Food
    "food.addToCart": "В корзину",
    "food.price": "Цена",
    "food.available": "Доступно",
    "food.unavailable": "Недоступно",
    "food.lowStock": "Мало осталось",
    "food.outOfStock": "Нет в наличии",
    "food.rating": "Рейтинг",

    // Search & Sort
    "search.placeholder": "Поиск блюд...",
    "search.noResults": "Ничего не найдено",
    "sort.title": "Сортировка",
    "sort.name": "По названию",
    "sort.priceLow": "Дешевые",
    "sort.priceHigh": "Дорогие",
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
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.menu": "Menu",
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
    "hero.map": "location",
    "hero.phone": "contact",

    // Categories
    "categories.title": "Food Categories",
    "categories.items": "items",
    "categories.all": "All",

    // Featured
    "featured.title": "Featured Foods",

    // Food
    "food.addToCart": "Add to Cart",
    "food.price": "Price",
    "food.available": "Available",
    "food.unavailable": "Unavailable",
    "food.lowStock": "Low Stock",
    "food.outOfStock": "Out of Stock",
    "food.rating": "Rating",

    // Search & Sort
    "search.placeholder": "Search foods...",
    "search.noResults": "No results found",
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
  },
}

export const useLanguage = create<LanguageStore>()(
  persist(
    (set, get) => ({
      language: "uz",
      setLanguage: (language) => set({ language }),
      t: (key) => {
        const { language } = get()
        return (translations as any)[language][key] || key
      },
    }),
    {
      name: "language-storage",
    },
  ),
)