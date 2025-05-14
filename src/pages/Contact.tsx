
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/sonner';
import PageLayout from '@/components/PageLayout';
import NewsletterSignup from '@/components/NewsletterSignup';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
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
      description="Get in touch with GCLX General Trading. Contact us for inquiries about our products, discounts, wholesale opportunities, or any other questions."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gclx-navy to-blue-950 py-16">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map & Contact Info */}
            <div>
              <div className="bg-gray-200 w-full h-80 rounded-lg overflow-hidden mb-8">
                {/* Replace with actual Google Maps embed */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7224.572295117191!2d55.26473728387519!3d25.186162872489524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682829c85c07%3A0xa5eda9fb3c93b69d!2sBusiness%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1653395503037!5m2!1sen!2sus"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GCLX Office Location"
                ></iframe>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gclx-navy">Get in Touch</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 text-2xl">📍</div>
                    <div>
                      <h3 className="font-semibold">Our Office</h3>
                      <p className="text-gray-600">Business Bay, Dubai, United Arab Emirates</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 text-2xl">📞</div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">+971 4 123 4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 text-2xl">✉️</div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">info@gclx-trading.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 text-2xl">🕑</div>
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-gray-600">Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Friday - Saturday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gclx-navy mb-6">Send Us a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you?" 
                            className="min-h-[150px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gclx-navy hover:bg-gclx-navy/90"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
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
