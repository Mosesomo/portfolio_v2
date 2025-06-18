import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { FaWhatsapp } from "react-icons/fa"
import ModernSidebar from "./components/SideBar"
import ModernNav from "./components/Nav"
import ModernAbout from "./pages/About"
import ModernPortfolio from "./pages/Portfolio"
import ModernContact from "./pages/Contact"
import AdminLogin from "./pages/AdminLogin"
import AdminDashboard from "./pages/AdminDashboard"

const AppContent = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false)
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)
  const location = useLocation()

  // Check if we're on admin page
  const isAdminPage = location.pathname === "/admin"

  useEffect(() => {
    const adminStatus = localStorage.getItem("adminLoggedIn")
    setIsAdminLoggedIn(adminStatus === "true")
  }, [])

  // Handle sidebar visibility based on screen size
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768

      if (!isAdminPage) {
        if (isMobile) {
          setSidebarVisible(false)
        } else {
          setSidebarVisible(true)
          setMobileNavOpen(false) // Close mobile nav when switching to desktop
        }
      }
    }

    handleResize() // Set initial state
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isAdminPage])

  // Hide both menus when navigating to admin page
  useEffect(() => {
    if (isAdminPage) {
      setSidebarVisible(false)
      setMobileNavOpen(false)
    }
  }, [isAdminPage])

  // Close mobile nav when route changes
  useEffect(() => {
    setMobileNavOpen(false)
  }, [location.pathname])

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMobileNavOpen])

  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true)
  }

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false)
  }

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible)
  }

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen)
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="flex">
        {/* Only show sidebar if not on admin page */}
        {!isAdminPage && <ModernSidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />}

        <div className="flex-1 min-h-screen">
          <div className="min-h-screen">
            {/* Only show nav if not on admin page */}
            {!isAdminPage && (
              <ModernNav
                toggleSidebar={toggleSidebar}
                toggleMobileNav={toggleMobileNav}
                isMobileNavOpen={isMobileNavOpen}
              />
            )}

            <Routes>
              <Route path="/" element={<ModernAbout />} />
              <Route path="/portfolio" element={<ModernPortfolio />} />
              <Route path="/contact" element={<ModernContact />} />
              <Route
                path="/admin"
                element={
                  isAdminLoggedIn ? (
                    <AdminDashboard onLogout={handleAdminLogout} />
                  ) : (
                    <AdminLogin onLogin={handleAdminLogin} />
                  )
                }
              />
            </Routes>
          </div>
        </div>
      </div>

      {/* Fixed WhatsApp Button - hide when mobile nav is open */}
      {!isAdminPage && !isMobileNavOpen && (
        <div
          className={`fixed bottom-5 right-6 z-40 transition-all duration-300 ${
            isSidebarVisible && window.innerWidth < 768 ? "opacity-50 scale-90" : " scale-100"
          }`}
        >
          <a
            href="https://wa.me/+254706737539"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-green-500 text-white rounded-full h-[56px] w-[56px] sm:h-[60px] sm:w-[60px] hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-110 shadow-lg touch-manipulation"
          >
            <FaWhatsapp size={24} className="sm:size-[26px]" />
          </a>
        </div>
      )}

    </div>
  )
}

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
