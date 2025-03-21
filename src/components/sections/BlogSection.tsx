
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
    <section id="blog" className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full">
              Blog & Insights
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
              Latest from Our Blog
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl">
              Expert insights, industry trends, and thought leadership on all things tech and digital marketing
            </p>
          </div>
          <Button
            variant="outline"
            className="self-start md:self-end border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-100">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
                    {post.category}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
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
