import React from 'react';
import { Award, Target, Eye, Heart, User, Trophy } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { companyInfo, ownerInfo, companyValues } from '../data/mockData';

const About = () => {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-amber-600">Ramkrishna Textile</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {companyInfo.tagline} - A legacy of quality, innovation, and trust in the textile industry.
            </p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Founded in {companyInfo.established}, Ramkrishna Textile Company began as a small family business with a vision to provide premium quality textiles to the Indian market. Over the decades, we have grown into a trusted name in the industry while maintaining our core values of quality, integrity, and customer satisfaction.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our journey spans over {companyInfo.experience}, during which we have continuously evolved our manufacturing processes, embraced new technologies, and expanded our product range to meet the changing needs of our customers.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-amber-600">1985</h3>
                  <p className="text-gray-700">Established</p>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-amber-600">38+</h3>
                  <p className="text-gray-700">Years of Excellence</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=500&fit=crop"
                alt="Textile Heritage"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{companyValues.mission}</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{companyValues.vision}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide our business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.values.map((value, index) => {
              const icons = [Award, Target, Heart, User];
              const IconComponent = icons[index];
              
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Owner Biography */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <User className="w-16 h-16 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{ownerInfo.name}</h3>
                  <p className="text-amber-600 font-medium mb-4">{ownerInfo.designation}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Experience:</strong> {ownerInfo.experience}</p>
                    <p><strong>Education:</strong> {ownerInfo.education}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Leadership Profile</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {ownerInfo.biography}
              </p>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Trophy className="w-5 h-5 text-amber-600 mr-2" />
                  Key Achievements
                </h3>
                <ul className="space-y-3">
                  {ownerInfo.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Partner With Us
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Ramkrishna Textile Company for their textile needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
              Contact Us Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-amber-600 transition-colors duration-200">
              View Our Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;