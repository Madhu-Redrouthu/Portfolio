import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Hi, I'm Madhu Redrouthu 👋
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl text-gray-400">
          Python Full Stack Developer | Azure Enthusiast
        </p>
        <p className="mt-2 max-w-xl text-gray-500">
          Building scalable, secure, and high-performance web applications
          using Django, React, and REST APIs.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="bg-blue-600 px-6 py-2 rounded-xl hover:bg-blue-700"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            className="border border-gray-600 px-6 py-2 rounded-xl hover:bg-gray-800"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-gray-400 leading-relaxed max-w-3xl">
          I am a passionate Python Full Stack Developer with hands-on experience
          in designing and developing scalable web applications using Django,
          React, and REST APIs. I have built real-world projects focusing on
          performance, security, and user experience. I am actively seeking
          opportunities to contribute to innovative teams and grow as a
          developer.
        </p>
      </section>

      {/* SKILLS */}
      <section className="py-16 px-6 md:px-20 bg-gray-900">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Python",
            "JavaScript",
            "React",
            "Django",
            "TailwindCSS",
            "MySQL",
            "Git",
            "REST APIs",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-gray-800 p-4 rounded-xl text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold">Healthcare Dashboard</h3>
            <p className="text-gray-400 mt-2">
              Full-stack healthcare system with role-based authentication and
              REST APIs.
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href="https://naga-madhu-hospital-dashboard.netlify.app/"
                className="text-blue-400"
              >
                Live
              </a>
              <a href="#" className="text-blue-400">
                Code
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold">Task Management System</h3>
            <p className="text-gray-400 mt-2">
              CRUD-based task manager with authentication and REST APIs.
            </p>
            <div className="mt-4 flex gap-4">
              <a href="#" className="text-blue-400">
                Live
              </a>
              <a href="#" className="text-blue-400">
                Code
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 px-6 md:px-20 bg-gray-900">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <div className="flex flex-col gap-4 text-gray-400">
          <p className="flex items-center gap-2">
            <Mail size={18} /> redrouthu7@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <Phone size={18} /> +91 7799661684
          </p>
          <p className="flex items-center gap-2">
            <Linkedin size={18} /> linkedin.com/in/madhu-redrouthu
          </p>
          <p className="flex items-center gap-2">
            <Github size={18} /> github.com/Madhu-Redrouthu
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-600">
        © 2026 Madhu Redrouthu. All rights reserved.
      </footer>
    </div>
  );
}
