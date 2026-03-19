<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Madhu Redrouthu - Portfolio</title>

  <!-- Tailwind CDN -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">

  <style>
    body {
      font-family: 'Poppins', sans-serif;
    }
  </style>
</head>

<body class="bg-gray-950 text-white">

<!-- HERO -->
<section class="h-screen flex flex-col justify-center items-center text-center px-4">
  <h1 class="text-4xl md:text-6xl font-bold">
    Hi, I'm Madhu Redrouthu 👋
  </h1>
  <p class="mt-4 text-lg md:text-xl text-gray-400">
    Python Full Stack Developer | Azure Enthusiast
  </p>
  <p class="mt-2 max-w-xl text-gray-500">
    Building scalable, secure, and high-performance web applications using Django, React, and REST APIs.
  </p>

  <div class="mt-6 flex gap-4">
    <a href="#projects" class="bg-blue-600 px-6 py-2 rounded-xl hover:bg-blue-700">
      View Projects
    </a>
    <a href="resume.pdf" class="border border-gray-600 px-6 py-2 rounded-xl hover:bg-gray-800">
      Download Resume
    </a>
  </div>
</section>

<!-- ABOUT -->
<section class="py-16 px-6 md:px-20">
  <h2 class="text-3xl font-semibold mb-6">About Me</h2>
  <p class="text-gray-400 leading-relaxed max-w-3xl">
    I am a passionate Python Full Stack Developer with hands-on experience in designing and developing scalable web applications using Django, React, and REST APIs. I have built real-world projects focusing on performance, security, and user experience.
    <br><br>
    I also have experience in API testing using Postman and automation testing using Selenium. I am actively seeking opportunities to contribute to innovative teams and grow as a developer.
  </p>
</section>

<!-- SKILLS -->
<section class="py-16 px-6 md:px-20 bg-gray-900">
  <h2 class="text-3xl font-semibold mb-6">Skills</h2>

  <div class="grid md:grid-cols-3 gap-6">
    <div class="bg-gray-800 p-4 rounded-xl text-center">Python</div>
    <div class="bg-gray-800 p-4 rounded-xl text-center">JavaScript</div>
    <div class="bg-gray-800 p-4 rounded-xl text-center">React.js</div>
    <div class="bg-gray-800 p-4 rounded-xl text-center">Django</div>
    <div class="bg-gray-800 p-4 rounded-xl text-center">TailwindCSS</div>
    <div class="bg-gray-800 p-4 rounded-xl text-center">MySQL</div>
    <div class="bg-gray-800 p-4 rounded-xl text-center">REST APIs</div>
    <div class="bg-gray-800 p-4 rounded-xl text-center">Git & GitHub</div>
    <div class="bg-gray-800 p-4 rounded-xl text-center">Postman & Selenium</div>
  </div>
</section>

<!-- PROJECTS -->
<section id="projects" class="py-16 px-6 md:px-20">
  <h2 class="text-3xl font-semibold mb-10">Projects</h2>

  <div class="grid md:grid-cols-2 gap-8">

    <!-- Project 1 -->
    <div class="bg-gray-900 p-6 rounded-2xl shadow-lg">
      <h3 class="text-xl font-bold">Healthcare Dashboard</h3>
      <p class="text-gray-400 mt-2">
        Full-stack healthcare system with role-based authentication and REST APIs.
      </p>

      <div class="mt-4 flex gap-4">
        <a href="https://naga-madhu-hospital-dashboard.netlify.app/" class="text-blue-400">Live</a>
        <a href="#" class="text-blue-400">Code</a>
      </div>
    </div>

    <!-- Project 2 -->
    <div class="bg-gray-900 p-6 rounded-2xl shadow-lg">
      <h3 class="text-xl font-bold">Task Management System</h3>
      <p class="text-gray-400 mt-2">
        CRUD-based task manager with authentication and REST APIs.
      </p>

      <div class="mt-4 flex gap-4">
        <a href="#" class="text-blue-400">Live</a>
        <a href="#" class="text-blue-400">Code</a>
      </div>
    </div>

  </div>
</section>

<!-- CONTACT -->
<section class="py-16 px-6 md:px-20 bg-gray-900">
  <h2 class="text-3xl font-semibold mb-6">Contact</h2>

  <div class="space-y-3 text-gray-400">
    <p>📧 redrouthu7@gmail.com</p>
    <p>📱 +91 7799661684</p>
    <p>🔗 linkedin.com/in/madhu-redrouthu</p>
    <p>💻 github.com/Madhu-Redrouthu</p>
  </div>
</section>

<!-- FOOTER -->
<footer class="text-center py-6 text-gray-600">
  © 2026 Madhu Redrouthu. All rights reserved.
</footer>

</body>
</html>
