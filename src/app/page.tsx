"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Mail, 
  Linkedin, 
  Github, 
  ExternalLink, 
  MapPin, 
  Calendar,
  Phone,
  Twitter,
  ChevronUp,
  Trophy,
  Code,
  Database,
  Wrench,
  Cpu,
  Globe,
  GitBranch,
  Server,
  Cloud,
  Coffee,
  Building,
  Download,
  Star,
  ArrowRight,
  Zap,
  Users,
  Target,
  MessageCircle,
  Rocket,
  CheckCircle,
  Sparkles,
  Palette,
  Layers,
  BarChart3,
  Heart,
  CalendarDays,
  MapPinned,
  Briefcase as BriefcaseIcon,
  Timer,
  Activity,
  Settings,
  FolderOpen,
  AlertCircle,
  Layout,
  BookOpen,
  GraduationCap,
  Shield,
  Network,
  // ...existing code...
  // ...existing code...
  // ...existing code...
  Eye,
  // ...existing code...
} from "lucide-react";
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { motion, useScroll, useTransform, AnimatePresence, easeInOut, easeOut } from 'motion/react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false); // Set light mode as default
  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const [selectedProject, setSelectedProject] = useState(0);
  const [activeExperience, setActiveExperience] = useState(0);
  const [activeSkillTab, setActiveSkillTab] = useState("backend");
  const [isEmailDialogOpen, setIsEmailDialogOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const heroRef = useRef(null);

  // Move roles array inside useMemo to avoid changing deps
  const roles = useMemo(() => [
    "Java Developer", 
    "Full Stack Engineer", 
    "Backend Specialist", 
    "Cloud Architect"
  ], []);

  // Download Resume function
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Ranjit_Bichukale_Resume.pdf';
    link.click();
  };

  // Copy email function
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('Ranjit Bichukale11@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle scroll for show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentRoleText = roles[currentRole];
    let currentIndex = 0;
    let isDeleting = false;
    
    const typeInterval = setInterval(() => {
      if (!isDeleting && currentIndex < currentRoleText.length) {
        setTypedText(currentRoleText.slice(0, currentIndex + 1));
        currentIndex++;
      } else if (isDeleting && currentIndex > 0) {
        setTypedText(currentRoleText.slice(0, currentIndex - 1));
        currentIndex--;
      } else if (!isDeleting && currentIndex === currentRoleText.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(typeInterval);
  }, [currentRole, roles]);

  interface Skill {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    level: number;
    category: string;
    color: string;
  }

  const skills: Skill[] = [
    { name: "Java", icon: Coffee, level: 80, category: "backend", color: "from-orange-500 to-red-600" },
    { name: "Spring Boot", icon: Server, level: 70, category: "backend", color: "from-green-500 to-emerald-600" },
    { name: "REST API", icon: Database, level: 75, category: "backend", color: "from-blue-500 to-indigo-600" },
    { name: "MySQL", icon: Database, level: 85, category: "backend", color: "from-blue-600 to-purple-600" },
    { name: "MongoDB", icon: Database, level: 80, category: "backend", color: "from-green-600 to-teal-600" },
    
    { name: "HTML/CSS", icon: Code, level: 95, category: "frontend", color: "from-orange-500 to-red-500" },
    { name: "React.js", icon: Globe, level: 85, category: "frontend", color: "from-blue-500 to-cyan-500" },
    { name: "Tailwind CSS", icon: Palette, level: 90, category: "frontend", color: "from-cyan-500 to-blue-500" },
    { name: "JavaScript", icon: Zap, level: 40, category: "frontend", color: "from-yellow-500 to-orange-500" },
    
    { name: "Docker", icon: Wrench, level: 40, category: "devops", color: "from-blue-600 to-cyan-600" },
    { name: "AWS EC2", icon: Cloud, level: 70, category: "devops", color: "from-orange-500 to-yellow-500" },
    { name: "CI/CD", icon: GitBranch, level: 80, category: "devops", color: "from-purple-500 to-pink-500" },
    { name: "Kubernetes", icon: Settings, level: 40, category: "devops", color: "from-indigo-500 to-purple-500" },
    
    { name: "Git", icon: GitBranch, level: 85, category: "tools", color: "from-gray-600 to-slate-600" },
    { name: "Postman", icon: Cpu, level: 85, category: "tools", color: "from-orange-500 to-red-500" },
    { name: "VS Code", icon: Code, level: 92, category: "tools", color: "from-blue-500 to-indigo-500" },
    { name: "Maven", icon: Settings, level: 80, category: "tools", color: "from-red-500 to-pink-500" },
  ];

  const projects = [
    {
      title: "Matrimonial Website",
      subtitle: "Modern Matrimonial Platform",
      description: "A comprehensive matrimonial platform with advanced matching algorithms, secure user profiles,  features to help people find their perfect life partner.",
      longDescription: "A full-featured matrimonial website built with  web technologies. Includes advanced search filters, compatibility matching, profile verification, and premium membership features.",
      technologies: ["PHP", "CSS", "MySQL", "XAMPP"],
      techDetails: [
        { name: "PHP", proficiency: 92, color: "from-blue-500 to-cyan-500", icon: Globe },
        { name: "CSS", proficiency: 88, color: "from-green-500 to-emerald-500", icon: Server },
        { name: "MySQL", proficiency: 85, color: "from-green-600 to-green-800", icon: Database },
        { name: "XAMPP", proficiency: 80, color: "from-purple-500 to-pink-500", icon: Network }
      ],
      github: "https://github.com/ranjit-me/matrimonial-website",
      demo: "#",
      year: "2024",
      category: "Web Development",
      status: "completed",
      challenges: [
        "Connecting MySQL database to PHP backend",
        "Optimizing photo upload and storage size",
        "Ensuring user privacy and data protection"
      ],
      duration: "4 months",
      teamSize: "4 members",
      projectImage: "https://images.unsplash.com/photo-1522543558187-768b6df7c25c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Multi-Portfolio-Hub",
      subtitle: "Dynamic Portfolio Creation Platform",
      description: "Designed a portfolio website where multiple users can select templates for  their portfolios in under 5 minutes through a simple, user-friendly interface.",
      longDescription: "A comprehensive platform that revolutionizes how developers create and manage their portfolios. Built with modern React architecture and Spring Boot for backend, it features real-time  template selection, and instant deployment capabilities.",
      technologies: ["React.js", "Spring-Boot", "S3 Bucket", "MongoDB"],
      techDetails: [
        { name: "React.js", proficiency: 95, color: "from-blue-500 to-cyan-500", icon: Globe },
        { name: "Spring-Boot", proficiency: 88, color: "from-green-500 to-emerald-500", icon: Server },
        { name: "S3 Bucket", proficiency: 85, color: "from-gray-500 to-slate-500", icon: Layers },
        { name: "MongoDB", proficiency: 82, color: "from-green-600 to-green-800", icon: Database }
      ],
      github: "https://github.com/ranjit-me/Multi-Portfolio-Hub",
      demo: "#",
      year: "2025",
      category: "Web Development",
      status: "completed",
      challenges: [
        "Connecting user schema and profile schema for authentication",
        "Creating and managing S3 bucket connection policies",
        "Establishing seamless frontend and backend integration"
      ],
      duration: "3 months",
      teamSize: "2 members",
      projectImage: "https://images.unsplash.com/photo-1698047681432-006d2449c631?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Library Management System",
      subtitle: "Advanced Book Management Platform",
      description: "A comprehensive library management system built with Java and Spring Boot. Features include book catalog management, borrowing system, and analytics dashboard.",
      longDescription: "A robust library management solution designed to streamline library operations. Features include ,  digital book reservations, and comprehensive reporting system for library administrators.",
      technologies: ["Java", "Spring Boot", "Thymeleaf", "MySQL"],
      techDetails: [
        { name: "Java", proficiency: 92, color: "from-orange-500 to-red-500", icon: Coffee },
        { name: "Spring Boot", proficiency: 88, color: "from-green-500 to-lime-500", icon: Server },
        { name: "Thymeleaf", proficiency: 80, color: "from-blue-500 to-indigo-500", icon: Layout },
        { name: "MySQL", proficiency: 85, color: "from-blue-600 to-blue-800", icon: Database }
      ],
      github: "https://github.com/ranjit-me/library-management-system",
      demo: "#",
      year: "2024",
      category: "Enterprise Software",
      status: "completed",
      challenges: [
        "Integrating and managing relationships between multiple database tables"
      ],
      duration: "1.5 months",
      teamSize: "solo",
      projectImage: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Siddhanath.shop",
      subtitle: " Agricultural Management System",
      description: "Developed a comprehensive agricultural management system for Siddhanath Krushi Kendra, to sell agricultural products online. The platform is now live and serving customers.",
      longDescription: "A robust agricultural management system designed to streamline the sale of agricultural products. Features include a user-friendly interface for farmers and customers. The project is currently live and actively serving the agricultural community.",
      technologies: ["React.js", "Tailwind CSS", "Lazy Loading"],
      techDetails: [
        { name: "React.js", proficiency: 88, color: "from-blue-500 to-cyan-500", icon: Globe },
        { name: "Tailwind CSS", proficiency: 75, color: "from-orange-500 to-red-500", icon: BarChart3 },
        { name: "Lazy Loading", proficiency: 85, color: "from-green-500 to-emerald-500", icon: Server }
      ],
      github: "https://github.com/ranjit-me/siddhanath.shop",
      demo: "https://siddhanath.shop/",
      year: "2024",
      category: "Client Project",
      status: "live",
      impact: "Successfully launched and serving the agricultural community with online product sales",
      keyFeatures: [
        "Product catalog management",
        "Order processing system", 
        "Farmer dashboard",
        "Customer interface"
      ],
      challenges: [
        "Integrating modern design with agricultural business needs",
        "Optimizing performance for rural internet connectivity",
        "Building user-friendly interface for diverse user groups"
      ],
      duration: "1 months",
      teamSize: "2 members",
      projectImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const experience = [
    {
      role: "Java Developer Intern",
      company: "Anvistar ITS Pvt. Ltd",
      companyLogo: "https://images.unsplash.com/photo-1586202690666-e1f32e218afe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NTU0NTY3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      location: "Pune, India",
      period: "Jun 2025",
      duration: "1 months",
      type: "Internship",
      description: "Implemented business logic and optimized SQL queries, reducing database response time by 25%. Developed reusable backend modules using Java, enhancing code maintainability across 3 internal projects.",
      achievements: [
        "Established secure and efficient database connectivity to ensure reliable data transactions.",
        "Integrated frontend and backend through RESTful APIs for seamless data communication.",
        "Performed API testing using tools like Postman to ensure functionality and reliability.",
      ],
      skills: ["Java", "SQL", "Spring Boot", "Performance Optimization"],
      projects: [
        {
          name: "Library Management System",
          description: "Built REST APIs for student book activity management",
          // impact: "Improved data retrieval speed by 40%"
        }
      ],
      technologies: [ "Spring Boot", "MongoDB", "HTML","CSS", "Postman"],
      metrics: {
        codeReview: "95%",
        bugFixes: "45+",
        features: "12+"
      }
    },
    {
      role: "Full Stack Development Intern",
      company: "Cognifyz Technologies",
      companyLogo: "https://images.unsplash.com/photo-1748256622734-92241ae7b43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzU1NTkwMDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      location: "Nagpur, India",
      period: "Jan 2025",
      duration: "1 months",
      type: "Internship",
      description: "Gained comprehensive experience in full-stack development with focus on frontend technologies. Learned React.js fundamentals, component architecture, Routing in React.js. Built 2+ full-stack applications using React.js .",
      achievements: [
        "React.js fundamentals and component lifecycle",
        "Learned advanced route management and state handling",
        "Built 2+ frontend applications with modern frontend practices", 
      ],
      skills: ["React.js", "Routing","Rest Api", "Node.js", "Full Stack Development"],
      projects: [
        {
          name: "Task Management App",
          description: "Created collaborative task management solution implementing advanced React patterns and efficient state management",
          // impact: "Increased team productivity by 35% with intuitive interface"
        }
      ],
      technologies: ["React.js", "JavaScript ES6+", "Props & State Management", "Node.js", "Express", "MongoDB"],
      metrics: {
        codeReview: "98%",
        userStories: "25+",
        deployments: "20+"
      }
    }
  ];

  const achievements = [
    {
      title: "PoweBi Hackathon Winner",
      description: "Winner of PowerBi Hackathon for innovative data visualization solution",
      icon: Star,
      date: "2025",
      category: "Award",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  // Professional Timeline Data
  const professionalTimeline = [
    {
      date: "Jun 2025",
      title: "Java Developer Intern",
      company: "Anvistar ITS Pvt. Ltd",
      type: "internship",
      description: "Backend development and database optimization",
      status: "completed"
    },
    {
      date: "Jan 2025",
      title: "Full Stack Development Intern", 
      company: "Cognifyz Technologies",
      type: "internship",
      description: "Frontend development with React.js, props management, and component architecture",
      status: "completed"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  const skillItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: easeOut
      }
    })
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: easeInOut
    }
  };

  // Enhanced skill rendering function
  const renderSkillItem = (skill: Skill, index: number) => {
    const IconComponent = skill.icon;
    return (
      <motion.div 
        key={skill.name}
        custom={index}
        variants={skillItemVariants}
        whileHover={{ 
          scale: 1.02, 
          y: -2,
          transition: { duration: 0.2 }
        }}
        className="group space-y-3 p-4 rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div 
              className={`w-10 h-10 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300`}
              whileHover={{ rotate: 5, scale: 1.1 }}
            >
              <IconComponent className="w-5 h-5 text-white" />
            </motion.div>
            <div>
              <span className="font-medium text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{skill.name}</span>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {skill.category === 'backend' ? 'Backend' : 
                 skill.category === 'frontend' ? 'Frontend' : 
                 skill.category === 'devops' ? 'DevOps' : 'Tools'}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${darkMode ? 'dark' : ''}`}>
      {/* Parallax Background */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.01]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1751646563987-d5720fb773cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwYWJzdHJhY3QlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc1NTU4ODk5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </motion.div>
      
      {/* Floating Elements */}
      <motion.div
        className="fixed top-20 left-10 w-24 h-24 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-xl z-0"
        animate={floatingAnimation}
      />
      <motion.div
        className="fixed top-60 right-20 w-20 h-20 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-xl z-0"
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 1.5 }
        }}
      />
      
      {/* Main Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50/98 via-white/95 to-blue-50/98 dark:from-slate-950/98 dark:via-slate-900/95 dark:to-slate-950/98 z-0" />
      
      {/* Dark Mode Toggle - Fixed Position */}
      <div className="fixed top-6 right-6 z-50">
        <Card className="p-2 backdrop-blur-md bg-white/50 dark:bg-slate-800/50 border-0">
          <div className="flex items-center gap-2">
            <Star className="w-3 h-3 text-amber-500" />
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            <Sparkles className="w-3 h-3 text-slate-600 dark:text-slate-300" />
          </div>
        </Card>
      </div>
      
      <div className="relative z-10">
        {/* Hero Section - Modified to remove profile picture */}
        <section id="hero" ref={heroRef} className="min-h-screen flex items-center justify-center">
          <motion.div 
            className="container mx-auto px-6 py-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-5xl mx-auto">
              <Card className="overflow-hidden backdrop-blur-md bg-white/90 dark:bg-slate-900/90 shadow-2xl border-0 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/3 via-purple-500/3 to-pink-500/3" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                
                <CardContent className="p-12 relative">
                  <motion.div variants={itemVariants} className="text-center">
                    <div className="space-y-8 max-w-4xl mx-auto">
                      <div className="space-y-4">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full"
                        >
                          <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          <span className="text-sm text-blue-800 dark:text-blue-300">Available for hire</span>
                        </motion.div>
                        
                        <h1 className="text-4xl lg:text-6xl bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                            Hi, I&apos;m Ranjit Bichukale
                        </h1>
                        
                        <div className="text-xl lg:text-2xl text-muted-foreground">
                          <span>I&apos;m a </span>
                          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {typedText}
                          </span>
                          <span className="animate-pulse">|</span>
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        Passionate about creating scalable backend applications and modern web solutions. 
                        I transform ideas into powerful digital experiences with clean code and innovative thinking.
                      </p>
                      
                      <div className="flex flex-wrap justify-center gap-4">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button 
                            size="lg" 
                            className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                            onClick={downloadResume}
                          >
                            <Download className="w-5 h-5" />
                            Download Resume
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Dialog open={isEmailDialogOpen} onOpenChange={setIsEmailDialogOpen}>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="lg" className="gap-2">
                                <MessageCircle className="w-5 h-5" />
                                Let&apos;s Talk
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                              <DialogHeader>
                                <DialogTitle>Get In Touch</DialogTitle>
                              </DialogHeader>
                              <div className="flex items-center space-x-2">
                                <div className="grid flex-1 gap-2">
                                  <label htmlFor="email" className="sr-only">
                                    Email
                                  </label>
                                  <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                                    <Mail className="w-4 h-4" />
                                    <span className="font-mono text-sm">ranjitbichukale11@gmail.com</span>
                                  </div>
                                </div>
                                <Button onClick={copyEmail} size="sm" className="px-3">
                                  {emailCopied ? "Copied!" : "Copy"}
                                </Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </motion.div>
                      </div>

                      <div className="flex justify-center gap-4">
                        {[
                          { icon: Github, href: "https://github.com/ranjit-me", label: "GitHub" },
                          { icon: Linkedin, href: "https://www.linkedin.com/in/ranjit-me/", label: "LinkedIn" },
                          { icon: Mail, href: "mailto:Ranjit Bichukale11@gmail.com", label: "Email" }
                        ].map((social) => (
                          <motion.a
                            key={social.label}
                            href={social.href}
                            target={social.label !== "Email" ? "_blank" : undefined}
                            rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                          >
                            <social.icon className="w-5 h-5 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400" />
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-900/50">
          <motion.div 
            className="container mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-6xl mx-auto">
              <motion.div variants={itemVariants} className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl mb-4 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                  About Me
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Passionate developer with a focus on creating impactful solutions that make a difference
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12">
                <motion.div variants={itemVariants}>
                  <Card className="backdrop-blur-md bg-white/90 dark:bg-slate-800/90 shadow-xl border-0 h-full">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl mb-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                              <Code className="w-4 h-4 text-white" />
                            </div>
                            My Journey
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            Currently pursuing <span className="font-semibold text-blue-600 dark:text-blue-400">B.Tech in Computer Science Engineering</span> at 
                            Dr. D.Y. Patil Pratishthan&apos;s College of Engineering, Kolhapur. 
                          </p>
                          
                          <div className="space-y-4 mb-6">
                            <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                                <Globe className="w-4 h-4" />
                                Full-Stack Development
                              </h4>
                              <p className="text-sm text-blue-700 dark:text-blue-300">
                                I can build complete web applications using <span className="font-medium">React.js</span> for frontend, 
                                <span className="font-medium"> Spring Boot</span> for backend, and <span className="font-medium">MongoDB Atlas</span> as the database.
                              </p>
                            </div>
                            
                            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-800">
                              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                                <GitBranch className="w-4 h-4" />
                                Version Control & Collaboration
                              </h4>
                              <p className="text-sm text-green-700 dark:text-green-300">
                                Actively use <span className="font-medium">Git</span> and <span className="font-medium">GitHub</span> for version control, 
                                collaborative development, and code management.
                              </p>
                            </div>
                            
                            <div className="p-4 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2 flex items-center gap-2">
                                <Cloud className="w-4 h-4" />
                                Cloud & DevOps
                              </h4>
                              <p className="text-sm text-orange-700 dark:text-orange-300">
                                Experience with <span className="font-medium">AWS deployment</span> and hosting. Basic knowledge of 
                                <span className="font-medium"> AWS services</span>, <span className="font-medium">Docker</span>, and <span className="font-medium">Jenkins</span> for CI/CD.
                              </p>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            My passion for technology drives me to continuously learn and adapt to new challenges in the ever-evolving world of software development.
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center gap-4">
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                              <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                              <h4 className="text-lg">Location</h4>
                              <p className="text-sm text-muted-foreground">Solapur, Maharashtra, India</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                              <Heart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div>
                              <h4 className="text-lg">Interests</h4>
                              <p className="text-sm text-muted-foreground">Open Source, Cloud Computing, AI/ML</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card className="backdrop-blur-md bg-white/90 dark:bg-slate-800/90 shadow-xl border-0 h-full overflow-hidden">
                    <CardContent className="p-8">
                      <motion.h3 
                        className="text-2xl mb-6 flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <motion.div 
                          className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center"
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Cpu className="w-4 h-4 text-white" />
                        </motion.div>
                        Technical Skills
                      </motion.h3>

                      <Tabs value={activeSkillTab} onValueChange={setActiveSkillTab} className="space-y-6">
                        <TabsList className="grid w-full grid-cols-4 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                          {[
                            { value: "backend", label: "Backend", icon: Server },
                            { value: "frontend", label: "Frontend", icon: Globe },
                            { value: "devops", label: "DevOps", icon: Cloud },
                            { value: "tools", label: "Tools", icon: Settings }
                          ].map((tab) => {
                            const IconComponent = tab.icon;
                            return (
                              <TabsTrigger 
                                key={tab.value}
                                value={tab.value} 
                                className="flex items-center gap-2 relative overflow-hidden transition-all duration-300 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:shadow-sm rounded-lg"
                              >
                                <IconComponent className="w-4 h-4" />
                                <span className="hidden sm:inline">{tab.label}</span>
                                {activeSkillTab === tab.value && (
                                  <motion.div
                                    layoutId="activeSkillTab"
                                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg"
                                    initial={false}
                                    transition={{ type: "spring", duration: 0.5 }}
                                  />
                                )}
                              </TabsTrigger>
                            );
                          })}
                        </TabsList>

                        <AnimatePresence mode="wait">
                          <TabsContent value="backend" className="space-y-4 mt-6">
                            <motion.div 
                              className="grid gap-4"
                              variants={containerVariants}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                            >
                              {skills.filter(skill => skill.category === 'backend').map((skill, index) => 
                                renderSkillItem(skill, index)
                              )}
                            </motion.div>
                          </TabsContent>

                          <TabsContent value="frontend" className="space-y-4 mt-6">
                            <motion.div 
                              className="grid gap-4"
                              variants={containerVariants}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                            >
                              {skills.filter(skill => skill.category === 'frontend').map((skill, index) => 
                                renderSkillItem(skill, index)
                              )}
                            </motion.div>
                          </TabsContent>

                          <TabsContent value="devops" className="space-y-4 mt-6">
                            <motion.div 
                              className="grid gap-4"
                              variants={containerVariants}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                            >
                              {skills.filter(skill => skill.category === 'devops').map((skill, index) => 
                                renderSkillItem(skill, index)
                              )}
                            </motion.div>
                          </TabsContent>

                          <TabsContent value="tools" className="space-y-4 mt-6">
                            <motion.div 
                              className="grid gap-4"
                              variants={containerVariants}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                            >
                              {skills.filter(skill => skill.category === 'tools').map((skill, index) => 
                                renderSkillItem(skill, index)
                              )}
                            </motion.div>
                          </TabsContent>
                        </AnimatePresence>
                      </Tabs>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects Section - Updated to match Professional Journey style */}
        <section id="projects" className="py-16">
          <motion.div 
            className="container mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-7xl mx-auto">
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl mb-4 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                  Featured Projects
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A showcase of innovative solutions and cutting-edge technologies
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-4 gap-6">
                {/* Project Timeline Navigation */}
                <div className="lg:col-span-1">
                  <motion.div variants={itemVariants}>
                    <Card className="backdrop-blur-md bg-white/90 dark:bg-slate-800/90 shadow-xl border-0 sticky top-24">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-3 text-lg">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                            <FolderOpen className="w-4 h-4 text-white" />
                          </div>
                          Projects
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-3">
                          {projects.map((project, index) => (
                            <motion.div
                              key={index}
                              whileHover={{ scale: 1.02 }}
                              onClick={() => setSelectedProject(index)}
                              className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                                selectedProject === index
                                  ? 'bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border-l-4 border-blue-500'
                                  : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                              }`}
                            >
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <h4 className="text-sm text-blue-600 dark:text-blue-400">{project.title}</h4>
                                  <Badge variant={project.status === 'ongoing' ? 'default' : 'secondary'} className="text-xs">
                                    {project.status}
                                  </Badge>
                                </div>
                                <p className="text-xs text-muted-foreground">{project.category}</p>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <Calendar className="w-3 h-3" />
                                  {project.year}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-3">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedProject}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="backdrop-blur-md bg-white/90 dark:bg-slate-800/90 shadow-xl border-0 overflow-hidden">
                        {/* Project Header */}
                        <div className="relative h-48 overflow-hidden">
                          <ImageWithFallback
                            src={projects[selectedProject].projectImage}
                            alt={projects[selectedProject].title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                          
                          {/* Project Info Overlay */}
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-end justify-between">
                              <div className="text-white">
                                <h3 className="text-xl lg:text-2xl mb-2">{projects[selectedProject].title}</h3>
                                <p className="text-white/90 mb-2">{projects[selectedProject].subtitle}</p>
                                <div className="flex items-center gap-4 text-white/80 text-sm">
                                  <div className="flex items-center gap-2">
                                    <Code className="w-3 h-3" />
                                    {projects[selectedProject].category}
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Calendar className="w-3 h-3" />
                                    {projects[selectedProject].year}
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-2">
                                <Badge className={`${
                                  projects[selectedProject].status === 'ongoing' ? 'bg-green-500/80' : 
                                  projects[selectedProject].status === 'live' ? 'bg-emerald-500/80' : 
                                  'bg-blue-500/80'
                                } backdrop-blur-sm text-white border-white/20 text-xs`}>
                                  {projects[selectedProject].status}
                                </Badge>
                                <div className="flex gap-2">
                                  <a 
                                    href={projects[selectedProject].github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                                      <Github className="w-4 h-4" />
                                    </Button>
                                  </a>
                                  {projects[selectedProject].demo !== "#" && (
                                    <a 
                                      href={projects[selectedProject].demo}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                                        <ExternalLink className="w-4 h-4" />
                                      </Button>
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <CardContent className="p-6">
                          <div className="space-y-6">
                            {/* Project Overview */}
                            <div className="grid md:grid-cols-3 gap-6">
                              <div className="md:col-span-2">
                                <h4 className="text-lg mb-3 flex items-center gap-2">
                                  <Target className="w-5 h-5 text-blue-600" />
                                  Project Overview
                                </h4>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                  {projects[selectedProject].longDescription}
                                </p>
                                <div className="flex items-center gap-2 mb-4">
                                  {/* <Activity className="w-4 h-4 text-green-600" /> */}
                                  <span className="text-green-700 dark:text-green-300">{projects[selectedProject].impact}</span>
                                </div>
                              </div>
                              
                              <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-3">
                                  <div className="text-center p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                                    <Timer className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                                    <div className="text-xs text-muted-foreground">Duration</div>
                                    <div className="text-sm">{projects[selectedProject].duration}</div>
                                  </div>
                                  <div className="text-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg">
                                    <Users className="w-5 h-5 text-green-600 mx-auto mb-1" />
                                    <div className="text-xs text-muted-foreground">Team Size</div>
                                    <div className="text-sm">{projects[selectedProject].teamSize}</div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Key Features */}
                            {/* <div className="space-y-4">
                              <h4 className="text-lg flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-amber-500" />
                                Key Features
                              </h4>
                              <div className="grid md:grid-cols-2 gap-3">
                                {projects[selectedProject].keyFeatures.map((feature, featureIndex) => (
                                  <motion.div
                                    key={featureIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: featureIndex * 0.1 }}
                                    className="flex items-start gap-3 p-3 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-lg border border-amber-200 dark:border-amber-800"
                                  >
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">{feature}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </div> */}

                            {/* Technology Stack */}
                            <div className="space-y-4">
                              <h4 className="text-lg flex items-center gap-2">
                                <Settings className="w-5 h-5 text-purple-600" />
                                Technology Stack
                              </h4>
                              <div className="grid md:grid-cols-2 gap-4">
                                {projects[selectedProject].techDetails.map((tech, techIndex) => {
                                  const IconComponent = tech.icon;
                                  return (
                                    <motion.div
                                      key={tech.name}
                                      initial={{ opacity: 0, scale: 0.9 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: techIndex * 0.1 }}
                                      className="space-y-2 p-4 bg-white dark:bg-slate-800/50 rounded-xl shadow-sm border border-slate-200/50 dark:border-slate-700/50"
                                    >
                                      <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${tech.color} flex items-center justify-center`}>
                                            <IconComponent className="w-4 h-4 text-white" />
                                          </div>
                                          <span>{tech.name}</span>
                                        </div>
                                      </div>
                                    </motion.div>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Challenges */}
                            <div className="space-y-4">
                              <h4 className="text-lg flex items-center gap-2">
                                <AlertCircle className="w-5 h-5 text-orange-600" />
                                Technical Challenges
                              </h4>
                              <div className="grid gap-3">
                                {projects[selectedProject].challenges.map((challenge, challengeIndex) => (
                                  <motion.div
                                    key={challengeIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: challengeIndex * 0.1 }}
                                    className="flex items-start gap-3 p-3 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg border border-orange-200 dark:border-orange-800"
                                  >
                                    <Target className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-muted-foreground">{challenge}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Call to Action */}
              <motion.div variants={itemVariants} className="text-center mt-16">
                <div className="space-y-6">
                  {/* <h3 className="text-2xl bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                    Ready to Start Your Next Project?
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Let&apos;s collaborate and bring your ideas to life with cutting-edge technology and innovative solutions.
                  </p> */}
                  <div className="flex flex-wrap justify-center gap-4">
                    {/* <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
                      <MessageCircle className="w-5 h-5" />
                      Start a Project
                    </Button> */}
                    <a 
                      href="https://github.com/ranjit-me?tab=repositories"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="lg" className="gap-2">
                        <Github className="w-5 h-5" />
                        View All on GitHub
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Professional Journey Section with Timeline */}
        <section id="experience" className="py-16 bg-slate-50/50 dark:bg-slate-900/50">
          <motion.div 
            className="container mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-7xl mx-auto">
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl mb-4 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                  Professional Journey
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  My career progression and key achievements in software development
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-5 gap-6">
                {/* Timeline Navigation - Enhanced */}
                <div className="lg:col-span-2">
                  <motion.div variants={itemVariants}>
                    <Card className="backdrop-blur-md bg-white/90 dark:bg-slate-800/90 shadow-xl border-0 sticky top-24">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-3 text-lg">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <CalendarDays className="w-4 h-4 text-white" />
                          </div>
                          Professional Timeline
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-4 relative">
                          {/* Timeline Line */}
                          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500 opacity-30" />
                          
                          {professionalTimeline.map((item, index) => (
                            <motion.div
                              key={index}
                              whileHover={{ scale: 1.02, x: 2 }}
                              onClick={() => {
                                if (item.type === 'internship') {
                                  const expIndex = experience.findIndex(exp => exp.company === item.company);
                                  if (expIndex !== -1) setActiveExperience(expIndex);
                                }
                              }}
                              className={`relative p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                                item.type === 'internship' && experience[activeExperience]?.company === item.company
                                  ? 'bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border-l-4 border-purple-500 shadow-lg'
                                  : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 border border-slate-200 dark:border-slate-700'
                              }`}
                            >
                              {/* Timeline Dot */}
                              <div className={`absolute left-2 top-6 w-4 h-4 rounded-full border-4 border-white dark:border-slate-800 ${
                                item.status === 'ongoing' ? 'bg-green-500' :
                                item.status === 'live' ? 'bg-emerald-500' :
                                item.type === 'internship' ? 'bg-purple-500' :
                                item.type === 'achievement' ? 'bg-yellow-500' :
                                item.type === 'certification' ? 'bg-blue-500' : 'bg-gray-500'
                              } shadow-lg`} />
                              
                              <div className="ml-8 space-y-2">
                                <div className="flex items-center gap-2">
                                  <span className="text-xs text-muted-foreground">{item.date}</span>
                                  <Badge variant={item.status === 'ongoing' ? 'default' : 'secondary'} className="text-xs">
                                    {item.status}
                                  </Badge>
                                </div>
                                
                                <div className="space-y-1">
                                  <h4 className="text-sm text-purple-600 dark:text-purple-400">{item.title}</h4>
                                  <p className="text-xs text-muted-foreground">{item.company}</p>
                                  <p className="text-xs text-slate-600 dark:text-slate-400">{item.description}</p>
                                </div>
                                
                                <div className="flex items-center gap-1">
                                  {item.type === 'internship' && <BriefcaseIcon className="w-3 h-3 text-purple-500" />}
                                  {item.type === 'achievement' && <Trophy className="w-3 h-3 text-yellow-500" />}
                                  {item.type === 'certification' && <Shield className="w-3 h-3 text-blue-500" />}
                                  {item.type === 'education' && <GraduationCap className="w-3 h-3 text-green-500" />}
                                  <span className="text-xs text-muted-foreground capitalize">{item.type}</span>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Experience Details - Reduced width */}
                <div className="lg:col-span-3">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeExperience}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="backdrop-blur-md bg-white/90 dark:bg-slate-800/90 shadow-xl border-0 overflow-hidden">
                        {/* Experience Header */}
                        <div className="relative h-32 overflow-hidden">
                          <ImageWithFallback
                            src={experience[activeExperience].companyLogo}
                            alt={experience[activeExperience].company}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                          
                          {/* Company Info Overlay */}
                          <div className="absolute bottom-3 left-4 right-4">
                            <div className="flex items-end justify-between">
                              <div className="text-white">
                                <h3 className="text-lg lg:text-xl mb-1">{experience[activeExperience].role}</h3>
                                <div className="flex items-center gap-4 text-white/90 text-sm">
                                  <div className="flex items-center gap-2">
                                    <Building className="w-3 h-3" />
                                    {experience[activeExperience].company}
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <MapPinned className="w-3 h-3" />
                                    {experience[activeExperience].location}
                                  </div>
                                </div>
                              </div>
                              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/20 text-xs">
                                {experience[activeExperience].type}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <CardContent className="p-6">
                          <div className="space-y-6">
                            {/* Overview */}
                            <div className="grid md:grid-cols-3 gap-4">
                              <div className="md:col-span-2">
                                <h4 className="text-lg mb-3 flex items-center gap-2">
                                  <BriefcaseIcon className="w-5 h-5 text-purple-600" />
                                  Role Overview
                                </h4>
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                  {experience[activeExperience].description}
                                </p>
                              </div>
                              
                              <div className="space-y-3">
                                <div className="grid grid-cols-2 gap-3">
                                  <div className="text-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg">
                                    <Timer className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                                    <div className="text-xs text-muted-foreground">Duration</div>
                                    <div className="text-sm">{experience[activeExperience].duration}</div>
                                  </div>
                                  {/* <div className="text-center p-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg">
                                    <Users className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                                    <div className="text-xs text-muted-foreground">Team Size</div>
                                    <div className="text-sm">{experience[activeExperience].teamSize}</div>
                                  </div> */}
                                </div>
                              </div>
                            </div>

                            {/* Key Projects */}
                            <div className="space-y-4">
                              <h4 className="text-lg flex items-center gap-2">
                                <Rocket className="w-5 h-5 text-green-600" />
                                Key Projects
                              </h4>
                              <div className="grid md:grid-cols-2 gap-4">
                                {experience[activeExperience].projects.map((project, projectIndex) => (
                                  <Card key={projectIndex} className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
                                    <div className="space-y-2">
                                      <h5 className="text-green-800 dark:text-green-300 text-sm">{project.name}</h5>
                                      <p className="text-xs text-muted-foreground">{project.description}</p>
                                      <div className="flex items-center gap-2 text-xs">
                                        {/* <Activity className="w-3 h-3 text-green-600" /> */}
                                        {/* <span className="text-green-700 dark:text-green-300">{project.impact}</span> */}
                                      </div>
                                    </div>
                                  </Card>
                                ))}
                              </div>
                            </div>

                            {/* Technologies Used */}
                            <div className="space-y-4">
                              <h4 className="text-lg flex items-center gap-2">
                                <Settings className="w-5 h-5 text-orange-600" />
                                Technologies & Tools
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {experience[activeExperience].technologies.map((tech) => (
                                  <Badge 
                                    key={tech} 
                                    variant="outline" 
                                    className="bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300 text-xs"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Key Achievements */}
                            <div className="space-y-4">
                              <h4 className="text-lg flex items-center gap-2">
                                <Trophy className="w-5 h-5 text-yellow-600" />
                                Key Achievements
                              </h4>
                              <div className="grid gap-3">
                                {experience[activeExperience].achievements.map((achievement, achievementIndex) => (
                                  <motion.div
                                    key={achievementIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: achievementIndex * 0.1 }}
                                    className="flex items-start gap-3 p-3 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800"
                                  >
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-muted-foreground text-sm">{achievement}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Enhanced Education & Achievements */}
              <motion.div variants={itemVariants} className="mt-16">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Enhanced Education Section */}
                  <Card className="backdrop-blur-md bg-white/90 dark:bg-slate-800/90 shadow-2xl border-0 overflow-hidden">
                    <div className="relative h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500">
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute bottom-4 left-6 text-white">
                        <h3 className="text-xl flex items-center gap-3">
                          <GraduationCap className="w-6 h-6" />
                          Education
                        </h3>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div className="relative">
                          <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 opacity-30" />
                          
                          <div className="relative pl-12">
                            <div className="absolute left-4 top-6 w-5 h-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-white dark:border-slate-800 shadow-lg" />
                            
                            <motion.div 
                              className="space-y-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800"
                              whileHover={{ scale: 1.02, y: -2 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="space-y-2">
                                <h4 className="text-lg text-blue-800 dark:text-blue-300">Bachelor of Technology</h4>
                                <p className="text-blue-700 dark:text-blue-400">Computer Science Engineering</p>
                                <p className="text-sm text-muted-foreground">
                                  Dr. D.Y. Patil Pratishthan&apos;s College of Engineering, Kolhapur
                                </p>
                              </div>
                              
                              <div className="flex flex-wrap items-center gap-3">
                                <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                                  CGPA: 7.4
                                </Badge>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Calendar className="w-4 h-4" />
                                  2022 - 2026 (Expected)
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-4 mt-4">
                                {/* <div className="text-center p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                                  <BookOpen className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                                  <div className="text-xs text-muted-foreground">Courses</div>
                                  <div className="text-sm">40+ Completed</div>
                                </div> */}
                                <div className="text-center p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                                  <Eye className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                                  <div className="text-xs text-muted-foreground">Focus</div>
                                  <div className="text-sm">Web Development</div>
                                </div>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  {/* Enhanced Achievements Section */}
                  <Card className="backdrop-blur-md bg-white/90 dark:bg-slate-800/90 shadow-2xl border-0 overflow-hidden">
                    <div className="relative h-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute bottom-4 left-6 text-white">
                        <h3 className="text-xl flex items-center gap-3">
                          <Trophy className="w-6 h-6" />
                          Achievements &amp; Certifications
                        </h3>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {achievements.map((achievement, index) => {
                          const IconComponent = achievement.icon;
                          return (
                            <motion.div 
                              key={index} 
                              className={`flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r ${achievement.color}/10 border border-current/20 group hover:shadow-lg transition-all duration-300`}
                              whileHover={{ scale: 1.02, y: -2 }}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.2 }}
                            >
                              <motion.div 
                                className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center shadow-lg`}
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <IconComponent className="w-6 h-6 text-white" />
                              </motion.div>
                              <div className="flex-1 space-y-2">
                                <div className="flex items-center justify-between">
                                  <h4 className="text-sm">{achievement.title}</h4>
                                  <div className="flex items-center gap-2">
                                    <Badge variant="secondary" className="text-xs">
                                      {achievement.category}
                                    </Badge>
                                    <span className="text-xs text-muted-foreground">{achievement.date}</span>
                                  </div>
                                </div>
                                <p className="text-xs text-muted-foreground leading-relaxed">{achievement.description}</p>
                                
                                {achievement.title === "Open Source Contributor" && (
                                  <div className="flex items-center gap-4 mt-2">
                                    <div className="flex items-center gap-1 text-xs">
                                      <Github className="w-3 h-3 text-gray-600" />
                                      <span className="text-gray-700 dark:text-gray-300">50+ Contributions</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs">
                                      <Star className="w-3 h-3 text-yellow-500" />
                                      <span className="text-gray-700 dark:text-gray-300">Community Recognition</span>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
              {/* ...existing code... */}
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="relative bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  Get In Touch
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <Mail className="w-5 h-5" />
                    <a 
                      href="mailto:Ranjit Bichukale11@gmail.com" 
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      ranjitbichukale11@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <Phone className="w-5 h-5" />
                    <span>+91 9325770012</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <MapPin className="w-5 h-5" />
                    <span>Kolhapur, Maharashtra, India</span>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  Connect With Me
                </h3>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/ranjit-me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/ranjit-me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com/ranjitbichukale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Twitter className="w-6 h-6 text-sky-500 dark:text-sky-400" />
                  </motion.a>
                  <motion.a
                    href="mailto:Ranjit Bichukale11@gmail.com"
                    className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-6 h-6 text-red-500 dark:text-red-400" />
                  </motion.a>
                </div>
              </div>

              {/* Quick Links or Additional Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  Quick Links
                </h3>
                <div className="space-y-2">
                  <motion.div whileHover={{ x: 5 }}>
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto justify-start text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                      onClick={downloadResume}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ x: 5 }}>
                    <a 
                      href="https://github.com/ranjit-me"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Projects
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  © 2025 Ranjit Bichukale. All rights reserved.
                </p>
                <p className="text-slate-500 dark:text-slate-500 text-sm">
                  Built with Next.js, TypeScript & Tailwind CSS
                </p>
              </div>
            </div>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.div
              className="fixed bottom-6 right-6 z-50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                onClick={scrollToTop}
                size="lg"
                className="rounded-full p-3 bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ChevronUp className="w-6 h-6" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}