import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MapPin, Building, Landmark, Navigation, Hotel, Tent, 
  Star, Ticket, Coffee, Utensils, ShoppingBag, TreePalm, 
  Sailboat, Mountain, Camera 
} from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

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
        },
        {
          name: "Dubai Marina",
          nameAr: "مرسى دبي",
          icon: <Sailboat />,
          description: "Artificial canal city with luxury lifestyle.",
          descriptionAr: "مدينة قناة اصطناعية مع أسلوب حياة فاخر."
        },
        {
          name: "Dubai Miracle Garden",
          nameAr: "حديقة دبي المعجزة",
          icon: <TreePalm />,
          description: "The world's largest natural flower garden.",
          descriptionAr: "أكبر حديقة زهور طبيعية في العالم."
        },
        {
          name: "Dubai Frame",
          nameAr: "برواز دبي",
          icon: <Camera />,
          description: "Iconic structure offering views of old and new Dubai.",
          descriptionAr: "هيكل أيقوني يوفر إطلالات على دبي القديمة والجديدة."
        }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=800&auto=format&fit=crop"
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
        },
        {
          name: "Emirates Palace",
          nameAr: "قصر الإمارات",
          icon: <Hotel />,
          description: "Luxurious hotel featuring gold, marble and crystals.",
          descriptionAr: "فندق فاخر يضم الذهب والرخام والكريستال."
        },
        {
          name: "Ferrari World",
          nameAr: "عالم فيراري",
          icon: <Ticket />,
          description: "World's first Ferrari-branded theme park.",
          descriptionAr: "أول مدينة ملاهي تحمل العلامة التجارية فيراري في العالم."
        }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1516690541958-2bd02d315a51?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1528706869306-82087a3c1320?q=80&w=800&auto=format&fit=crop"
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
        },
        {
          name: "Sharjah Arts Museum",
          nameAr: "متحف الشارقة للفنون",
          icon: <Camera />,
          description: "Largest art museum in the UAE with diverse collections.",
          descriptionAr: "أكبر متحف للفنون في الإمارات مع مجموعات متنوعة."
        },
        {
          name: "Al Majaz Waterfront",
          nameAr: "واجهة المجاز المائية",
          icon: <Sailboat />,
          description: "Stunning waterfront with fountain shows and activities.",
          descriptionAr: "واجهة مائية مذهلة مع عروض نافورة وأنشطة."
        }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1578895101408-1a6398d10ed7?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1583778176476-2461ae56641a?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1576605996271-155bf0d733c4?q=80&w=800&auto=format&fit=crop"
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
        },
        {
          name: "Al Zorah Nature Reserve",
          nameAr: "محمية الزورا الطبيعية",
          icon: <TreePalm />,
          description: "Mangrove forests with rich biodiversity and bird watching.",
          descriptionAr: "غابات المانغروف مع تنوع بيولوجي غني ومراقبة الطيور."
        },
        {
          name: "Ajman Corniche",
          nameAr: "كورنيش عجمان",
          icon: <Navigation />,
          description: "Picturesque waterfront promenade with shops and cafes.",
          descriptionAr: "ممشى مائي خلاب مع المحلات والمقاهي."
        }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1576401141838-35d722833e69?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=800&auto=format&fit=crop"
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
        },
        {
          name: "Snoopy Island",
          nameAr: "جزيرة سنوبي",
          icon: <Navigation />,
          description: "Famous spot for snorkeling and diving with marine life.",
          descriptionAr: "مكان مشهور للغوص والغطس مع الحياة البحرية."
        },
        {
          name: "Hajar Mountains",
          nameAr: "جبال الحجر",
          icon: <Mountain />,
          description: "Stunning mountain range with hiking trails and wadis.",
          descriptionAr: "سلسلة جبال مذهلة مع مسارات للمشي والوديان."
        },
        {
          name: "Al Aqah Beach",
          nameAr: "شاطئ العقة",
          icon: <Navigation />,
          description: "Beautiful sandy beach with crystal-clear waters.",
          descriptionAr: "شاطئ رملي جميل بمياه صافية كالكريستال."
        }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1572931207882-ec8628645985?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1576605996271-155bf0d733c4?q=80&w=800&auto=format&fit=crop"
      ]
    },
    {
      id: 6,
      name: 'Ras Al Khaimah',
      nameAr: 'رأس الخيمة',
      image: "https://images.unsplash.com/photo-1691640800740-0f3423e062ab?q=80&w=800&auto=format&fit=crop",
      description: "Experience the northernmost emirate with its mountains, beaches, and adventure activities.",
      descriptionAr: "استمتع بالإمارة الشمالية بجبالها وشواطئها وأنشطتها المغامرة.",
      attractions: [
        {
          name: "Jebel Jais",
          nameAr: "جبل جيس",
          icon: <Mountain />,
          description: "UAE's highest mountain offering hiking and the world's longest zipline.",
          descriptionAr: "أعلى جبل في الإمارات يوفر المشي لمسافات طويلة وأطول خط انزلاق في العالم."
        },
        {
          name: "Al Jazirah Al Hamra",
          nameAr: "الجزيرة الحمراء",
          icon: <Building />,
          description: "Abandoned 'ghost town' showcasing traditional architecture.",
          descriptionAr: "مدينة أشباح مهجورة تعرض العمارة التقليدية."
        },
        {
          name: "Dhayah Fort",
          nameAr: "قلعة ضايا",
          icon: <Landmark />,
          description: "Historic 18th-century fortress with panoramic views.",
          descriptionAr: "قلعة تاريخية من القرن الثامن عشر مع إطلالات بانورامية."
        },
        {
          name: "Al Marjan Island",
          nameAr: "جزيرة المرجان",
          icon: <Sailboat />,
          description: "Man-made island with luxury resorts and beaches.",
          descriptionAr: "جزيرة من صنع الإنسان مع منتجعات فاخرة وشواطئ."
        },
        {
          name: "Khatt Springs",
          nameAr: "عيون الخط",
          icon: <Utensils />,
          description: "Natural hot springs with therapeutic properties.",
          descriptionAr: "ينابيع ساخنة طبيعية ذات خصائص علاجية."
        }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1634215756898-b405c350921f?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1578895101408-1a6398d10ed7?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1559628233-100c798642d4?q=80&w=800&auto=format&fit=crop"
      ]
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
              "اكتشف المعالم المذهلة في الإمارات العربية المتحدة من المدن الحديثة إلى التراث الغني والمناظر الطبيعية الخلابة." : 
              "Discover the amazing landmarks in the United Arab Emirates from modern cities to rich heritage and stunning landscapes."}
          </p>
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
                    <div className="space-y-6">
                      <div className="relative">
                        <img 
                          src={destination.image} 
                          alt={isRTL ? destination.nameAr : destination.name} 
                          className="w-full h-[300px] object-cover rounded-lg shadow-md"
                        />
                      </div>
                      
                      {/* Image Gallery */}
                      <div className="mt-4">
                        <h4 className="text-lg font-semibold mb-3 text-gclx-navy">
                          {isRTL ? "معرض الصور" : "Image Gallery"}
                        </h4>
                        <Carousel className="w-full">
                          <CarouselContent>
                            {destination.gallery.map((image, index) => (
                              <CarouselItem key={index} className="md:basis-1/2">
                                <div className="p-1">
                                  <Card>
                                    <CardContent className="flex items-center justify-center p-2">
                                      <img 
                                        src={image}
                                        alt={`${destination.name} scene ${index + 1}`}
                                        className="w-full h-[150px] object-cover rounded-md"
                                      />
                                    </CardContent>
                                  </Card>
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className={isRTL ? "right-0" : "left-0"} />
                          <CarouselNext className={isRTL ? "left-0" : "right-0"} />
                        </Carousel>
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
                        <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
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
          <p className="mb-8 max-w-2xl mx-auto">
            {isRTL ? 
              "دعنا نساعدك في تخطيط رحلتك المثالية في الإمارا�� العربية المتحدة. اتصل بنا اليوم!" : 
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
