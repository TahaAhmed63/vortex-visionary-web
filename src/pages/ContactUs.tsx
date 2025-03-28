import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitFormToAPI } from '@/utils/formUtils';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await submitFormToAPI({
      formType: 'contact',
      data: formData,
      onSuccess: () => {
        // Reset the form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      },
      onError: () => {
        // Error is handled by the toast in submitFormToAPI
      }
    });
    
    setIsSubmitting(false);
  };

  return (
    <>
    <Header />
    <section id="contact" className="py-20 bg-white relative">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0 overflow-hidden mt-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pinkish-red/20 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pinkish-red/10 rounded-full blur-[100px] opacity-20"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3  py-1.5 rounded-full bg-pinkish-red/10 border border-pinkish-red/30 mb-4">
            <span className="text-sm font-medium text-pinkish-red">Get in Touch</span>
          </div>
          <h2 className="section-title mt-3 text-3xl md:text-4xl font-bold text-dark-gray">
            Contact <span className='text-pinkish-red'>  Us</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Have a question or ready to start your next project? Reach out to us today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="glass-card rounded-2xl p-8 border border-pinkish-red/20 h-fit">
            <h3 className="text-2xl font-bold text-black mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-pinkish-red/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-pinkish-red" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-black">Our Location</h4>
                  <p className="text-gray-600 mt-1">123 Tech Avenue, Suite 400<br />San Francisco, CA 94107</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-pinkish-red/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-pinkish-red" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-black">Call Us</h4>
                  <p className="text-gray-600 mt-1">+1 (415) 555-1234</p>
                  <p className="text-gray-600">+1 (800) 555-5678 (Toll-free)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-pinkish-red/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-pinkish-red" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-black">Email Us</h4>
                  <p className="text-gray-600 mt-1">info@vortexsolutions.com</p>
                  <p className="text-gray-600">support@vortexsolutions.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-pinkish-red/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-pinkish-red" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-black">Business Hours</h4>
                  <p className="text-gray-600 mt-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-pinkish-red/20">
              <h4 className="text-lg font-medium text-black mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {['twitter', 'facebook', 'linkedin', 'instagram'].map((platform) => (
                  <a 
                    key={platform}
                    href="#" 
                    className="w-10 h-10 rounded-full bg-pinkish-red/10 flex items-center justify-center hover:bg-pinkish-red/30 transition-colors"
                  >
                    <span className="sr-only">{platform}</span>
                    <div className="w-5 h-5 text-pinkish-red">
                      {/* Placeholder for social icons */}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8 border border-pinkish-red/20">
            <h3 className="text-2xl font-bold text-black mb-6">Send Us a Message</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-dark-gray font-medium mb-2">Your Name</label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-pure-white border-light-gray text-dark-gray placeholder:text-cool-gray"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-dark-gray font-medium mb-2">Your Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-pure-white border-light-gray text-dark-gray placeholder:text-cool-gray"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-dark-gray font-medium mb-2">Subject</label>
                <Input 
                  id="subject" 
                  type="text" 
                  placeholder="How can we help you?"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-pure-white border-light-gray text-dark-gray placeholder:text-cool-gray"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-dark-gray font-medium mb-2">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project or inquiry..."
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-pure-white border-light-gray text-dark-gray placeholder:text-cool-gray resize-none"
                />
              </div>
              
              <div>
                <Button 
                  type="submit" 
                  className="w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default ContactUs;
