import React from 'react';
import PageLayout from '@/components/PageLayout';
import NewsletterSignup from '@/components/NewsletterSignup';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
const About: React.FC = () => {
  const {
    t
  } = useLanguage();
  const values = [{
    title: t('authenticity'),
    description: t('authenticityDesc'),
    icon: "🛡️"
  }, {
    title: t('value'),
    description: t('valueDesc'),
    icon: "💎"
  }, {
    title: t('transparency'),
    description: t('transparencyDesc'),
    icon: "🌟"
  }];
  return <PageLayout title={t('about')} description={t('trustedPartner')}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gclx-navy to-blue-950 py-16">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl font-bold mb-4">{t('aboutGCLX')}</h1>
          <p className="text-xl max-w-2xl mx-auto">{t('trustedPartner')}</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6 text-center">{t('ourMission')}</h2>
            <p className="text-lg mb-8 text-center">
              {t('missionText1')}
            </p>
            <p className="text-lg text-center">
              {t('missionText2')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title mb-8 text-center">{t('ourPromise')}</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-8 text-center">
              {t('promiseText1')}
            </p>
            <p className="text-lg text-center">
              {t('promiseText2')}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title mb-12 text-center">{t('ourValues')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => <Card key={index} className="card-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gclx-navy mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </PageLayout>;
};
export default About;