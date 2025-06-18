import { useState } from "react"
import { motion } from "framer-motion"
import { MdDeveloperBoardOff, MdAnalytics, MdExpandMore, MdExpandLess } from "react-icons/md"
import { SiPeakdesign } from "react-icons/si"
import { TbSettingsAutomation } from "react-icons/tb"

const ModernAbout = () => {
  const [showFullText, setShowFullText] = useState(false)

  const services = [
    {
      id: 1,
      title: "Web App Development",
      icon: <MdDeveloperBoardOff size={32} className="text-orange-200" />,
      description:
        "I offer full-stack web application development, covering both frontend and backend aspects to create robust and scalable applications.",
    },
    {
      id: 2,
      title: "Website Design",
      icon: <SiPeakdesign size={32} className="text-orange-200" />,
      description:
        "I provide professional and responsive website design services, ensuring a visually appealing and user-friendly experience across all devices.",
    },
    {
      id: 3,
      title: "Automation",
      icon: <TbSettingsAutomation size={32} className="text-orange-200" />,
      description:
        "I offer automation services to streamline your business processes, including task automation, workflow optimization, and custom tool development.",
    },
    {
      id: 4,
      title: "Data Analysis",
      icon: <MdAnalytics size={32} className="text-orange-200" />,
      description:
        "I provide data analysis services, helping you make data-driven decisions through insights, reporting, and visualization of your data.",
    },
  ]

  const skills = ["React js", "JavaScript", "HTML/CSS", "Node.js", "Express", "MongoDB", "PostgreSQL", "Python", "Flask", "Django", "Svelte Kit", "Monitoring & Logging"]

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

  const fullAboutText = `Hi, I'm Moses Omondi — a results-driven fullstack software developer with a strong foundation in both frontend and backend technologies.

I specialize in building scalable, responsive web applications using modern frameworks like React.js, Svelte, and libraries like Tailwind CSS and ShadCN UI. My frontend development emphasizes clean UI design and optimal performance across devices.

On the backend, I bring robust experience with Node.js, Express.js, Flask, and Django, developing RESTful APIs and microservices. I'm highly proficient in working with both NoSQL (MongoDB) and SQL (PostgreSQL) databases, with a keen focus on performance, data integrity, and security.

Beyond development, I have hands-on experience with cloud platforms such as AWS and Vercel, where I deploy and manage applications using CI/CD pipelines. I actively implement logging, monitoring, and alerting solutions (such as LogRocket, PostHog, and CloudWatch) to ensure system health and reliability in production environments.

I'm passionate about clean code, automation, and building solutions that solve real-world problems efficiently. Whether it's crafting sleek interfaces or optimizing backend architecture, I thrive in collaborative, fast-paced environments that demand both creativity and technical depth.`

  const shortAboutText = `Hi, I'm Moses Omondi — a results-driven fullstack software developer with a strong foundation in both frontend and backend technologies. I specialize in building scalable, responsive web applications using modern frameworks like React.js, Svelte, and libraries like Tailwind CSS and ShadCN UI.`
  return (
    <motion.div
      className="min-h-screen md:ml-24 md:pl-4 bg-slate-950 text-white font-jost"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Centered container */}
      <div className="flex justify-center">
        <div className="w-full max-w-6xl px-4 py-8 md:py-16">
          {/* Account for sidebar on desktop */}
          <div className="md:ml-[280px] lg:ml-[200px] xl:ml-[120px]">
            <motion.div className="flex flex-col items-center mb-12" variants={itemVariants}>
              <motion.h3 className="text-orange-200 font-bold text-3xl mt-16 md:mt-4 font-jost" whileHover={{ scale: 1.05 }}>
                About Me
              </motion.h3>
              <motion.div
                className="border-b-4 border-orange-300 w-24 mt-3"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />

              {/* About text with show more/less functionality */}
              <motion.div
                className="text-gray-300 mt-6 text-center max-w-4xl leading-relaxed text-lg font-jost"
                variants={itemVariants}
              >
                <motion.div initial={false} animate={{ height: "auto" }} transition={{ duration: 0.3 }}>
                  {showFullText ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                      {fullAboutText.split("\n\n").map((paragraph, index) => (
                        <p key={index} className="mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                      {shortAboutText}
                    </motion.p>
                  )}
                </motion.div>

                <motion.button
                  onClick={() => setShowFullText(!showFullText)}
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-orange-500/20 hover:bg-orange-500/30 text-orange-200 rounded-full text-sm font-medium transition-all duration-300 border border-orange-500/30 hover:border-orange-500/50 font-jost"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {showFullText ? (
                    <>
                      Show Less
                      <motion.div animate={{ rotate: showFullText ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <MdExpandLess size={18} />
                      </motion.div>
                    </>
                  ) : (
                    <>
                      Show More
                      <motion.div animate={{ rotate: showFullText ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <MdExpandMore size={18} />
                      </motion.div>
                    </>
                  )}
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div className="flex flex-col items-center mb-10" variants={itemVariants}>
              <motion.h3 className="text-orange-200 font-bold text-2xl font-jost" whileHover={{ scale: 1.05 }}>
                Services I Offer
              </motion.h3>
              <motion.div
                className="border-b-4 border-orange-300 w-32 mt-3"
                initial={{ width: 0 }}
                animate={{ width: 128 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              />
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" variants={containerVariants}>
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="group relative overflow-hidden rounded-xl shadow-lg bg-slate-900 transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-orange-900/20 hover:shadow-xl border border-slate-700/50"
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  <div className="p-6">
                    <div className="bg-slate-950 rounded-xl w-16 h-16 flex items-center justify-center mb-4 shadow-lg">
                      {service.icon}
                    </div>
                    <h4 className="text-orange-200 font-bold text-xl mb-3 font-jost">{service.title}</h4>
                    <p className="text-gray-300 leading-relaxed font-jost">{service.description}</p>
                  </div>
                  <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full blur-xl"></div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="p-6 rounded-xl bg-slate-900 shadow-lg border border-slate-700/50"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h3 className="text-orange-200 font-bold text-xl mb-4 font-jost" whileHover={{ scale: 1.05 }}>
                Technical Skills
              </motion.h3>
              <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3" variants={containerVariants}>
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="px-4 py-2 bg-slate-950 rounded-full text-center text-gray-300 hover:text-orange-200 hover:bg-slate-800 transition duration-300 border border-slate-700 hover:border-orange-500/30 cursor-pointer font-jost"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      transition: { type: "spring", stiffness: 400 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ModernAbout
