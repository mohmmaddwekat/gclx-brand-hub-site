
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
      toast.success("Your message has been sent successfully!");
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <PageLayout 
      title="Contact Us" 
      description="Get in touch with GCLX General Trading. Contact us for inquiries about our products, discounts, or any other questions."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gclx-navy to-blue-950 py-16">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto text-center">
            We'd love to hear from you. Get in touch with our team today.
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
                <h2 className="text-2xl font-semibold text-gclx-navy text-center">Get in Touch</h2>
                <p className="text-lg text-gray-600 text-center">
                  Have questions about our products, brands, or coupons? We're here to help! Fill out the form or reach out to us directly through email.
                </p>
                
                <div className="space-y-4">
                  <div className="flex flex-col items-center">
                    <div className="text-2xl mb-2">📍</div>
                    <div>
                      <h3 className="font-semibold text-center">Our Store</h3>
                      <p className="text-gray-600 text-center">Business Bay, Dubai, United Arab Emirates</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="text-2xl mb-2">✉️</div>
                    <div>
                      <h3 className="font-semibold text-center">Email</h3>
                      <p className="text-gray-600 text-center">info@gclxgt.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gclx-navy mb-6 text-center">Send Us a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField 
                    control={form.control} 
                    name="name" 
                    render={({ field }) => (
                      <FormItem className="text-center">
                        <FormLabel className="text-center block">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" className="text-center" {...field} />
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
                        <FormLabel className="text-center block">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email address" className="text-center" {...field} />
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
                        <FormLabel className="text-center block">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you?" 
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
                      {isSubmitting ? 'Sending...' : 'Send Message'}
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
