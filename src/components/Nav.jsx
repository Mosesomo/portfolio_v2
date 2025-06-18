import { NavLink } from "react-router-dom"
import { FaBars, FaUser, FaTimes } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const ModernNav = ({ toggleSidebar, toggleMobileNav, isMobileNavOpen }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile nav when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileNavOpen && !event.target.closest(".mobile-nav-container") && !event.target.closest(".nav-toggle")) {
        toggleMobileNav()
      }
    }

    if (isMobileNavOpen) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isMobileNavOpen, toggleMobileNav])

  const navItems = [
    { to: "/", label: "About", icon: "👤" },
    { to: "/portfolio", label: "Portfolio", icon: "💼" },
    { to: "/contact", label: "Contact", icon: "📧" },
    { to: "/admin", label: "Admin", icon: "⚙️" },
  ]

  return (
    <>
      <motion.nav
        className={`${
          scrolled
            ? "bg-slate-950/95 backdrop-blur-md shadow-2xl shadow-orange-900/10"
            : "bg-slate-950 border-b border-slate-800"
        } w-full px-4 py-3 fixed top-0 left-0 right-0 flex justify-between items-center z-50 transition-all duration-300 font-jost`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Logo Section */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.span
            className="text-orange-400 font-bold text-2xl mr-4 sm:mr-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-jost"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            M<span className="text-white text-xl">O</span>
          </motion.span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 text-white">
            {navItems.map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `relative px-2 py-1 text-sm uppercase tracking-wider font-medium transition-all duration-300 group font-jost
                                      ${isActive ? "text-orange-400" : "text-gray-200 hover:text-orange-400"}`
                  }
                  end={item.to === "/"}
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{item.label}</span>
                      <motion.span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transform origin-left transition-transform duration-300 ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                        layoutId="underline"
                      />
                    </>
                  )}
                </NavLink>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile Controls - Always visible on mobile, hidden on desktop */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Navigation Toggle */}
          <motion.button
            onClick={toggleMobileNav}
            className={`nav-toggle relative p-3 rounded-xl transition-all duration-300 backdrop-blur-sm shadow-lg border ${
              isMobileNavOpen
                ? "bg-gradient-to-r from-red-500/30 to-red-600/30 border-red-500/50 text-red-300 hover:from-red-500/40 hover:to-red-600/40"
                : "bg-gradient-to-r from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-300 hover:from-blue-500/30 hover:to-blue-600/30 hover:border-blue-400/50 hover:text-blue-200"
            }`}
            aria-label={isMobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div animate={{ rotate: isMobileNavOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              {isMobileNavOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
            </motion.div>

            {/* Navigation indicator */}
            <motion.div
              className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full ${
                isMobileNavOpen ? "bg-red-400" : "bg-blue-400"
              }`}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.button>

          {/* Sidebar Toggle */}
          <motion.button
            onClick={toggleSidebar}
            className="relative p-3 rounded-xl bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 text-orange-300 hover:from-orange-500/30 hover:to-orange-600/30 hover:border-orange-400/50 hover:text-orange-200 transition-all duration-300 backdrop-blur-sm shadow-lg group"
            aria-label="Toggle profile sidebar"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div animate={{ rotate: 0 }} whileHover={{ rotate: 15 }} transition={{ duration: 0.2 }}>
              <FaUser size={16} />
            </motion.div>

            {/* Profile indicator */}
            <motion.div
              className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-orange-400 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.button>
        </div>

        {/* Desktop-only elements */}
        <div className="hidden md:flex items-center gap-4">
          {/* Optional: Add any desktop-specific controls here */}
          <motion.button
            onClick={toggleSidebar}
            className="relative p-2 rounded-lg bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 text-orange-300 hover:from-orange-500/30 hover:to-orange-600/30 hover:border-orange-400/50 hover:text-orange-200 transition-all duration-300"
            aria-label="Toggle profile sidebar"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaUser size={14} />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileNavOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={toggleMobileNav}
            />

            {/* Mobile Navigation Menu */}
            <motion.div
              className="mobile-nav-container fixed top-20 right-4 left-4 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-700/50 z-50 overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="p-6">
                <motion.div
                  className="flex items-center justify-between mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-orange-400 font-bold text-lg font-jost">Navigation</h3>
                  <button
                    onClick={toggleMobileNav}
                    className="p-2 rounded-lg bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700/50 transition-colors"
                  >
                    <FaTimes size={14} />
                  </button>
                </motion.div>

                <div className="grid grid-cols-1 gap-3">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.to}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <NavLink
                        to={item.to}
                        onClick={toggleMobileNav}
                        className={({ isActive }) =>
                          `flex items-center gap-3 p-4 rounded-xl transition-all duration-300 font-jost ${
                            isActive
                              ? "bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 text-orange-200"
                              : "bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/30 hover:border-slate-600/50 text-gray-300 hover:text-white"
                          }`
                        }
                        end={item.to === "/"}
                      >
                        <span className="text-xl">{item.icon}</span>
                        <div className="flex flex-col">
                          <span className="font-medium">{item.label}</span>
                          <span className="text-xs opacity-70">
                            {item.to === "/"
                              ? "Learn about me"
                              : item.to === "/portfolio"
                                ? "View my work"
                                : item.to === "/contact"
                                  ? "Get in touch"
                                  : "Admin panel"}
                          </span>
                        </div>
                      </NavLink>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Actions */}
                <motion.div
                  className="mt-6 pt-4 border-t border-slate-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex gap-3">
                    <motion.button
                      onClick={() => {
                        toggleMobileNav()
                        toggleSidebar()
                      }}
                      className="flex-1 flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 text-orange-200 rounded-xl hover:from-orange-500/30 hover:to-orange-600/30 transition-all duration-300 font-jost"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaUser size={14} />
                      <span className="text-sm font-medium">Profile</span>
                    </motion.button>

                    <motion.a
                      href="https://wa.me/+254706737539"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 text-green-200 rounded-xl hover:from-green-500/30 hover:to-green-600/30 transition-all duration-300 font-jost"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-sm">💬</span>
                      <span className="text-sm font-medium">WhatsApp</span>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default ModernNav