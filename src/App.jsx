import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"

// ─── NEW PORTFOLIO (Caleb Okwach) ─────────────────────────────────────────────
import CalebPortfolio from "./pages/CalebOkwach_Portfolio"

// ─── ADMIN PAGES (kept active) ───────────────────────────────────────────────
import AdminLogin from "./pages/AdminLogin"
import AdminDashboard from "./pages/AdminDashboard"

// ─── OLD PAGES (commented out — no longer used) ──────────────────────────────
// import ModernSidebar from "./components/SideBar"
// import ModernNav from "./components/Nav"
// import ModernAbout from "./pages/About"
// import ModernPortfolio from "./pages/Portfolio"
// import ModernContact from "./pages/Contact"

const AppContent = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)
  const location = useLocation()

  const isAdminPage = location.pathname === "/admin"

  useEffect(() => {
    const adminStatus = localStorage.getItem("adminLoggedIn")
    setIsAdminLoggedIn(adminStatus === "true")
  }, [])

  // ─── OLD sidebar / nav state (no longer needed) ──────────────────────────
  // const [isSidebarVisible, setSidebarVisible] = useState(false)
  // const [isMobileNavOpen, setMobileNavOpen] = useState(false)
  //
  // useEffect(() => {
  //   const handleResize = () => {
  //     const isMobile = window.innerWidth < 768
  //     if (!isAdminPage) {
  //       if (isMobile) {
  //         setSidebarVisible(false)
  //       } else {
  //         setSidebarVisible(true)
  //         setMobileNavOpen(false)
  //       }
  //     }
  //   }
  //   handleResize()
  //   window.addEventListener("resize", handleResize)
  //   return () => window.removeEventListener("resize", handleResize)
  // }, [isAdminPage])
  //
  // useEffect(() => {
  //   if (isAdminPage) {
  //     setSidebarVisible(false)
  //     setMobileNavOpen(false)
  //   }
  // }, [isAdminPage])
  //
  // useEffect(() => {
  //   setMobileNavOpen(false)
  // }, [location.pathname])
  //
  // useEffect(() => {
  //   if (isMobileNavOpen) {
  //     document.body.style.overflow = "hidden"
  //   } else {
  //     document.body.style.overflow = "auto"
  //   }
  //   return () => { document.body.style.overflow = "auto" }
  // }, [isMobileNavOpen])
  //
  // const toggleSidebar = () => setSidebarVisible(!isSidebarVisible)
  // const toggleMobileNav = () => setMobileNavOpen(!isMobileNavOpen)

  const handleAdminLogin = () => setIsAdminLoggedIn(true)
  const handleAdminLogout = () => setIsAdminLoggedIn(false)

  return (
    <div>
      {/* ── OLD layout (sidebar + nav wrapper) – no longer used ──────────────
        <div className="flex">
          {!isAdminPage && (
            <ModernSidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
          )}
          <div className="flex-1 min-h-screen">
            {!isAdminPage && (
              <ModernNav
                toggleSidebar={toggleSidebar}
                toggleMobileNav={toggleMobileNav}
                isMobileNavOpen={isMobileNavOpen}
              />
            )}
          </div>
        </div>
      ── END OLD layout ──────────────────────────────────────────────────── */}

      <Routes>
        {/* New single-page portfolio — handles /, /about, /services, /work, /contact internally */}
        <Route path="/*" element={<CalebPortfolio />} />

        {/* ── OLD routes (kept as comments for reference) ──────────────────
          <Route path="/" element={<ModernAbout />} />
          <Route path="/portfolio" element={<ModernPortfolio />} />
          <Route path="/contact" element={<ModernContact />} />
        ── END OLD routes ─────────────────────────────────────────────── */}

        {/* Admin route — unchanged */}
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

      {/* ── OLD WhatsApp button (now built into CalebPortfolio) ──────────────
        {!isAdminPage && !isMobileNavOpen && (
          <div className="fixed bottom-5 right-6 z-40">
            <a
              href="https://wa.me/+254706737539"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 text-white rounded-full h-[56px] w-[56px]"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        )}
      ── END OLD WhatsApp ──────────────────────────────────────────────── */}
    </div>
  )
}

const App = () => (
  <Router>
    <AppContent />
  </Router>
)

export default App