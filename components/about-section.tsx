import { Card, CardContent } from "@/components/ui/card"
import { Clock, Shield, Truck, Users } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"


const features = [
  {
    icon: Clock,
    title: "Tez Yetkazib Berish",
    description: "30-40 daqiqa ichida sizning uyingizgacha yetkazib beramiz",
  },
  {
    icon: Shield,
    title: "Sifat Kafolati",
    description: "Faqat yangi va sifatli mahsulotlardan foydalanmiz",
  },
  {
    icon: Truck,
    title: "Yetkazib Berish",
    description: "Sizni uyingizga yetkazib berish xizmati.",
  },
  {
    icon: Users,
    title: "10:00-00:00 Qo'llab-quvvatlash",
    description: "Har qanday savolingiz bo'lsa, biz doimo yordam berishga tayyormiz",
  },
]

export function AboutSection() {
  const {t} = useLanguage()
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('about.one')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          {t("about.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
