import React from 'react';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm always interested in discussing new opportunities, collaborations, 
                and projects that involve data analysis and business intelligence.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:mohamedalmatbaagy11@gmail.com"
                className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors duration-200 p-3 rounded-lg hover:bg-white/10"
              >
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-gray-400">mohamedalmatbaagy11@gmail.com</p>
                </div>
              </a>

              <a
                href="http://www.linkedin.com/in/mohamed-almatbaagy"
                className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors duration-200 p-3 rounded-lg hover:bg-white/10"
              >
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-gray-400">mohamed-almatbaagy</p>
                </div>
              </a>

              <a
                href="https://github.com/almatbaagy"
                className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors duration-200 p-3 rounded-lg hover:bg-white/10"
              >
                <div className="p-2 bg-gray-600 rounded-lg">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-gray-400">almatbaagy</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 resize-none"
                  placeholder="Tell me about your project or opportunity"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Send Message
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;