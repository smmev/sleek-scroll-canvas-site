
import React from 'react';
import { Button } from "@/components/ui/button";

const Blog = () => {
  return (
    <section id="blog" className="py-16 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Blog</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Blog post image" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">April 1, 2025</div>
              <h3 className="text-xl font-semibold mb-2">Getting Started with React Hooks</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive guide to React Hooks and how they can simplify your component logic.
              </p>
              <Button variant="outline" className="w-full">Read More</Button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                alt="Blog post image" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">March 15, 2025</div>
              <h3 className="text-xl font-semibold mb-2">Optimizing Database Queries</h3>
              <p className="text-gray-600 mb-4">
                Tips and tricks for improving the performance of your database queries in production.
              </p>
              <Button variant="outline" className="w-full">Read More</Button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="Blog post image" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">February 28, 2025</div>
              <h3 className="text-xl font-semibold mb-2">Introduction to TypeScript</h3>
              <p className="text-gray-600 mb-4">
                Why TypeScript is becoming the standard for large-scale JavaScript applications.
              </p>
              <Button variant="outline" className="w-full">Read More</Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Button className="rounded-full bg-[#D46FDB] text-white hover:bg-[#B85DAC]">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
