'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SimpleThemeToggle } from '@/components/theme-toggle';
import { Navigation } from '@/components/navigation';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Github,
  Linkedin,
  MessageCircle,
  Clock,
  CheckCircle
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    value: "gauravkathiriya145@gmail.com",
    description: "Send me an email anytime!",
    color: "text-blue-600"
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Phone",
    value: "+91 9428875063",
    description: "Call me for urgent matters",
    color: "text-green-600"
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Location",
    value: "Surat, Gujarat, India",
    description: "Available for remote work",
    color: "text-purple-600"
  }
];

const socialLinks = [
  {
    icon: <Github className="h-5 w-5" />,
    name: "GitHub",
    url: "#",
    color: "hover:bg-gray-100 dark:hover:bg-gray-800"
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    name: "LinkedIn",
    url: "#",
    color: "hover:bg-blue-100 dark:hover:bg-blue-900/20"
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    name: "WhatsApp",
    url: "#",
    color: "hover:bg-green-100 dark:hover:bg-green-900/20"
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <SimpleThemeToggle />
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white pt-20"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="flex-1 text-center lg:text-left"
              variants={fadeInUp}
            >
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
                variants={fadeInUp}
              >
                Get In Touch
              </motion.h1>
              <motion.p 
                className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-2xl"
                variants={fadeInUp}
              >
                Let's discuss your next project and bring your ideas to life
              </motion.p>
            </motion.div>
            
            {/* 3D Animated Contact Character */}
            <motion.div 
              className="flex-shrink-0"
              variants={fadeInUp}
            >
              <div className="relative">
                <motion.div 
                  className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center"
                  animate={{ 
                    rotateY: [0, 360],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <motion.div 
                    className="text-8xl lg:text-9xl"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      y: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    📞
                  </motion.div>
                </motion.div>
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-xl"
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  ✉️
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -right-4 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-xl"
                  animate={{ 
                    y: [0, -15, 0],
                    x: [0, 10, 0],
                    rotate: [0, -180, -360]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  💬
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Form & Info Section */}
      <motion.section 
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <Card className="p-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">
                    Send me a message
                  </CardTitle>
                  <CardDescription>
                    I'd love to hear from you. Send me a message and I'll respond as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com"
                            className="w-full"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What's this about?"
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell me about your project or just say hello!"
                          rows={6}
                          className="w-full"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="mr-2"
                            >
                              <Clock className="h-4 w-4" />
                            </motion.div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  ) : (
                    <motion.div 
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      >
                        <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Thank you for reaching out. I'll get back to you soon!
                      </p>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Let's Connect
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  I'm always excited to work on new projects and collaborate with amazing people. 
                  Whether you have a project in mind or just want to chat about technology, feel free to reach out!
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 ${info.color}`}>
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {info.title}
                          </h3>
                          <p className="text-lg text-gray-700 dark:text-gray-300">
                            {info.value}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Follow me on
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-full border border-gray-200 dark:border-gray-700 transition-colors ${social.color}`}
                    >
                      {social.icon}
                      <span className="sr-only">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Available for new projects
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  I'm currently available for freelance work and new opportunities. 
                  Let's build something amazing together!
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
