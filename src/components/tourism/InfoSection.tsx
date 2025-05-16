
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Gift, Ticket } from 'lucide-react';

const InfoSection: React.FC = () => {
  const { isRTL } = useLanguage();

  return (
    <section className="py-16 bg-gclx-navy text-white w-full">
      <div className="container-custom text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {isRTL ? "معلومات سياحية عن الإمارات" : "UAE Tourism Information"}
        </h2>
        <div className="flex items-center justify-center gap-2 mb-6">
          <Ticket className="h-5 w-5 text-red-400" />
          <p className="text-lg font-semibold text-red-400">
            {isRTL ? 
              "يمكن ربح هذه الرحلات فقط من خلال كوبونات المشتريات الخاصة بعيد الأضحى" : 
              "These trips can only be won through Eid Al-Adha purchase coupons"}
          </p>
          <Gift className="h-5 w-5 text-red-400" />
        </div>
        <p className="mb-8 max-w-2xl mx-auto">
          {isRTL ? 
            "هذه الصفحة للعرض فقط وتقدم معلومات سياحية عن الإمارات العربية المتحدة." : 
            "This is a display-only page providing tourism information about the United Arab Emirates."}
        </p>
        <Button asChild variant="highlight" size="lg" className="shadow-lg transform hover:scale-105 transition-all">
          <Link to="/">
            {isRTL ? "العودة إلى الرئيسية" : "Back to Home"}
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default InfoSection;
