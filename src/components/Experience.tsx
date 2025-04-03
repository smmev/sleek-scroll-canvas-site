
import React from 'react';
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        
        <div className="space-y-8">
          <div className="border-l-4 border-black pl-6 relative">
            <div className="absolute w-4 h-4 bg-black rounded-full -left-[10px] top-2"></div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">Software Developer Intern</h3>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="font-normal">2024 - Present</Badge>
                <Badge className="bg-purple-800">Current</Badge>
              </div>
            </div>
            <h4 className="text-lg text-gray-600 mb-2">Tech Innovations Inc.</h4>
            <p className="text-gray-600 mb-4">
              Working on developing and maintaining web applications using React, TypeScript, and Node.js.
              Collaborating with senior developers on feature implementation and bug fixes.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">Git</Badge>
            </div>
          </div>
          
          <div className="border-l-4 border-gray-300 pl-6 relative">
            <div className="absolute w-4 h-4 bg-gray-300 rounded-full -left-[10px] top-2"></div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">Research Assistant</h3>
              <Badge variant="outline" className="font-normal">2023 - 2024</Badge>
            </div>
            <h4 className="text-lg text-gray-600 mb-2">University Computer Science Department</h4>
            <p className="text-gray-600 mb-4">
              Assisted in research on machine learning algorithms for natural language processing.
              Implemented and tested various models and documented findings.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">TensorFlow</Badge>
              <Badge variant="secondary">NLP</Badge>
              <Badge variant="secondary">Research</Badge>
            </div>
          </div>
          
          <div className="border-l-4 border-gray-300 pl-6 relative">
            <div className="absolute w-4 h-4 bg-gray-300 rounded-full -left-[10px] top-2"></div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">Teaching Assistant</h3>
              <Badge variant="outline" className="font-normal">2022 - 2023</Badge>
            </div>
            <h4 className="text-lg text-gray-600 mb-2">University Computer Science Department</h4>
            <p className="text-gray-600 mb-4">
              Led lab sessions for undergraduate programming courses.
              Graded assignments and provided feedback to students.
              Held office hours to assist students with course material.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Java</Badge>
              <Badge variant="secondary">Data Structures</Badge>
              <Badge variant="secondary">Teaching</Badge>
              <Badge variant="secondary">Mentoring</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
