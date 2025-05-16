
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Building, Landmark, Navigation, Hotel, Tent, Star, Ticket } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';

const Tourism: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const destinations = [
    {
      id: 1,
      name: 'Dubai',
      nameAr: 'دبي',
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
      description: "Experience the luxurious city of Dubai with its iconic Burj Khalifa, beautiful beaches, and world-class shopping malls.",
      descriptionAr: "استمتع بمدينة دبي الفاخرة مع برج خليفة الشهير والشواطئ الجميلة ومراكز التسوق العالمية.",
      attractions: [
        {
          name: "Burj Khalifa",
          nameAr: "برج خليفة",
          icon: <Building />,
          description: "The world's tallest building offering spectacular views.",
          descriptionAr: "أطول مبنى في العالم يوفر إطلالات رائعة."
        },
        {
          name: "Palm Jumeirah",
          nameAr: "نخلة جميرا",
          icon: <Landmark />,
          description: "Artificial archipelago with luxury hotels and residences.",
          descriptionAr: "أرخبيل اصطناعي مع فنادق ومساكن فاخرة."
        },
        {
          name: "Dubai Mall",
          nameAr: "دبي مول",
          icon: <Building />,
          description: "One of the largest shopping malls in the world.",
          descriptionAr: "أحد أكبر مراكز التسوق في العالم."
        }
      ]
    },
    {
      id: 2,
      name: 'Abu Dhabi',
      nameAr: 'أبو ظبي',
      image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=800&auto=format&fit=crop",
      description: "Discover the capital of UAE with its stunning Sheikh Zayed Grand Mosque, Louvre Abu Dhabi, and beautiful corniche.",
      descriptionAr: "اكتشف عاصمة الإمارات مع مسجد الشيخ زايد الكبير المذهل، ومتحف اللوفر أبوظبي، والكورنيش الجميل.",
      attractions: [
        {
          name: "Sheikh Zayed Grand Mosque",
          nameAr: "جامع الشيخ زايد الكبير",
          icon: <Landmark />,
          description: "One of the largest mosques in the world with incredible architecture.",
          descriptionAr: "أحد أكبر المساجد في العالم بهندسة معمارية مذهلة."
        },
        {
          name: "Louvre Abu Dhabi",
          nameAr: "اللوفر أبوظبي",
          icon: <Building />,
          description: "A universal museum showcasing art from around the world.",
          descriptionAr: "متحف عالمي يعرض الفن من جميع أنحاء العالم."
        },
        {
          name: "Yas Island",
          nameAr: "جزيرة ياس",
          icon: <MapPin />,
          description: "Entertainment destination with theme parks and attractions.",
          descriptionAr: "وجهة ترفيهية تضم حدائق ومعالم جذب."
        }
      ]
    },
    {
      id: 3,
      name: 'Sharjah',
      nameAr: 'الشارقة',
      image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=800&auto=format&fit=crop",
      description: "Experience the cultural capital of the UAE with its museums, heritage areas, and beautiful mosques.",
      descriptionAr: "استمتع بعاصمة الإمارات الثقافية بمتاحفها ومناطقها التراثية ومساجدها الجميلة.",
      attractions: [
        {
          name: "Sharjah Museum of Islamic Civilization",
          nameAr: "متحف الشارقة للحضارة الإسلامية",
          icon: <Building />,
          description: "Showcasing Islamic art, culture, and scientific achievements.",
          descriptionAr: "يعرض الفن والثقافة والإنجازات العلمية الإسلامية."
        },
        {
          name: "Al Noor Mosque",
          nameAr: "مسجد النور",
          icon: <Landmark />,
          description: "Beautiful mosque with stunning Ottoman architecture.",
          descriptionAr: "مسجد جميل بهندسة معمارية عثمانية رائعة."
        },
        {
          name: "Heart of Sharjah",
          nameAr: "قلب الشارقة",
          icon: <MapPin />,
          description: "Historic district showcasing traditional Gulf architecture.",
          descriptionAr: "حي تاريخي يعرض العمارة الخليجية التقليدية."
        }
      ]
    },
    {
      id: 4,
      name: 'Ajman',
      nameAr: 'عجمان',
      image: "https://images.unsplash.com/photo-1608483047539-0291e3cbd0ed?q=80&w=800&auto=format&fit=crop",
      description: "Enjoy the smallest emirate with its beautiful beaches and relaxed atmosphere.",
      descriptionAr: "استمتع بأصغر إمارة بشواطئها الجميلة وأجوائها الهادئة.",
      attractions: [
        {
          name: "Ajman Beach",
          nameAr: "شاطئ عجمان",
          icon: <Navigation />,
          description: "Beautiful public beach with white sand and clear water.",
          descriptionAr: "شاطئ عام جميل برمال بيضاء ومياه صافية."
        },
        {
          name: "Ajman Museum",
          nameAr: "متحف عجمان",
          icon: <Building />,
          description: "Former fort showcasing local heritage and history.",
          descriptionAr: "حصن سابق يعرض التراث والتاريخ المحلي."
        }
      ]
    },
    {
      id: 5,
      name: 'Fujairah',
      nameAr: 'الفجيرة',
      image: "https://images.unsplash.com/photo-1568506759788-0c1d6565c149?q=80&w=800&auto=format&fit=crop",
      description: "Discover the mountainous emirate with its beautiful beaches and rich history.",
      descriptionAr: "اكتشف الإمارة الجبلية بشواطئها الجميلة وتاريخها الغني.",
      attractions: [
        {
          name: "Al Bidyah Mosque",
          nameAr: "مسجد البدية",
          icon: <Landmark />,
          description: "UAE's oldest mosque dating back to the 15th century.",
          descriptionAr: "أقدم مسجد في الإمارات يعود تاريخه إلى القرن الخامس عشر."
        },
        {
          name: "Fujairah Fort",
          nameAr: "قلعة الفجيرة",
          icon: <Building />,
          description: "Historic fort offering insights into the region's past.",
          descriptionAr: "قلعة تاريخية تقدم نظرة على ماضي المنطقة."
        }
      ]
    },
    {
      id: 6,
      name: 'Ras Al Khaimah',
      nameAr: 'رأس الخيمة',
      image: "https://images.unsplash.com/photo-1691640800740-0f3423e062ab?q=80&w=800&auto=format&fit=crop",
      description: "Experience the northernmost emirate with its mountains, beaches, and adventure activities.",
      descriptionAr: "استمتع بالإمارة الشمال��ة بجبالها وشواطئها وأنشطتها المغامرة.",
      attractions: [
        {
          name: "Jebel Jais",
          nameAr: "جبل جيس",
          icon: <Tent />,
          description: "UAE's highest mountain offering hiking and the world's longest zipline.",
          descriptionAr: "أعلى جبل في الإمارات يوفر المشي لمسافات طويلة وأطول خط انزلاق في العالم."
        },
        {
          name: "Al Jazirah Al Hamra",
          nameAr: "الجزيرة الحمراء",
          icon: <Building />,
          description: "Abandoned 'ghost town' showcasing traditional architecture.",
          descriptionAr: "مدينة أشباح مهجورة تعرض العمارة التقليدية."
        }
      ]
    }
  ];
  
  const tourPackages = [
    {
      id: 1,
      name: "Dubai City Tour",
      nameAr: "جولة مدينة دبي",
      duration: "1 day",
      durationAr: "يوم واحد",
      price: "FREE",
      priceAr: "مجاناً",
      icon: <MapPin />,
      description: "Explore the highlights of Dubai including Burj Khalifa, Dubai Mall, and traditional souks.",
      descriptionAr: "استكشف معالم دبي بما في ذلك برج خليفة ودبي مول والأسواق التقليدية."
    },
    {
      id: 2,
      name: "Abu Dhabi Cultural Tour",
      nameAr: "جولة أبوظبي الثقافية",
      duration: "1 day",
      durationAr: "يوم واحد",
      price: "FREE",
      priceAr: "مجاناً",
      icon: <Landmark />,
      description: "Visit the Sheikh Zayed Grand Mosque, Louvre Abu Dhabi, and the Presidential Palace.",
      descriptionAr: "زيارة مسجد الشيخ زايد الكبير واللوفر أبوظبي والقصر الرئاسي."
    },
    {
      id: 3,
      name: "Desert Safari Adventure",
      nameAr: "مغامرة سفاري الصحراء",
      duration: "Half day",
      durationAr: "نصف يوم",
      price: "FREE",
      priceAr: "مجاناً",
      icon: <Tent />,
      description: "Experience dune bashing, camel riding, and traditional entertainment in the desert.",
      descriptionAr: "استمتع بقيادة الكثبان الرملية وركوب الجمال والترفيه التقليدي في الصحراء."
    },
    {
      id: 4,
      name: "UAE East Coast Tour",
      nameAr: "جولة الساحل الشرقي للإمارات",
      duration: "1 day",
      durationAr: "يوم واحد",
      price: "FREE",
      priceAr: "مجاناً",
      icon: <Navigation />,
      description: "Visit Fujairah and Khor Fakkan to experience mountains, beaches, and historic sites.",
      descriptionAr: "زيارة الفجيرة وخور فكان لتجربة الجبال والشواطئ والمواقع التاريخية."
    }
  ];

  return (
    <PageLayout 
      title={isRTL ? "السياحة في الإمارات" : "UAE Tourism"} 
      description={isRTL ? "استكشف أفضل الوجهات السياحية في الإمارات العربية المتحدة" : "Explore the best tourism destinations in the United Arab Emirates"}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gclx-navy to-blue-950 text-white py-16 md:py-24 w-full">
        <div className="container-custom">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            {isRTL ? "استكشف روعة الإمارات العربية المتحدة" : "Explore the Beauty of UAE"}
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto text-center">
            {isRTL ? 
              "رحلات سياحية مميزة داخل الإمارات العربية المتحدة. تجارب لا تُنسى ومعالم مذهلة تنتظرك!" : 
              "Discover exceptional tourism experiences within the United Arab Emirates. Unforgettable adventures and amazing landmarks await you!"}
          </p>
          
          {/* Free Tours Banner */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-4 max-w-2xl mx-auto mb-8 transform rotate-1 shadow-lg">
            <div className="transform -rotate-1 flex items-center justify-center">
              <Ticket className="h-7 w-7 mr-2 text-yellow-300 animate-pulse" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {isRTL ? "جميع الرحلات مجانية تماماً! لا حجز مطلوب" : "ALL TOURS ARE COMPLETELY FREE! NO BOOKING REQUIRED"}
              </h2>
              <Star className="h-7 w-7 ml-2 text-yellow-300 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section className="py-16 bg-white w-full">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Ticket className="h-6 w-6 text-red-500" />
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gclx-navy">
              {isRTL ? "باقات سياحية مميزة - مجاناً" : "Featured Tour Packages - FREE"}
            </h2>
            <Ticket className="h-6 w-6 text-red-500" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourPackages.map((tourPackage) => (
              <Card key={tourPackage.id} className="hover:shadow-lg transition-shadow duration-300 border-2 border-transparent hover:border-gclx-navy relative overflow-hidden">
                {/* FREE Badge */}
                <div className="absolute -top-1 -right-12 bg-red-500 text-white font-bold py-1 px-10 transform rotate-45 shadow-md">
                  {isRTL ? "مجاناً" : "FREE"}
                </div>
                
                <CardContent className="p-6 pt-8">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-gclx-navy rounded-full text-white">{tourPackage.icon}</div>
                    <h3 className="text-lg font-semibold text-gclx-navy">
                      {isRTL ? tourPackage.nameAr : tourPackage.name}
                    </h3>
                  </div>
                  <div className="flex justify-between mb-2 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Hotel className="h-4 w-4" />
                      {isRTL ? tourPackage.durationAr : tourPackage.duration}
                    </span>
                    <span className="font-bold text-red-500 flex items-center">
                      <Ticket className="h-4 w-4 mr-1" />
                      {isRTL ? tourPackage.priceAr : tourPackage.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mt-3">
                    {isRTL ? tourPackage.descriptionAr : tourPackage.description}
                  </p>
                  <Button className="w-full mt-4 bg-gclx-navy hover:bg-blue-900">
                    {isRTL ? "انضم للرحلة - مجاناً" : "Join Tour - FREE"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" className="border-gclx-navy text-gclx-navy hover:bg-gclx-navy hover:text-white">
              {isRTL ? "عرض جميع الباقات" : "View All Packages"}
            </Button>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 bg-gray-50 w-full">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gclx-navy">
            {isRTL ? "الوجهات السياحية" : "Tourism Destinations"}
          </h2>
          
          <Tabs defaultValue="dubai" className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
              {destinations.map((destination) => (
                <TabsTrigger key={destination.id} value={destination.name.toLowerCase().replace(' ', '-')}>
                  {isRTL ? destination.nameAr : destination.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {destinations.map((destination) => (
              <TabsContent key={destination.id} value={destination.name.toLowerCase().replace(' ', '-')}>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  <div className="lg:col-span-2">
                    <div className="relative">
                      <img 
                        src={destination.image} 
                        alt={isRTL ? destination.nameAr : destination.name} 
                        className="w-full h-[300px] lg:h-full object-cover rounded-lg shadow-md"
                      />
                      <div className="absolute -top-3 -right-3 bg-red-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg flex items-center">
                        <Ticket className="mr-1" />
                        {isRTL ? "رحلات مجانية" : "FREE TOURS"}
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="text-2xl font-bold mb-4 text-gclx-navy">
                      {isRTL ? destination.nameAr : destination.name}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {isRTL ? destination.descriptionAr : destination.description}
                    </p>
                    
                    <h4 className="text-lg font-semibold mb-4 text-gclx-navy">
                      {isRTL ? "أبرز المعالم" : "Top Attractions"}
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {destination.attractions.map((attraction, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                          <div className="mt-1 text-gclx-gold">{attraction.icon}</div>
                          <div>
                            <h5 className="font-medium text-gclx-navy">
                              {isRTL ? attraction.nameAr : attraction.name}
                            </h5>
                            <p className="text-sm text-gray-600">
                              {isRTL ? attraction.descriptionAr : attraction.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <Button className="bg-gclx-gold text-white hover:bg-yellow-500">
                        {isRTL ? "استكشف المزيد" : "Explore More"}
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gclx-navy text-white w-full">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {isRTL ? "جاهز لاستكشاف الإمارات؟" : "Ready to Explore the UAE?"}
          </h2>
          <div className="bg-red-500 rounded-lg py-3 px-6 inline-flex items-center justify-center mb-6">
            <Star className="h-5 w-5 mr-2" />
            <span className="font-bold text-xl">
              {isRTL ? "انضم لرحلتك المجانية الآن! لا حجز مطلوب" : "Join Your FREE Trip Now! NO BOOKING REQUIRED"}
            </span>
            <Star className="h-5 w-5 ml-2" />
          </div>
          <p className="mb-8 max-w-2xl mx-auto">
            {isRTL ? 
              "دعنا نساعدك في تخطيط رحلتك المثالية في الإمارات العربية المتحدة. اتصل بنا اليوم!" : 
              "Let us help you plan your perfect UAE journey. Contact us today!"}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-gclx-navy hover:bg-gray-100 font-bold">
              <Link to="/contact">
                {isRTL ? "تواصل معنا" : "Contact Us"}
              </Link>
            </Button>
            <Button asChild variant="highlight" size="lg" className="shadow-lg transform hover:scale-105 transition-all">
              <Link to="/">
                {isRTL ? "العودة إلى الرئيسية" : "Back to Home"}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Tourism;
