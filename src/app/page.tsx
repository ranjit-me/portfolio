"use client";
import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Mail, 
  Linkedin, 
  Github, 
  ExternalLink, 
  MapPin, 
  Calendar,
  Award,
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
  Clock,
  CheckCircle,
  Sparkles,
  Filter,
  Search,
  Calculator,
  Palette,
  Smartphone,
  Monitor,
  Layers,
  BarChart3,
  Heart,
  ChevronDown,
  ChevronUp,
  CalendarDays,
  MapPinned,
  Briefcase as BriefcaseIcon,
  Timer,
  Activity,
  Settings,
  Grid3X3,
  List,
  ArrowUpDown,
  Maximize2,
  TrendingDown,
  TrendingUp as TrendingUpIcon,
  Calendar as CalendarIcon,
  User,
  Users2,
  FolderOpen,
  CheckCircle2,
  AlertCircle,
  Layout,
  Share2
} from "lucide-react";
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeExperience, setActiveExperience] = useState(0);
  const [projectView, setProjectView] = useState("grid");
  const [sortBy, setSortBy] = useState("year");
  const [activeSkillTab, setActiveSkillTab] = useState("backend");
  
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const heroRef = useRef(null);

  const roles = ["Java Developer", "Full Stack Engineer", "Backend Specialist", "Cloud Architect"];
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

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
  }, [currentRole]);

  const skills = [
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
      title: "Portfolio-hub",
      subtitle: "Dynamic Portfolio Creation Platform",
      description: "Designed a portfolio website where multiple users can create and customize their portfolios in under 5 minutes through a simple, user-friendly interface.",
      longDescription: "A comprehensive platform that revolutionizes how developers create and manage their portfolios. Built with modern React architecture and Node.js backend, it features real-time customization, template selection, and instant deployment capabilities.",
      technologies: [
        { name: "React.js", proficiency: 95, color: "from-blue-500 to-cyan-500", icon: Globe },
        { name: "Node.js", proficiency: 88, color: "from-green-500 to-emerald-500", icon: Server },
        { name: "Express", proficiency: 85, color: "from-gray-500 to-slate-500", icon: Layers },
        { name: "MongoDB", proficiency: 82, color: "from-green-600 to-green-800", icon: Database }
      ],
      github: "https://github.com/ranjit-me/portfolio-hub-server",
      demo: "#",
      image: "https://images.unsplash.com/photo-1698047681432-006d2449c631?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: true,
      category: "web",
      priority: "high",
      complexity: "advanced",
      status: "ongoing",
      year: "2025",
      stats: { 
        users: { value: "500+", label: "Active Users", trend: "+25%" },
        performance: { value: "99%", label: "Uptime", trend: "+2%" },
        satisfaction: { value: "4.9/5", label: "User Rating", trend: "+0.3" }
      },
      duration: "2 months",
      teamSize: "2 members",
      keyFeatures: [
        "Real-time template preview",
        "Easy Template Selection",
        "One-click deployment",
        "SEO optimization tools",
      ],
      challenges: [
        "Real-time template customization",
        "Scalable deployment system",
        "User authentication & authorization"
      ],
      architecture: {
        frontend: "React.js with hooks and context",
        backend: "Spring Boot with REST APIs",
        database: "MongoDB with Mongoose",
        deployment: "AWS EC2 with Docker",
      },
      testimonial: {
        content: "This platform saved me hours of work. Creating a professional portfolio has never been easier!",
        author: "Sarah Chen",
        role: "Frontend Developer",
        company: "TechStart Inc.",
        image: "https://images.unsplash.com/photo-1698047681432-006d2449c631?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      timeline: [
        { phase: "Planning & Design", duration: "2 weeks", status: "completed" },
        { phase: "Frontend Development", duration: "6 weeks", status: "completed" },
        { phase: "Backend Development", duration: "4 weeks", status: "completed" },
        { phase: "Testing & Deployment", duration: "2 weeks", status: "completed" }
      ]
    },
    {
      title: "Library Management System",
      subtitle: "Advanced E-commerce Platform",
      description: "Shop Sphere is a modern e-commerce web application built with Java, Spring Boot, and Thymeleaf. It includes product listings, a shopping cart, user authentication, and a responsive UI.",
      longDescription: "A fully-featured e-commerce platform with advanced product management, secure payment processing, and intelligent recommendation system. Features include inventory management, order tracking, and comprehensive analytics dashboard.",
      technologies: [
        { name: "Java", proficiency: 92, color: "from-orange-500 to-red-500", icon: Coffee },
        { name: "Spring Boot", proficiency: 88, color: "from-green-500 to-lime-500", icon: Server },
        { name: "Thymeleaf", proficiency: 80, color: "from-blue-500 to-indigo-500", icon: Layout },
        { name: "MySQL", proficiency: 85, color: "from-blue-600 to-blue-800", icon: Database }
      ],
      github: "https://github.com/ranjit-me/library-management-system",
      demo: "#",
      image: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: true,
      category: "web",
      priority: "high",
      complexity: "medium",
      status: "completed",
      year: "2024",
      stats: { 
        orders: { value: "1200+", label: "Orders Processed", trend: "+40%" },
        uptime: { value: "99.9%", label: "System Uptime", trend: "+0.2%" },
        revenue: { value: "$50K+", label: "Revenue Generated", trend: "+200%" }
      },
      duration: "3 months",
      teamSize: "solo",
      keyFeatures: [
        "Advanced Book Catalog",
        "Inventory Management",
        "Analytics Dashboard",
        "User-friendly interface",
      ],
      challenges: [
        "Inventory management system",
        "Performance optimization"
      ],
      
      architecture: {
        
        backend: "Spring Boot with JPA",
    
        
      },
      testimonial: {
        content: "The platform's performance and user experience exceeded our expectations. Sales increased by 200%!",
        author: "Michael Torres",
        role: "Business Owner",
        company: "Torres Retail",
        image: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      timeline: [
        { phase: "Requirements Analysis", duration: "1 week", status: "completed" },
        { phase: "System Design", duration: "2 weeks", status: "completed" },
        { phase: "Backend Development", duration: "8 weeks", status: "completed" },
        { phase: "Frontend Development", duration: "6 weeks", status: "completed" },
        { phase: "Testing & Launch", duration: "3 weeks", status: "completed" }
      ]
    },
    {
      title: "Siddhanath Krushi Kendra",
      subtitle: "Agricultural E-commerce Solution",
      description: "Developed a sleek and responsive e-commerce website for Siddhanath shop, optimized for seamless user experience and enhanced product visibility.",
      longDescription: "A specialized agricultural e-commerce platform designed for rural customers. Features offline capability, multilingual support, and integration with local payment systems. Optimized for low-bandwidth connections.",
      technologies: [
        { name: "HTML", proficiency: 95, color: "from-orange-500 to-red-500", icon: Code },
        { name: "CSS", proficiency: 92, color: "from-blue-500 to-purple-500", icon: Palette },
        { name: "JavaScript", proficiency: 88, color: "from-yellow-500 to-orange-500", icon: Zap },
        { name: "Responsive Design", proficiency: 90, color: "from-green-500 to-teal-500", icon: Smartphone }
      ],
      github: "https://github.com/ranjitbichukale",
      demo: "https://siddhanath.shop/",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc2hvcHxlbnwxfHx8fDE3NTU1ODkxMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: false,
      category: "web",
      priority: "medium",
      complexity: "intermediate",
      status: "live",
      year: "2023",
      stats: { 
        customers: { value: "800+", label: "Registered Users", trend: "+60%" },
        satisfaction: { value: "4.8/5", label: "Customer Rating", trend: "+0.5" },
        growth: { value: "150%", label: "Business Growth", trend: "+50%" }
      },
      duration: "2 months",
      teamSize: "Solo",
      keyFeatures: [
        "Multilingual support (Hindi/Marathi)",
        "Low-bandwidth optimization",
        "Local payment integration",
        "Offline product catalog",
        "SMS notifications"
      ],
      challenges: [
        "Low-bandwidth optimization",
        "Multilingual support",
        "Local payment integration"
      ],
      outcomes: [
        "800+ registered customers",
        "4.8/5 customer satisfaction",
        "150% business growth"
      ],
      architecture: {
        frontend: "Vanilla HTML/CSS/JS",
        optimization: "Progressive Web App",
        payments: "Paytm & UPI integration",
        notifications: "SMS gateway",
        hosting: "Shared hosting with CDN"
      },
      testimonial: {
        content: "Our online presence transformed our business. Customer reach increased dramatically!",
        author: "Raj Patil",
        role: "Shop Owner",
        company: "Siddhanath Krushi Kendra",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBoZWFkc2hvdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTU1MTQwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      timeline: [
        { phase: "Research & Planning", duration: "1 week", status: "completed" },
        { phase: "Design & Prototyping", duration: "2 weeks", status: "completed" },
        { phase: "Development", duration: "5 weeks", status: "completed" },
        { phase: "Testing & Launch", duration: "1 week", status: "completed" }
      ]
    },
    {
      title: "Task Management System",
      subtitle: "Enterprise Collaboration Platform",
      description: "Enterprise-level task management application with team collaboration features",
      longDescription: "A comprehensive project management solution featuring real-time collaboration, advanced analytics, and integrated communication tools. Built for teams of all sizes with scalable architecture.",
      technologies: [
        { name: "React.js", proficiency: 90, color: "from-blue-500 to-cyan-500", icon: Globe },
        { name: "Spring Boot", proficiency: 85, color: "from-green-500 to-lime-500", icon: Server },
        { name: "PostgreSQL", proficiency: 82, color: "from-blue-600 to-indigo-600", icon: Database },
        { name: "WebSocket", proficiency: 78, color: "from-purple-500 to-pink-500", icon: Zap }
      ],
      github: "https://github.com/ranjitbichukale",
      demo: "#",
      image: "https://images.unsplash.com/photo-1591381287254-b3349c60bf9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlLWxlYXJuaW5nJTIwcGxhdGZvcm0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU1NTkwODAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: false,
      category: "app",
      priority: "high",
      complexity: "expert",
      status: "completed",
      year: "2024",
      stats: { 
        teams: { value: "200+", label: "Active Teams", trend: "+120%" },
        tasks: { value: "10K+", label: "Tasks Managed", trend: "+300%" },
        efficiency: { value: "+40%", label: "Productivity Gain", trend: "+15%" }
      },
      duration: "5 months",
      teamSize: "4 members",
      keyFeatures: [
        "Real-time collaboration",
        "Advanced analytics",
        "Time tracking",
        "File sharing",
        "Video conferencing",
        "Custom workflows"
      ],
      challenges: [
        "Real-time collaboration",
        "Scalable architecture",
        "Advanced analytics"
      ],
      outcomes: [
        "200+ teams onboarded",
        "10K+ tasks managed",
        "40% efficiency improvement"
      ],
      architecture: {
        frontend: "React.js with Redux",
        backend: "Spring Boot microservices",
        database: "PostgreSQL with Redis cache",
        realtime: "WebSocket with Socket.io",
        deployment: "Docker with Kubernetes"
      },
      testimonial: {
        content: "The real-time collaboration features revolutionized our team's productivity!",
        author: "Lisa Wang",
        role: "Project Manager",
        company: "InnovateTech Solutions",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGhlYWRzaG90JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1NTUxNDAxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      timeline: [
        { phase: "Discovery & Planning", duration: "2 weeks", status: "completed" },
        { phase: "Architecture Design", duration: "2 weeks", status: "completed" },
        { phase: "Core Development", duration: "12 weeks", status: "completed" },
        { phase: "Integration & Testing", duration: "3 weeks", status: "completed" },
        { phase: "Deployment & Training", duration: "1 week", status: "completed" }
      ]
    },
    {
      title: "API Analytics Dashboard",
      subtitle: "Real-time Performance Monitoring",
      description: "Real-time analytics dashboard for monitoring API performance and usage metrics",
      longDescription: "A comprehensive analytics platform that provides real-time insights into API performance, usage patterns, and system health. Features include custom dashboards, alerting system, and detailed reporting.",
      technologies: [
        { name: "React.js", proficiency: 88, color: "from-blue-500 to-cyan-500", icon: Globe },
        { name: "D3.js", proficiency: 75, color: "from-orange-500 to-red-500", icon: BarChart3 },
        { name: "Node.js", proficiency: 85, color: "from-green-500 to-emerald-500", icon: Server },
        { name: "Redis", proficiency: 70, color: "from-red-500 to-pink-500", icon: Zap }
      ],
      github: "https://github.com/ranjitbichukale",
      demo: "#",
      image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU1NDg5MTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: false,
      category: "app",
      priority: "medium",
      complexity: "advanced",
      status: "completed",
      year: "2024",
      stats: { 
        apis: { value: "50+", label: "APIs Monitored", trend: "+25%" },
        requests: { value: "1M+", label: "Daily Requests", trend: "+80%" },
        latency: { value: "< 100ms", label: "Avg Response Time", trend: "-20ms" }
      },
      duration: "3 months",
      teamSize: "2 members",
      keyFeatures: [
        "Real-time monitoring",
        "Custom dashboards",
        "Alert system",
        "Performance metrics",
        "Usage analytics",
        "API documentation"
      ],
      challenges: [
        "Real-time data processing",
        "High-performance visualization",
        "Scalable monitoring system"
      ],
      outcomes: [
        "50+ APIs monitored",
        "1M+ requests tracked daily",
        "< 100ms average latency"
      ],
      architecture: {
        frontend: "React.js with D3.js",
        backend: "Node.js with Express",
        database: "MongoDB with time series",
        cache: "Redis for real-time data",
        monitoring: "Custom metrics collection"
      },
      testimonial: {
        content: "The insights from this dashboard helped us optimize our API performance significantly!",
        author: "David Kim",
        role: "DevOps Engineer",
        company: "CloudScale Systems",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBoZWFkc2hvdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTU1MTQwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      timeline: [
        { phase: "Requirements & Design", duration: "1 week", status: "completed" },
        { phase: "Backend Development", duration: "6 weeks", status: "completed" },
        { phase: "Frontend & Visualization", duration: "5 weeks", status: "completed" },
        { phase: "Testing & Optimization", duration: "2 weeks", status: "completed" }
      ]
    }
  ];

  const experience = [
    {
      role: "Java Developer Intern",
      company: "Anvistar ITS Pvt. Ltd",
      companyLogo: "https://images.unsplash.com/photo-1586202690666-e1f32e218afe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NTU0NTY3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      location: "Pune, India",
      period: "Jun 2025",
      duration: "6 months",
      type: "Internship",
      description: "Implemented business logic and optimized SQL queries, reducing database response time by 25%. Developed reusable backend modules using Java, enhancing code maintainability across 3 internal projects.",
      achievements: [
        "Reduced database response time by 25%",
        "Developed 3+ reusable backend modules",
        "Implemented automated testing suite",
        "Mentored 2 junior developers"
      ],
      skills: ["Java", "SQL", "Spring Boot", "Performance Optimization"],
      projects: [
        {
          name: "Customer Management System",
          description: "Built REST APIs for customer data management",
          impact: "Improved data retrieval speed by 40%"
        },
        {
          name: "Inventory Tracking Module",
          description: "Developed real-time inventory tracking system",
          impact: "Reduced manual tracking time by 60%"
        }
      ],
      teamSize: "8 members",
      technologies: ["Java 11", "Spring Boot", "MySQL", "Maven", "JUnit"],
      metrics: {
        codeReview: "95%",
        bugFixes: "45+",
        features: "12+"
      }
    },
    {
      role: "Full Stack Development Intern",
      company: "Cognifyz Technologies",
      companyLogo: "https://images.unsplash.com/photo-1748256622734-92241ae7b43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzU1NTkwMDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      location: "Nagpur, India",
      period: "Jan 2025",
      duration: "4 months",
      type: "Internship",
      description: "Built 4+ full-stack apps with React.js and Node.js, boosting load speed by 30%. Collaborated remotely to deliver scalable features early.",
      achievements: [
        "Built 4+ full-stack applications",
        "Improved application load speed by 30%",
        "Led a team of 3 developers",
        "Delivered features ahead of schedule"
      ],
      skills: ["React.js", "Node.js", "Full Stack", "Performance"],
      projects: [
        {
          name: "E-learning Platform",
          description: "Developed comprehensive online learning system",
          impact: "Served 500+ students successfully"
        },
        {
          name: "Task Management App",
          description: "Created collaborative task management solution",
          impact: "Increased team productivity by 35%"
        }
      ],
      teamSize: "5 members",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Socket.io"],
      metrics: {
        codeReview: "98%",
        userStories: "25+",
        deployments: "20+"
      }
    }
  ];

  const achievements = [
    {
      title: "Power BI Hackathon Winner",
      description: "Won 1st place for a Power BI dashboard with insights using DAX and visuals",
      icon: Trophy,
      date: "2024",
      category: "Competition"
    },
    {
      title: "AWS Certified Developer",
      description: "Achieved AWS Certified Developer Associate certification",
      icon: Cloud,
      date: "2024",
      category: "Certification"
    },
    {
      title: "Top Performer Intern",
      description: "Recognized as top performer during internship at Cognifyz Technologies",
      icon: Star,
      date: "2025",
      category: "Award"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "25+", icon: Rocket },
    { label: "Happy Clients", value: "15+", icon: Users },
    { label: "Code Commits", value: "1000+", icon: GitBranch },
    { label: "Success Rate", value: "98%", icon: Target }
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
        ease: "easeOut"
      }
    }
  };

  const skillItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.technologies.some(tech => tech.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    switch (sortBy) {
      case "year":
        return parseInt(b.year) - parseInt(a.year);
      case "complexity":
        const complexityOrder = { "beginner": 1, "intermediate": 2, "advanced": 3, "expert": 4 };
        return complexityOrder[b.complexity] - complexityOrder[a.complexity];
      case "duration":
        return parseInt(b.duration) - parseInt(a.duration);
      case "team":
        return parseInt(b.teamSize.replace(/\D/g, '')) - parseInt(a.teamSize.replace(/\D/g, ''));
      default:
        return 0;
    }
  });

  // Enhanced skill rendering function
  const renderSkillItem = (skill, index) => {
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
          <motion.span 
            className="text-sm font-semibold text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {skill.level}%
          </motion.span>
        </div>
        
        <div className="space-y-2">
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
            <motion.div
              className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-sm relative overflow-hidden`}
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ 
                duration: 1.2, 
                delay: index * 0.1 + 0.3,
                ease: "easeOut"
              }}
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                animate={{
                  x: ["0%", "100%"],
                }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.1 + 0.8,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
          
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-500 dark:text-slate-400">Proficiency</span>
            <motion.div 
              className="flex gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full ${
                    i < Math.floor(skill.level / 20) 
                      ? 'bg-gradient-to-r ' + skill.color 
                      : 'bg-slate-300 dark:bg-slate-600'
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 0.6 + i * 0.1,
                    type: "spring",
                    stiffness: 300
                  }}
                />
              ))}
            </motion.div>
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
                          Hi, I'm Ranjit Bichukale
                        </h1>
                        
                        <div className="text-xl lg:text-2xl text-muted-foreground">
                          <span>I'm a </span>
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
                      
                      {/* Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => {
                          const IconComponent = stat.icon;
                          return (
                            <motion.div
                              key={stat.label}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1 + index * 0.1 }}
                              className="text-center"
                            >
                              <div className="flex items-center justify-center mb-2">
                                <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                                <span className="text-2xl text-blue-600 dark:text-blue-400">{stat.value}</span>
                              </div>
                              <p className="text-sm text-muted-foreground">{stat.label}</p>
                            </motion.div>
                          );
                        })}
                      </div>
                      
                      <div className="flex flex-wrap justify-center gap-4">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
                            <Download className="w-5 h-5" />
                            Download Resume
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="outline" size="lg" className="gap-2">
                            <MessageCircle className="w-5 h-5" />
                            Let's Talk
                          </Button>
                        </motion.div>
                      </div>

                      <div className="flex justify-center gap-4">
                        {[
                          { icon: Github, href: "https://github.com/ranjitbichukale", label: "GitHub" },
                          { icon: Linkedin, href: "#", label: "LinkedIn" },
                          { icon: Mail, href: "mailto:ranjitbichukale11@gmail.com", label: "Email" }
                        ].map((social, index) => (
                          <motion.a
                            key={social.label}
                            href={social.href}
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
                            Currently pursuing B.Tech in Computer Science Engineering at Dr. D.Y. Patil Pratishthan's College of Engineering, Kolhapur. 
                            My passion for technology drives me to continuously learn and adapt to new challenges in the ever-evolving world of software development.
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                              <Building className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                              <h4 className="text-lg">Education</h4>
                              <p className="text-sm text-muted-foreground">B.Tech CSE • CGPA: 7.4 • 2026</p>
                            </div>
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

        {/* Projects Section - Restored to original layout with reduced height */}
        <section id="projects" className="py-20">
          <motion.div 
            className="container mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-7xl mx-auto">
              <motion.div variants={itemVariants} className="text-center mb-16">
                <h2 className="text-3xl lg:text-5xl mb-6 bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Featured Projects
                </h2>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  A showcase of innovative solutions, cutting-edge technologies, and impactful digital experiences that drive business success
                </p>
              </motion.div>

              {/* Advanced Control Panel - Removed stats section */}
              <motion.div variants={itemVariants} className="mb-12">
                <Card className="backdrop-blur-md bg-white/90 dark:bg-slate-800/90 shadow-xl border-0 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-4">
                      {/* View Toggle */}
                      <div className="flex items-center gap-2 p-1 bg-slate-100 dark:bg-slate-700 rounded-lg">
                        {[
                          { value: "grid", icon: Grid3X3, label: "Grid" },
                          { value: "list", icon: List, label: "List" },
                          { value: "timeline", icon: CalendarIcon, label: "Timeline" }
                        ].map((view) => (
                          <Button
                            key={view.value}
                            variant={projectView === view.value ? "default" : "ghost"}
                            size="sm"
                            onClick={() => setProjectView(view.value)}
                            className={projectView === view.value ? "bg-blue-600 text-white shadow-md" : ""}
                          >
                            <view.icon className="w-4 h-4" />
                          </Button>
                        ))}
                      </div>

                      {/* Category Filters */}
                      <div className="flex flex-wrap gap-2">
                        {["all", "web", "app"].map((category) => (
                          <motion.div key={category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              variant={selectedCategory === category ? "default" : "outline"}
                              size="sm"
                              onClick={() => setSelectedCategory(category)}
                              className={`relative overflow-hidden ${
                                selectedCategory === category 
                                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg" 
                                  : "hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30"
                              }`}
                            >
                              <Filter className="w-3 h-3 mr-2" />
                              {category.charAt(0).toUpperCase() + category.slice(1)}
                              {selectedCategory === category && (
                                <motion.div
                                  layoutId="activeCategory"
                                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 -z-10"
                                  initial={false}
                                  transition={{ type: "spring", duration: 0.5 }}
                                />
                              )}
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Search and Sort */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                        <Input
                          placeholder="Search projects, technologies..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10 w-80 backdrop-blur-sm bg-white/70 dark:bg-slate-800/70"
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        <ArrowUpDown className="w-4 h-4 text-muted-foreground" />
                        <select 
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value)}
                          className="px-3 py-2 rounded-lg border bg-white dark:bg-slate-800 text-sm"
                        >
                          <option value="year">Year</option>
                          <option value="complexity">Complexity</option>
                          <option value="duration">Duration</option>
                          <option value="team">Team Size</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Projects Display - Restored original layout with reduced height */}
              <AnimatePresence mode="wait">
                {projectView === "grid" && (
                  <motion.div
                    key="grid"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-8"
                  >
                    {filteredProjects.map((project, index) => (
                      <motion.div
                        key={project.title}
                        variants={itemVariants}
                        className="group"
                      >
                        <Card className="backdrop-blur-md bg-white/90 dark:bg-slate-800/90 shadow-2xl border-0 overflow-hidden hover:shadow-3xl transition-all duration-500">
                          <div className={`grid ${index % 2 === 0 ? 'lg:grid-cols-5' : 'lg:grid-cols-5'} gap-0`}>
                            {/* Project Image & Stats - Reduced height */}
                            <div className={`lg:col-span-2 relative h-60 lg:h-auto overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                              <ImageWithFallback
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                              
                              {/* Enhanced Stats Overlay */}
                              <div className="absolute bottom-4 left-4 right-4">
                                <div className="grid grid-cols-3 gap-2 mb-4">
                                  {Object.entries(project.stats).map(([key, stat]) => (
                                    <div key={key} className="bg-white/10 backdrop-blur-md rounded-lg p-2 text-center border border-white/20">
                                      <div className="text-white text-sm">{stat.value}</div>
                                      <div className="text-white/80 text-xs">{stat.label}</div>
                                      {stat.trend && (
                                        <div className="flex items-center justify-center mt-1">
                                          {stat.trend.includes('+') ? (
                                            <TrendingUpIcon className="w-3 h-3 text-green-400 mr-1" />
                                          ) : (
                                            <TrendingDown className="w-3 h-3 text-green-400 mr-1" />
                                          )}
                                          <span className="text-xs text-green-400">{stat.trend}</span>
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Enhanced Badges */}
                              <div className="absolute top-4 left-4 flex flex-col gap-2">
                                {project.featured && (
                                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg">
                                    <Star className="w-3 h-3 mr-1" />
                                    Featured
                                  </Badge>
                                )}
                                <Badge variant="secondary" className={`
                                  ${project.complexity === 'expert' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' :
                                    project.complexity === 'advanced' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' :
                                    project.complexity === 'intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
                                    'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'}`}>
                                  {project.complexity}
                                </Badge>
                                <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                                  {project.year}
                                </Badge>
                              </div>

                              {/* Action Buttons */}
                              <div className="absolute top-4 right-4 flex gap-2">
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                  <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                                    <Github className="w-4 h-4" />
                                  </Button>
                                </motion.div>
                                {project.demo !== "#" && (
                                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                                      <ExternalLink className="w-4 h-4" />
                                    </Button>
                                  </motion.div>
                                )}
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                  <Button size="sm" variant="ghost" className="bg-white/10 text-white hover:bg-white/20">
                                    <Maximize2 className="w-4 h-4" />
                                  </Button>
                                </motion.div>
                              </div>
                            </div>

                            {/* Project Content - Reduced padding */}
                            <div className={`lg:col-span-3 p-6 lg:p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                              <div className="space-y-6">
                                {/* Enhanced Header */}
                                <div className="space-y-3">
                                  <div className="flex items-start justify-between">
                                    <div>
                                      <h3 className="text-2xl lg:text-3xl bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-2">
                                        {project.title}
                                      </h3>
                                      <p className="text-lg text-blue-600 dark:text-blue-400 mb-3">{project.subtitle}</p>
                                    </div>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      onClick={() => setSelectedProject(selectedProject === index ? null : index)}
                                      className="p-3"
                                    >
                                      {selectedProject === index ? 
                                        <ChevronUp className="w-6 h-6" /> : 
                                        <ChevronDown className="w-6 h-6" />
                                      }
                                    </Button>
                                  </div>
                                  
                                  {/* Enhanced Meta Info */}
                                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                                    <div className="flex items-center gap-2">
                                      <Timer className="w-4 h-4 text-blue-600" />
                                      <span className="text-sm">{project.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <User className="w-4 h-4 text-green-600" />
                                      <span className="text-sm">{project.teamSize}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Target className="w-4 h-4 text-purple-600" />
                                      <span className="text-sm capitalize">{project.category}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      {project.status === 'completed' ? <CheckCircle2 className="w-4 h-4 text-green-600" /> :
                                       project.status === 'live' ? <Activity className="w-4 h-4 text-blue-600" /> :
                                       <AlertCircle className="w-4 h-4 text-orange-600" />}
                                      <span className="text-sm capitalize">{project.status}</span>
                                    </div>
                                  </div>
                                </div>

                                {/* Project Description */}
                                <p className="text-muted-foreground leading-relaxed">
                                  {selectedProject === index ? project.longDescription : project.description}
                                </p>

                                {/* Key Features */}
                                <div className="space-y-3">
                                  <h4 className="text-lg flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-amber-500" />
                                    Key Features
                                  </h4>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {project.keyFeatures.slice(0, 4).map((feature, featureIndex) => (
                                      <motion.div
                                        key={featureIndex}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: featureIndex * 0.1 }}
                                        className="flex items-center gap-2 p-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg"
                                      >
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        <span className="text-sm">{feature}</span>
                                      </motion.div>
                                    ))}
                                  </div>
                                  {project.keyFeatures.length > 4 && (
                                    <p className="text-sm text-muted-foreground">
                                      +{project.keyFeatures.length - 4} more features
                                    </p>
                                  )}
                                </div>

                                {/* Enhanced Technology Stack */}
                                <div className="space-y-4">
                                  <h4 className="text-lg flex items-center gap-2">
                                    <Code className="w-5 h-5 text-blue-600" />
                                    Technology Stack
                                  </h4>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {project.technologies.map((tech, techIndex) => {
                                      const IconComponent = tech.icon;
                                      return (
                                        <motion.div
                                          key={tech.name}
                                          initial={{ opacity: 0, scale: 0.9 }}
                                          animate={{ opacity: 1, scale: 1 }}
                                          transition={{ delay: techIndex * 0.1 }}
                                          className="space-y-2 p-3 bg-white dark:bg-slate-800/50 rounded-xl shadow-sm"
                                        >
                                          <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                              <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${tech.color} flex items-center justify-center`}>
                                                <IconComponent className="w-4 h-4 text-white" />
                                              </div>
                                              <span>{tech.name}</span>
                                            </div>
                                            <span className="text-sm text-muted-foreground">{tech.proficiency}%</span>
                                          </div>
                                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                                            <motion.div
                                              className={`h-2 rounded-full bg-gradient-to-r ${tech.color} shadow-sm`}
                                              initial={{ width: 0 }}
                                              animate={{ width: `${tech.proficiency}%` }}
                                              transition={{ duration: 1, delay: techIndex * 0.1 + 0.5 }}
                                            />
                                          </div>
                                        </motion.div>
                                      );
                                    })}
                                  </div>
                                </div>

                                {/* Enhanced Action Buttons */}
                                <div className="flex flex-wrap gap-4 pt-4">
                                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
                                      <Github className="w-4 h-4" />
                                      View Source Code
                                    </Button>
                                  </motion.div>
                                  {project.demo !== "#" && (
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                      <Button variant="outline" className="gap-2 border-2">
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                      </Button>
                                    </motion.div>
                                  )}
                                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button variant="ghost" className="gap-2">
                                      <MessageCircle className="w-4 h-4" />
                                      Discuss Project
                                    </Button>
                                  </motion.div>
                                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button variant="ghost" className="gap-2">
                                      <Share2 className="w-4 h-4" />
                                      Share
                                    </Button>
                                  </motion.div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Call to Action */}
              <motion.div variants={itemVariants} className="text-center mt-20">
                <div className="space-y-6">
                  <h3 className="text-2xl bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                    Ready to Start Your Next Project?
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Let's collaborate and bring your ideas to life with cutting-edge technology and innovative solutions.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
                      <MessageCircle className="w-5 h-5" />
                      Start a Project
                    </Button>
                    <Button variant="outline" size="lg" className="gap-2">
                      <Github className="w-5 h-5" />
                      View All on GitHub
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Professional Journey Section - Reduced height and removed Performance Metrics & Skills */}
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

              <div className="grid lg:grid-cols-4 gap-6">
                {/* Timeline Navigation */}
                <div className="lg:col-span-1">
                  <motion.div variants={itemVariants}>
                    <Card className="backdrop-blur-md bg-white/90 dark:bg-slate-800/90 shadow-xl border-0 sticky top-24">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-3 text-lg">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <CalendarDays className="w-4 h-4 text-white" />
                          </div>
                          Timeline
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-3">
                          {experience.map((exp, index) => (
                            <motion.div
                              key={index}
                              whileHover={{ scale: 1.02 }}
                              onClick={() => setActiveExperience(index)}
                              className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                                activeExperience === index
                                  ? 'bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border-l-4 border-purple-500'
                                  : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                              }`}
                            >
                              <div className="space-y-2">
                                <h4 className="text-sm text-purple-600 dark:text-purple-400">{exp.role}</h4>
                                <p className="text-xs text-muted-foreground">{exp.company}</p>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <Calendar className="w-3 h-3" />
                                  {exp.period}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Experience Details - Reduced height and removed sections */}
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
                        {/* Experience Header - Reduced height */}
                        <div className="relative h-24 overflow-hidden">
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

                        <CardContent className="p-4">
                          <div className="space-y-4">
                            {/* Overview - Reduced spacing */}
                            <div className="grid md:grid-cols-3 gap-4">
                              <div className="md:col-span-2">
                                <h4 className="text-base mb-2 flex items-center gap-2">
                                  <BriefcaseIcon className="w-4 h-4 text-purple-600" />
                                  Role Overview
                                </h4>
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                  {experience[activeExperience].description}
                                </p>
                              </div>
                              
                              <div className="space-y-3">
                                <div className="grid grid-cols-2 gap-3">
                                  <div className="text-center p-2 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg">
                                    <Timer className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                                    <div className="text-xs text-muted-foreground">Duration</div>
                                    <div className="text-sm">{experience[activeExperience].duration}</div>
                                  </div>
                                  <div className="text-center p-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg">
                                    <Users className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                                    <div className="text-xs text-muted-foreground">Team Size</div>
                                    <div className="text-sm">{experience[activeExperience].teamSize}</div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Key Projects - Reduced spacing */}
                            <div className="space-y-3">
                              <h4 className="text-base flex items-center gap-2">
                                <Rocket className="w-4 h-4 text-green-600" />
                                Key Projects
                              </h4>
                              <div className="grid md:grid-cols-2 gap-3">
                                {experience[activeExperience].projects.map((project, projectIndex) => (
                                  <Card key={projectIndex} className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
                                    <div className="space-y-1">
                                      <h5 className="text-green-800 dark:text-green-300 text-sm">{project.name}</h5>
                                      <p className="text-xs text-muted-foreground">{project.description}</p>
                                      <div className="flex items-center gap-2 text-xs">
                                        <Activity className="w-3 h-3 text-green-600" />
                                        <span className="text-green-700 dark:text-green-300">{project.impact}</span>
                                      </div>
                                    </div>
                                  </Card>
                                ))}
                              </div>
                            </div>

                            {/* Technologies Used - Reduced spacing */}
                            <div className="space-y-3">
                              <h4 className="text-base flex items-center gap-2">
                                <Settings className="w-4 h-4 text-orange-600" />
                                Technologies & Tools
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {experience[activeExperience].technologies.map((tech, techIndex) => (
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

                            {/* Key Achievements - Reduced spacing */}
                            <div className="space-y-3">
                              <h4 className="text-base flex items-center gap-2">
                                <Trophy className="w-4 h-4 text-yellow-600" />
                                Key Achievements
                              </h4>
                              <div className="grid gap-2">
                                {experience[activeExperience].achievements.map((achievement, achievementIndex) => (
                                  <motion.div
                                    key={achievementIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: achievementIndex * 0.1 }}
                                    className="flex items-start gap-2 p-2 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800"
                                  >
                                    <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-muted-foreground text-xs">{achievement}</span>
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

              {/* Education & Achievements - Reduced spacing */}
              <motion.div variants={itemVariants} className="mt-12">
                <div className="grid lg:grid-cols-2 gap-6">
                  <Card className="backdrop-blur-md bg-white/90 dark:bg-slate-800/90 shadow-xl border-0">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                          <Award className="w-4 h-4 text-white" />
                        </div>
                        Education
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="relative">
                          <div className="absolute left-4 top-6 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 opacity-20" />
                          <div className="relative pl-10">
                            <div className="absolute left-2 top-4 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-white dark:border-slate-800" />
                            <div className="space-y-2">
                              <h3 className="text-lg">Bachelor of Technology</h3>
                              <p className="text-muted-foreground text-sm">Computer Science Engineering</p>
                              <p className="text-xs text-muted-foreground">
                                Dr. D.Y. Patil Pratishthan's College of Engineering, Kolhapur
                              </p>
                              <div className="flex flex-wrap items-center gap-3 mt-3">
                                <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs">CGPA: 7.4</Badge>
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  Expected: 2026
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="backdrop-blur-md bg-white/90 dark:bg-slate-800/90 shadow-xl border-0">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                          <Trophy className="w-4 h-4 text-white" />
                        </div>
                        Achievements & Certifications
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {achievements.map((achievement, index) => {
                          const IconComponent = achievement.icon;
                          return (
                            <motion.div 
                              key={index} 
                              className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200/50 dark:border-yellow-700/50"
                              whileHover={{ scale: 1.02, y: -2 }}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.2 }}
                            >
                              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                                <IconComponent className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="text-sm text-yellow-800 dark:text-yellow-300">{achievement.title}</h4>
                                  <Badge variant="secondary" className="text-xs">
                                    {achievement.category}
                                  </Badge>
                                </div>
                                <p className="text-xs text-muted-foreground mb-1">{achievement.description}</p>
                                <span className="text-xs text-yellow-600 dark:text-yellow-400">{achievement.date}</span>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}