import { motion, AnimatePresence } from "framer-motion"
import { MdOutlineEmail, MdLocalPhone, MdFileDownload, MdClose } from "react-icons/md"
import { FaGithub, FaLinkedin, FaCode, FaDatabase } from "react-icons/fa"
import { useEffect } from "react"
import Musa from '../assets/musa.jpg'

const ModernSidebar = ({ isVisible, toggleSidebar }) => {
  useEffect(() => {
    if (isVisible && window.innerWidth < 768) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isVisible])

  // Handle escape key to close sidebar on mobile
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isVisible && window.innerWidth < 768) {
        toggleSidebar()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isVisible, toggleSidebar])

  const sidebarVariants = {
    hidden: {
      x: "-100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  }

  const contactItems = [
    {
      icon: <MdOutlineEmail size={16} />,
      label: "Email",
      value: "moseswamboga4@gmail.com",
      href: "mailto:moseswamboga4@gmail.com",
      displayValue: "moseswamboga4@gmail.com",
    },
    {
      icon: <FaGithub size={16} />,
      label: "GitHub",
      value: "Mosesomo",
      href: "https://github.com/Mosesomo",
      displayValue: "Mosesomo",
    },
    {
      icon: <FaLinkedin size={16} />,
      label: "LinkedIn",
      value: "Moses Wamboga",
      href: "https://www.linkedin.com/in/omondi-moses-20a61235a/",
      displayValue: "Moses Wamboga",
    },
    {
      icon: <MdLocalPhone size={16} />,
      label: "Phone",
      value: "+254 758 171 116",
      href: "tel:+254758171116",
      displayValue: "+254 758 171 116",
    },
  ]

  return (
    <>
      {/* Mobile Overlay with improved animation */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-30 md:hidden"
            onClick={toggleSidebar}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      {/* Sidebar with improved mobile layout */}
      <motion.div
        className={`fixed inset-y-0 left-0 transform ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-all duration-300 ease-in-out bg-gradient-to-b from-gray-900 to-slate-950 h-full w-[320px] sm:w-[280px] text-white overflow-y-auto z-40 shadow-2xl font-jost`}
        variants={sidebarVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Close button with better mobile positioning */}
        <motion.button
          className="absolute top-4 right-4 p-3 rounded-full bg-slate-800/80 text-gray-300 hover:text-white hover:bg-slate-700/80 md:hidden z-50 backdrop-blur-sm border border-slate-600/50"
          onClick={toggleSidebar}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <MdClose size={20} />
        </motion.button>

        {/* Profile section with improved mobile spacing */}
        <motion.div className="flex flex-col items-center pt-6 pb-4 px-4 mt-16 sm:mt-8" variants={itemVariants}>
          <motion.div
            className="relative w-24 h-24 sm:w-26 sm:h-26 rounded-full overflow-hidden border-4 border-orange-300/20 shadow-xl shadow-orange-900/10 group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              src={Musa}
              alt="Moses Omondi"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          <motion.h3
            className="mt-3 sm:mt-4 font-bold text-lg sm:text-xl font-jost text-center"
            variants={itemVariants}
          >
            Moses Omondi
          </motion.h3>

          <motion.div className="flex flex-wrap justify-center gap-2 mt-2" variants={itemVariants}>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-800/80 rounded-full text-xs font-medium text-orange-200 font-jost">
              <FaCode size={10} />
              Developer
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-800/80 rounded-full text-xs font-medium text-orange-200 font-jost">
              <FaDatabase size={10} />
              Analyst
            </span>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-orange-300/20 to-transparent w-full"
          variants={itemVariants}
        />

        {/* Contact items with improved mobile touch targets */}
        <motion.div className="p-3 sm:p-4 space-y-1" variants={itemVariants}>
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.href ? (
                <motion.a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 p-3 sm:p-2 rounded-lg hover:bg-slate-800/50 active:bg-slate-800/70 transition-all duration-300 group border border-transparent hover:border-orange-300/10 min-h-[48px] touch-manipulation"
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="bg-slate-800 p-2.5 sm:p-2 rounded-md text-orange-300 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-xs text-gray-400 font-jost">{item.label}</span>
                    <span className="font-medium text-xs sm:text-sm group-hover:text-orange-200 transition-colors duration-300 font-jost truncate">
                      {item.displayValue}
                    </span>
                  </div>
                </motion.a>
              ) : (
                <div className="flex items-center gap-3 p-3 sm:p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-300 group border border-transparent hover:border-orange-300/10 min-h-[48px]">
                  <div className="bg-slate-800 p-2.5 sm:p-2 rounded-md text-orange-300 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-xs text-gray-400 font-jost">{item.label}</span>
                    <span className="font-medium text-xs sm:text-sm group-hover:text-orange-200 transition-colors duration-300 font-jost">
                      {item.displayValue}
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Download CV button with improved mobile design */}
        <motion.div className="px-3 sm:px-4 pb-6 mt-4" variants={itemVariants}>
          <div className="h-px bg-gradient-to-r from-transparent via-orange-300/20 to-transparent w-full mb-4"></div>

          <motion.a
            href="https://drive.google.com/file/d/1XqPVjVE1fViIsWY0opb8VA48F7q46vfi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button className="flex items-center justify-center gap-2 w-full p-4 sm:p-3 rounded-lg font-bold text-white transition-all duration-500 relative overflow-hidden group font-jost min-h-[48px] touch-manipulation">
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:scale-105 transition-transform duration-500"></span>
              <span className="relative flex items-center justify-center gap-2">
                <MdFileDownload size={20} className="animate-bounce group-hover:animate-none" />
                <span className="text-sm sm:text-base">Download CV</span>
              </span>
            </button>
          </motion.a>
        </motion.div>

        {/* Mobile-specific bottom padding for safe area */}
        <div className="h-4 md:hidden" />
      </motion.div>
    </>
  )
}

export default ModernSidebar
