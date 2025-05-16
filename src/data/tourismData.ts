
import { 
  MapPin, Building, Landmark, Navigation, Hotel, Tent, 
  Star, Ticket, Coffee, Utensils, ShoppingBag, TreePalm, 
  Sailboat, Mountain, Camera, LucideIcon 
} from 'lucide-react';
import React from 'react';

export interface Attraction {
  name: string;
  nameAr: string;
  icon: React.ReactNode;
  description: string;
  descriptionAr: string;
}

export interface Destination {
  id: number;
  name: string;
  nameAr: string;
  image: string;
  description: string;
  descriptionAr: string;
  attractions: Attraction[];
  gallery: string[];
}

export const destinations: Destination[] = [
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
      "https://www.urtrips.com/wp-content/uploads/2017/07/hotels-in-abu-dhabi.jpg",
      "https://www.urtrips.com/wp-content/uploads/2018/11/abu-dhabi-beaches.jpg",
      "https://www.urtrips.com/wp-content/uploads/2017/07/Emirates-Heritage-Club.jpg"
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
      "https://cdn.al-ain.com/lg/images/2022/7/14/143-154627-most-beautiful-tourist-places-sharjah-2.jpeg",
      "https://cdn.al-ain.com/lg/images/2022/7/14/143-154627-most-beautiful-tourist-places-sharjah-3.jpeg",
      "https://cdn.al-ain.com/lg/images/2022/7/14/143-154628-most-beautiful-tourist-places-sharjah-4.jpeg"
    ]
  },
  {
    id: 4,
    name: 'Ajman',
    nameAr: 'عجمان',
    image: "https://cdn.al-ain.com/images/2021/1/14/143-105018-most-beautiful-tourist-places-ajman_700x400.jpg",
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
      "https://cdn2.wingie.com/uploads/f_webp,s_500x300,q_60,fit_cover/ajman_museum_43043_3286bd3d71.jpeg",
      "https://cdn2.wingie.com/uploads/f_webp,s_500x300,q_60,fit_cover/hamidiya_park_43042_61abdb8ff3.jpeg",
      "https://cdn2.wingie.com/uploads/f_webp,s_500x300,q_60,fit_cover/ajman_museum_43043_3286bd3d71.jpeg"
    ]
  },
  {
    id: 5,
    name: 'Fujairah',
    nameAr: 'الفجيرة',
    image: "https://www.propertyfinder.ae/blog/wp-content/uploads/2023/07/1-77.jpg",
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
      "https://www.urtrips.com/wp-content/uploads/2022/09/Fujairah-Museum-13.jpg",
      "https://www.urtrips.com/wp-content/uploads/2022/09/fujairah-museum-2-1-1024x575.jpg",
      "https://www.urtrips.com/wp-content/uploads/2018/11/Fujairah-mall.jpg"
    ]
  },
  {
    id: 6,
    name: 'Ras Al Khaimah',
    nameAr: 'رأس الخيمة',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOmsI980OYdHMFvtPLjCU_2tEqhIb1N2_5Vw&s",
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
      "https://cdn2.wingie.com/uploads/f_webp,s_500x300,q_60,fit_cover/flamingo_beach_ras_al_khaimah_43049_f5b5302eed.jpeg",
      "https://cdn2.wingie.com/uploads/f_webp,s_500x300,q_60,fit_cover/national_museum_of_ras_al_khaimah_44239_9d04c3b36b.jpeg",
      "https://cdn2.wingie.com/uploads/f_webp,s_500x300,q_60,fit_cover/manar_mall_44349_425006b204.jpeg"
    ]
  }
];
