
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/sonner';
import PageLayout from '@/components/PageLayout';
import NewsletterSignup from '@/components/NewsletterSignup';
import { useLanguage } from '@/contexts/LanguageContext';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters'
  }),
  email: z.string().email({
    message: 'Please enter a valid email address'
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters'
  })
});

type FormValues = z.infer<typeof formSchema>;

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });
  
  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success(t("messageSent") || "Your message has been sent successfully!");
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <PageLayout 
      title={t("contactUs")} 
      description={t("contactDescription")}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gclx-navy to-blue-950 py-16">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl font-bold mb-4 text-center">{t("contactUs")}</h1>
          <p className="text-xl max-w-2xl mx-auto text-center">
            {t("getInTouch")}
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="text-center lg:text-center">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gclx-navy text-center">{t("getInTouch")}</h2>
                <p className="text-lg text-gray-600 text-center">
                  {t("contactDescription")}
                </p>
                
                <div className="space-y-4">
                  <div className="flex flex-col items-center">
                    <div className="text-2xl mb-2">📍</div>
                    <div>
                      <h3 className="font-semibold text-center">{t("visitUs")}</h3>
                      <p className="text-gray-600 text-center">{t("address")}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="text-2xl mb-2">✉️</div>
                    <div>
                      <h3 className="font-semibold text-center">{t("emailUs")}</h3>
                      <p className="text-gray-600 text-center">info@gclxgt.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gclx-navy mb-6 text-center">{t("sendMessage")}</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField 
                    control={form.control} 
                    name="name" 
                    render={({ field }) => (
                      <FormItem className="text-center">
                        <FormLabel className="text-center block">{t("fullName")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("fullName")} className="text-center" {...field} />
                        </FormControl>
                        <FormMessage className="text-center" />
                      </FormItem>
                    )} 
                  />
                  
                  <FormField 
                    control={form.control} 
                    name="email" 
                    render={({ field }) => (
                      <FormItem className="text-center">
                        <FormLabel className="text-center block">{t("emailAddress")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("emailAddress")} className="text-center" {...field} />
                        </FormControl>
                        <FormMessage className="text-center" />
                      </FormItem>
                    )} 
                  />
                  
                  <FormField 
                    control={form.control} 
                    name="message" 
                    render={({ field }) => (
                      <FormItem className="text-center">
                        <FormLabel className="text-center block">{t("message")}</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={t("message")} 
                            className="min-h-[150px] text-center" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-center" />
                      </FormItem>
                    )} 
                  />
                  
                  <div className="flex justify-center">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="bg-gclx-navy hover:bg-gclx-navy/90 w-full" 
                    >
                      {isSubmitting ? t("sending") || 'Sending...' : t("send")}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </PageLayout>
  );
};

export default Contact;
