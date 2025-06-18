import { motion } from "framer-motion"
import { MdOutlineEmail, MdOutlinePhone, MdOutlineLocationOn } from "react-icons/md"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"

const ModernContact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const contactInfo = [
    {
      id: 1,
      icon: <MdOutlineEmail size={24} />,
      title: "Email",
      value: "moseswamboga4@gmail.com",
      link: "mailto:moseswamboga4@gmail.com",
    },
    {
      id: 2,
      icon: <MdOutlinePhone size={24} />,
      title: "Phone",
      value: "+254 706 737 539",
      link: "tel:+254706737539",
    },
    {
      id: 3,
      icon: <MdOutlineLocationOn size={24} />,
      title: "Location",
      value: "Nairobi, Kenya",
      link: null,
    },
  ]

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://formspree.io/f/xqazwapq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.", {
          duration: 4000,
          style: {
            background: "#1f2937",
            color: "#f97316",
            border: "1px solid #f97316",
          },
        })
        reset()
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        duration: 4000,
        style: {
          background: "#1f2937",
          color: "#ef4444",
          border: "1px solid #ef4444",
        },
      })
    }
  }

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

  return (
    <motion.div
      className="min-h-screen md:ml-24 md:pl-4 bg-slate-950 text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Toaster position="top-right" />

      {/* Centered container */}
      <div className="flex justify-center">
        <div className="w-full max-w-5xl px-4 py-8 md:py-16">
          {/* Account for sidebar on desktop */}
          <div className="md:ml-[280px] lg:ml-[200px] xl:ml-[120px]">
            <motion.div className="flex flex-col items-center mb-12" variants={itemVariants}>
              <motion.h3 className="text-orange-200 font-bold text-3xl mt-16 md:mt-4" whileHover={{ scale: 1.05 }}>
                Contact Me
              </motion.h3>
              <motion.div
                className="border-b-4 border-orange-300 w-24 mt-3"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
              <motion.p className="text-gray-300 mt-6 text-center max-w-3xl text-lg" variants={itemVariants}>
                I'm interested in freelance opportunities and collaborations. If you have a project that needs coding or
                want to discuss potential opportunities, feel free to reach out!
              </motion.p>
            </motion.div>

            <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10" variants={containerVariants}>
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-orange-900/20 hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-slate-700/50"
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-slate-950 rounded-xl p-4 mb-4 text-orange-200 shadow-lg">{item.icon}</div>
                    <h4 className="text-orange-200 font-bold text-lg mb-3">{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} className="text-gray-300 hover:text-orange-200 transition duration-300">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="bg-slate-900 rounded-xl shadow-lg overflow-hidden border border-slate-700/50"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-6 border-b border-slate-700 bg-slate-950/50">
                <h4 className="text-orange-200 font-bold text-xl">Send Me a Message</h4>
                <p className="text-gray-300 mt-2">I'd love to hear from you!</p>
              </div>

              <div className="p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-orange-200 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register("name", { required: "Name is required" })}
                        className="block w-full px-4 py-3 border border-slate-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent bg-slate-950 text-white transition duration-300"
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-orange-200 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register("_replyto", {
                          required: "Email is required",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email address",
                          },
                        })}
                        className="block w-full px-4 py-3 border border-slate-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent bg-slate-950 text-white transition duration-300"
                        placeholder="your.email@example.com"
                      />
                      {errors._replyto && <p className="text-red-400 text-sm mt-1">{errors._replyto.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-orange-200 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      {...register("subject")}
                      className="block w-full px-4 py-3 border border-slate-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent bg-slate-950 text-white transition duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-orange-200 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      {...register("message", { required: "Message is required" })}
                      className="block w-full px-4 py-3 border border-slate-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent bg-slate-950 text-white transition duration-300 resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                  </div>

                  <div className="flex justify-center">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-xl shadow-lg hover:shadow-orange-500/25 hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-opacity-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Sending...
                        </div>
                      ) : (
                        "Send Message"
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>

            <motion.div className="flex justify-center items-center mt-10 text-gray-400" variants={itemVariants}>
              <p className="text-center">© {new Date().getFullYear()} Moses Omondi. All rights reserved.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ModernContact
