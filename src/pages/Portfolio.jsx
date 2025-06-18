import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

const ModernPortfolio = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const projectsPerPage = 4

  // Your original projects data with placeholder images
  const defaultProjects = [
    {
      id: 1,
      title: "Carlteq Ecommerce Shop",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      url: "https://shop.carlteq.com",
      github: "https://github.com/CarlteQ-git/shop.CarlteQ",
      description: "A comprehensive mini ecommerce shop for carlteq built using MERN stack, still in progress",
      technologies: ["React", "Node.js", "PostgresSQL", "Express"],
    },
    {
      id: 2,
      title: "Digital Event Organizer Application",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
      url: "https://catch-app-one.vercel.app/",
      github: "https://github.com/Mosesomo/Catch-app",
      description:
        "A comprehensive event management platform that helps users plan, organize, and execute events seamlessly.",
      technologies: ["React", "Django", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Healthcare System",
      image: "https://images.pexels.com/photos/3970333/pexels-photo-3970333.jpeg",
      url: "https://healthcarechatbot-9nij.onrender.com/",
      github: "https://github.com/Mosesomo/healthcare-bot",
      description: "An AI-powered healthcare chatbot that provides medical information and assistance to users.",
      technologies: ["Python", "Flask", "SCSS", "AI/ML", "SQLite"],
    },
    {
      id: 4,
      title: "Health Management System",
      image: "https://images.pexels.com/photos/9574323/pexels-photo-9574323.jpeg",
      url: "https://healthcare-system-9vr1.vercel.app/",
      github: "https://github.com/Mosesomo/healthcare-system",
      description: "Digital Health management  system for managing clients and health programs/services, built with React.js, Node.js, Express, and MongoDB.",
      technologies: ["Node.js", "Express", "MongoDB", "EJS"],
    },
    {
      id: 5,
      title: "Real Estate Finder",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      url: "https://estate-finder.onrender.com/",
      github: "https://github.com/Mosesomo/real-estate",
      description: "A property search platform that helps users find homes based on location, budget, and preferences.",
      technologies: ["Flask", "SCSS", "Jinja2", "SQLite", "Bootstrap"],
    },
    {
      id: 6,
      title: "Digital Financial Services Platform",
      image: "https://images.pexels.com/photos/5980856/pexels-photo-5980856.jpeg",
      url: "https://subssum-seven.vercel.app/",
      github: "https://github.com/Mosesomo/subssum",
      description:
        "A modern digital finance platform that enables users to manage their wallet balance, buy airtime, and pay bills.",
      technologies: ["React", "Node.js", "Payment APIs", "Tailwind CSS"],
    },
    {
      id: 7,
      title: "Judge Scoreboard Application",
      image: "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg",
      url: "https://judge-scoreboard.infinityfreeapp.com/index.php",
      github: "https://github.com/Mosesomo/ctroom-scoreboard-assessment",
      description: "A modern, responsive web application for managing and displaying competition scores in real-time. Built with PHP, MySQL, and Bootstrap 5.",
      technologies: ["Javascript", "php", "Bootstrap", "MySQL", "Apache Web Server"],
    },
    {
      id: 8,
      title: "Voting Application",
      image: "https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg",
      url: "https://github.com/Mosesomo/online-voting-system",
      github: "https://github.com/Mosesomo/online-voting-system",
      description:
        "Secure online voting system with user authentication, real-time results, and tamper-proof recording.",
      technologies: ["Python", "Flask", "SQLite", "Bootstrap"],
    },
    {
      id: 9,
      title: "Blog Application",
      image: "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg",
      url: "https://blog-7n5d.onrender.com/",
      github: "https://github.com/Mosesomo/Flask-blog",
      description: "A full-featured blog platform with user authentication, post creation, and commenting features.",
      technologies: ["Flask", "Jinja2", "SQLite", "Bootstrap"],
    },
  ]

  useEffect(() => {
    const savedProjects = localStorage.getItem("portfolioProjects")
    if (savedProjects) {
      const parsed = JSON.parse(savedProjects)
      const mergedProjects = [...defaultProjects]
      parsed.forEach((savedProject) => {
        const existingIndex = mergedProjects.findIndex((p) => p.id === savedProject.id)
        if (existingIndex >= 0) {
          mergedProjects[existingIndex] = savedProject
        } else {
          mergedProjects.push(savedProject)
        }
      })
      setProjects(mergedProjects)
    } else {
      setProjects(defaultProjects)
      localStorage.setItem("portfolioProjects", JSON.stringify(defaultProjects))
    }
    setLoading(false)
  }, [])

  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = defaultProjects.slice(indexOfFirstProject, indexOfLastProject)
  const totalPages = Math.ceil(projects.length / projectsPerPage)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="w-12 h-12 border-4 border-orange-400 border-t-transparent rounded-full"
        />
      </div>
    )
  }

  return (
    <motion.div
      className="min-h-screen md:ml-24 md:pl-4 bg-slate-950 text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Centered container */}
      <div className="flex justify-center">
        <div className="w-full md:max-w-6xl px-4 py-8 md:py-16">
          {/* Account for sidebar on desktop */}
          <div className="md:ml-[280px] lg:ml-[200px] xl:ml-[120px]">
            <motion.div className="flex flex-col items-center mb-12" variants={itemVariants}>
              <motion.h3 className="text-orange-200 font-bold text-3xl mt-16 md:mt-4" whileHover={{ scale: 1.05 }}>
                My Portfolio
              </motion.h3>
              <motion.div
                className="border-b-4 border-orange-300 w-24 mt-3"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
              <motion.p className="text-gray-300 mt-6 text-center max-w-3xl text-lg" variants={itemVariants}>
                Explore my latest projects showcasing my development skills and creative solutions.
              </motion.p>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12"
                key={currentPage}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {currentProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="group relative overflow-hidden rounded-xl shadow-lg bg-slate-900 transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-orange-900/20 hover:shadow-xl border border-slate-700/50"
                    variants={itemVariants}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    layout
                  >
                    <div className="relative overflow-hidden">
                      <motion.img
                        className="w-full h-56 object-cover transition-all duration-700"
                        src={project.image}
                        alt={project.title}
                        whileHover={{ scale: 1.1 }}
                      />

                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-800/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          <h4 className="text-orange-200 font-bold text-xl mb-3">{project.title}</h4>
                          <p className="text-gray-200 text-sm leading-relaxed mb-4">{project.description}</p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies?.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-orange-500/20 text-orange-200 rounded-full text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="flex gap-3">
                            <motion.a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-colors duration-300"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FaExternalLinkAlt size={12} />
                              View Project
                            </motion.a>
                            {project.github && (
                              <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-medium transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <FaGithub size={12} />
                                Code
                              </motion.a>
                            )}
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>

                    <div className="p-6">
                      <motion.h4 className="font-semibold text-orange-200 text-lg mb-2" whileHover={{ x: 5 }}>
                        {project.title}
                      </motion.h4>
                      <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div className="flex justify-center mt-8 mb-6" variants={itemVariants}>
                <div className="flex items-center space-x-2">
                  <motion.button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      currentPage === 1
                        ? "bg-slate-800 text-gray-500 cursor-not-allowed"
                        : "bg-slate-800 hover:bg-orange-500 text-white border border-slate-600 hover:border-orange-500/30"
                    }`}
                    whileHover={currentPage !== 1 ? { scale: 1.05 } : {}}
                    whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
                  >
                    Prev
                  </motion.button>

                  {Array.from({ length: totalPages }).map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`w-12 h-12 rounded-xl font-medium transition-all duration-300 ${
                        currentPage === index + 1
                          ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                          : "bg-slate-800 text-white hover:bg-slate-700 border border-slate-600 hover:border-orange-500/30"
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {index + 1}
                    </motion.button>
                  ))}

                  <motion.button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      currentPage === totalPages
                        ? "bg-slate-800 text-gray-500 cursor-not-allowed"
                        : "bg-slate-800 hover:bg-orange-500 text-white border border-slate-600 hover:border-orange-500/30"
                    }`}
                    whileHover={currentPage !== totalPages ? { scale: 1.05 } : {}}
                    whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
                  >
                    Next
                  </motion.button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ModernPortfolio
