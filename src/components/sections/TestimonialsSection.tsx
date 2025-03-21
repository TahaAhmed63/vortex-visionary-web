
import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechCorp Inc.",
      content: "Vortex Solution transformed our marketing strategy with their AI-driven approach. We've seen a 47% increase in qualified leads and a dramatic improvement in customer engagement. Their team was professional, responsive, and truly understood our business needs.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 2,
      name: "David Chen",
      position: "CEO",
      company: "Innovate Startup",
      content: "Working with Vortex has been a game-changer for our business. Their web development team created a beautiful, functional platform that exceeded our expectations. The attention to detail and commitment to quality is unmatched in the industry.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/35.jpg"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Operations Manager",
      company: "Global Retail Solutions",
      content: "The CRM system developed by Vortex has streamlined our entire sales process. What used to take hours now takes minutes, and the insights we've gained have helped us better serve our customers. I can't recommend them enough!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const RatingStars = ({ rating }: { rating: number }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`h-5 w-5 ${
              index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Don't just take our word for it — hear from some of our satisfied clients
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Large Quote Icon */}
          <div className="absolute -top-10 -left-10 opacity-10">
            <Quote className="h-20 w-20 text-blue-600" />
          </div>
          
          {/* Testimonials Slider */}
          <div className="overflow-hidden bg-white rounded-2xl shadow-xl relative z-10 border border-gray-100">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 p-8 md:p-12"
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                    <div className="flex-shrink-0">
                      <Avatar className="h-24 w-24 border-2 border-blue-100">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex-grow text-center md:text-left">
                      <RatingStars rating={testimonial.rating} />
                      <blockquote className="mt-4 text-lg text-gray-700 italic leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="mt-6">
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Slider Navigation */}
            <div className="absolute bottom-6 right-6 flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full h-10 w-10 border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full h-10 w-10 border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Indicator Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
