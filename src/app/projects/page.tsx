'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SimpleThemeToggle } from '@/components/theme-toggle';
import { Navigation } from '@/components/navigation';
import { 
  ExternalLink,
  Github,
  Calendar,
  Star,
  Eye,
  Code,
  Zap,
  Filter
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

const projects = [
  {
    id: 1,
    title: 'Onechat Chat Application',
    description: 'A real-time chat application with authentication, message encryption, and responsive UI. Features include group chats, file sharing, and emoji reactions.',
    longDescription: 'Built with React and Node.js, this chat application provides seamless real-time communication with Socket.io. Includes user authentication, message history, typing indicators, and mobile-responsive design.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT', 'Material-UI'],
    category: 'Full-Stack',
    status: 'Completed',
    featured: true,
    liveDemo: '#',
    github: '#',
    image: '/api/placeholder/400/250',
    stats: {
      stars: 45,
      views: 1200
    }
  },
  {
    id: 2,
    title: 'Weather Forecast App',
    description: 'Modern weather forecasting app with location-based weather data, 7-day forecasts, and interactive weather maps.',
    longDescription: 'A comprehensive weather application that provides accurate weather information using multiple APIs. Features include geolocation, weather alerts, and beautiful data visualizations.',
    technologies: ['React', 'TypeScript', 'API Integration', 'Chart.js', 'Tailwind CSS'],
    category: 'Frontend',
    status: 'Completed',
    featured: true,
    liveDemo: '#',
    github: '#',
    image: '/api/placeholder/400/250',
    stats: {
      stars: 32,
      views: 890
    }
  },
  {
    id: 3,
    title: 'Smart Expense Tracker',
    description: 'Intelligent expense tracking app with budget management, category-wise analysis, and financial insights.',
    longDescription: 'A comprehensive expense management solution with AI-powered categorization, budget alerts, and detailed financial analytics. Includes data visualization and export features.',
    technologies: ['React', 'Local Storage', 'Chart.js', 'PWA', 'Service Workers'],
    category: 'Frontend',
    status: 'Completed',
    featured: false,
    liveDemo: '#',
    github: '#',
    image: '/api/placeholder/400/250',
    stats: {
      stars: 28,
      views: 650
    }
  },
  {
    id: 4,
    title: 'Online Auction System',
    description: 'Comprehensive auction platform with real-time bidding, user authentication, and payment integration.',
    longDescription: 'A full-featured auction platform supporting real-time bidding, automated bid increments, user profiles, and secure payment processing. Built with modern web technologies.',
    technologies: ['React', 'Node.js', 'WebSocket', 'PostgreSQL', 'Stripe', 'Redis'],
    category: 'Full-Stack',
    status: 'In Progress',
    featured: true,
    liveDemo: '#',
    github: '#',
    image: '/api/placeholder/400/250',
    stats: {
      stars: 67,
      views: 1500
    }
  },
  {
    id: 5,
    title: 'Task Management Dashboard',
    description: 'Collaborative task management tool with team features, project tracking, and productivity analytics.',
    longDescription: 'A powerful project management tool designed for teams. Features include task assignments, progress tracking, time logging, and comprehensive reporting.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth'],
    category: 'Full-Stack',
    status: 'Completed',
    featured: false,
    liveDemo: '#',
    github: '#',
    image: '/api/placeholder/400/250',
    stats: {
      stars: 54,
      views: 980
    }
  },
  {
    id: 6,
    title: 'E-commerce API',
    description: 'RESTful API for e-commerce applications with authentication, product management, and order processing.',
    longDescription: 'A robust backend API built with NestJS, featuring comprehensive e-commerce functionality including user management, product catalog, shopping cart, and order processing.',
    technologies: ['NestJS', 'TypeORM', 'PostgreSQL', 'JWT', 'Swagger', 'Docker'],
    category: 'Backend',
    status: 'Completed',
    featured: false,
    liveDemo: '#',
    github: '#',
    image: '/api/placeholder/400/250',
    stats: {
      stars: 38,
      views: 720
    }
  }
];

const categories = ['All', 'Full-Stack', 'Frontend', 'Backend'];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

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
                My Projects
              </motion.h1>
              <motion.p 
                className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-2xl"
                variants={fadeInUp}
              >
                Showcasing my journey through code, creativity, and innovation
              </motion.p>
            </motion.div>
            
            {/* 3D Animated Project Character */}
            <motion.div 
              className="flex-shrink-0"
              variants={fadeInUp}
            >
              <div className="relative">
                <motion.div 
                  className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center"
                  animate={{ 
                    rotateY: [0, 360],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotateY: { duration: 12, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <motion.div 
                    className="text-8xl lg:text-9xl"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      y: [0, -8, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    🚀
                  </motion.div>
                </motion.div>
                
                {/* Floating code elements */}
                <motion.div 
                  className="absolute -top-6 -left-6 w-14 h-14 bg-yellow-400 rounded-lg flex items-center justify-center text-2xl"
                  animate={{ 
                    y: [0, -25, 0],
                    rotate: [0, 90, 180, 270, 360]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  💻
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-6 -right-6 w-14 h-14 bg-green-400 rounded-lg flex items-center justify-center text-2xl"
                  animate={{ 
                    y: [0, -20, 0],
                    x: [0, 15, 0],
                    rotate: [0, -90, -180, -270, -360]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  ⚡
                </motion.div>
                
                <motion.div 
                  className="absolute top-1/2 -right-8 w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-lg"
                  animate={{ 
                    x: [0, 20, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  🎯
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section 
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my most impactful projects that showcase my skills and passion for development.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <motion.div 
                      className="text-6xl"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.category === 'Full-Stack' ? '🌐' : 
                       project.category === 'Frontend' ? '🎨' : '⚙️'}
                    </motion.div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        {project.status}
                      </Badge>
                      {project.featured && (
                        <Badge className="bg-yellow-500 text-yellow-900">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {project.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="hover:bg-blue-50 dark:hover:bg-blue-900/20">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-gray-500">
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {project.stats.stars}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {project.stats.views}
                        </div>
                      </div>
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 hover:bg-blue-50 dark:hover:bg-blue-900/20 group"
                      >
                        <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                        Live Demo
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 hover:bg-gray-50 dark:hover:bg-gray-800 group"
                      >
                        <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                        GitHub
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* All Projects */}
      <motion.section 
        className="py-20 bg-gray-50 dark:bg-slate-800/50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              All Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </motion.div>
          
          {/* Category Filter */}
          <motion.div variants={fadeInUp} className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2 p-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-all duration-200 ${
                    selectedCategory === category 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>
          
          {/* Projects Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id} 
                variants={fadeInUp}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <div className="relative h-32 bg-gradient-to-r from-gray-400 to-gray-600 flex items-center justify-center">
                    <motion.div 
                      className="text-4xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.category === 'Full-Stack' ? '🌐' : 
                       project.category === 'Frontend' ? '🎨' : '⚙️'}
                    </motion.div>
                    <div className="absolute top-2 right-2">
                      <Badge 
                        variant={project.status === 'Completed' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs text-gray-500">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mb-3 text-xs text-gray-500">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          {project.stats.stars}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {project.stats.views}
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 text-xs">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 text-xs">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Let's collaborate and bring your ideas to life with cutting-edge technology and creative solutions.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-200"
            >
              <Zap className="mr-2 h-5 w-5" />
              Start a Project
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
