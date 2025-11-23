"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Code,
  Database,
  Server,
  Globe,
  Award,
  Calendar,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Material-UI",
    "TailwindCSS",
    "Bootstrap",
  ],
  backend: [
    "NestJS",
    "Node.js",
    "Express.js",
    "GraphQL",
    "REST APIs",
    "TypeORM",
    "Prisma",
  ],
  database: ["PostgreSQL", "MySQL", "MongoDB"],
  tools: [
    "Apollo Client",
    "JWT",
    "Passport.js",
    "Docker",
    "Git",
    "GitHub",
    "GitLab",
  ],
};

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Team Unibrains",
    period: "Jun 2024 - Present",
    description:
      "Full Stack Developer with expertise in React.js and Next.JS. Proficient in database management using TypeORM and Prisma. Skilled in developing scalable REST and GraphQL APIs. Experienced in building and optimizing end-to-end web applications.",
    technologies: [
      "React.js",
      "Next.js",
      "TypeORM",
      "Prisma",
      "GraphQL",
      "REST APIs",
    ],
  },
  {
    title: "Web Development Intern",
    company: "Prodigy Infotech",
    period: "Jun 2024",
    description:
      "Web Development Intern. Built basic projects using React.js - VPN Website, Stopwatch & Timer, Live Weather Website.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Back-End Development Intern",
    company: "Bet Web",
    period: "Dec 2023",
    description:
      "Back-End Development Intern. Learned about back-end development with Python Django framework.",
    technologies: ["Python", "Django", "Backend Development"],
  },
];

const projects = [
  {
    title: "Onechat Chat Application",
    description:
      "A real-time chat application with authentication and responsive UI.",
    technologies: ["React", "Socket.io", "Supabase"],
    liveDemo: "https://onechat-khaki.vercel.app/",
    github: "https://github.com/gauravkathiriya/onechat",
  },
  {
    title: "Weather App",
    description: "Weather forecasting app using API integration.",
    technologies: ["React", "API Integration", "Responsive Design"],
    liveDemo: "https://track-weather-application.netlify.app/",
    github: "https://github.com/gauravkathiriya/weather-app",
  },
  {
    title: "Expense Tracker",
    description: "Expense tracker with logic functionality and user dashboard.",
    technologies: ["React", "Supabase", "Chart.js"],
    liveDemo: "https://expence-tracker-eta-nine.vercel.app/login",
    github: "https://github.com/gauravkathiriya/expence-tracker",
  },
  {
    title: "Online Auction System",
    description: "An online auction platform with real-time bidding.",
    technologies: ["Next.js", "Nest.js", "WebSocket", "PostgreSQL"],
    liveDemo: "https://quickbidz.netlify.app/",
    github:
      "https://github.com/gauravkathiriya/online-auction-platform-quickbidz",
  },
];

const education = [
  {
    degree: "Bachelor of Computer Information Technology (CGPA: 8.96)",
    institution: "Silver Oak University",
    period: "2021 - 2025",
  },
  {
    degree: "HSC (Percentage: 74.73%)",
    institution: "J.B. & Karp Vidya Sankul",
    period: "2019 - 2021",
  },
];

const certifications = [
  "Crash Course on Python by Google",
  "Web Development Course by Johns Hopkins University",
  "Silver oak Volunteer (2022)",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navigation />
      <motion.section
        className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white pt-16"
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
                Gaurav Kathiriya
              </motion.h1>
              <motion.p
                className="text-xl lg:text-2xl mb-4 text-blue-100"
                variants={fadeInUp}
              >
                Frontend Developer
              </motion.p>
              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8"
                variants={fadeInUp}
              >
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30"
                >
                  ReactJS
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30"
                >
                  NextJS
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30"
                >
                  NestJS
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30"
                >
                  GraphQL
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30"
                >
                  PostgreSQL
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30"
                >
                  MUI
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30"
                >
                  Shadcn
                </Badge>
              </motion.div>
              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
                variants={fadeInUp}
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 hover:cursor-pointer transition-all duration-200 hover:shadow-lg group relative"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:cursor-pointer transition-all duration-200 hover:shadow-lg group relative"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </motion.div>
              <motion.div
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6 text-sm"
                variants={fadeInUp}
              >
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">gauravkathiriya45@gmail.com</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>9924875063</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span>Surat, Gujarat, India</span>
                </div>
              </motion.div>
            </motion.div>
            <motion.div className="flex-shrink-0" variants={fadeInUp}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-75 animate-pulse"></div>
                <Image
                  src="/profile.png"
                  alt="Gaurav Kathiriya"
                  width={300}
                  height={300}
                  className="relative rounded-full border-4 border-white/20 shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
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
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  🚀{" "}
                  <strong>
                    Full-Stack Developer | React | NestJS | GraphQL | PostgreSQL
                    | MUI
                  </strong>
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Hi there! I&apos;m a skilled Full-Stack Developer with
                  expertise in React, NestJS, GraphQL, and PostgreSQL,
                  specializing in building high-performance web applications.
                  With a strong background in monorepo architecture,
                  Material-UI, and Apollo Client, I create scalable and
                  efficient solutions tailored to business needs.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">
                      What I Offer:
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✅</span>
                        <span>
                          <strong>Front-End Development:</strong> React,
                          Next.js, MUI, TailwindCSS, Bootstrap
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✅</span>
                        <span>
                          <strong>Back-End Development:</strong> NestJS,
                          Node.js, Express.js
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✅</span>
                        <span>
                          <strong>Database Management:</strong> PostgreSQL,
                          MySQL, MongoDB
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✅</span>
                        <span>
                          <strong>GraphQL & REST APIs:</strong> Apollo Client,
                          TypeORM, Prisma
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✅</span>
                        <span>
                          <strong>Authentication & Security:</strong> JWT,
                          Passport.js
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✅</span>
                        <span>
                          <strong>Performance Optimization:</strong> Caching,
                          Query Optimization, Best Practices
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">
                      Why Work With Me?
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">🔹</span>
                        <span>Strong problem-solving skills</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">🔹</span>
                        <span>
                          Clean, maintainable, and well-documented code
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">🔹</span>
                        <span>Experience with monorepo and microservices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">🔹</span>
                        <span>Effective communication & on-time delivery</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
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
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Code className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                  <CardTitle>Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Server className="h-12 w-12 mx-auto mb-4 text-green-600" />
                  <CardTitle>Backend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Database className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                  <CardTitle>Database</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.database.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Globe className="h-12 w-12 mx-auto mb-4 text-orange-600" />
                  <CardTitle>Tools & Others</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge key={skill} variant="secondary">
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

      {/* Experience Section */}
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
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-blue-600">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        <Calendar className="mr-2 h-4 w-4" />
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
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
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <CardHeader>
                    <CardTitle className="group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 group relative hover:cursor-pointer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 group relative hover:cursor-pointer"
                      >
                        <Github className="mr-2 h-4 w-4" />
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
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-blue-600" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-blue-600 pl-4"
                    >
                      <h3 className="font-semibold text-gray-900">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-600 font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-gray-600">{edu.period}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-green-600" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

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
              Let&apos;s Work Together
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let&apos;s discuss your next
              project and create something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-200 hover:shadow-lg group relative"
              >
                <Mail className="mr-2 h-5 w-5" />
                <span className="hidden sm:inline">
                  gauravkathiriya45@gmail.com
                </span>
                <span className="sm:hidden">Email</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:cursor-pointer transition-all duration-200 hover:shadow-lg group relative"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:cursor-pointer transition-all duration-200 hover:shadow-lg group relative"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>9924875063</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Surat, Gujarat, India</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Gaurav Kathiriya. All rights reserved. Built with Next.js and
            Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
