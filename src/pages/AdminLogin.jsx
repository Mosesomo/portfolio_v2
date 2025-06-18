import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"
import { FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa"

const AdminLogin = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  // Simple authentication - in production, use proper authentication
  const ADMIN_CREDENTIALS = {
    username: "admin",
    password: "admin123",
  }

  const onSubmit = async (data) => {
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (data.username === ADMIN_CREDENTIALS.username && data.password === ADMIN_CREDENTIALS.password) {
        localStorage.setItem("adminLoggedIn", "true")
        toast.success("Login successful!", {
          style: {
            background: "#1f2937",
            color: "#f97316",
            border: "1px solid #f97316",
          },
        })
        onLogin()
      } else {
        toast.error("Invalid credentials!", {
          style: {
            background: "#1f2937",
            color: "#ef4444",
            border: "1px solid #ef4444",
          },
        })
      }
    } catch (error) {
      toast.error("Login failed. Please try again.", {
        style: {
          background: "#1f2937",
          color: "#ef4444",
          border: "1px solid #ef4444",
        },
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center p-6">
      <Toaster position="top-right" />
      <motion.div
        className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 w-full max-w-md border border-slate-700/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <FaLock className="text-white text-2xl" />
          </motion.div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Admin Login
          </h2>
          <p className="text-gray-400 mt-2">Access the dashboard to manage your portfolio</p>
        </motion.div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <label htmlFor="username" className="block text-sm font-medium text-orange-400 mb-2">
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="username"
                {...register("username", { required: "Username is required" })}
                className="block w-full pl-10 pr-4 py-3 border border-slate-700 rounded-xl bg-slate-950/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                placeholder="Enter username"
              />
            </div>
            {errors.username && <p className="text-red-400 text-sm mt-1">{errors.username.message}</p>}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <label htmlFor="password" className="block text-sm font-medium text-orange-400 mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password", { required: "Password is required" })}
                className="block w-full pl-10 pr-12 py-3 border border-slate-700 rounded-xl bg-slate-950/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                placeholder="Enter password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="h-5 w-5 text-gray-400 hover:text-orange-400 transition-colors" />
                ) : (
                  <FaEye className="h-5 w-5 text-gray-400 hover:text-orange-400 transition-colors" />
                )}
              </button>
            </div>
            {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>}
          </motion.div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-xl shadow-lg hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                Logging in...
              </div>
            ) : (
              "Login"
            )}
          </motion.button>
        </form>

        <motion.div
          className="mt-6 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p>Demo credentials:</p>
          <p>
            Username: <span className="text-orange-400">admin</span>
          </p>
          <p>
            Password: <span className="text-orange-400">admin123</span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AdminLogin
