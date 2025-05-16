
import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import NewsletterSignup from '@/components/NewsletterSignup';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';

// Using the same brands array from Collections page
const brands = [{
  name: "Nike",
  slug: "nike",
  logo: "https://logo.clearbit.com/nike.com"
}, {
  name: "Amazon",
  slug: "amazon",
  logo: "https://logo.clearbit.com/amazon.com"
}, {
  name: "Noon",
  slug: "noon",
  logo: "https://logo.clearbit.com/noon.com"
}, {
  name: "Talabat",
  slug: "talabat",
  logo: "https://logo.clearbit.com/talabat.com"
}, {
  name: "Carrefour",
  slug: "carrefour",
  logo: "https://logo.clearbit.com/carrefour.com"
}, {
  name: "Namshi",
  slug: "namshi",
  logo: "https://logo.clearbit.com/namshi.com"
}, {
  name: "IKEA",
  slug: "ikea",
  logo: "https://logo.clearbit.com/ikea.com"
}, {
  name: "Puma",
  slug: "puma",
  logo: "https://logo.clearbit.com/puma.com"
}, {
  name: "Steve Madden",
  slug: "steve-madden",
  logo: "https://logo.clearbit.com/stevemadden.com"
}, {
  name: "Charles & Keith",
  slug: "charles-keith",
  logo: "https://logo.clearbit.com/charleskeith.com"
}, {
  name: "Jimmy Choo",
  slug: "jimmy-choo",
  logo: "https://logo.clearbit.com/jimmychoo.com"
}, {
  name: "Christian Louboutin",
  slug: "christian-louboutin",
  logo: "https://logo.clearbit.com/christianlouboutin.com"
}, {
  name: "Ecco",
  slug: "ecco",
  logo: "https://logo.clearbit.com/ecco.com"
}, {
  name: "Calvin Klein",
  slug: "calvin-klein",
  logo: "https://logo.clearbit.com/calvinklein.com"
}, {
  name: "Zara",
  slug: "zara",
  logo: "https://logo.clearbit.com/zara.com"
}, {
  name: "H&M",
  slug: "hm",
  logo: "https://logo.clearbit.com/hm.com"
}, {
  name: "Mango",
  slug: "mango",
  logo: "https://logo.clearbit.com/mango.com"
}, {
  name: "Forever 21",
  slug: "forever-21",
  logo: "https://logo.clearbit.com/forever21.com"
}, {
  name: "Tommy Hilfiger",
  slug: "tommy-hilfiger",
  logo: "https://logo.clearbit.com/tommy.com"
}, {
  name: "Dolce & Gabbana",
  slug: "dolce-gabbana",
  logo: "https://logo.clearbit.com/dolcegabbana.com"
}, {
  name: "Gucci",
  slug: "gucci",
  logo: "https://logo.clearbit.com/gucci.com"
}, {
  name: "Louis Vuitton",
  slug: "louis-vuitton",
  logo: "https://logo.clearbit.com/louisvuitton.com"
}, {
  name: "Chanel",
  slug: "chanel",
  logo: "https://logo.clearbit.com/chanel.com"
}, {
  name: "Versace",
  slug: "versace",
  logo: "https://logo.clearbit.com/versace.com"
}, {
  name: "Balenciaga",
  slug: "balenciaga",
  logo: "https://logo.clearbit.com/balenciaga.com"
}, {
  name: "Valentino",
  slug: "valentino",
  logo: "https://logo.clearbit.com/valentino.com"
}, {
  name: "Fendi",
  slug: "fendi",
  logo: "https://logo.clearbit.com/fendi.com"
}, {
  name: "Ralph Lauren",
  slug: "ralph-lauren",
  logo: "https://logo.clearbit.com/ralphlauren.com"
}];

// Brand specific products data
const brandProducts = {
  "nike": [{
    id: "nike-1",
    title: "Nike Air Force 1 '07",
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1fa59f61-a6e7-4d4c-b2dc-aed4ef1a1a00/AIR+FORCE+1+%2707.png",
    link: "https://www.nike.com/eg/"
  }, {
    id: "nike-2",
    title: "Nike Heritage",
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3121c131-6146-4906-84e5-0c7383ffd1bb/NK+HERITAGE+EUGENE+BKPK.png",
    link: "https://www.nike.com/eg/"
  }, {
    id: "nike-3",
    title: "Nike Dri-FIT Club",
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ef83354f-87cf-4602-8f48-13e09e6ffebe/U+NK+DF+CLUB+CAP+U+AB+FL+P.png",
    link: "https://www.nike.com/eg/"
  }, {
    id: "nike-4",
    title: "Nike Tiempo Legend 10 Elite",
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/df5e52cb-a7ef-402e-b0ff-0ddf5101e0a3/LEGEND+10+ELITE+FG.png",
    link: "https://www.nike.com/eg/"
  }, {
    id: "nike-5",
    title: "Nike Elemental",
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0e386239-5bab-4ceb-91b2-4e5985eff838/Y+NK+ELMNTL+BKPK+SHOEBOX.png",
    link: "https://www.nike.com/eg/"
  }],
  "amazon": [{
    id: "amazon-1",
    title: "Dell Performance Dock WD 19S",
    img: "https://m.media-amazon.com/images/I/819FEqfP5NS._AC_SX679_.jpg",
    link: "https://www.amazon.com/"
  }, {
    id: "amazon-2",
    title: "Samsung Galaxy Buds 3 Pro",
    img: "https://m.media-amazon.com/images/I/61Mv3cWzZeL._AC_SY300_SX300_.jpg",
    link: "https://www.amazon.com/"
  }, {
    id: "amazon-3",
    title: "j5create Laptop Docking Station",
    img: "https://m.media-amazon.com/images/I/51IQ7VpCFrL._AC_SX679_.jpg",
    link: "https://www.amazon.com/"
  }, {
    id: "amazon-4",
    title: "Keyless-Entry Fingerprint Smart Door Lock",
    img: "https://m.media-amazon.com/images/I/81cQsOTh8lL._AC_UL320_.jpg",
    link: "https://www.amazon.com/"
  }, {
    id: "amazon-5",
    title: "BIGGERFIVE Smart Watch for Kids",
    img: "https://m.media-amazon.com/images/I/61ypBL3L4UL._AC_UL320_.jpg",
    link: "https://www.amazon.com/"
  }],
  "noon": [{
    id: "noon-1",
    title: "Elixir",
    img: "https://f.nooncdn.com/p/pzsku/ZF69747272F573EE1665BZ/45/1744889039/d5047cbd-1bc3-408a-938b-49705bfa71a6.jpg?width=240",
    link: "https://www.noon.com/"
  }, {
    id: "noon-2",
    title: "Eventone C Body",
    img: "https://f.nooncdn.com/p/pzsku/Z8E98D890B453C0B412D4Z/45/1746509374/e435d0df-0c3e-43a7-8645-90575148529b.jpg?width=240",
    link: "https://www.noon.com/"
  }, {
    id: "noon-3",
    title: "Easy Bake Loose Powder 3 Banana Bread",
    img: "https://f.nooncdn.com/p/v1624882666/N31089497A_1.jpg?width=240",
    link: "https://www.noon.com/"
  }, {
    id: "noon-4",
    title: "Split AC White",
    img: "https://f.nooncdn.com/p/pzsku/Z38934BBE223E3324567EZ/45/1746772553/3173dd04-c609-427a-81dc-6d4846b723b4.jpg?width=240",
    link: "https://www.noon.com/"
  }, {
    id: "noon-5",
    title: "Refrigerator 409 Liters Gross",
    img: "https://f.nooncdn.com/p/pnsku/N51698942A/45/_/1746816402/68e96d79-466b-4891-8cd4-dfe056671883.jpg?width=240",
    link: "https://www.noon.com/"
  }],
  "talabat": [{
    id: "talabat-1",
    title: "Healthy Junior Wrap",
    img: "https://d22rp9usybekre.cloudfront.net/products/photos/000/047/221/menu/Healthy_Junior.jpg",
    link: "https://www.talabat.com/uae"
  }, {
    id: "talabat-2",
    title: "The Mex",
    img: "https://d22rp9usybekre.cloudfront.net/products/photos/000/041/191/menu/1I0_I_The-Mex.jpg",
    link: "https://www.talabat.com/uae"
  }, {
    id: "talabat-3",
    title: "Chicken Mojo",
    img: "https://d22rp9usybekre.cloudfront.net/products/photos/000/065/638/menu/hozif_CHICKEN_MOJO.jpg",
    link: "https://www.talabat.com/uae"
  }, {
    id: "talabat-4",
    title: "Capri",
    img: "https://d22rp9usybekre.cloudfront.net/products/photos/000/065/643/menu/pp-Lz_CAPRI.jpg",
    link: "https://www.talabat.com/uae"
  }, {
    id: "talabat-5",
    title: "Wildflower Poke Family Meal",
    img: "https://d22rp9usybekre.cloudfront.net/products/photos/000/064/197/menu/BBDa__Wildflower-Family.jpg",
    link: "https://www.talabat.com/uae"
  }],
  "carrefour": [{
    id: "carrefour-1",
    title: "EAT NATURAL Gluten-Free Peanut and Dark Chocolate",
    img: "https://media.carrefour.fr/medias/cf300233c51941c5bbbeb766044605a2/p_200x200/08000500435670_C1N1_s01.png",
    link: "https://www.carrefour.fr/"
  }, {
    id: "carrefour-2",
    title: "SKIP Intense Freshness Capsule Laundry",
    img: "https://media.carrefour.fr/medias/fdcd27a9f60047228087705771ce0b82/p_200x200/08720181248252_H1N1_s28.png",
    link: "https://www.carrefour.fr/"
  }, {
    id: "carrefour-3",
    title: "Door washing machine 11 kg F14R15WHS LG",
    img: "https://media.carrefour.fr/medias/6d2f35096614452882ef0ce75d7ec419/p_200x200/8806084778222_0.jpg",
    link: "https://www.carrefour.fr/"
  }, {
    id: "carrefour-4",
    title: "MOULINEX EZ145820 Air Fryer",
    img: "https://media.carrefour.fr/medias/a822765e1287400ca58aeed1e8ea1ccf/p_200x200/3045387291037_0.jpg",
    link: "https://www.carrefour.fr/"
  }, {
    id: "carrefour-5",
    title: "MiniLED TV 65'' (165 cm) 65C61K TCL",
    img: "https://media.carrefour.fr/medias/1b87a11033794b5aa51f5e14687be5af/p_200x200/5901292526856_0.jpg",
    link: "https://www.carrefour.fr/"
  }],
  "namshi": [{
    id: "namshi-1",
    title: "Crew Neck Short Sleeve T-Shirt",
    img: "https://f.nooncdn.com/p/pzsku/Z76FAB4957055BE0F795EZ/45/_/1744787060/349d1cce-3156-41d9-8c25-14f7bec15715.jpg?format=webp&width=800",
    link: "https://www.namshi.com/"
  }, {
    id: "namshi-2",
    title: "Youth Air Jordan 1 Low Bg",
    img: "https://f.nooncdn.com/p/pzsku/ZE97BB0EA8A6B7553746CZ/45/_/1741798903/663dd820-aa5d-42e4-8711-0b340203b066.jpg?format=webp&width=800",
    link: "https://www.namshi.com/"
  }, {
    id: "namshi-3",
    title: "Relief Sun : Rice + Probiotics",
    img: "https://f.nooncdn.com/p/pzsku/ZCA9E34723BD3149FC429Z/45/_/1730703322/8738c867-14e9-4fc9-9634-31c230f1d8f4.jpg?format=webp&width=800",
    link: "https://www.namshi.com/"
  }, {
    id: "namshi-4",
    title: "All-In-One Glam & Lip Kit",
    img: "https://f.nooncdn.com/p/pzsku/Z97B6C7EB494FE32B8001Z/45/_/1741607663/a2cb14ca-b4f0-4fb9-8eec-cc399a1bf19d.jpg?format=webp&width=800",
    link: "https://www.namshi.com/"
  }, {
    id: "namshi-5",
    title: "Solid Joggers with Drawstring",
    img: "https://f.nooncdn.com/p/pzsku/Z587AF00E9C68BBABC89BZ/45/_/1720785054/e4598c10-030f-42d7-b6e6-4d0da5a7f20c.jpg?format=webp&width=800",
    link: "https://www.namshi.com/"
  }],
  "adidas": [{
    id: "adidas-1",
    title: "adidas Superstar by Avavav",
    img: "https://assets.adidas.com/images/w_450,f_auto,q_auto/df206f8692ae48898fecc8f89c6dbf96_9366/JI4585_00_plp_standard.jpg",
    link: "https://www.adidas.ae/en"
  }, {
    id: "adidas-2",
    title: "F50 Elite Messi Firm Ground Boots",
    img: "https://assets.adidas.com/images/w_450,f_auto,q_auto/a70f4a395af6402cbc77057516bf680d_9366/IH0927_HM1.jpg",
    link: "https://www.adidas.ae/en"
  }, {
    id: "adidas-3",
    title: "adidas Basketball Hoodie",
    img: "https://assets.adidas.com/images/w_450,f_auto,q_auto/2ec2221f4bf540e6b2883a41967caba4_faec/IN4243_HM3_hover.jpg",
    link: "https://www.adidas.ae/en"
  }, {
    id: "adidas-4",
    title: "Essentials 3-Stripes French Terry Crop Hoodie",
    img: "https://assets.adidas.com/images/w_450,f_auto,q_auto/1a8b048f5cde49948e4caf1900e32a1c_9366/IC8767_01_laydown.jpg",
    link: "https://www.adidas.ae/en"
  }, {
    id: "adidas-5",
    title: "Adicolor Classics 3-Stripes Tee",
    img: "https://assets.adidas.com/images/w_450,f_auto,q_auto/970d213c54764c0f9a2daf150099f6a7_9366/IA4846_01_laydown.jpg",
    link: "https://www.adidas.ae/en"
  }],
  "ikea": [{
    id: "ikea-1",
    title: "Wardrobe with 3 doors, white",
    img: "https://www.ikea.com/gb/en/images/products/brimnes-wardrobe-with-3-doors-white__0176787_pe329567_s5.jpg?f=s",
    link: "https://www.ikea.com"
  }, {
    id: "ikea-2",
    title: "Chest of 3 drawers, white",
    img: "https://www.ikea.com/gb/en/images/products/koppang-chest-of-3-drawers-white__0651169_pe706781_s5.jpg?f=s",
    link: "https://www.ikea.com"
  }, {
    id: "ikea-3",
    title: "Bed frame, high, white/Luröy, Standard Double",
    img: "https://www.ikea.com/gb/en/images/products/malm-bed-frame-high-white-luroey__0749130_pe745499_s5.jpg?f=s",
    link: "https://www.ikea.com"
  }, {
    id: "ikea-4",
    title: "Upholstered bed frame, Vissle dark grey, Standard Double",
    img: "https://www.ikea.com/gb/en/images/products/slattum-upholstered-bed-frame-vissle-dark-grey__1259335_pe926650_s5.jpg?f=s",
    link: "https://www.ikea.com"
  }, {
    id: "ikea-5",
    title: "3-seat sofa with chaise longue, Tibbleby beige/grey",
    img: "https://www.ikea.com/gb/en/images/products/kivik-3-seat-sofa-with-chaise-longue-tibbleby-beige-grey__1056147_pe848280_s5.jpg?f=s",
    link: "https://www.ikea.com"
  }],
  "puma": [{
    id: "puma-1",
    title: "Speedcat Ballet Glossy",
    img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/404263/01/sv01/fnd/PNA/fmt/png/Speedcat-Ballet-Glossy-Women's-Shoes",
    link: "https://us.puma.com/"
  }, {
    id: "puma-2",
    title: "Speedcat OG",
    img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/398846/01/sv01/fnd/PNA/fmt/png/Speedcat-OG-Sneakers",
    link: "https://us.puma.com/"
  }, {
    id: "puma-3",
    title: "Tyrese Haliburton All-Pro NITRO™ Pinstripes",
    img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/313307/01/sv01/fnd/PNA/fmt/png/Tyrese-Haliburton-All-Pro-NITRO%E2%84%A2-Pinstripes-Basketball-Shoes",
    link: "https://us.puma.com/"
  }, {
    id: "puma-4",
    title: "BMW M Motorsport Car Graphic",
    img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/630624/01/fnd/PNA/fmt/png/BMW-M-Motorsport-Car-Graphic-Men's-Tee",
    link: "https://us.puma.com/"
  }, {
    id: "puma-5",
    title: "teamLIGA Men's Soccer Shorts",
    img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/704924/05/fnd/PNA/fmt/png/teamLIGA-Men's-Soccer-Shorts",
    link: "https://us.puma.com/"
  }],
  "steve-madden": [{
    id: "steve-madden-1",
    title: "Mayven Black Leather",
    img: "https://cdn.shopify.com/s/files/1/2170/8465/files/STEVEMADDEN_SHOES_MAYVEN_BLACK-LEATHER_01.jpg?width=354&v=1691788680",
    link: "https://www.stevemadden.com/"
  }, {
    id: "steve-madden-2",
    title: "Lando Black Leather",
    img: "https://www.stevemadden.com/cdn/shop/files/STEVEMADDEN_SHOES_LANDO_BLACK-LEATHER_01.jpg?v=1691788313&width=853",
    link: "https://www.stevemadden.com/"
  }, {
    id: "steve-madden-3",
    title: "Bri White Lace Pearl",
    img: "https://cdn.shopify.com/s/files/1/2170/8465/files/STEVEMADDEN_SHOES_BRI_WHITE-LACE-PEARL.jpg?width=354&v=1717682030",
    link: "https://www.stevemadden.com/"
  }, {
    id: "steve-madden-4",
    title: "Prismo Black Multi",
    img: "https://cdn.shopify.com/s/files/1/2170/8465/files/STEVEMADDEN_MENS_PRISMO_BLACK-MULTI.jpg?width=417&v=1738194018",
    link: "https://www.stevemadden.com/"
  }, {
    id: "steve-madden-5",
    title: "Dixon Navy Suede",
    img: "https://cdn.shopify.com/s/files/1/2170/8465/files/STEVEMADDEN_MENS_DIXON_NAVY-SUEDE.jpg?width=417&v=1743527917",
    link: "https://www.stevemadden.com/"
  }],
  "charles-keith": [{
    id: "charles-keith-1",
    title: "Raffia Pointed-Toe Slingback Pumps - Olive",
    img: "https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dwd7339178/images/hi-res/2025-L3-CK1-60580188-1-37-1.jpg?sw=756&sh=1008",
    link: "https://www.charleskeith.com/"
  }, {
    id: "charles-keith-2",
    title: "Crochet Floral Mary Jane Flats - White",
    img: "https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw7362b3fa/images/hi-res/2025-L3-CK1-70580273-03-1.jpg?sw=1152&sh=1536",
    link: "https://www.charleskeith.com/"
  }, {
    id: "charles-keith-3",
    title: "Lyla Shoulder Bag - Black",
    img: "https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw094b784d/images/hi-res/2025-L3-CK2-20782582-01-1.jpg?sw=1152&sh=1536",
    link: "https://www.charleskeith.com/"
  }, {
    id: "charles-keith-4",
    title: "Lyla Knotted-Strap Wallet - Black",
    img: "https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dwb62d30d8/images/hi-res/2025-L3-CK6-10770670-01-1.jpg?sw=1152&sh=1536",
    link: "https://www.charleskeith.com/"
  }, {
    id: "charles-keith-5",
    title: "Rosalind Flower-Motif Ring - Brush Gold",
    img: "https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dwecca52dd/images/hi-res/2025-L3-CK5-33220047-C9-1.jpg?sw=756&sh=1008",
    link: "https://www.charleskeith.com/"
  }],
  "jimmy-choo": [{
    id: "jimmy-choo-1",
    title: "The Jelly",
    img: "https://media.jimmychoo.com/image/upload/f_auto,q_auto:best,dpr_2.0,w_520,h_520,c_fit/ROWPROD_PRODUCT/images/original/THEJELLYNKR_0C2313_SIDE_vg705.jpg",
    link: "https://row.jimmychoo.com/"
  }, {
    id: "jimmy-choo-2",
    title: "Drawstring Tote L",
    img: "https://media.jimmychoo.com/image/upload/f_auto,q_auto:best,dpr_2.0,w_520,h_520,c_fit/ROWPROD_PRODUCT/images/original/DRAWSTRINGTOTELQAV_121749_FRONT_vg695.jpg",
    link: "https://row.jimmychoo.com/"
  }, {
    id: "jimmy-choo-3",
    title: "Isaline",
    img: "https://media.jimmychoo.com/image/upload/f_auto,q_auto:best,dpr_2.0,w_520,h_520,c_fit/ROWPROD_PRODUCT/images/original/ISALINE0JC4018E13_OO1650_FRONT_vg649.jpg",
    link: "https://row.jimmychoo.com/"
  }, {
    id: "jimmy-choo-4",
    title: "Jimmy Choo / Malbon 2.0 Diamond M",
    img: "https://media.jimmychoo.com/image/upload/f_auto,q_auto:best,dpr_2.0,w_520,h_520,c_fit/ROWPROD_PRODUCT/images/original/JCxMALBONDIAMONDMKEQ_035773_SIDE_vg688.jpg",
    link: "https://row.jimmychoo.com/"
  }, {
    id: "jimmy-choo-5",
    title: "Zoya",
    img: "https://media.jimmychoo.com/image/upload/f_auto,q_auto:best,dpr_2.0,w_520,h_520,c_fit/ROWPROD_PRODUCT/images/original/ZOYA0JC6001UE6G_014101_FRONT_vg542.jpg",
    link: "https://row.jimmychoo.com/"
  }],
  "christian-louboutin": [{
    id: "christian-louboutin-1",
    title: "Miss Z",
    img: "https://us.christianlouboutin.com/media/catalog/product/cache/e88e85f4e5336c618abbd9e5f93aeaf8/1/2/1250929b439-1250929b439-main_image-ecommerce-christianlouboutin-missz-1250929_b439_1_1200x1200.jpg",
    link: "https://us.christianlouboutin.com/"
  }, {
    id: "christian-louboutin-2",
    title: "Cabata small",
    img: "https://us.christianlouboutin.com/media/catalog/product/cache/e88e85f4e5336c618abbd9e5f93aeaf8/3/6/3615483831897-3615483831897-main_image-ecommerce-christianlouboutin-cabatasmall-3205219_cm53_1_1200x1200.jpg",
    link: "https://us.christianlouboutin.com/"
  }, {
    id: "christian-louboutin-3",
    title: "Follies Strass",
    img: "https://us.christianlouboutin.com/media/catalog/product/cache/e88e85f4e5336c618abbd9e5f93aeaf8/3/1/3180466f065-3180466f065-main_image-ecommerce-christianlouboutin-folliesstrass-3180466_f065_1_1200x1200.jpg",
    link: "https://us.christianlouboutin.com/"
  }, {
    id: "christian-louboutin-4",
    title: "Louis Spikes",
    img: "https://us.christianlouboutin.com/media/catalog/product/cache/e88e85f4e5336c618abbd9e5f93aeaf8/1/1/1101083b049-1101083b049-main_image-ecommerce-christianlouboutin-louisflat-1101083_b049_1_1200x1200.jpg",
    link: "https://us.christianlouboutin.com/"
  }, {
    id: "christian-louboutin-5",
    title: "Greggo",
    img: "https://us.christianlouboutin.com/media/catalog/product/cache/e88e85f4e5336c618abbd9e5f93aeaf8/1/1/1150377bk01-1150377bk01-main_image-ecommerce-christianlouboutin-greggo-1150377_bk01_1_1200x1200.jpg",
    link: "https://us.christianlouboutin.com/"
  }],
  "skechers": [{
    id: "skechers-1",
    title: "Skechers Slip-ins: Glide-Step Altus - Starlight Shine",
    img: "https://images.skechers.com/image;width=289%2Cformat=auto/150514_BKRG_HERO_LG",
    link: "https://www.skechers.com/"
  }, {
    id: "skechers-2",
    title: "Skechers Slip-ins: Glide-Step Altus",
    img: "https://images.skechers.com/image;width=289%2Cformat=auto/150510_GYPK_HERO_LG",
    link: "https://www.skechers.com/"
  }, {
    id: "skechers-3",
    title: "Martha Stewart: Arch Fit Living",
    img: "https://images.skechers.com/image;width=289%2Cformat=auto/159176_LPD_HERO_LG",
    link: "https://www.skechers.com/"
  }, {
    id: "skechers-4",
    title: "Skechers Slip-ins: 3D Energy - Polzar",
    img: "https://images.skechers.com/image;width=289%2Cformat=auto/232811_NVY_HERO_LG",
    link: "https://www.skechers.com/"
  }, {
    id: "skechers-5",
    title: "Skechers Slip-ins John Deere Relaxed Fit: Meroe - Cayden",
    img: "https://images.skechers.com/image;width=289%2Cformat=auto/256068_TPE_HERO_LG",
    link: "https://www.skechers.com/"
  }],
  "ecco": [{
    id: "ecco-1",
    title: "ECCO Anine Squared",
    img: "https://global.ecco.com/-/media/import/catalog/251/03/010101/208563/01118/208563-01118-m.jpg?w=448&bc=ffffff",
    link: "https://global.ecco.com/en/ladies"
  }, {
    id: "ecco-2",
    title: "ECCO Dress Classic 15",
    img: "https://global.ecco.com/-/media/import/catalog/251/03/010101/209803/02038/209803-02038-m.jpg?w=448&bc=ffffff",
    link: "https://global.ecco.com/en/ladies"
  }, {
    id: "ecco-3",
    title: "ECCO Fortune Bag L Soft Pebbled Leather",
    img: "https://global.ecco.com/-/media/import/catalog/251/12/010207/9107956/90793/9107956-90793-m.jpg?w=448&bc=ffffff",
    link: "https://global.ecco.com/en/ladies"
  }, {
    id: "ecco-4",
    title: "ECCO BIOM 2.1 X Mountain M",
    img: "https://global.ecco.com/-/media/import/catalog/251/01/010101/823904/61212/823904-61212-m.jpg?w=400&bc=ffffff",
    link: "https://global.ecco.com/en/ladies"
  }, {
    id: "ecco-5",
    title: "ECCO Cozmo M",
    img: "https://global.ecco.com/-/media/import/catalog/251/04/010103/500994/01001/500994-01001-m.jpg?w=400&bc=ffffff",
    link: "https://global.ecco.com/en/ladies"
  }],
  "calvin-klein": [{
    id: "calvin-klein-1",
    title: "Drawstring Crossbody Bag",
    img: "https://calvinklein.scene7.com/is/image/CalvinKlein/4K3060G_W6Y_main?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
    link: "https://www.calvinklein.us/"
  }, {
    id: "calvin-klein-2",
    title: "Archive Hardware Flap Crossbody Bag",
    img: "https://calvinklein.scene7.com/is/image/CalvinKlein/4K1033G_WGY_alternate1?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
    link: "https://www.calvinklein.us/"
  }, {
    id: "calvin-klein-3",
    title: "Archive Hardware Saddle Bag",
    img: "https://calvinklein.scene7.com/is/image/CalvinKlein/4K3120G_UB1_alternate1?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
    link: "https://www.calvinklein.us/"
  }, {
    id: "calvin-klein-4",
    title: "90s Straight Jeans",
    img: "https://calvinklein.scene7.com/is/image/CalvinKlein/4RB701G_U1W_alternate1?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
    link: "https://www.calvinklein.us/"
  }, {
    id: "calvin-klein-5",
    title: "Tech Classic Pull-On Pants",
    img: "https://calvinklein.scene7.com/is/image/CalvinKlein/4LB615G_8MN_alternate1?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
    link: "https://www.calvinklein.us/"
  }],
  "zara": [{
    id: "zara-1",
    title: "ZARA VELVET PINCH MATTE LIP BALM",
    img: "https://static.zara.net/assets/public/13c0/5892/85b9487e95b3/a07dba2ae378/24120319198-e1/24120319198-e1.jpg?ts=1729241553593&w=596",
    link: "https://www.zara.com/"
  }, {
    id: "zara-2",
    title: "ZARA TRAVEL SIZE HAIR CURL ACTIVATOR 75 ML",
    img: "https://static.zara.net/assets/public/ff8a/89df/bd654a689a17/ff450bd12678/21110022999-e1/21110022999-e1.jpg?ts=1727011020032&w=337",
    link: "https://www.zara.com/"
  }, {
    id: "zara-3",
    title: "COMFORT SUIT JACKET",
    img: "https://static.zara.net/assets/public/f530/ac59/b1f44ff2876c/9b060345008e/01564300800-e1/01564300800-e1.jpg?ts=1723200211123&w=222",
    link: "https://www.zara.com/"
  }, {
    id: "zara-4",
    title: "RELAXED FIT COTTON",
    img: "https://static.zara.net/assets/public/de5c/0f1a/168046beb4df/d8e3cd502111/04470450052-e1/04470450052-e1.jpg?ts=1738676726003&w=222",
    link: "https://www.zara.com/"
  }, {
    id: "zara-5",
    title: "SUNRISE ON THE RED SAND DUN",
    img: "https://static.zara.net/assets/public/8920/c622/18754788b68e/548e36c28574/20220240999-e1/20220240999-e1.jpg?ts=1724755223449&w=222",
    link: "https://www.zara.com/"
  }],
  "hm": [{
    id: "hm-1",
    title: "Pleated Top",
    img: "https://image.hm.com/assets/hm/94/aa/94aac8fd0dd0698ab8cab2238c1c05546b6a0f4b.jpg?imwidth=1536",
    link: "https://www2.hm.com/"
  }, {
    id: "hm-2",
    title: "Embellished pointelle-knit dress",
    img: "https://image.hm.com/assets/hm/74/1b/741b77fb7e5e1e66d89c7bc971fd097496462754.jpg?imwidth=1536",
    link: "https://www2.hm.com/"
  }, {
    id: "hm-3",
    title: "Flared Halterneck Dress",
    img: "https://image.hm.com/assets/hm/12/a5/12a52cd734410f4fea9707909bc35e9a6ff1c0b3.jpg?imwidth=1536",
    link: "https://www2.hm.com/"
  }, {
    id: "hm-4",
    title: "Super-Baggy Denim Shorts",
    img: "https://image.hm.com/assets/hm/c3/a3/c3a31690dbd63dde583e11c7b2b907da1f951399.jpg?imwidth=1536",
    link: "https://www2.hm.com/"
  }, {
    id: "hm-5",
    title: "Straight Relaxed High Jeans",
    img: "https://image.hm.com/assets/hm/fc/b4/fcb4084ab7961248d4246cd3cd79a3c7c87259f0.jpg?imwidth=1536",
    link: "https://www2.hm.com/"
  }],
  "mango": [{
    id: "mango-1",
    title: "Oversized openwork knitted sweater",
    img: "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87037192_05_B.jpg?ts=1741188910818&im=SmartCrop,width=368,height=515&imdensity=1",
    link: "https://shop.mango.com/us/en"
  }, {
    id: "mango-2",
    title: "Linen-blend knitted sweater",
    img: "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87045746_50_B.jpg?ts=1733396694278&im=SmartCrop,width=368,height=515&imdensity=1",
    link: "https://shop.mango.com/us/en"
  }, {
    id: "mango-3",
    title: "Fine-knit fitted sweater",
    img: "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87015759_05_B.jpg?ts=1733144670014&im=SmartCrop,width=368,height=515&imdensity=1",
    link: "https://shop.mango.com/us/en"
  }, {
    id: "mango-4",
    title: "Amalfi 100% linen slim-fit suit blazer",
    img: "https://shop.mango.com/assets/rcs/pics/static/T8/fotos_alt/S/87075919_56_01_B.jpg?ts=1741257126000&im=SmartCrop,width=368,height=515&imdensity=1",
    link: "https://shop.mango.com/us/en"
  }, {
    id: "mango-5",
    title: "Slim-fit 100% linen trousers",
    img: "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87025923_02_B.jpg?ts=1735635898098&im=SmartCrop,width=368,height=515&imdensity=1",
    link: "https://shop.mango.com/us/en"
  }],
  "forever-21": [{
    id: "forever-21-1",
    title: "Oryany - Adele Tote Medium Crossbody",
    img: "https://www.forever21.com/cdn/shop/files/O2FBTT35_009_001_800x.jpg?v=1746550723",
    link: "https://www.forever21.com/"
  }, {
    id: "forever-21-2",
    title: "Vintage Foundry Co. Men's Noah Oxford Navy",
    img: "https://www.forever21.com/cdn/shop/files/xuyhtit4lwfconkllkjz_1880x.jpg?v=1746739113",
    link: "https://www.forever21.com/"
  }, {
    id: "forever-21-3",
    title: "Men's Harry Suede Dress Loafers Cognac",
    img: "https://www.forever21.com/cdn/shop/files/ui3frlenjwh7ejghwaar_1880x.jpg?v=1746739046",
    link: "https://www.forever21.com/"
  }, {
    id: "forever-21-4",
    title: "Ellie - Black Sandals",
    img: "https://www.forever21.com/cdn/shop/files/62f10becc5d5f034df294ff70e7ca375.jpg?v=1746554159",
    link: "https://www.forever21.com/"
  }, {
    id: "forever-21-5",
    title: "Genuine Lizard Leather Slim Card Case Grey",
    img: "https://www.forever21.com/cdn/shop/files/CHLG1_4a471c38-bb2f-4681-a55b-9d2387f24d58_1066x.jpg?v=1746217789",
    link: "https://www.forever21.com/"
  }],
  "tommy-hilfiger": [{
    id: "tommy-hilfiger-1",
    title: "Logo Web-Strap Wedge Flip-Flop",
    img: "https://shoptommy.scene7.com/is/image/ShopTommy/FW08521_YBI_BCK?wid=352&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
    link: "https://usa.tommy.com/"
  }, {
    id: "tommy-hilfiger-2",
    title: "Soft Mini Shoulder Bag",
    img: "https://shoptommy.scene7.com/is/image/ShopTommy/AW17541_SN2_BCK?wid=352&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
    link: "https://usa.tommy.com/"
  }, {
    id: "tommy-hilfiger-3",
    title: "Slingback Wedge Espadrille Sandal",
    img: "https://shoptommy.scene7.com/is/image/ShopTommy/FW08597_YBL_BCK?wid=352&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
    link: "https://usa.tommy.com/"
  }, {
    id: "tommy-hilfiger-4",
    title: "Regular Fit Stripe Wicking Polo",
    img: "https://shoptommy.scene7.com/is/image/ShopTommy/78J9397_YBR_DE3?wid=352&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
    link: "https://usa.tommy.com/"
  }, {
    id: "tommy-hilfiger-5",
    title: "Slim Fit T-Shirt",
    img: "https://shoptommy.scene7.com/is/image/ShopTommy/78JA562_M1H_DE3?wid=352&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
    link: "https://usa.tommy.com/"
  }],
  "dolce-gabbana": [{
    id: "dolce-gabbana-1",
    title: "Satin slingbacks",
    img: "https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dw557999e5/images/zoom/CG0930AE547_8B956_1.jpg?sw=628&sh=800&sm=fit",
    link: "https://www.dolcegabbana.com/en-it/"
  }, {
    id: "dolce-gabbana-2",
    title: "Marlene micro bag",
    img: "https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dwadcea1c7/images/zoom/BI3375A3G19_80999_2.jpg?sw=628&sh=800&sm=fit",
    link: "https://www.dolcegabbana.com/en-it/"
  }, {
    id: "dolce-gabbana-3",
    title: "Patent leather sandals",
    img: "https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dw710386d5/images/zoom/CR1717A1471_89718_1.jpg?sw=628&sh=800&sm=fit",
    link: "https://www.dolcegabbana.com/en-it/"
  }, {
    id: "dolce-gabbana-4",
    title: "Calfskin nappa Portofino sneakers",
    img: "https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dw3eb20493/images/zoom/CS2332AA335_80001_0.jpg?sw=628&sh=800&sm=fit",
    link: "https://www.dolcegabbana.com/en-it/"
  }, {
    id: "dolce-gabbana-5",
    title: "Cotton baseball cap with branded tag",
    img: "https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dw235b0c0b/images/zoom/GH590AGF421_N0000_2.jpg?sw=628&sh=800&sm=fit",
    link: "https://www.dolcegabbana.com/en-it/"
  }],
  "gucci": [{
    id: "gucci-1",
    title: "Women's thong sandal with Horsebit",
    img: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1734456754/834431_AAEZJ_1072_001_100_0000_Light-Womens-thong-sandal-with-Horsebit.jpg",
    link: "https://www.gucci.com/ae"
  }, {
    id: "gucci-2",
    title: "Women's slide sandal with Horsebit",
    img: "https://media.gucci.com/style/White_South_0_160_316x316/1735569913/834427_AAE05_2747_002_100_0000_Light.jpg",
    link: "https://www.gucci.com/ae"
  }, {
    id: "gucci-3",
    title: "Women's Gucci Re-Motion sneaker",
    img: "https://media.gucci.com/style/White_South_0_160_316x316/1743012129/840291_AAEZM_9559_002_100_0000_Light.jpg",
    link: "https://www.gucci.com/ae"
  }, {
    id: "gucci-4",
    title: "Wool pant with selvedge detail",
    img: "https://media.gucci.com/style/White_South_0_160_316x316/1741197702/832544_Z7AQV_4668_001_100_0000_Light-Wool-pant-with-selvedge-detail.jpg",
    link: "https://www.gucci.com/ae"
  }, {
    id: "gucci-5",
    title: "Cotton piquet polo shirt",
    img: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1744218064/829434_XJHEF_9692_001_100_0000_Light-Cotton-piquet-polo-shirt.jpg",
    link: "https://www.gucci.com/ae"
  }],
  "louis-vuitton": [{
    id: "louis-vuitton-1",
    title: "LV Pure Low Square Sunglasses",
    img: "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-pure-low-square-sunglasses--Z2744U_PM2_Front%20view.png?wid=490&hei=490",
    link: "https://me.louisvuitton.com/"
  }, {
    id: "louis-vuitton-2",
    title: "LV Footprint Soccer",
    img: "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-footprint-soccer--BTU00ZSC20_PM2_Front%20view.png?wid=490&hei=490",
    link: "https://me.louisvuitton.com/"
  }, {
    id: "louis-vuitton-3",
    title: "Damier 3D Light Denim Short-Sleeved Shirt",
    img: "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-damier-3d-light-denim-short-sleeved-shirt--HTS53WUYH650_PM2_Front%20view.png?wid=490&hei=490",
    link: "https://me.louisvuitton.com/"
  }, {
    id: "louis-vuitton-4",
    title: "LV Sneakerina",
    img: "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-sneakerina--ATP00XGC06_PM2_Front%20view.png?wid=490&hei=490",
    link: "https://me.louisvuitton.com/"
  }, {
    id: "louis-vuitton-5",
    title: "Odyssée",
    img: "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-odyssee--M25085_PM2_Front%20view.png?wid=490&hei=490",
    link: "https://me.louisvuitton.com/"
  }],
  "chanel": [{
    id: "chanel-1",
    title: "Eternal N°5 necklace",
    img: "https://www.chanel.com/puls-img/c_limit,w_768/q_auto:good,f_auto,dpr_1.1/1744751979680-01pj525mbcampagnestilllife01d2928x3600pxjpg_3600x2852.jpg",
    link: "https://www.chanel.com/ae-en/"
  }, {
    id: "chanel-2",
    title: "Eternal N°5 ring",
    img: "https://www.chanel.com/puls-img/c_limit,w_768/q_auto:good,f_auto,dpr_1.1/1744753197283-01pj525mbcampagnestilllife01d2928x3600pxjpg_3600x2852.jpg",
    link: "https://www.chanel.com/ae-en/"
  }, {
    id: "chanel-3",
    title: "Extrait de N°5 necklace",
    img: "https://www.chanel.com/puls-img/c_limit,w_768/q_auto:good,f_auto,dpr_1.1/1744753526833-02pj525mbcampagnestilllife02d2852x3600pxjpg_3600x2852.jpg",
    link: "https://www.chanel.com/ae-en/"
  }, {
    id: "chanel-4",
    title: "J12 BLEU Watch Calibre 12.2, 33 MM",
    img: "https://www.chanel.com/images//t_one///q_auto:good,f_autoplus,fl_lossy,dpr_1.1/w_620/j12-bleu-watch-caliber-12-2-33-mm-blue-steel-sapphire-matte-blue-ceramic-packshot-default-h10309-9568362102814.jpg",
    link: "https://www.chanel.com/ae-en/"
  }, {
    id: "chanel-5",
    title: "Oval Sunglasses",
    img: "https://www.chanel.com/images/f_auto,w_512/oval-sunglasses-black-acetate-glass-pearls-acetate-glass-pearls-packshot-default-a71698x08283s2218-9563892908062.jpg",
    link: "https://www.chanel.com/ae-en/"
  }],
  "versace": [{
    id: "versace-1",
    title: "Versace Tag Bowling Mini Bag",
    img: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwf5762114/original/90_1019178-1A13171_1PV9V_20_Versace~Tag~Bowling~Mini~Bag-Mini~Bags~~Clutches-Versace-online-store_0_0.jpg?sw=550&q=85&strip=true",
    link: "https://www.versace.com/"
  }, {
    id: "versace-2",
    title: "Safety Pin Ribbed Knit Fitted Cardigan",
    img: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw8f6ce494/original/90_1020887-1A12699_1PV90_10_Safety~Pin~Ribbed~Knit~Fitted~Cardigan-Knitwear-Versace-online-store_0_0.jpg?sw=550&q=85&strip=true",
    link: "https://www.versace.com/"
  }, {
    id: "versace-3",
    title: "La Medusa Sandals 85 mm",
    img: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwc7f11629/original/90_1020965-1A14500_1B00V_20_La~Medusa~Sandals~85~mm-High~Heel~Sandals-Versace-online-store_0_0.jpg?sw=550&q=85&strip=true",
    link: "https://www.versace.com/"
  }, {
    id: "versace-4",
    title: "Medusa Biggie Denim Jacket",
    img: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw54439323/original/90_1020072-1A15015_1D030_10_Medusa~Biggie~Denim~Jacket~-Denim~Jackets-Versace-online-store_0_0.jpg?sw=550&q=85&strip=true",
    link: "https://www.versace.com/"
  }, {
    id: "versace-5",
    title: "Medusa Biggie Jeans",
    img: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw654c5a93/original/90_1020224-1A15015_1D030_10_Medusa~Biggie~Jeans-Jeans-Versace-online-store_0_0.jpg?sw=550&q=85&strip=true",
    link: "https://www.versace.com/"
  }],
  "balenciaga": [{
    id: "balenciaga-1",
    title: "Women's Balenciaga I Scholl Mule in Black",
    img: "https://balenciaga.dam.kering.com/m/292ec74f17304989/Medium-828335WB2Q01000_F.jpg?v=1",
    link: "https://www.balenciaga.com/"
  }, {
    id: "balenciaga-2",
    title: "Women's Balenciaga I Scholl Sandal in Black",
    img: "https://balenciaga.dam.kering.com/m/3c5de6f38e14566b/Medium-827465WB2U11180_F.jpg?v=1",
    link: "https://www.balenciaga.com/"
  }, {
    id: "balenciaga-3",
    title: "Le City Bag Small in White",
    img: "https://balenciaga.dam.kering.com/m/4e661d4b5426d418/Medium-7977892AA9S9104_F.jpg?v=5",
    link: "https://www.balenciaga.com/"
  }, {
    id: "balenciaga-4",
    title: "Le City Bag Small in Black",
    img: "https://balenciaga.dam.kering.com/m/4e661d4b5426d418/Medium-7977892AA9S9104_F.jpg?v=5",
    link: "https://www.balenciaga.com/"
  }, {
    id: "balenciaga-5",
    title: "Women's Balenciaga I Scholl Slide in White",
    img: "https://balenciaga.dam.kering.com/m/3c5de6f38e14566b/Medium-827465WB2U11180_F.jpg?v=1",
    link: "https://www.balenciaga.com/"
  }],
  "valentino": [{
    id: "valentino-1",
    title: "HI DOLLY FABRIC PUMPS WITH FLORAL EMBROIDERY 105MM",
    img: "https://valentino-cdn.thron.com/delivery/public/image/valentino/ff612f7f-f1de-4248-9ac6-26d890a0b7d0/ihqstx/std/631x0/HI-DOLLY-FABRIC-PUMPS-WITH-105-MM-FLORAL-EMBROIDERY?quality=80&size=35&format=auto",
    link: "https://www.valentino.com/"
  }, {
    id: "valentino-2",
    title: "VALENTINO GARAVANI NELLCÔTE MINI SUEDE SHOPPING BAG",
    img: "https://valentino-cdn.thron.com/delivery/public/image/valentino/f4384579-9dc1-49fc-baad-729fd2dada6a/ihqstx/std/631x0/VALENTINO-GARAVANI-NELLC%C3%94TE-MINI-SUEDE-SHOPPING-BAG?quality=80&size=35&format=auto",
    link: "https://www.valentino.com/"
  }, {
    id: "valentino-3",
    title: "PALM AVENUE CRUST AND NAPPA LEATHER BOAT SHOE",
    img: "https://valentino-cdn.thron.com/delivery/public/image/valentino/fb439339-5c21-4115-a939-f80265fe8537/ihqstx/std/631x0/PALM-AVENUE-CRUST-AND-NAPPA-LEATHER-BOAT-SHOE?quality=80&size=35&format=auto",
    link: "https://www.valentino.com/"
  }, {
    id: "valentino-4",
    title: "VALENTINO GARAVANI NELLCÔTE MINI LEATHER SHOPPING BAG",
    img: "https://valentino-cdn.thron.com/delivery/public/image/valentino/f4384579-9dc1-49fc-baad-729fd2dada6a/ihqstx/std/631x0/VALENTINO-GARAVANI-NELLC%C3%94TE-MINI-SUEDE-SHOPPING-BAG?quality=80&size=35&format=auto",
    link: "https://www.valentino.com/"
  }, {
    id: "valentino-5",
    title: "PALM AVENUE SUEDE AND NAPPA LEATHER LOAFER",
    img: "https://valentino-cdn.thron.com/delivery/public/image/valentino/fb439339-5c21-4115-a939-f80265fe8537/ihqstx/std/631x0/PALM-AVENUE-CRUST-AND-NAPPA-LEATHER-BOAT-SHOE?quality=80&size=35&format=auto",
    link: "https://www.valentino.com/"
  }],
  "fendi": [{
    id: "fendi-1",
    title: "Peekaboo ISeeU Petite",
    img: "https://static.fendi.com/dam/is/image/fendi/8BN335AUVWF199A_01?wid=1000&hei=1000&hash=0c9b83819b3fe97eed36f86d79931be5-19638e4fff0",
    link: "https://www.fendi.com/"
  }, {
    id: "fendi-2",
    title: "Fendi Sunshine",
    img: "https://static.fendi.com/dam/is/image/fendi/8R8515AU36F1SZU_01?wid=1000&hei=1000&hash=8366163370afb80cf2f2e99470170d4f-195f8d2da2c",
    link: "https://www.fendi.com/"
  }, {
    id: "fendi-3",
    title: "Fendi Sunshine",
    img: "https://static.fendi.com/dam/is/image/fendi/8R8515AUHIF1DAI_01?wid=336&hei=336&hash=56397c17ab2c05ce14f417ad3a87f088-195b9a82b68&sw=336&sh=336",
    link: "https://www.fendi.com/"
  }, {
    id: "fendi-4",
    title: "Peekaboo ISeeU Medium",
    img: "https://static.fendi.com/dam/is/image/fendi/8BN335AUVWF199A_01?wid=1000&hei=1000&hash=0c9b83819b3fe97eed36f86d79931be5-19638e4fff0",
    link: "https://www.fendi.com/"
  }, {
    id: "fendi-5",
    title: "Fendi Summer",
    img: "https://static.fendi.com/dam/is/image/fendi/8R8515AU36F1SZU_01?wid=1000&hei=1000&hash=8366163370afb80cf2f2e99470170d4f-195f8d2da2c",
    link: "https://www.fendi.com/"
  }],
  "ralph-lauren": [{
    id: "ralph-lauren-1",
    title: "Adventure 300LT Sneaker",
    img: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI809961066002_alternate1?$plpDeskRF$",
    link: "https://www.ralphlauren.com/"
  }, {
    id: "ralph-lauren-2",
    title: "Heritage Court II Leather Sneaker",
    img: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1446091_alternate1?$plpDeskRF$",
    link: "https://www.ralphlauren.com/"
  }, {
    id: "ralph-lauren-3",
    title: "Classic Fit Big Pony Jersey T-Shirt",
    img: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI710964482004_lifestyle?$plpDeskRF$",
    link: "https://www.ralphlauren.com/"
  }, {
    id: "ralph-lauren-4",
    title: "Classic Fit Mesh Polo Shirt",
    img: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI710964482004_lifestyle?$plpDeskRF$",
    link: "https://www.ralphlauren.com/"
  }, {
    id: "ralph-lauren-5",
    title: "Custom Slim Fit Jersey T-Shirt",
    img: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI710964482004_lifestyle?$plpDeskRF$",
    link: "https://www.ralphlauren.com/"
  }]
};

// Translations for the interface elements
const translations = {
  en: {
    backToAllBrands: "Back to all brands",
    featuredItems: "Featured Items",
    clickToOpen: "Click any item to open the official",
    store: "store."
  },
  ar: {
    backToAllBrands: "العودة إلى جميع الماركات",
    featuredItems: "منتجات مميزة",
    clickToOpen: "انقر على أي منتج لفتح المتجر الرسمي لـ",
    store: "."
  }
};

const BrandDetail: React.FC = () => {
  const { brandSlug } = useParams<{ brandSlug: string; }>();
  const { language, t, isRTL } = useLanguage();

  // Find the brand based on the slug from URL
  const brand = brands.find(b => b.slug === brandSlug);

  // If brand not found, redirect to collections page
  if (!brand) {
    return <Navigate to="/collections" replace />;
  }

  // Get products for this specific brand from our data
  const products = brandProducts[brandSlug as keyof typeof brandProducts] || [];

  // If no products are defined for this brand, generate generic ones
  const displayProducts = products.length > 0 ? products : Array.from({ length: 5 }, (_, index) => ({
    id: `${brandSlug}-${index + 1}`,
    title: `Sample ${brand.name} Item ${index + 1}`,
    img: `https://picsum.photos/seed/${brandSlug}-${index + 1}/600/600`,
    link: `https://www.${brandSlug === 'hm' ? 'hm' : brandSlug.replace('-', '')}.com`
  }));

  // Get the translations based on current language
  const tr = translations[language];

  // Determine which chevron icon to use based on language direction
  const ChevronIcon = isRTL ? ChevronRight : ChevronLeft;

  return (
    <PageLayout 
      title={`${brand.name} – ${tr.featuredItems}`} 
      description={`${tr.clickToOpen} ${brand.name} ${tr.store}`}
    >
      {/* Language Selector and Back Button */}
      <div className="container-custom mt-6 flex justify-between items-center">
        <Link 
          to="/collections" 
          className={`text-gclx-navy hover:underline mb-4 inline-flex items-center font-medium text-center ${isRTL ? 'flex-row-reverse' : 'flex-row'}`} 
          aria-label={tr.backToAllBrands}
        >
          <ChevronIcon size={20} />
          <span className={isRTL ? 'mr-2' : 'ml-2'}>{tr.backToAllBrands}</span>
        </Link>
      </div>

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-gclx-navy to-blue-950 py-8 md:py-16">
        <div className="container-custom text-center text-white">
          <div className="mb-4">
            <img 
              src={brand.logo} 
              alt={brand.name} 
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://via.placeholder.com/140x60?text=${brand.name}`;
              }} 
              className="max-h-16 mx-auto bg-white p-2 rounded-lg"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">{brand.name} – {tr.featuredItems}</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-center">
            {tr.clickToOpen} {brand.name} {tr.store}
          </p>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {displayProducts.map(product => (
              <a 
                key={product.id} 
                href={product.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block"
              >
                <Card className="overflow-hidden h-full hover:opacity-90 transition-opacity duration-300 rounded-lg shadow-md hover:shadow-xl">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.img} 
                      alt={product.title} 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://via.placeholder.com/400x400?text=${encodeURIComponent(product.title)}`;
                      }} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-sm md:text-base line-clamp-2 text-center">{product.title}</h3>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </PageLayout>
  );
};

export default BrandDetail;
