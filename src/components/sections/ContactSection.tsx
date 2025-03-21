
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Mail, Phone, MapPin, Send, Calendar as CalendarIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ContactSection = () => {
  const [appointmentStatus, setAppointmentStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [contactStatus, setContactStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppointmentStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setAppointmentStatus('success');
      // Reset form after success
      setTimeout(() => setAppointmentStatus('idle'), 3000);
    }, 1500);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setContactStatus('success');
      // Reset form after success
      setTimeout(() => setContactStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full">
            Get in Touch
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Contact us today to discuss your project or schedule a consultation with our experts
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="p-8 lg:p-12 bg-gradient-to-br from-blue-600 to-indigo-700 text-white lg:col-span-2">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="mb-8 opacity-90">
                Reach out to us directly or fill out the form and we'll get back to you promptly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-md bg-blue-500 bg-opacity-30">
                      <Phone className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="opacity-75 text-sm">Phone</p>
                    <p className="mt-1 font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-md bg-blue-500 bg-opacity-30">
                      <Mail className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="opacity-75 text-sm">Email</p>
                    <p className="mt-1 font-medium">info@vortexsolution.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-md bg-blue-500 bg-opacity-30">
                      <MapPin className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="opacity-75 text-sm">Office</p>
                    <p className="mt-1 font-medium">123 Innovation Ave, Tech City, TC 10010</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="opacity-75 text-sm">Monday-Friday</p>
                    <p className="mt-1 font-medium">9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="opacity-75 text-sm">Saturday</p>
                    <p className="mt-1 font-medium">10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Forms */}
            <div className="p-8 lg:p-12 lg:col-span-3">
              <Tabs defaultValue="contact" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="contact">Contact Us</TabsTrigger>
                  <TabsTrigger value="appointment">Book Appointment</TabsTrigger>
                </TabsList>
                
                {/* Contact Form */}
                <TabsContent value="contact">
                  {contactStatus === 'success' ? (
                    <div className="text-center py-10">
                      <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for reaching out. We'll get back to you as soon as possible.
                      </p>
                      <Button
                        onClick={() => setContactStatus('idle')}
                        variant="outline"
                        className="text-blue-600 border-blue-600 hover:bg-blue-50"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                          <Input 
                            id="name" 
                            placeholder="John Doe" 
                            required 
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="john@example.com" 
                            required 
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                        <Input 
                          id="subject" 
                          placeholder="How can we help you?" 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                        <Textarea 
                          id="message" 
                          placeholder="Your message here..." 
                          rows={5} 
                          required 
                          className="resize-none"
                        />
                      </div>
                      
                      <Button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium transition-all duration-300"
                        disabled={contactStatus === 'submitting'}
                      >
                        {contactStatus === 'submitting' ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
                    </form>
                  )}
                </TabsContent>
                
                {/* Appointment Form */}
                <TabsContent value="appointment">
                  {appointmentStatus === 'success' ? (
                    <div className="text-center py-10">
                      <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Appointment Booked!</h3>
                      <p className="text-gray-600 mb-6">
                        Your appointment has been scheduled. We'll send a confirmation email shortly.
                      </p>
                      <Button
                        onClick={() => setAppointmentStatus('idle')}
                        variant="outline"
                        className="text-blue-600 border-blue-600 hover:bg-blue-50"
                      >
                        Book Another Appointment
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleAppointmentSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="fullName" className="text-sm font-medium text-gray-700">Full Name</label>
                          <Input 
                            id="fullName" 
                            placeholder="John Doe" 
                            required 
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="appointmentEmail" className="text-sm font-medium text-gray-700">Email</label>
                          <Input 
                            id="appointmentEmail" 
                            type="email" 
                            placeholder="john@example.com" 
                            required 
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                          <Input 
                            id="phone" 
                            type="tel" 
                            placeholder="+1 (555) 000-0000" 
                            required 
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="service" className="text-sm font-medium text-gray-700">Service Type</label>
                          <Select>
                            <SelectTrigger id="service">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="consultation">Initial Consultation</SelectItem>
                              <SelectItem value="project-discussion">Project Discussion</SelectItem>
                              <SelectItem value="demo">Product Demo</SelectItem>
                              <SelectItem value="support">Technical Support</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="date" className="text-sm font-medium text-gray-700">Preferred Date</label>
                          <div className="relative">
                            <Input 
                              id="date" 
                              type="date" 
                              required 
                            />
                            <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none h-5 w-5" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="time" className="text-sm font-medium text-gray-700">Preferred Time</label>
                          <div className="relative">
                            <Input 
                              id="time" 
                              type="time" 
                              required 
                            />
                            <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none h-5 w-5" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="notes" className="text-sm font-medium text-gray-700">Additional Notes</label>
                        <Textarea 
                          id="notes" 
                          placeholder="Tell us more about what you'd like to discuss..." 
                          rows={3} 
                          className="resize-none"
                        />
                      </div>
                      
                      <Button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium transition-all duration-300"
                        disabled={appointmentStatus === 'submitting'}
                      >
                        {appointmentStatus === 'submitting' ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Book Appointment <Calendar className="ml-2 h-4 w-4" />
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
