import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Scissors } from 'lucide-react';
import { contactInfo } from '../data/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-700 rounded-lg flex items-center justify-center shadow-md">
                <Scissors className="w-5 h-5 text-white transform rotate-45" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Ramkrishna</h3>
                <p className="text-xs text-amber-400 -mt-1">Textile Company</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Weaving excellence since 1985. Your trusted partner for premium quality textiles and traditional craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>{contactInfo.address.street}</p>
                  <p>{contactInfo.address.city}, {contactInfo.address.state}</p>
                  <p>{contactInfo.address.pincode}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300">{contactInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Business Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Mon - Fri: {contactInfo.businessHours.weekdays}</p>
                  <p>Saturday: {contactInfo.businessHours.saturday}</p>
                  <p>Sunday: {contactInfo.businessHours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Ramkrishna Textile Company. All rights reserved. | 
            <span className="text-amber-400"> Crafted with excellence</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;