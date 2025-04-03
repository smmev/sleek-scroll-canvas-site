
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-700 mb-6">
              I'm a Computer Science graduate with a passion for developing innovative solutions 
              that leverage cutting-edge technologies. My academic foundation has equipped me 
              with strong analytical skills and a deep understanding of software engineering principles.
            </p>
            <p className="text-gray-700 mb-6">
              Beyond technical skills, I value collaboration and effective communication. I enjoy 
              working in dynamic environments where I can contribute to meaningful projects that 
              solve real-world problems.
            </p>
            <p className="text-gray-700">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or discussing the latest industry trends with fellow enthusiasts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="mb-6">
              <p className="font-medium">MSc in Computer Science</p>
              <p className="text-gray-600">University of Technology, 2022-2024</p>
              <p className="text-gray-600">Specialization in Machine Learning</p>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>AWS Certified Developer Associate</li>
              <li>Google Professional Cloud Developer</li>
              <li>Microsoft Certified: Azure Developer Associate</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
