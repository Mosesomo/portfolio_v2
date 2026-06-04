import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor, Globe, Palette, Smartphone,
  Phone, Mail, MapPin,
  ChevronDown, CheckCircle2,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const PERSON = {
  name: "Caleb Okwach",
  initials: "CO",
  roles: ["IT Administrator", "Web Developer", "Graphic Designer"],
  tagline: "Building systems. Designing brands. Connecting people.",
  bio: `I'm Caleb Okwach — a versatile digital professional based in Nairobi, Kenya. I wear multiple hats: IT Administrator keeping infrastructure running smoothly, Web Developer crafting responsive and modern applications, and Graphic Designer shaping visual identities that stand out.\n\nWith hands-on experience across networking, cloud platforms, full-stack development, and brand design, I bridge the gap between technical execution and creative vision. Whether I'm configuring servers, writing clean code, or designing logos and packaging, I bring the same commitment to quality and detail.\n\nI work with clients across East Africa and beyond, delivering solutions that are practical, beautiful, and built to last.`,
  phone: "+254 799 213 928",
  email: "calebokwach@gmail.com",
  location: "Nairobi, Kenya",
  linkedin: "https://www.linkedin.com/in/caleb-okwach-76b3a1246",
  whatsapp: "https://wa.me/254799213928",
};

const SERVICES = [
  { icon: Monitor, title: "IT Administration", desc: "Network setup, server management, cloud platforms, helpdesk, and enterprise IT infrastructure." },
  { icon: Globe, title: "Web Development", desc: "Full-stack web apps and sites using React, Node.js, Django, and modern frameworks." },
  { icon: Palette, title: "Graphic Design", desc: "Brand identities, logos, packaging design, social media graphics, and print materials." },
  { icon: Smartphone, title: "Digital Marketing", desc: "Social media management, content strategy, and visual campaign design for brands." },
];

const SKILLS = [
  "React.js","Node.js","Django","PostgreSQL","MongoDB",
  "Adobe Illustrator","Photoshop","Figma","Canva",
  "Networking","Linux","Windows Server","AWS",
  "HTML/CSS","Tailwind CSS","JavaScript","Python",
];


const PROJECTS = [
  { id:1, title:"Timwa Fisheries", image:"/assets/timwafiheries.png", url:"https://timwafisheries.com", category:"Web Development", desc:"Professional website for a fisheries business — showcasing products, services and enabling customer inquiries.", tech:["Web Design","CMS","SEO"] },
  { id:2, title:"Restorative Psychology", image:"/assets/restorative.png", url:"https://restorative-psych.com/", category:"Web Development", desc:"Clinical psychology practice website with service listings, professional bios, and appointment booking.", tech:["React","UI/UX","CMS"] },
  { id:3, title:"Ideal Psychology", image:"/assets/ideal.png", url:"https://idealpsych.com/", category:"Web Development", desc:"Modern psychology and mental health practice site featuring patient resources and contact forms.", tech:["Web Design","WordPress","SEO"] },
  { id:4, title:"Beacon of Strength", image:"/assets/beacon.png", url:"https://beacob-of-strength.vercel.app/", category:"Web Development", desc:"A motivational platform connecting communities with resources for mental wellness and resilience.", tech:["React","Tailwind CSS","Vercel"] },
  { id:5, title:"Digital Event Organizer", image:"https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg", url:"https://catch-app-one.vercel.app/", category:"Web Development", desc:"Comprehensive event management platform for planning, organizing and executing events seamlessly.", tech:["React","Django","REST API"] },
  { id:6, title:"Brand Identity", image:"/assets/graphic/design_1.jpeg", url:"#", category:"Graphic Design", desc:"Complete brand identity design — logo, color palette, typography, and brand guidelines.", tech:["Logo","Color Palette","Typography"] },
  { id:7, title:"Packaging Design", image:"/assets/graphic/design_2.jpeg", url:"#", category:"Graphic Design", desc:"Product packaging design with label layout, promotional flyers, and 3D mockups.", tech:["Label","Mockups","Print"] },
  { id:8, title:"Social Media Graphics", image:"/assets/graphic/design_3.jpeg", url:"#", category:"Graphic Design", desc:"Engaging social media graphics and campaigns for Instagram, Facebook and other platforms.", tech:["Instagram","Facebook","Campaigns"] },
  { id:9, title:"Print Collateral", image:"/assets/graphic/design_4.jpeg", url:"#", category:"Graphic Design", desc:"Print materials including brochures, flyers, business cards, and promotional items.", tech:["Brochure","Flyers","Business Cards"] },
  { id:10, title:"Logo Design", image:"/assets/graphic/design_5.jpeg", url:"#", category:"Graphic Design", desc:"Custom vector logo design — brand marks, monograms, and visual identity systems.", tech:["Vector","Brand Mark","Monogram"] },
  { id:11, title:"Digital Illustrations", image:"/assets/graphic/design_6.jpeg", url:"#", category:"Graphic Design", desc:"Digital vector illustrations and artwork created with Illustrator and Canva.", tech:["Vector Art","Canva","Illustrator"] },
  { id:12, title:"Packaging Mockup", image:"/assets/graphic/design_7.jpeg", url:"#", category:"Graphic Design", desc:"3D product mockups and packaging design for consumer brands and products.", tech:["3D Mockup","Product","Box Design"] },
  { id:13, title:"Brand Guidelines", image:"/assets/graphic/design_8.jpeg", url:"#", category:"Graphic Design", desc:"Comprehensive brand style guides with colors, typography and usage standards.", tech:["Style Guide","Colors","Typography"] },
  { id:14, title:"Marketing Materials", image:"/assets/graphic/design_9.jpeg", url:"#", category:"Graphic Design", desc:"Marketing collateral — brochures, banners, ads and promotional campaigns.", tech:["Brochure","Banner","Ads"] },
  { id:15, title:"UI Graphics", image:"/assets/graphic/design_10.jpeg", url:"#", category:"Graphic Design", desc:"Custom icons, illustrations, and web graphics for digital products and interfaces.", tech:["Icons","Illustrations","Web Graphics"] },
  { id:16, title:"Poster Design", image:"/assets/graphic/design_11.jpeg", url:"#", category:"Graphic Design", desc:"Event posters, A3 prints and promotional materials with bold visual design.", tech:["A3 Poster","Event","Promotion"] },
  { id:17, title:"Custom Illustrations", image:"/assets/graphic/design_12.jpeg", url:"#", category:"Graphic Design", desc:"Bespoke vector illustrations for brands, websites, and custom art projects.", tech:["Vector","Custom Art","Brand"] },
  { id:18, title:"E-Commerce Shop", image:"/assets/ecommerce.png", url:"https://shop-carlteq-two.vercel.app/", category:"Web Development", desc:"Full-featured online store with product catalog, cart, checkout, and payment gateway integration.", tech:["React","E-Commerce","Stripe"] },
  { id:19, title:"Treasury Simulator", image:"/assets/simulator.png", url:"https://treasurery-simulator-niobi-assessme.vercel.app/", category:"Web Development", desc:"Financial simulation dashboard for treasury management — tracking assets, risk analysis, and portfolio performance.", tech:["React","Finance","Dashboard"] },
  { id:20, title:"Healthcare System", image:"https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg", url:"https://healthcare-system-9vr1.vercel.app/", category:"Web Development", desc:"Hospital management system with patient records, appointment scheduling, and billing integration.", tech:["Django","PostgreSQL","Healthcare"] },
  { id:21, title:"Sussum Platform", image:"https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg", url:"https://subssum-seven.vercel.app/", category:"Web Development", desc:"Subscription management platform for tracking recurring payments, plans, and customer lifecycle.", tech:["React","Node.js","Subscriptions"] },
];

const CATEGORIES = ["All","Web Development","Graphic Design"];

const GRAPHIC_PROJECTS = [
  { id:1, image:"/assets/graphic/design_1.jpeg", title:"Brand Identity", tech:["Logo","Color Palette","Typography"] },
  { id:2, image:"/assets/graphic/design_2.jpeg", title:"Packaging Design", tech:["Label","Mockups","Print"] },
  { id:3, image:"/assets/graphic/design_3.jpeg", title:"Social Media Graphics", tech:["Instagram","Facebook","Campaigns"] },
  { id:4, image:"/assets/graphic/design_4.jpeg", title:"Print Collateral", tech:["Brochure","Flyers","Business Cards"] },
  { id:5, image:"/assets/graphic/design_5.jpeg", title:"Logo Design", tech:["Vector","Brand Mark","Monogram"] },
  { id:6, image:"/assets/graphic/design_6.jpeg", title:"Digital Illustrations", tech:["Vector Art","Canva","Illustrator"] },
  { id:7, image:"/assets/graphic/design_7.jpeg", title:"Packaging Mockup", tech:["3D Mockup","Product","Box Design"] },
  { id:8, image:"/assets/graphic/design_8.jpeg", title:"Brand Guidelines", tech:["Style Guide","Colors","Typography"] },
  { id:9, image:"/assets/graphic/design_9.jpeg", title:"Marketing Materials", tech:["Brochure","Banner","Ads"] },
  { id:10, image:"/assets/graphic/design_10.jpeg", title:"UI Graphics", tech:["Icons","Illustrations","Web Graphics"] },
  { id:11, image:"/assets/graphic/design_11.jpeg", title:"Poster Design", tech:["A3 Poster","Event","Promotion"] },
  { id:12, image:"/assets/graphic/design_12.jpeg", title:"Custom Illustrations", tech:["Vector","Custom Art","Brand"] },
];

const SECTIONS = ["Home","About","Services","Work","Contact"];


// ─── HOOKS ───────────────────────────────────────────────────────────────────

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

// ─── SMALL COMPONENTS ────────────────────────────────────────────────────────

const Tag = ({ text }) => (
  <span style={{
    fontSize: 11, fontFamily:"'Space Grotesk',sans-serif", fontWeight:600,
    letterSpacing:"0.05em", padding:"3px 10px", borderRadius:20,
    background:"rgba(34,211,238,0.12)", color:"#67e8f9",
    border:"1px solid rgba(34,211,238,0.25)", whiteSpace:"nowrap",
  }}>{text}</span>
);

const SectionLabel = ({ num, text }) => (
  <div style={{
    fontSize:11, fontWeight:700, letterSpacing:"0.2em",
    textTransform:"uppercase", color:"#22d3ee", marginBottom:16,
    fontFamily:"'Space Grotesk',sans-serif",
  }}>{num} — {text}</div>
);

const ProjectCard = ({ project, idx }) => (
  <motion.a
    href={project.url}
    target={project.url !== "#" ? "_blank" : undefined}
    rel="noopener noreferrer"
    initial={{ opacity:0, y:30 }}
    animate={{ opacity:1, y:0 }}
    transition={{ delay: idx * 0.07, type:"spring", stiffness:260, damping:24 }}
    whileHover={{ y:-5 }}
    style={{
      display:"block", textDecoration:"none", borderRadius:16,
      overflow:"hidden", background:"rgba(15,23,42,0.9)",
      border:"1px solid rgba(255,255,255,0.06)",
      cursor: project.url !== "#" ? "pointer" : "default",
    }}
  >
    <div style={{ position:"relative", height:180, overflow:"hidden" }}>
      <img
        src={project.image} alt={project.title}
        style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform 0.5s ease" }}
        onMouseEnter={e => e.currentTarget.style.transform="scale(1.08)"}
        onMouseLeave={e => e.currentTarget.style.transform="scale(1)"}
      />
      <div style={{
        position:"absolute", inset:0,
        background:"linear-gradient(to bottom, transparent 40%, rgba(5,15,35,0.95) 100%)",
      }} />
      <span style={{
        position:"absolute", top:12, right:12,
        fontSize:10, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase",
        padding:"4px 10px", borderRadius:20,
        background: project.category==="Graphic Design" ? "rgba(168,85,247,0.25)" : "rgba(34,211,238,0.2)",
        color: project.category==="Graphic Design" ? "#d8b4fe" : "#67e8f9",
        border:`1px solid ${project.category==="Graphic Design" ? "rgba(168,85,247,0.4)" : "rgba(34,211,238,0.3)"}`,
        fontFamily:"'Space Grotesk',sans-serif",
      }}>{project.category}</span>
    </div>
    <div style={{ padding:"18px 20px 20px" }}>
      <h3 style={{
        margin:"0 0 8px", fontSize:16, fontWeight:700,
        fontFamily:"'Syne',sans-serif", color:"#f0f4ff", letterSpacing:"-0.01em",
      }}>{project.title}</h3>
      <p style={{
        margin:"0 0 14px", fontSize:13, lineHeight:1.6,
        color:"rgba(200,210,240,0.65)", fontFamily:"'Space Grotesk',sans-serif",
      }}>{project.desc}</p>
      <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
        {project.tech.map(t => <Tag key={t} text={t} />)}
      </div>
    </div>
  </motion.a>
);

// ─── SECTIONS ────────────────────────────────────────────────────────────────

const HeroSection = ({ goTo }) => {
  const isMobile = useIsMobile();
  return (
    <div style={{
      minHeight:"100vh", display:"flex", alignItems:"center",
      padding: isMobile ? "100px 20px 60px" : "80px 40px 60px",
      position:"relative", overflow:"hidden",
    }}>
      {/* bg orbs */}
      <div style={{
        position:"absolute", top:"10%", left:"50%", width: isMobile ? 300 : 600,
        height: isMobile ? 300 : 600, borderRadius:"50%",
        background:"radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)",
        transform:"translateX(-50%)", pointerEvents:"none",
      }} />
      <div style={{
        position:"absolute", bottom:"0%", right:"-10%",
        width: isMobile ? 200 : 400, height: isMobile ? 200 : 400, borderRadius:"50%",
        background:"radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)",
        pointerEvents:"none",
      }} />

      <div style={{ maxWidth:800, margin:"0 auto", zIndex:1, width:"100%" }}>
        {/* avatar + roles */}
        <motion.div
          initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
          style={{ display:"flex", alignItems:"center", gap: isMobile ? 14 : 18, marginBottom: isMobile ? 24 : 32 }}
        >
          <div style={{
            width: isMobile ? 52 : 64, height: isMobile ? 52 : 64, borderRadius:"50%",
            background:"linear-gradient(135deg, #22d3ee, #a855f7)",
            display:"flex", alignItems:"center", justifyContent:"center",
            fontSize: isMobile ? 18 : 22, fontWeight:800, color:"#fff",
            fontFamily:"'Syne',sans-serif", flexShrink:0,
            boxShadow:"0 0 0 4px rgba(34,211,238,0.15)",
          }}>CO</div>
          <div>
            <div style={{
              fontSize:11, fontWeight:700, letterSpacing:"0.15em",
              textTransform:"uppercase", color:"#22d3ee",
              fontFamily:"'Space Grotesk',sans-serif",
            }}>Available for freelance</div>
            <div style={{ display:"flex", gap: isMobile ? 4 : 8, flexWrap:"wrap", marginTop:6 }}>
              {PERSON.roles.map(r => (
                <span key={r} style={{
                  fontSize: isMobile ? 11 : 12, color:"rgba(200,220,255,0.7)",
                  fontFamily:"'Space Grotesk',sans-serif", fontWeight:500,
                }}>✦ {r}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
          transition={{ delay:0.15, duration:0.7 }}
          style={{
            fontSize: isMobile ? "clamp(38px,10vw,56px)" : "clamp(42px,8vw,80px)",
            fontFamily:"'Syne',sans-serif", fontWeight:800,
            lineHeight:1.05, letterSpacing:"-0.03em",
            margin:"0 0 16px", color:"#f0f4ff",
          }}
        >
          {PERSON.name.split(" ").map((w, i) => (
            <span key={i} style={{ display:"block" }}>
              {i===1 ? (
                <span style={{
                  background:"linear-gradient(90deg, #22d3ee, #a855f7)",
                  WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
                }}>{w}</span>
              ) : w}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.35, duration:0.6 }}
          style={{
            fontSize: isMobile ? 15 : 18, color:"rgba(180,200,240,0.75)",
            fontFamily:"'Space Grotesk',sans-serif", lineHeight:1.55,
            maxWidth:520, margin:"0 0 36px",
          }}
        >{PERSON.tagline}</motion.p>

        <motion.div
          initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.5 }}
          style={{ display:"flex", gap: isMobile ? 10 : 14, flexWrap:"wrap" }}
        >
          <button onClick={() => goTo(3)} style={{
            padding: isMobile ? "12px 24px" : "14px 32px", borderRadius:50,
            background:"linear-gradient(135deg, #22d3ee, #06b6d4)",
            border:"none", color:"#020d1a",
            fontFamily:"'Space Grotesk',sans-serif",
            fontSize: isMobile ? 13 : 14, fontWeight:700, letterSpacing:"0.04em",
            cursor:"pointer", boxShadow:"0 8px 24px rgba(34,211,238,0.3)",
          }}>View My Work →</button>
          <button onClick={() => goTo(4)} style={{
            padding: isMobile ? "12px 24px" : "14px 32px", borderRadius:50,
            background:"transparent",
            border:"1.5px solid rgba(255,255,255,0.2)", color:"#f0f4ff",
            fontFamily:"'Space Grotesk',sans-serif",
            fontSize: isMobile ? 13 : 14, fontWeight:600, letterSpacing:"0.04em",
            cursor:"pointer",
          }}>Get In Touch</button>
        </motion.div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  const isMobile = useIsMobile();
  const [expanded, setExpanded] = useState(false);
  const paras = PERSON.bio.split("\n\n");

  return (
    <div style={{ padding: isMobile ? "60px 20px" : "80px 40px", maxWidth:860, margin:"0 auto" }}>
      <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
        <SectionLabel num="01" text="About" />
        <h2 style={{
          fontSize:"clamp(28px,5vw,48px)", fontFamily:"'Syne',sans-serif",
          fontWeight:800, letterSpacing:"-0.025em", margin:"0 0 28px", color:"#f0f4ff",
        }}>Who I Am</h2>

        <div style={{ fontSize: isMobile ? 15 : 16, lineHeight:1.8, color:"rgba(200,215,245,0.8)", fontFamily:"'Space Grotesk',sans-serif" }}>
          {(expanded ? paras : paras.slice(0,1)).map((p,i) => (
            <p key={i} style={{ margin:"0 0 18px" }}>{p}</p>
          ))}
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            background:"none", border:"none", color:"#22d3ee", cursor:"pointer",
            fontFamily:"'Space Grotesk',sans-serif", fontSize:14, fontWeight:600,
            padding:0, marginBottom:40,
          }}
        >{expanded ? "← Show less" : "Read more"} <ChevronDown size={14} style={{ display:"inline", verticalAlign:"middle", marginLeft:2 }} /></button>

        {/* Stats */}
        <div style={{
          display:"grid",
          gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)",
          gap: isMobile ? 12 : 20, marginBottom:40,
        }}>
          {[
            { num:"3+", label:"Years experience" },
            { num:"20+", label:"Projects delivered" },
            { num:"3", label:"Core disciplines" },
            { num:"∞", label:"Problems solved" },
          ].map(s => (
            <div key={s.label} style={{
              padding: isMobile ? "16px 18px" : "20px 24px",
              background:"rgba(34,211,238,0.05)",
              border:"1px solid rgba(34,211,238,0.15)", borderRadius:14,
            }}>
              <div style={{ fontSize: isMobile ? 26 : 32, fontWeight:800, fontFamily:"'Syne',sans-serif", color:"#22d3ee", lineHeight:1, marginBottom:6 }}>{s.num}</div>
              <div style={{ fontSize:12, color:"rgba(160,185,230,0.7)", fontFamily:"'Space Grotesk',sans-serif", fontWeight:500 }}>{s.label}</div>
            </div>
          ))}
        </div>

        <h3 style={{ fontSize: isMobile ? 18 : 20, fontFamily:"'Syne',sans-serif", fontWeight:700, color:"#f0f4ff", margin:"0 0 16px" }}>Skills & Tools</h3>
        <div style={{ display:"flex", flexWrap:"wrap", gap: isMobile ? 8 : 10 }}>
          {SKILLS.map(s => (
            <span key={s} style={{
              padding: isMobile ? "6px 12px" : "8px 16px", borderRadius:8,
              background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)",
              color:"rgba(200,220,255,0.75)", fontSize: isMobile ? 12 : 13, fontWeight:500,
              fontFamily:"'Space Grotesk',sans-serif",
            }}>{s}</span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const ServicesSection = () => {
  const isMobile = useIsMobile();
  return (
    <div style={{ padding: isMobile ? "60px 20px" : "80px 40px", maxWidth:900, margin:"0 auto" }}>
      <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
        <SectionLabel num="02" text="Services" />
        <h2 style={{
          fontSize:"clamp(28px,5vw,48px)", fontFamily:"'Syne',sans-serif",
          fontWeight:800, letterSpacing:"-0.025em", margin:"0 0 36px", color:"#f0f4ff",
        }}>What I Do</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(200px,1fr))",
          gap: isMobile ? 14 : 20,
        }}>
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay: i*0.1 }}
              whileHover={{ y:-4 }}
              style={{
                padding: isMobile ? "22px 20px" : "28px 24px",
                background:"rgba(10,18,40,0.7)",
                border:"1px solid rgba(255,255,255,0.07)", borderRadius:16,
              }}
            >
              <div style={{ marginBottom:14, color:"#22d3ee" }}>{(() => { const Icon = svc.icon; return <Icon size={isMobile ? 28 : 32} />; })()}</div>
              <h3 style={{ fontSize: isMobile ? 16 : 17, fontWeight:700, fontFamily:"'Syne',sans-serif", color:"#f0f4ff", margin:"0 0 10px" }}>{svc.title}</h3>
              <p style={{ fontSize: isMobile ? 13 : 13, lineHeight:1.65, color:"rgba(180,200,240,0.65)", fontFamily:"'Space Grotesk',sans-serif", margin:0 }}>{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const GraphicDesignShowcase = () => {
  const isMobile = useIsMobile();
  const [current, setCurrent] = useState(0);
  const total = GRAPHIC_PROJECTS.length;

  const next = () => setCurrent(c => (c + 1) % total);
  const prev = () => setCurrent(c => (c - 1 + total) % total);
  const goTo = (i) => setCurrent(i);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, []);

  const proj = GRAPHIC_PROJECTS[current];

  return (
    <div style={{
      marginBottom: isMobile ? 48 : 60,
      padding: isMobile ? "28px 20px" : "36px 32px",
      background:"rgba(15,23,42,0.8)",
      border:"1px solid rgba(168,85,247,0.2)",
      borderRadius:20,
    }}>
      <div style={{ marginBottom:20 }}>
        <div style={{
          fontSize:10, fontWeight:700, letterSpacing:"0.2em",
          textTransform:"uppercase", color:"#a855f7", marginBottom:8,
          fontFamily:"'Space Grotesk',sans-serif",
        }}>Graphic Design Showcase</div>
        <h3 style={{
          fontSize: isMobile ? 18 : 22, fontFamily:"'Syne',sans-serif",
          fontWeight:700, color:"#f0f4ff", margin:"0 0 4px",
        }}>{proj.title}</h3>
        <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
          {proj.tech.map(t => (
            <span key={t} style={{
              fontSize:10, fontFamily:"'Space Grotesk',sans-serif", fontWeight:600,
              letterSpacing:"0.05em", padding:"2px 8px", borderRadius:20,
              background:"rgba(168,85,247,0.12)", color:"#d8b4fe",
              border:"1px solid rgba(168,85,247,0.25)",
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Main slide */}
      <div style={{ position:"relative", height: isMobile ? 240 : 340, borderRadius:14, overflow:"hidden", marginBottom:16 }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={proj.id}
            src={proj.image}
            alt={proj.title}
            initial={{ opacity:0, x:60 }}
            animate={{ opacity:1, x:0 }}
            exit={{ opacity:0, x:-60 }}
            transition={{ duration:0.4 }}
            style={{ width:"100%", height:"100%", objectFit:"cover" }}
          />
        </AnimatePresence>

        {/* Prev/Next arrows */}
        <button onClick={prev} style={{
          position:"absolute", left:12, top:"50%", transform:"translateY(-50%)",
          width:36, height:36, borderRadius:"50%", background:"rgba(2,13,26,0.7)",
          border:"1px solid rgba(168,85,247,0.3)", color:"#d8b4fe",
          display:"flex", alignItems:"center", justifyContent:"center",
          cursor:"pointer", fontSize:18, padding:0,
        }}>‹</button>
        <button onClick={next} style={{
          position:"absolute", right:12, top:"50%", transform:"translateY(-50%)",
          width:36, height:36, borderRadius:"50%", background:"rgba(2,13,26,0.7)",
          border:"1px solid rgba(168,85,247,0.3)", color:"#d8b4fe",
          display:"flex", alignItems:"center", justifyContent:"center",
          cursor:"pointer", fontSize:18, padding:0,
        }}>›</button>

        {/* Counter */}
        <div style={{
          position:"absolute", bottom:12, right:14,
          fontSize:11, fontFamily:"'Space Grotesk',sans-serif",
          fontWeight:600, color:"rgba(200,180,255,0.7)",
          background:"rgba(2,13,26,0.6)", padding:"3px 10px", borderRadius:20,
        }}>{current + 1} / {total}</div>
      </div>

      {/* Dot indicators */}
      <div style={{ display:"flex", justifyContent:"center", gap:6, marginBottom:14 }}>
        {GRAPHIC_PROJECTS.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} style={{
            width: i === current ? 20 : 8, height:8, borderRadius:4, padding:0, border:"none",
            background: i === current ? "#a855f7" : "rgba(168,85,247,0.3)",
            cursor:"pointer", transition:"all 0.3s",
          }} />
        ))}
      </div>

      {/* Thumbnail strip */}
      <div style={{ display:"flex", gap:8, overflowX:"auto", paddingBottom:4 }}>
        {GRAPHIC_PROJECTS.map((p, i) => (
          <button key={p.id} onClick={() => goTo(i)} style={{
            flexShrink:0, width:60, height:44, borderRadius:8, overflow:"hidden",
            border:"2px solid " + (i===current ? "#a855f7" : "transparent"),
            cursor:"pointer", padding:0,
          }}>
            <img src={p.image} alt={p.title} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
          </button>
        ))}
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  const isMobile = useIsMobile();
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);
  const filtered = filter==="All" ? PROJECTS : PROJECTS.filter(p => p.category===filter);
  const visible = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visibleCount;

  return (
    <div style={{ padding: isMobile ? "60px 20px" : "80px 40px", maxWidth:960, margin:"0 auto" }}>
      <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
        <SectionLabel num="03" text="Work" />
        <h2 style={{
          fontSize:"clamp(28px,5vw,48px)", fontFamily:"'Syne',sans-serif",
          fontWeight:800, letterSpacing:"-0.025em", margin:"0 0 28px", color:"#f0f4ff",
        }}>Selected Projects</h2>

        {/* Filter tabs — Graphic Design handled by slideshow */}
        <div style={{ display:"flex", gap: isMobile ? 8 : 10, marginBottom: isMobile ? 28 : 40, flexWrap:"wrap" }}>
          {CATEGORIES.filter(c => c !== "Graphic Design").map(cat => (
            <button key={cat} onClick={() => { setFilter(cat); setVisibleCount(4); }} style={{
              padding: isMobile ? "8px 16px" : "9px 22px", borderRadius:50,
              border: filter===cat ? "1.5px solid #22d3ee" : "1.5px solid rgba(255,255,255,0.12)",
              background: filter===cat ? "rgba(34,211,238,0.12)" : "transparent",
              color: filter===cat ? "#22d3ee" : "rgba(200,215,255,0.6)",
              fontFamily:"'Space Grotesk',sans-serif",
              fontSize: isMobile ? 12 : 13, fontWeight:600,
              cursor:"pointer", transition:"all 0.25s",
            }}>{cat}</button>
          ))}
        </div>

        <GraphicDesignShowcase />

        <div style={{
          display:"grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(280px,1fr))",
          gap: isMobile ? 16 : 24,
        }}>
          <AnimatePresence mode="wait">
            {visible.map((p,i) => <ProjectCard key={p.id} project={p} idx={i} />)}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div style={{ textAlign:"center", marginTop:32 }}>
            <button onClick={() => setVisibleCount(c => c + 4)} style={{
              padding:"12px 36px", borderRadius:50,
              background:"transparent",
              border:"1.5px solid rgba(34,211,238,0.4)",
              color:"#22d3ee",
              fontFamily:"'Space Grotesk',sans-serif",
              fontSize:14, fontWeight:600,
              cursor:"pointer", transition:"all 0.25s",
            }}>Load more</button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

const ContactSection = () => {
  const isMobile = useIsMobile();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name:"", email:"", message:"" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://formspree.io/f/xqazwapq", {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body:JSON.stringify(form),
      });
      if (res.ok) { setSent(true); setForm({ name:"", email:"", message:"" }); }
    } catch (_) {}
  };

  const inputStyle = {
    width:"100%", padding:"14px 16px",
    background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)",
    borderRadius:10, color:"#f0f4ff", fontFamily:"'Space Grotesk',sans-serif",
    fontSize:14, outline:"none", boxSizing:"border-box",
  };

  const contactItems = [
    { icon:Phone, label:"Phone", val:PERSON.phone, href:`tel:${PERSON.phone.replace(/\s/g,"")}` },
    { icon:Mail, label:"Email", val:PERSON.email, href:`mailto:${PERSON.email}` },
    { icon:MapPin, label:"Location", val:PERSON.location, href:null },
  ];

  return (
    <div style={{ padding: isMobile ? "60px 20px 80px" : "80px 40px", maxWidth:860, margin:"0 auto" }}>
      <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
        <SectionLabel num="04" text="Contact" />
        <h2 style={{
          fontSize:"clamp(28px,5vw,48px)", fontFamily:"'Syne',sans-serif",
          fontWeight:800, letterSpacing:"-0.025em", margin:"0 0 12px", color:"#f0f4ff",
        }}>Let's Work Together</h2>
        <p style={{
          fontSize: isMobile ? 14 : 16, color:"rgba(180,200,240,0.7)",
          fontFamily:"'Space Grotesk',sans-serif", marginBottom: isMobile ? 36 : 48, maxWidth:480,
        }}>Whether it's a website, brand identity, or IT project — I'd love to hear about it.</p>

        <div style={{
          display:"grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? 36 : 40,
        }}>
          {/* Contact info */}
          <div>
            {contactItems.map(c => (
              <div key={c.label} style={{ display:"flex", gap:16, marginBottom:24 }}>
                <div style={{
                  width:44, height:44, borderRadius:12,
                  background:"rgba(34,211,238,0.08)", border:"1px solid rgba(34,211,238,0.2)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontSize:18, flexShrink:0,
                }}><c.icon size={18} color="#22d3ee" /></div>
                <div>
                  <div style={{ fontSize:12, color:"rgba(140,165,210,0.6)", fontFamily:"'Space Grotesk',sans-serif", marginBottom:3 }}>{c.label}</div>
                  {c.href ? (
                    <a href={c.href} style={{ fontSize:15, color:"#e0ecff", fontFamily:"'Space Grotesk',sans-serif", textDecoration:"none" }}>{c.val}</a>
                  ) : (
                    <span style={{ fontSize:15, color:"#e0ecff", fontFamily:"'Space Grotesk',sans-serif" }}>{c.val}</span>
                  )}
                </div>
              </div>
            ))}

            <div style={{ display:"flex", gap:12, marginTop:28, flexWrap:"wrap" }}>
              <a href={PERSON.whatsapp} target="_blank" rel="noopener noreferrer" style={{
                padding:"12px 22px", borderRadius:50, background:"#22c55e", color:"#fff",
                fontFamily:"'Space Grotesk',sans-serif", fontSize:13, fontWeight:700, textDecoration:"none",
                display:"flex", alignItems:"center", gap:6,
              }}><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> WhatsApp</a>
              <a href={PERSON.linkedin} target="_blank" rel="noopener noreferrer" style={{
                padding:"12px 22px", borderRadius:50, background:"#0a66c2", color:"#fff",
                fontFamily:"'Space Grotesk',sans-serif", fontSize:13, fontWeight:700, textDecoration:"none",
                display:"flex", alignItems:"center", gap:6,
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn</a>
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div style={{
                padding:32, borderRadius:16,
                background:"rgba(34,211,238,0.08)", border:"1px solid rgba(34,211,238,0.3)",
                textAlign:"center",
              }}>
                <div style={{ marginBottom:12, color:"#22d3ee" }}><CheckCircle2 size={32} /></div>
                <p style={{ color:"#22d3ee", fontFamily:"'Space Grotesk',sans-serif", fontWeight:600 }}>Message sent! I'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:14 }}>
                <input placeholder="Your name" required value={form.name}
                  onChange={e => setForm(f => ({ ...f, name:e.target.value }))}
                  style={inputStyle} />
                <input type="email" placeholder="Email address" required value={form.email}
                  onChange={e => setForm(f => ({ ...f, email:e.target.value }))}
                  style={inputStyle} />
                <textarea placeholder="Tell me about your project…" required rows={5} value={form.message}
                  onChange={e => setForm(f => ({ ...f, message:e.target.value }))}
                  style={{ ...inputStyle, resize:"none" }} />
                <button type="submit" style={{
                  padding:"14px 28px", borderRadius:50,
                  background:"linear-gradient(135deg, #22d3ee, #06b6d4)",
                  border:"none", color:"#020d1a",
                  fontFamily:"'Space Grotesk',sans-serif", fontSize:14, fontWeight:700,
                  cursor:"pointer", alignSelf:"flex-start",
                }}>Send Message →</button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const isMobile = useIsMobile();
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef()];

  const goTo = (i) => {
    refs[i].current?.scrollIntoView({ behavior:"smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const i = refs.findIndex(r => r.current === e.target);
            if (i >= 0) setActive(i);
          }
        });
      },
      { threshold:0.3 }
    );
    refs.forEach(r => r.current && obs.observe(r.current));
    return () => obs.disconnect();
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <div style={{ background:"#020d1a", minHeight:"100vh", fontFamily:"'Space Grotesk',sans-serif", position:"relative" }}>

        {/* ── TOP NAV ── */}
        <nav style={{
          position:"fixed", top:0, left:0, right:0, zIndex:200,
          padding: isMobile ? "14px 20px" : "18px 40px",
          display:"flex", alignItems:"center", justifyContent:"space-between",
          background:"rgba(2,13,26,0.92)", backdropFilter:"blur(16px)",
          borderBottom:"1px solid rgba(255,255,255,0.05)",
        }}>
          {/* Logo */}
          <div style={{
            fontSize: isMobile ? 18 : 20, fontWeight:800, fontFamily:"'Syne',sans-serif",
            background:"linear-gradient(90deg, #22d3ee, #a855f7)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
            letterSpacing:"-0.02em",
          }}>CALEB.CO</div>

          {/* Desktop nav links */}
          {!isMobile && (
            <div style={{ display:"flex", gap:8, alignItems:"center" }}>
              {SECTIONS.map((s,i) => (
                <button key={s} onClick={() => goTo(i)} style={{
                  padding:"6px 14px", borderRadius:20,
                  background: active===i ? "rgba(34,211,238,0.12)" : "transparent",
                  border: active===i ? "1px solid rgba(34,211,238,0.3)" : "1px solid transparent",
                  color: active===i ? "#22d3ee" : "rgba(180,200,240,0.5)",
                  fontFamily:"'Space Grotesk',sans-serif", fontSize:13, fontWeight:500,
                  cursor:"pointer", transition:"all 0.2s",
                }}>{s}</button>
              ))}
            </div>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)",
                borderRadius:10, width:40, height:40, cursor:"pointer",
                display:"flex", flexDirection:"column", alignItems:"center",
                justifyContent:"center", gap:5, padding:0,
              }}
              aria-label="Toggle menu"
            >
              <span style={{
                display:"block", width:18, height:2, background: menuOpen ? "#22d3ee" : "#f0f4ff",
                borderRadius:2, transition:"all 0.3s",
                transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none",
              }} />
              <span style={{
                display:"block", width:18, height:2, background:"#f0f4ff",
                borderRadius:2, transition:"all 0.3s",
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{
                display:"block", width:18, height:2, background: menuOpen ? "#22d3ee" : "#f0f4ff",
                borderRadius:2, transition:"all 0.3s",
                transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none",
              }} />
            </button>
          )}
        </nav>

        {/* ── MOBILE MENU OVERLAY ── */}
        <AnimatePresence>
          {isMobile && menuOpen && (
            <motion.div
              initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-10 }}
              transition={{ duration:0.2 }}
              style={{
                position:"fixed", top:68, left:0, right:0, zIndex:190,
                background:"rgba(2,13,26,0.97)", backdropFilter:"blur(20px)",
                borderBottom:"1px solid rgba(255,255,255,0.07)",
                padding:"16px 20px 24px",
              }}
            >
              {SECTIONS.map((s,i) => (
                <button key={s} onClick={() => goTo(i)} style={{
                  display:"block", width:"100%", textAlign:"left",
                  padding:"14px 16px", borderRadius:12, marginBottom:6,
                  background: active===i ? "rgba(34,211,238,0.1)" : "transparent",
                  border: active===i ? "1px solid rgba(34,211,238,0.25)" : "1px solid transparent",
                  color: active===i ? "#22d3ee" : "rgba(200,220,255,0.7)",
                  fontFamily:"'Space Grotesk',sans-serif", fontSize:15, fontWeight:600,
                  cursor:"pointer",
                }}>
                  <span style={{ marginRight:10, opacity:0.5, fontSize:12 }}>{String(i+1).padStart(2,"0")}</span>
                  {s}
                </button>
              ))}
              <div style={{ marginTop:16, paddingTop:16, borderTop:"1px solid rgba(255,255,255,0.07)", display:"flex", gap:10 }}>
                <a href={PERSON.whatsapp} target="_blank" rel="noopener noreferrer" style={{
                  flex:1, textAlign:"center", padding:"12px 0", borderRadius:50,
                  background:"#22c55e", color:"#fff",
                  fontFamily:"'Space Grotesk',sans-serif", fontSize:13, fontWeight:700, textDecoration:"none",
                  display:"flex", alignItems:"center", justifyContent:"center", gap:6,
                }}><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> WhatsApp</a>
                <a href={PERSON.linkedin} target="_blank" rel="noopener noreferrer" style={{
                  flex:1, textAlign:"center", padding:"12px 0", borderRadius:50,
                  background:"#0a66c2", color:"#fff",
                  fontFamily:"'Space Grotesk',sans-serif", fontSize:13, fontWeight:700, textDecoration:"none",
                  display:"flex", alignItems:"center", justifyContent:"center", gap:6,
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── RIGHT NAV DOTS (desktop only) ── */}
        {!isMobile && (
          <div style={{
            position:"fixed", right:24, top:"50%", transform:"translateY(-50%)",
            display:"flex", flexDirection:"column", gap:8, zIndex:100,
          }}>
            {SECTIONS.map((s,i) => (
              <button key={s} onClick={() => goTo(i)} title={s} style={{
                width: active===i ? 28 : 10, height:10, borderRadius:5, padding:0, border:"none",
                background: active===i ? "#22d3ee" : "rgba(255,255,255,0.25)",
                cursor:"pointer", transition:"all 0.3s ease",
              }} aria-label={s} />
            ))}
          </div>
        )}

        {/* ── SECTIONS ── */}
        <div ref={refs[0]}><HeroSection goTo={goTo} /></div>
        <div ref={refs[1]}><AboutSection /></div>
        <div ref={refs[2]}><ServicesSection /></div>
        <div ref={refs[3]}><PortfolioSection /></div>
        <div ref={refs[4]}><ContactSection /></div>

        {/* ── FOOTER ── */}
        <footer style={{
          borderTop:"1px solid rgba(255,255,255,0.06)",
          padding: isMobile ? "24px 20px" : "28px 40px",
          display:"flex", justifyContent:"space-between", alignItems:"center",
          flexWrap:"wrap", gap:8,
        }}>
          <span style={{ fontSize:12, color:"rgba(140,165,210,0.5)", fontFamily:"'Space Grotesk',sans-serif" }}>
            © {new Date().getFullYear()} Caleb Okwach. All rights reserved.
          </span>
          <span style={{ fontSize:12, color:"rgba(140,165,210,0.5)", fontFamily:"'Space Grotesk',sans-serif" }}>
            Nairobi, Kenya
          </span>
        </footer>

        {/* ── WHATSAPP BUBBLE ── */}
        <a
          href={PERSON.whatsapp} target="_blank" rel="noopener noreferrer"
          style={{
            position:"fixed",
            bottom: isMobile ? 20 : 28,
            right: isMobile ? 20 : 28,
            width: isMobile ? 48 : 52, height: isMobile ? 48 : 52, borderRadius:"50%",
            background:"#22c55e", display:"flex", alignItems:"center", justifyContent:"center",
            fontSize: isMobile ? 22 : 24, textDecoration:"none",
            boxShadow:"0 4px 20px rgba(34,197,94,0.4)", zIndex:99, transition:"transform 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.transform="scale(1.1)"}
          onMouseLeave={e => e.currentTarget.style.transform="scale(1)"}
        ><svg width={isMobile ? 22 : 24} height={isMobile ? 22 : 24} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
      </div>
    </>
  );
}