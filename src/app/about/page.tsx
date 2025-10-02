'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Navigation } from '@/components/navigation';
import { 
  Code,
  Database,
  Server,
  Globe,
  Award,
  Calendar,
  Target,
  Heart,
  Zap,
  Users
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

const skills = {
  frontend: [
    'React', 'Next.js', 'TypeScript', 'JavaScript', 'Material-UI', 'TailwindCSS', 'Bootstrap'
  ],
  backend: [
    'NestJS', 'Node.js', 'Express.js', 'GraphQL', 'REST APIs', 'TypeORM', 'Prisma'
  ],
  database: [
    'PostgreSQL', 'MySQL', 'MongoDB'
  ],
  tools: [
    'Apollo Client', 'JWT', 'Passport.js', 'Docker', 'Git', 'GitHub', 'GitLab'
  ]
};

const values = [
  {
    icon: <Code className="h-8 w-8 text-blue-600" />,
    title: "Clean Code",
    description: "I believe in writing clean, maintainable, and well-documented code that stands the test of time."
  },
  {
    icon: <Target className="h-8 w-8 text-green-600" />,
    title: "Goal-Oriented",
    description: "Every project has clear objectives, and I ensure we meet them efficiently and effectively."
  },
  {
    icon: <Heart className="h-8 w-8 text-red-600" />,
    title: "Passionate",
    description: "I'm passionate about technology and love creating solutions that make a real difference."
  },
  {
    icon: <Users className="h-8 w-8 text-purple-600" />,
    title: "Collaborative",
    description: "Great software is built by great teams. I value collaboration and open communication."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
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
                About Me
              </motion.h1>
              <motion.p 
                className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-2xl"
                variants={fadeInUp}
              >
                Passionate Full-Stack Developer crafting digital experiences that matter
              </motion.p>
            </motion.div>
            
            {/* 3D Animated Character */}
            <motion.div 
              className="flex-shrink-0"
              variants={fadeInUp}
            >
              <div className="relative">
                <motion.div 
                  className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center"
                  animate={{ 
                    rotateY: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <motion.div 
                    className="text-8xl lg:text-9xl"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      y: [0, -10, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    🧑‍💻
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                    scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  ⚡
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Story Section */}
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
              My Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  My journey into the world of technology began during my college years at Silver Oak University, 
                  where I discovered my passion for creating digital solutions that solve real-world problems.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  What started as curiosity about how websites work evolved into a deep fascination with full-stack development. 
                  I've had the privilege of working with amazing teams at Team Unibrains, where I've honed my skills in 
                  React, NestJS, and modern web technologies.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, I specialize in building scalable web applications using cutting-edge technologies like GraphQL, 
                  TypeORM, and Prisma. My goal is to create software that not only meets technical requirements but also 
                  provides exceptional user experiences.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
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
              My Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow text-center p-6">
                  <CardContent className="space-y-4">
                    <div className="flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
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
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <CardHeader className="text-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Code className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                  </motion.div>
                  <CardTitle>Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill} variant="secondary" className="hover:bg-blue-100 dark:hover:bg-blue-900/20 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <CardHeader className="text-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Server className="h-12 w-12 mx-auto mb-4 text-green-600" />
                  </motion.div>
                  <CardTitle>Backend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge key={skill} variant="secondary" className="hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <CardHeader className="text-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Database className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                  </motion.div>
                  <CardTitle>Database</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.database.map((skill) => (
                      <Badge key={skill} variant="secondary" className="hover:bg-purple-100 dark:hover:bg-purple-900/20 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <CardHeader className="text-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Globe className="h-12 w-12 mx-auto mb-4 text-orange-600" />
                  </motion.div>
                  <CardTitle>Tools & Others</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge key={skill} variant="secondary" className="hover:bg-orange-100 dark:hover:bg-orange-900/20 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Fun Facts Section */}
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
              Fun Facts About Me
            </h2>
            <div className="w-24 h-1 bg-white/30 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="text-6xl mb-4"
                  animate={{ 
                    rotate: [0, 10, -10, 0] 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  ☕
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Coffee Lover</h3>
                <p className="text-blue-100">Powered by coffee and passion for coding</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="text-6xl mb-4"
                  animate={{ 
                    y: [0, -10, 0] 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  🎮
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Gamer</h3>
                <p className="text-blue-100">Gaming helps me think creatively</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="text-6xl mb-4"
                  animate={{ 
                    scale: [1, 1.1, 1] 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  📚
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Lifelong Learner</h3>
                <p className="text-blue-100">Always exploring new technologies</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
