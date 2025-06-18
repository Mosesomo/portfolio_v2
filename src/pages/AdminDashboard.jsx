import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"
import { FaPlus, FaEdit, FaTrash, FaSignOutAlt, FaExternalLinkAlt, FaGithub } from "react-icons/fa"

const AdminDashboard = ({ onLogout }) => {
  const [projects, setProjects] = useState([])
  const [editingProject, setEditingProject] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    loadProjects()
  }, [])

  const loadProjects = () => {
    const savedProjects = localStorage.getItem("portfolioProjects")
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects))
    }
  }

  const saveProjects = (updatedProjects) => {
    localStorage.setItem("portfolioProjects", JSON.stringify(updatedProjects))
    setProjects(updatedProjects)
  }

  const onSubmit = (data) => {
    const projectData = {
      ...data,
      id: editingProject ? editingProject.id : Date.now(),
      technologies: data.technologies ? data.technologies.split(",").map((tech) => tech.trim()) : [],
    }

    let updatedProjects
    if (editingProject) {
      updatedProjects = projects.map((p) => (p.id === editingProject.id ? projectData : p))
      toast.success("Project updated successfully!")
    } else {
      updatedProjects = [...projects, projectData]
      toast.success("Project added successfully!")
    }

    saveProjects(updatedProjects)
    resetForm()
  }

  const deleteProject = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      const updatedProjects = projects.filter((p) => p.id !== id)
      saveProjects(updatedProjects)
      toast.success("Project deleted successfully!")
    }
  }

  const editProject = (project) => {
    setEditingProject(project)
    setValue("title", project.title)
    setValue("description", project.description)
    setValue("image", project.image)
    setValue("url", project.url)
    setValue("github", project.github || "")
    setValue("technologies", project.technologies ? project.technologies.join(", ") : "")
    setShowForm(true)
  }

  const resetForm = () => {
    reset()
    setEditingProject(null)
    setShowForm(false)
  }

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn")
    onLogout()
    toast.success("Logged out successfully!")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6">
      <Toaster position="top-right" />

      {/* Header */}
      <motion.div
        className="flex justify-between items-center mb-8 mt-14"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <p className="text-gray-400 mt-2">Manage your portfolio projects</p>
        </div>
        <div className="flex gap-4">
          <motion.button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPlus />
            Add Project
          </motion.button>
          <motion.button
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaSignOutAlt />
            Logout
          </motion.button>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 hover:border-orange-500/30 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="relative">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="absolute top-4 right-4 flex gap-2">
                <motion.button
                  onClick={() => editProject(project)}
                  className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaEdit size={14} />
                </motion.button>
                <motion.button
                  onClick={() => deleteProject(project.id)}
                  className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTrash size={14} />
                </motion.button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-orange-400 font-bold text-lg mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies?.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-orange-500/20 text-orange-200 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-xs hover:bg-green-500/30 transition-colors"
                >
                  <FaExternalLinkAlt size={10} />
                  Live
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1 bg-gray-500/20 text-gray-400 rounded-lg text-xs hover:bg-gray-500/30 transition-colors"
                  >
                    <FaGithub size={10} />
                    Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Add/Edit Form Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && resetForm()}
          >
            <motion.div
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-slate-700"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h2 className="text-2xl font-bold text-orange-400 mb-6">
                {editingProject ? "Edit Project" : "Add New Project"}
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-orange-400 font-medium mb-2">Project Title *</label>
                  <input
                    type="text"
                    {...register("title", { required: "Title is required" })}
                    className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="Enter project title"
                  />
                  {errors.title && <p className="text-red-400 text-sm mt-1">{errors.title.message}</p>}
                </div>

                <div>
                  <label className="block text-orange-400 font-medium mb-2">Description *</label>
                  <textarea
                    rows="4"
                    {...register("description", { required: "Description is required" })}
                    className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                    placeholder="Describe your project"
                  />
                  {errors.description && <p className="text-red-400 text-sm mt-1">{errors.description.message}</p>}
                </div>

                <div>
                  <label className="block text-orange-400 font-medium mb-2">Image URL *</label>
                  <input
                    type="url"
                    {...register("image", { required: "Image URL is required" })}
                    className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="https://example.com/image.jpg"
                  />
                  {errors.image && <p className="text-red-400 text-sm mt-1">{errors.image.message}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-orange-400 font-medium mb-2">Live URL *</label>
                    <input
                      type="url"
                      {...register("url", { required: "Live URL is required" })}
                      className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                      placeholder="https://your-project.com"
                    />
                    {errors.url && <p className="text-red-400 text-sm mt-1">{errors.url.message}</p>}
                  </div>

                  <div>
                    <label className="block text-orange-400 font-medium mb-2">GitHub URL</label>
                    <input
                      type="url"
                      {...register("github")}
                      className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                      placeholder="https://github.com/username/repo"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-orange-400 font-medium mb-2">Technologies</label>
                  <input
                    type="text"
                    {...register("technologies")}
                    className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="React, Node.js, MongoDB (comma separated)"
                  />
                  <p className="text-gray-400 text-sm mt-1">Separate technologies with commas</p>
                </div>

                <div className="flex gap-4 pt-4">
                  <motion.button
                    type="submit"
                    className="flex-1 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {editingProject ? "Update Project" : "Add Project"}
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={resetForm}
                    className="flex-1 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Cancel
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AdminDashboard
