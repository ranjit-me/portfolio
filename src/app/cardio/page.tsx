"use client";
import { Calendar, Mail, MapPin, Phone, User, Award, BookOpen, Users, Heart, Clock, Star, MessageCircle, FileText, ChevronRight, MessageSquare, Stethoscope, Activity, Play, Camera, Video, Image as ImageIcon, Monitor, Zap, Menu, X, PlusIcon as Plus, Home, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import { motion } from 'motion/react'
import { useState, useEffect } from 'react'

const MotionCard = motion.create(Card)
const MotionDiv = motion.create('div')
const MotionButton = motion.create(Button)

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const heartbeat = {
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const pulseGlow = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(59, 130, 246, 0.5)",
      "0 0 40px rgba(59, 130, 246, 0.8)",
      "0 0 20px rgba(59, 130, 246, 0.5)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const iconFloat = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const heartPulse = {
  animate: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "services", label: "Services", icon: Heart },
    { id: "experience", label: "Experience", icon: Award },
    { id: "multimedia", label: "Gallery", icon: Camera },
    { id: "contact", label: "Contact", icon: Phone }
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            className="absolute top-20 right-20 w-32 h-32 bg-blue-100 rounded-full opacity-30"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-40 left-20 w-24 h-24 bg-red-100 rounded-full opacity-30"
            animate={{
              y: [0, 15, 0],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-16 h-16 bg-green-100 rounded-full opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Heart rhythm pattern background */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full opacity-5"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1707216171962-9f1514c0bda6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaWFjJTIwaGVhcnRiZWF0JTIwcGF0dGVybnxlbnwxfHx8fDE3NTU3NzgxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral")`,
              backgroundSize: '200px 100px',
              backgroundRepeat: 'repeat'
            }}
            animate={{
              x: [0, -200],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </div>

      {/* Navigation Bar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
            : 'bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="relative w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg"
                {...heartPulse}
              >
                <Heart className="w-5 h-5 text-white" />
                <motion.div
                  className="absolute inset-0 bg-red-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.8, 0, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="text-lg text-gray-800">Dr. Sarah Johnson</h1>
                <p className="text-sm text-gray-600">Cardiologist</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <MotionButton
                variant="outline"
                size="sm"
                className="border-blue-200 text-blue-600 hover:bg-blue-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </MotionButton>
              <MotionButton
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </MotionButton>
            </div>

            {/* Mobile Menu Button */}
            <MotionButton
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </MotionButton>
          </div>

          {/* Mobile Navigation Menu */}
          <motion.div
            className={`lg:hidden overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}
            initial={{ height: 0 }}
            animate={{ height: isMenuOpen ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-4 space-y-2 border-t border-gray-200">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </motion.button>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" size="sm" className="w-full border-blue-200 text-blue-600">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-blue-700">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Header Section */}
      <motion.header 
        id="home"
        className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Header Background Animation */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          {/* Heart pulse background elements */}
          <motion.div
            className="absolute top-10 right-10 w-20 h-20 opacity-20"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1543121955-8dfb9e9e255f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBoZWFydCUyMG1lZGljYWwlMjBzeW1ib2x8ZW58MXx8fHwxNzU1Nzc4MTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Heart medical symbol"
              className="w-full h-full object-contain filter brightness-200"
            />
          </motion.div>
          <motion.div
            className="absolute bottom-10 left-10 w-16 h-16 opacity-15"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Plus className="w-full h-full text-white" />
          </motion.div>
        </div>
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <MotionDiv 
              className="relative"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div {...pulseGlow}>
                <Avatar className="w-32 h-32 lg:w-40 lg:h-40 border-4 border-white shadow-xl">
                  <AvatarImage src="https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkb2N0b3IlMjBjYXJkaW9sb2dpc3R8ZW58MXx8fHwxNzU1Nzc1OTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Dr. Sarah Johnson" />
                  <AvatarFallback className="text-2xl">SJ</AvatarFallback>
                </Avatar>
              </motion.div>
              {/* Floating heart rhythm around avatar */}
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart className="w-4 h-4 text-white" />
              </motion.div>
            </MotionDiv>
            
            <MotionDiv 
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.h1 
                className="text-4xl lg:text-5xl mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Dr. Sarah Johnson
              </motion.h1>
              <motion.p 
                className="text-xl lg:text-2xl text-blue-100 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Senior Consultant Cardiologist
              </motion.p>
              <motion.p 
                className="text-lg text-blue-200 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                MBBS, MD (Cardiology), DM (Interventional Cardiology), FACC
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {[
                  { icon: Mail, text: "sarah.johnson@cardiocare.com" },
                  { icon: Phone, text: "+1 (555) 123-4567" },
                  { icon: MapPin, text: "CardioHeart Medical Center, NYC" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-2"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                className="flex gap-4 justify-center lg:justify-start mt-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <MotionButton 
                  size="lg" 
                  className="bg-white text-blue-800 hover:bg-blue-50 shadow-lg"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </MotionButton>
                <MotionButton 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-blue-800 shadow-lg backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(255,255,255,0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Telemedicine
                </MotionButton>
              </motion.div>
            </MotionDiv>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-8">
        {/* Professional Summary */}
        <motion.section 
          id="about"
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <MotionCard
            whileHover={{ 
              y: -5,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
            }}
            transition={{ duration: 0.3 }}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <motion.div {...iconFloat}>
                  <User className="w-5 h-5 text-blue-600" />
                </motion.div>
                Professional Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="mb-4">About Dr. Sarah Johnson</h3>
                  <p className="text-muted-foreground mb-4">
                    Dr. Sarah Johnson is a highly experienced cardiologist with over 15 years of expertise in interventional cardiology, 
                    heart failure management, and preventive cardiac care. She is dedicated to providing comprehensive, patient-centered 
                    cardiovascular care using the latest medical technologies and evidence-based practices.
                  </p>
                  <p className="text-muted-foreground">
                    Her mission is to improve cardiac health outcomes through personalized treatment plans, patient education, 
                    and cutting-edge interventional procedures.
                  </p>
                </motion.div>
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div>
                    <h4 className="mb-2">Years of Experience</h4>
                    <div className="flex items-center gap-2">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge variant="secondary" className="text-lg px-3 py-1 shadow-md">15+ Years</Badge>
                      </motion.div>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-2">Mission & Vision</h4>
                    <motion.p 
                      className="text-sm text-muted-foreground italic bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500"
                      whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                    >
                      "To provide exceptional cardiac care through innovation, compassion, and dedication to improving lives one heartbeat at a time."
                    </motion.p>
                  </div>
                  {/* Add heart pulse image */}
                  <motion.div
                    className="relative h-32 rounded-lg overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1682706841289-9d7ddf5eb999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFydCUyMHB1bHNlJTIwbWVkaWNhbHxlbnwxfHx8fDE3NTU3NzgxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Heart pulse medical"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-red-500/80" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div {...heartPulse}>
                        <Heart className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </CardContent>
          </MotionCard>
        </motion.section>

        <motion.div
          id="services"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Tabs defaultValue="experience" className="space-y-8">
            <TabsList className="grid w-full grid-cols-6 bg-white shadow-lg rounded-xl p-1">
              {["experience", "education", "services", "research", "multimedia", "testimonials"].map((tab, index) => (
                <TabsTrigger 
                  key={tab}
                  value={tab} 
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-300 rounded-lg"
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Medical Experience Tab */}
            <TabsContent value="experience" className="space-y-6">
              <MotionCard
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <motion.div {...heartbeat}>
                      <Stethoscope className="w-5 h-5 text-blue-600" />
                    </motion.div>
                    Medical Experience & Specializations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <h4 className="mb-4">Current Position</h4>
                      <MotionCard
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                        }}
                      >
                        <CardContent className="pt-4">
                          <h5>Senior Consultant Cardiologist</h5>
                          <p className="text-sm text-muted-foreground">CardioHeart Medical Center</p>
                          <p className="text-sm text-muted-foreground">2018 - Present</p>
                        </CardContent>
                      </MotionCard>

                      <h4 className="mt-6 mb-4">Previous Experience</h4>
                      <motion.div 
                        className="space-y-3"
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                      >
                        {[
                          { title: "Associate Consultant", org: "Metropolitan Heart Institute", years: "2015 - 2018" },
                          { title: "Senior Resident", org: "Johns Hopkins Hospital", years: "2012 - 2015" }
                        ].map((exp, index) => (
                          <MotionCard
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ 
                              scale: 1.02,
                              boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                            }}
                          >
                            <CardContent className="pt-4">
                              <h5>{exp.title}</h5>
                              <p className="text-sm text-muted-foreground">{exp.org}</p>
                              <p className="text-sm text-muted-foreground">{exp.years}</p>
                            </CardContent>
                          </MotionCard>
                        ))}
                      </motion.div>

                      {/* Add procedure images */}
                      <motion.div 
                        className="mt-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <h4 className="mb-4">Cardiac Catheterization Lab</h4>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="rounded-lg overflow-hidden shadow-lg"
                        >
                          <ImageWithFallback 
                            src="https://images.unsplash.com/photo-1511966015638-faae3c543b3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaWFjJTIwY2F0aGV0ZXJpemF0aW9uJTIwbGFifGVufDF8fHx8MTc1NTc3NjY2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Cardiac Catheterization Laboratory"
                            className="w-full h-48 object-cover"
                          />
                        </motion.div>
                        <p className="text-xs text-muted-foreground mt-2">
                          State-of-the-art cardiac catheterization laboratory
                        </p>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <h4 className="mb-4">Specializations</h4>
                      <motion.div 
                        className="grid grid-cols-2 gap-2 mb-6"
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                      >
                        {[
                          "Interventional Cardiology", "Heart Failure", "Coronary Angioplasty", "Cardiac Catheterization",
                          "Preventive Cardiology", "Echocardiography", "Arrhythmia Management", "Cardiac Rehabilitation"
                        ].map((spec, index) => (
                          <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge variant="outline" className="w-full text-center hover:bg-blue-50 transition-colors">{spec}</Badge>
                          </motion.div>
                        ))}
                      </motion.div>

                      <h4 className="mb-4">Areas of Expertise</h4>
                      <motion.ul 
                        className="space-y-2 text-sm text-muted-foreground mb-6"
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                      >
                        {[
                          "Complex Coronary Interventions", "Structural Heart Disease", "Heart Failure Management",
                          "Preventive Cardiac Care", "Cardiac Risk Assessment"
                        ].map((area, index) => (
                          <motion.li 
                            key={index}
                            className="flex items-center gap-2"
                            variants={fadeInUp}
                            whileHover={{ x: 5, color: "#3b82f6" }}
                          >
                            <ChevronRight className="w-4 h-4" />
                            {area}
                          </motion.li>
                        ))}
                      </motion.ul>

                      {/* Add cardiac monitoring image */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        <h4 className="mb-4">Cardiac Monitoring</h4>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="rounded-lg overflow-hidden shadow-lg"
                        >
                          <ImageWithFallback 
                            src="https://images.unsplash.com/photo-1543164904-8ff92670a192?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaWFjJTIwbW9uaXRvciUyMHNjcmVlbnxlbnwxfHx8fDE3NTU3NzY2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Cardiac Monitoring Equipment"
                            className="w-full h-48 object-cover"
                          />
                        </motion.div>
                        <p className="text-xs text-muted-foreground mt-2">
                          Advanced cardiac monitoring and diagnostics
                        </p>
                      </motion.div>
                    </motion.div>
                  </div>
                </CardContent>
              </MotionCard>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="space-y-6">
              <motion.div 
                className="grid md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                <MotionCard
                  variants={fadeInLeft}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <motion.div {...iconFloat}>
                        <BookOpen className="w-5 h-5 text-blue-600" />
                      </motion.div>
                      Education & Training
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-l-2 border-blue-200 pl-4 space-y-4">
                      {[
                        { degree: "DM - Interventional Cardiology", school: "AIIMS, New Delhi", years: "2012 - 2015" },
                        { degree: "MD - General Medicine", school: "Johns Hopkins University", years: "2009 - 2012" },
                        { degree: "MBBS", school: "Harvard Medical School", years: "2004 - 2009" }
                      ].map((edu, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ x: 5, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                          className="p-2 rounded transition-colors"
                        >
                          <h5>{edu.degree}</h5>
                          <p className="text-sm text-muted-foreground">{edu.school}</p>
                          <p className="text-sm text-muted-foreground">{edu.years}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Add medical conference image */}
                    <motion.div 
                      className="mt-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <h5 className="mb-3">Conference Presentations</h5>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="rounded-lg overflow-hidden shadow-md"
                      >
                        <ImageWithFallback 
                          src="https://images.unsplash.com/photo-1576670160060-c4e874631c5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY29uZmVyZW5jZSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NTU3NzY2ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Medical Conference Presentation"
                          className="w-full h-32 object-cover"
                        />
                      </motion.div>
                      <p className="text-xs text-muted-foreground mt-2">
                        International cardiology conference presentations
                      </p>
                    </motion.div>
                  </CardContent>
                </MotionCard>

                <MotionCard
                  variants={fadeInRight}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <motion.div {...iconFloat}>
                        <Award className="w-5 h-5 text-blue-600" />
                      </motion.div>
                      Certifications & Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h5 className="mb-3">Certifications</h5>
                      <div className="space-y-2">
                        {[
                          "FACC - Fellow American College of Cardiology",
                          "Board Certified - Internal Medicine",
                          "Board Certified - Cardiovascular Disease",
                          "Medical License: NY-12345"
                        ].map((cert, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                          >
                            <Badge className="block w-fit hover:bg-blue-700 transition-colors">{cert}</Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="mb-3">Awards & Recognition</h5>
                      <ul className="space-y-2 text-sm">
                        {[
                          "Best Cardiologist Award 2023",
                          "Excellence in Patient Care 2022",
                          "Top 40 Under 40 Cardiologists"
                        ].map((award, index) => (
                          <motion.li 
                            key={index}
                            className="flex items-center gap-2"
                            whileHover={{ x: 5 }}
                          >
                            <Star className="w-4 h-4 text-yellow-500" />
                            {award}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="mb-3">Memberships</h5>
                      <motion.ul 
                        className="space-y-1 text-sm text-muted-foreground"
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                      >
                        {[
                          "American Heart Association",
                          "American College of Cardiology",
                          "Society for Cardiovascular Angiography",
                          "International Society of Cardiology"
                        ].map((membership, index) => (
                          <motion.li 
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ x: 5, color: "#3b82f6" }}
                          >
                            • {membership}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  </CardContent>
                </MotionCard>
              </motion.div>
            </TabsContent>

            {/* Services Tab */}
            <TabsContent value="services" className="space-y-6">
              <MotionCard
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <motion.div {...heartbeat}>
                      <Heart className="w-5 h-5 text-red-500" />
                    </motion.div>
                    Services Offered
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    {[
                      {
                        icon: Activity,
                        title: "Interventional Procedures",
                        color: "text-red-500",
                        services: ["Coronary Angioplasty", "Stent Placement", "Cardiac Catheterization", "Balloon Valvuloplasty"],
                        image: "https://images.unsplash.com/photo-1736325680503-6e0c7d9a45da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaWFjJTIwc3VyZ2VyeSUyMG9wZXJhdGlvbnxlbnwxfHx8fDE3NTU3NzY2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      },
                      {
                        icon: Stethoscope,
                        title: "Diagnostic Services",
                        color: "text-blue-500",
                        services: ["Echocardiography", "Stress Testing", "Holter Monitoring", "CT Angiography"],
                        image: "https://images.unsplash.com/photo-1691935152546-3a9e05f4010b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY2hvY2FyZGlvZ3JhbSUyMHVsdHJhc291bmR8ZW58MXx8fHwxNzU1Nzc2NjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      },
                      {
                        icon: Heart,
                        title: "Preventive Care",
                        color: "text-green-500",
                        services: ["Risk Assessment", "Lifestyle Counseling", "Cardiac Rehabilitation", "Health Screening"],
                        image: "https://images.unsplash.com/photo-1715111641688-ea364ec391f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaWFjJTIwcmVoYWJpbGl0YXRpb24lMjBleGVyY2lzZXxlbnwxfHx8fDE3NTU3NzY2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      },
                      {
                        icon: MessageCircle,
                        title: "Telemedicine",
                        color: "text-purple-500",
                        services: ["Virtual Consultations", "Follow-up Care", "Second Opinions", "Medication Management"],
                        image: "https://images.unsplash.com/photo-1552365955-29ca04d444ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlbWVkaWNpbmUlMjB2aWRlbyUyMGNhbGx8ZW58MXx8fHwxNzU1NzcyODI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      },
                      {
                        icon: Users,
                        title: "Specialized Programs",
                        color: "text-orange-500",
                        services: ["Heart Failure Clinic", "Women's Heart Health", "Pediatric Cardiology", "Geriatric Cardiology"],
                        image: "https://images.unsplash.com/photo-1650562373852-04c5682ec2e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFydCUyMGFuYXRvbXklMjBtb2RlbHxlbnwxfHx8fDE3NTU3NzY2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      },
                      {
                        icon: Clock,
                        title: "Emergency Services",
                        color: "text-red-600",
                        services: ["24/7 Emergency Care", "Heart Attack Treatment", "Cardiac Emergencies", "Critical Care"],
                        image: "https://images.unsplash.com/photo-1543164904-8ff92670a192?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaWFjJTIwbW9uaXRvciUyMHNjcmVlbnxlbnwxfHx8fDE3NTU3NzY2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      }
                    ].map((service, index) => (
                      <MotionCard 
                        key={index}
                        className="border-2 hover:border-blue-200 transition-colors group overflow-hidden"
                        variants={fadeInUp}
                        whileHover={{ 
                          y: -10,
                          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                          borderColor: "#3b82f6"
                        }}
                      >
                        {/* Service Image */}
                        <div className="relative h-32 overflow-hidden">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ImageWithFallback 
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <div className="absolute top-3 left-3">
                            <motion.div
                              className={`${service.color} bg-white p-2 rounded-full shadow-lg`}
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <service.icon className="w-4 h-4" />
                            </motion.div>
                          </div>
                        </div>

                        <CardContent className="pt-4">
                          <h5 className="group-hover:text-blue-600 transition-colors mb-3">{service.title}</h5>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {service.services.map((item, idx) => (
                              <motion.li 
                                key={idx}
                                whileHover={{ x: 5, color: "#3b82f6" }}
                                transition={{ duration: 0.2 }}
                              >
                                • {item}
                              </motion.li>
                            ))}
                          </ul>
                        </CardContent>
                      </MotionCard>
                    ))}
                  </motion.div>
                </CardContent>
              </MotionCard>
            </TabsContent>

            {/* Research Tab */}
            <TabsContent value="research" className="space-y-6">
              <MotionCard
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <motion.div {...iconFloat}>
                      <FileText className="w-5 h-5 text-blue-600" />
                    </motion.div>
                    Research & Publications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <h4 className="mb-4">Recent Publications</h4>
                      <motion.div 
                        className="space-y-4"
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                      >
                        {[
                          {
                            title: "Novel Approaches in Interventional Cardiology",
                            journal: "Journal of American College of Cardiology, 2024",
                            badge: "Peer Reviewed"
                          },
                          {
                            title: "Heart Failure Management in Elderly Patients",
                            journal: "Circulation, 2023",
                            badge: "Impact Factor: 8.9"
                          },
                          {
                            title: "Preventive Cardiology: A Modern Approach",
                            journal: "European Heart Journal, 2023",
                            badge: "Peer Reviewed"
                          }
                        ].map((pub, index) => (
                          <MotionCard 
                            key={index}
                            className="p-4"
                            variants={fadeInUp}
                            whileHover={{ 
                              y: -5,
                              boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                            }}
                          >
                            <h5 className="mb-2">{pub.title}</h5>
                            <p className="text-sm text-muted-foreground mb-2">{pub.journal}</p>
                            <Badge variant="outline">{pub.badge}</Badge>
                          </MotionCard>
                        ))}
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <h4 className="mb-4">Current Research</h4>
                      <motion.div 
                        className="space-y-4"
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                      >
                        {[
                          {
                            title: "AI in Cardiac Imaging",
                            description: "Investigating machine learning applications in echocardiography interpretation",
                            status: "Ongoing"
                          },
                          {
                            title: "Telemedicine Outcomes Study",
                            description: "Multi-center study on remote cardiac monitoring effectiveness",
                            status: "Phase III"
                          }
                        ].map((research, index) => (
                          <MotionCard 
                            key={index}
                            className="p-4"
                            variants={fadeInUp}
                            whileHover={{ 
                              y: -5,
                              boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                            }}
                          >
                            <h5 className="mb-2">{research.title}</h5>
                            <p className="text-sm text-muted-foreground">{research.description}</p>
                            <Badge className="mt-2">{research.status}</Badge>
                          </MotionCard>
                        ))}
                      </motion.div>

                      <h4 className="mt-6 mb-4">Conference Presentations</h4>
                      <motion.ul 
                        className="space-y-2 text-sm text-muted-foreground"
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                      >
                        {[
                          "American Heart Association Scientific Sessions 2024",
                          "European Society of Cardiology Congress 2023",
                          "Transcatheter Cardiovascular Therapeutics 2023",
                          "World Congress of Cardiology 2022"
                        ].map((conference, index) => (
                          <motion.li 
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ x: 5, color: "#3b82f6" }}
                          >
                            • {conference}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  </div>
                </CardContent>
              </MotionCard>
            </TabsContent>

            {/* Multimedia Tab */}
            <TabsContent value="multimedia" className="space-y-6">
              <MotionCard
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <motion.div {...iconFloat}>
                      <ImageIcon className="w-5 h-5 text-blue-600" />
                    </motion.div>
                    Multimedia Gallery
                  </CardTitle>
                  <CardDescription>
                    Images and videos showcasing cardiac procedures, facilities, and educational content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Video Section */}
                  <div className="mb-8">
                    <h4 className="mb-4 flex items-center gap-2">
                      <Video className="w-5 h-5 text-red-500" />
                      Educational Videos & Procedures
                    </h4>
                    <motion.div 
                      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                      variants={staggerContainer}
                      initial="initial"
                      animate="animate"
                    >
                      {[
                        {
                          title: "Coronary Angioplasty Procedure",
                          description: "Step-by-step angioplasty demonstration",
                          duration: "12:45",
                          thumbnail: "https://images.unsplash.com/photo-1736325680503-6e0c7d9a45da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaWFjJTIwc3VyZ2VyeSUyMG9wZXJhdGlvbnxlbnwxfHx8fDE3NTU3NzY2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        },
                        {
                          title: "Heart Health Tips",
                          description: "Preventive cardiology guidelines",
                          duration: "8:30",
                          thumbnail: "https://images.unsplash.com/photo-1715111641688-ea364ec391f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaWFjJTIwcmVoYWJpbGl0YXRpb24lMjBleGVyY2lzZXxlbnwxfHx8fDE3NTU3NzY2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        },
                        {
                          title: "Echocardiogram Interpretation",
                          description: "Understanding cardiac ultrasound",
                          duration: "15:20",
                          thumbnail: "https://images.unsplash.com/photo-1691935152546-3a9e05f4010b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY2hvY2FyZGlvZ3JhbSUyMHVsdHJhc291bmR8ZW58MXx8fHwxNzU1Nzc2NjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        }
                      ].map((video, index) => (
                        <MotionCard 
                          key={index}
                          className="overflow-hidden group cursor-pointer"
                          variants={fadeInUp}
                          whileHover={{ 
                            y: -10,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                          }}
                        >
                          <div className="relative">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.3 }}
                              className="relative"
                            >
                              <ImageWithFallback 
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-full h-48 object-cover"
                              />
                              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                  className="bg-white/90 rounded-full p-4 shadow-lg"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  <Play className="w-6 h-6 text-blue-600 ml-1" />
                                </motion.div>
                              </div>
                              <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                                {video.duration}
                              </div>
                            </motion.div>
                          </div>
                          <CardContent className="pt-4">
                            <h5 className="group-hover:text-blue-600 transition-colors mb-2">{video.title}</h5>
                            <p className="text-sm text-muted-foreground">{video.description}</p>
                          </CardContent>
                        </MotionCard>
                      ))}
                    </motion.div>
                  </div>

                  <Separator className="my-8" />

                  {/* Image Gallery Section */}
                  <div>
                    <h4 className="mb-4 flex items-center gap-2">
                      <Camera className="w-5 h-5 text-green-500" />
                      Facility & Equipment Gallery
                    </h4>
                    <motion.div 
                      className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
                      variants={staggerContainer}
                      initial="initial"
                      animate="animate"
                    >
                      {[
                        {
                          src: "https://images.unsplash.com/photo-1511966015638-faae3c543b3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaWFjJTIwY2F0aGV0ZXJpemF0aW9uJTIwbGFifGVufDF8fHx8MTc1NTc3NjY2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                          title: "Catheterization Lab",
                          description: "State-of-the-art cardiac cath lab"
                        },
                        {
                          src: "https://images.unsplash.com/photo-1543164904-8ff92670a192?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaWFjJTIwbW9uaXRvciUyMHNjcmVlbnxlbnwxfHx8fDE3NTU3NzY2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                          title: "Monitoring Systems",
                          description: "Advanced cardiac monitoring"
                        },
                        {
                          src: "https://images.unsplash.com/photo-1691935152546-3a9e05f4010b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY2hvY2FyZGlvZ3JhbSUyMHVsdHJhc291bmR8ZW58MXx8fHwxNzU1Nzc2NjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                          title: "Echocardiography",
                          description: "Ultrasound imaging system"
                        },
                        {
                          src: "https://images.unsplash.com/photo-1650562373852-04c5682ec2e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFydCUyMGFuYXRvbXklMjBtb2RlbHxlbnwxfHx8fDE3NTU3NzY2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                          title: "Heart Anatomy",
                          description: "Educational models"
                        },
                        {
                          src: "https://images.unsplash.com/photo-1576670160060-c4e874631c5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY29uZmVyZW5jZSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NTU3NzY2ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                          title: "Medical Conferences",
                          description: "International presentations"
                        },
                        {
                          src: "https://images.unsplash.com/photo-1715111641688-ea364ec391f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaWFjJTIwcmVoYWJpbGl0YXRpb24lMjBleGVyY2lzZXxlbnwxfHx8fDE3NTU3NzY2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                          title: "Cardiac Rehab",
                          description: "Rehabilitation facility"
                        },
                        {
                          src: "https://images.unsplash.com/photo-1552365955-29ca04d444ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlbWVkaWNpbmUlMjB2aWRlbyUyMGNhbGx8ZW58MXx8fHwxNzU1NzcyODI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                          title: "Telemedicine",
                          description: "Virtual consultations"
                        },
                        {
                          src: "https://images.unsplash.com/photo-1631507623121-eaaba8d4e7dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwbW9kZXJufGVufDF8fHx8MTc1NTc3NTkwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                          title: "Medical Center",
                          description: "Modern facilities"
                        }
                      ].map((image, index) => (
                        <motion.div
                          key={index}
                          className="group cursor-pointer"
                          variants={fadeInUp}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Card className="overflow-hidden border-2 hover:border-blue-300 transition-colors">
                            <div className="relative">
                              <ImageWithFallback 
                                src={image.src}
                                alt={image.title}
                                className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="absolute bottom-2 left-2 text-white">
                                  <h6 className="text-sm">{image.title}</h6>
                                  <p className="text-xs opacity-90">{image.description}</p>
                                </div>
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  <Separator className="my-8" />

                  {/* Virtual Tour Section */}
                  <div>
                    <h4 className="mb-4 flex items-center gap-2">
                      <Monitor className="w-5 h-5 text-purple-500" />
                      Virtual Facility Tour
                    </h4>
                    <MotionCard
                      className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200"
                      whileHover={{ 
                        y: -5,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                      }}
                    >
                      <div className="text-center">
                        <motion.div
                          className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Monitor className="w-8 h-8 text-purple-600" />
                        </motion.div>
                        <h5 className="mb-2">Take a Virtual Tour</h5>
                        <p className="text-sm text-muted-foreground mb-4">
                          Experience our state-of-the-art cardiac facilities through our immersive 360° virtual tour
                        </p>
                        <MotionButton
                          className="bg-purple-600 hover:bg-purple-700"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Start Virtual Tour
                        </MotionButton>
                      </div>
                    </MotionCard>
                  </div>
                </CardContent>
              </MotionCard>
            </TabsContent>

            {/* Testimonials Tab */}
            <TabsContent value="testimonials" className="space-y-6">
              <MotionCard
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <motion.div {...iconFloat}>
                      <MessageCircle className="w-5 h-5 text-blue-600" />
                    </motion.div>
                    Patient Testimonials
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    className="grid md:grid-cols-2 gap-6"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    {[
                      {
                        content: "Dr. Johnson saved my life. Her expertise in interventional cardiology and caring approach made all the difference during my heart attack treatment. I'm forever grateful.",
                        author: "Robert Williams",
                        title: "Heart Attack Survivor",
                        bgColor: "bg-blue-50",
                        avatar: "RW"
                      },
                      {
                        content: "Excellent doctor with great bedside manner. She explained everything clearly and helped me understand my heart condition. The angioplasty procedure went perfectly.",
                        author: "Maria Rodriguez",
                        title: "Angioplasty Patient",
                        bgColor: "bg-green-50",
                        avatar: "MR"
                      },
                      {
                        content: "Dr. Johnson's preventive approach helped me avoid major cardiac issues. Her guidance on lifestyle changes and regular monitoring has been invaluable.",
                        author: "John Davis",
                        title: "Preventive Care Patient",
                        bgColor: "bg-purple-50",
                        avatar: "JD"
                      },
                      {
                        content: "Outstanding cardiologist! Her telemedicine consultations during the pandemic were incredibly helpful. She's always available when you need her.",
                        author: "Sarah Kim",
                        title: "Telemedicine Patient",
                        bgColor: "bg-orange-50",
                        avatar: "SK"
                      }
                    ].map((testimonial, index) => (
                      <MotionCard 
                        key={index}
                        className={`p-6 ${testimonial.bgColor} border-0`}
                        variants={fadeInUp}
                        whileHover={{ 
                          y: -10,
                          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                          scale: 1.02
                        }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            </motion.div>
                          ))}
                        </div>
                        <p className="text-sm mb-4 italic">"{testimonial.content}"</p>
                        <div className="flex items-center gap-2">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm">{testimonial.author}</p>
                            <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                      </MotionCard>
                    ))}
                  </motion.div>
                </CardContent>
              </MotionCard>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Contact & Appointment Section */}
        <motion.section 
          id="contact"
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2 gap-8">
            <MotionCard
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <motion.div {...iconFloat}>
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </motion.div>
                  Schedule an Appointment
                </CardTitle>
                <CardDescription>
                  Book your consultation with Dr. Sarah Johnson
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h5 className="mb-2">Clinic Hours</h5>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Sunday: Emergency Only</p>
                      </div>
                    </div>
                    <div>
                      <h5 className="mb-2">Emergency Contact</h5>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>24/7 Hotline: +1 (555) 911-HEART</p>
                        <p>Emergency Room: Direct Access</p>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <MotionButton 
                      className="w-full"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Online
                    </MotionButton>
                    <MotionButton 
                      variant="outline" 
                      className="w-full"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </MotionButton>
                  </div>
                </div>
              </CardContent>
            </MotionCard>

            <MotionCard
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <motion.div {...iconFloat}>
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </motion.div>
                  Location & Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="mb-2">CardioHeart Medical Center</h5>
                    <p className="text-sm text-muted-foreground">
                      123 Medical Plaza, Suite 400<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h5 className="mb-2">Contact Information</h5>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>📞 +1 (555) 123-4567</p>
                        <p>📱 +1 (555) 123-4568</p>
                        <p>✉️ sarah.johnson@cardiocare.com</p>
                      </div>
                    </div>
                    <div>
                      <h5 className="mb-2">Quick Links</h5>
                      <div className="text-sm space-y-1">
                        {["Patient Portal", "Insurance Info", "Forms & Documents", "FAQ"].map((link, index) => (
                          <motion.div key={index}>
                            <Button 
                              variant="link" 
                              className="p-0 h-auto hover:text-blue-600"
                            >
                              {link}
                            </Button>
                            <br/>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Separator />
                  
                  <motion.div 
                    className="bg-muted p-4 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded flex items-center justify-center overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full"
                      >
                        <ImageWithFallback 
                          src="https://images.unsplash.com/photo-1631507623121-eaaba8d4e7dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwbW9kZXJufGVufDF8fHx8MTc1NTc3NTkwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="CardioHeart Medical Center"
                          className="w-full h-full object-cover rounded transition-transform duration-300"
                        />
                      </motion.div>
                    </div>
                    <p className="text-xs text-center text-muted-foreground mt-2">
                      CardioHeart Medical Center - State-of-the-art cardiac care facility
                    </p>
                  </motion.div>
                </div>
              </CardContent>
            </MotionCard>
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <motion.footer 
        className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white mt-16 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-2">Dr. Sarah Johnson, MD</h3>
            <p className="text-gray-400 mb-4">
              Senior Consultant Cardiologist | CardioHeart Medical Center
            </p>
            <motion.div 
              className="flex justify-center gap-6 text-sm"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                "📧 sarah.johnson@cardiocare.com",
                "📞 +1 (555) 123-4567",
                "📍 New York, NY"
              ].map((item, index) => (
                <motion.span 
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, color: "#60a5fa" }}
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
            <p className="text-xs text-gray-500 mt-4">
              © 2024 Dr. Sarah Johnson. All rights reserved. | Medical License: NY-12345
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}