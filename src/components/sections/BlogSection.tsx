
import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
}

const BlogSection = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "How AI is Revolutionizing Digital Marketing in 2023",
      excerpt: "Discover the latest AI technologies transforming the marketing landscape and how businesses are leveraging them for unprecedented growth.",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1500&q=80",
      date: "Sep 15, 2023",
      readTime: "6 min read"
    },
    {
      id: 2,
      title: "The Future of Web Development: Trends to Watch",
      excerpt: "Explore emerging technologies and methodologies shaping the future of web development and how they impact user experience.",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1500&q=80",
      date: "Aug 28, 2023",
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "Building Effective CRM Systems for Enterprise Growth",
      excerpt: "Learn how custom CRM solutions can drive business growth, improve customer satisfaction, and streamline operations.",
      category: "CRM Development",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1500&q=80",
      date: "Aug 12, 2023",
      readTime: "7 min read"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white relative">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pinkish-red/20 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pinkish-red/10 rounded-full blur-[100px] opacity-20"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-pinkish-red/10 border border-pinkish-red/30 mb-4">
              <span className="text-sm font-medium text-pinkish-red">Blog & Insights</span>
            </div>
            <h2 className="section-title mt-3 text-3xl md:text-4xl font-bold text-dark-gray">
              Latest from <span className='text-pinkish-red'>  Our Blog</span>
            </h2>
            <p className="section-subtitle max-w-2xl">
              Expert insights, industry trends, and thought leadership on all things tech and digital marketing
            </p>
          </div>
          <Button
            variant="outline"
            className="self-start md:self-end"
          >
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="group glass-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-pinkish-red/20">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-pinkish-red hover:bg-pinkish-red/90 text-white font-medium">
                    {post.category}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1 text-pinkish-red" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-pinkish-red" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-pinkish-red transition-colors">
                  {post.title}
                </h3>
                <p className="text-black mb-4">
                  {post.excerpt}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-pinkish-red font-medium hover:text-pinkish-red-light transition-colors"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
