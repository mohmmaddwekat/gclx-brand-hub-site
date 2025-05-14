
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/sonner';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="bg-gclx-navy py-10">
      <div className="container-custom">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Stay Updated with Our Latest Offers</h2>
          <p className="text-gray-300">Subscribe to our newsletter and never miss out on exclusive discounts</p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white"
          />
          <Button 
            type="submit" 
            disabled={isLoading} 
            className="bg-gclx-gold text-gclx-navy hover:bg-gclx-gold/90"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
