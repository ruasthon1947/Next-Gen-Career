"use client";
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Server, Globe, Shield, Cloud, Network, Cpu, BarChart3, Zap } from "lucide-react"
import React, { useState } from "react";

const careerPaths = [
  {
    title: "Frontend Developer",
    description: "Build beautiful, interactive user interfaces",
    icon: Code,
    skills: [
      { name: "HTML", slug: "html" },
      { name: "React", slug: "react" },
      { name: "JavaScript", slug: "javascript" },
      { name: "CSS", slug: "css" },
      { name: "TypeScript", slug: "typescript" },
    ],
    growth: "+15%",
    category: "frontend",
  },
  {
    title: "Backend Developer",
    description: "Create robust server-side applications",
    icon: Server,
    skills: [
      { name: "Node.js", slug: "nodejs" },
      { name: "Python", slug: "python" },
      { name: "Databases", slug: "databases" },
      { name: "APIs", slug: "apis" },
    ],
    growth: "+12%",
    category: "backend",
  },
  {
    title: "Full Stack Developer",
    description: "Master both frontend and backend development",
    icon: Globe,
    skills: [
      { name: "React", slug: "react" },
      { name: "Node.js", slug: "nodejs" },
      { name: "Databases", slug: "databases" },
      { name: "DevOps", slug: "devops" },
    ],
    growth: "+18%",
    category: "fullstack",
  },
  {
    title: "Cybersecurity Specialist",
    description: "Protect systems and data from threats",
    icon: Shield,
    skills: [
      { name: "Security Protocols", slug: "security-protocols" },
      { name: "Penetration Testing", slug: "penetration-testing" },
      { name: "Risk Assessment", slug: "risk-assessment" },
    ],
    growth: "+22%",
    category: "cybersecurity",
  },
  {
    title: "Cloud Computing Engineer",
    description: "Design and manage cloud infrastructure",
    icon: Cloud,
    skills: [
      { name: "AWS", slug: "aws" },
      { name: "Azure", slug: "azure" },
      { name: "Docker", slug: "docker" },
      { name: "Kubernetes", slug: "kubernetes" },
    ],
    growth: "+25%",
    category: "cloud",
  },
  {
    title: "System Design Architect",
    description: "Design scalable distributed systems",
    icon: Network,
    skills: [
      { name: "Architecture", slug: "architecture" },
      { name: "Scalability", slug: "scalability" },
      { name: "Microservices", slug: "microservices" },
    ],
    growth: "+20%",
    category: "system-design",
  },
  {
    title: "IoT Developer",
    description: "Build connected device solutions",
    icon: Cpu,
    skills: [
      { name: "Arduino", slug: "arduino" },
      { name: "Raspberry Pi", slug: "raspberry-pi" },
      { name: "MQTT", slug: "mqtt" },
      { name: "Edge Computing", slug: "edge-computing" },
    ],
    growth: "+28%",
    category: "iot",
  },
  {
    title: "Data Analyst",
    description: "Extract insights from complex datasets",
    icon: BarChart3,
    skills: [
      { name: "SQL", slug: "sql" },
      { name: "Python", slug: "python" },
      { name: "Tableau", slug: "tableau" },
      { name: "Excel", slug: "excel" },
    ],
    growth: "+16%",
    category: "data-analysis",
  },
  {
    title: "Prompt Engineering",
    description: "Optimize AI model interactions and outputs",
    icon: Zap,
    skills: [
      { name: "GPT", slug: "gpt" },
      { name: "Claude", slug: "claude" },
      { name: "LangChain", slug: "langchain" },
      { name: "AI Ethics", slug: "ai-ethics" },
    ],
    growth: "+35%",
    category: "prompt-engineering",
  },
]

export function CareerPathsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const pathDetails: Record<string, React.ReactNode> = {
    "Frontend Developer": (
      <div className="mt-4 text-sm text-left space-y-2">
        <h4 className="font-semibold text-base">What is Frontend Development?</h4>
        <p>Frontend development is the practice of building the user interface and user experience of web applications. It involves using HTML, CSS, and JavaScript to create interactive, accessible, and visually appealing websites. Modern frontend developers also work with frameworks like React, Angular, and Vue.js to build complex, scalable applications.</p>
        <h5 className="font-semibold">Key Topics:</h5>
        <ul className="list-disc pl-5">
          <li><b>HTML:</b> The structure and content of web pages.</li>
          <li><b>CSS:</b> Styling and layout for web pages.</li>
          <li><b>JavaScript:</b> Interactivity and dynamic content.</li>
          <li><b>Frameworks/Libraries:</b> React, Angular, Vue.js, etc.</li>
          <li><b>Accessibility & Responsiveness:</b> Ensuring usability for all users and devices.</li>
        </ul>
        <h5 className="font-semibold">Popular Courses & Resources:</h5>
        <ul className="list-disc pl-5">
          <li><a href="https://www.freecodecamp.org/learn/2022/responsive-web-design/" target="_blank" rel="noopener noreferrer" className="text-primary underline">freeCodeCamp Responsive Web Design</a> - Interactive, beginner-friendly course covering HTML, CSS, and accessibility.</li>
          <li><a href="https://www.codecademy.com/learn/paths/front-end-engineer-career-path" target="_blank" rel="noopener noreferrer" className="text-primary underline">Codecademy Front-End Engineer Path</a> - Comprehensive curriculum with projects and quizzes.</li>
          <li><a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer" className="text-primary underline">React Official Docs</a> - Learn React, the most popular frontend library.</li>
        </ul>
        <h5 className="font-semibold">Role of a Frontend Developer:</h5>
        <ul className="list-disc pl-5">
          <li>Translating UI/UX designs into code</li>
          <li>Ensuring cross-browser compatibility</li>
          <li>Optimizing performance and accessibility</li>
          <li>Collaborating with designers and backend developers</li>
          <li>Staying updated with new frameworks and best practices</li>
        </ul>
        <h5 className="font-semibold">Career Outlook:</h5>
        <p>Frontend developers are in high demand as companies seek to deliver engaging digital experiences. Mastery of modern frameworks and a strong portfolio are key to landing top roles.</p>
      </div>
    ),
    "Backend Developer": (
      <div className="mt-4 text-sm text-left space-y-2">
        <h4 className="font-semibold text-base">What is Backend Development?</h4>
        <p>Backend development focuses on server-side logic, databases, and application architecture. Backend developers build APIs, manage data storage, and ensure security and scalability. Common languages include Node.js, Python, Java, and frameworks like Express, Django, and Spring.</p>
        <h5 className="font-semibold">Key Topics:</h5>
        <ul className="list-disc pl-5">
          <li><b>APIs:</b> Communication between frontend and backend.</li>
          <li><b>Databases:</b> Data storage and retrieval (SQL, NoSQL).</li>
          <li><b>Authentication & Security:</b> User management and protection.</li>
          <li><b>Server & Cloud:</b> Hosting, scaling, and deployment.</li>
        </ul>
        <h5 className="font-semibold">Popular Courses & Resources:</h5>
        <ul className="list-disc pl-5">
          <li><a href="https://www.coursera.org/specializations/backend-development" target="_blank" rel="noopener noreferrer" className="text-primary underline">Coursera Backend Development Specialization</a> - Covers Node.js, Express, databases, and deployment.</li>
          <li><a href="https://www.udemy.com/course/the-complete-nodejs-developer-course-2/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Udemy Node.js Developer Course</a> - Hands-on Node.js, Express, and MongoDB projects.</li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side" target="_blank" rel="noopener noreferrer" className="text-primary underline">MDN Server-side Development</a> - Free documentation and tutorials for backend concepts.</li>
        </ul>
        <h5 className="font-semibold">Role of a Backend Developer:</h5>
        <ul className="list-disc pl-5">
          <li>Designing and building APIs</li>
          <li>Managing databases and data models</li>
          <li>Implementing authentication and security</li>
          <li>Optimizing performance and scalability</li>
          <li>Integrating with cloud services and DevOps pipelines</li>
        </ul>
        <h5 className="font-semibold">Career Outlook:</h5>
        <p>Backend developers are essential for building robust, scalable applications. Demand is high for those skilled in modern frameworks, cloud, and security best practices.</p>
      </div>
    ),
    "Full Stack Developer": (
      <div className="mt-4 text-sm text-left space-y-2">
        <h4 className="font-semibold text-base">What is Full Stack Development?</h4>
        <p>Full stack development combines both frontend and backend skills. Full stack developers can build complete web applications, from designing user interfaces to managing databases and server logic. They are versatile and understand the entire web development process.</p>
        <h5 className="font-semibold">Key Topics:</h5>
        <ul className="list-disc pl-5">
          <li><b>Frontend:</b> HTML, CSS, JavaScript, frameworks</li>
          <li><b>Backend:</b> APIs, databases, authentication</li>
          <li><b>DevOps:</b> Deployment, CI/CD, cloud services</li>
        </ul>
        <h5 className="font-semibold">Popular Courses & Resources:</h5>
        <ul className="list-disc pl-5">
          <li><a href="https://www.coursera.org/specializations/full-stack" target="_blank" rel="noopener noreferrer" className="text-primary underline">Coursera Full Stack Specialization</a> - Covers frontend, backend, and DevOps with real projects.</li>
          <li><a href="https://www.freecodecamp.org/learn" target="_blank" rel="noopener noreferrer" className="text-primary underline">freeCodeCamp Full Stack Curriculum</a> - Free, project-based learning for full stack skills.</li>
          <li><a href="https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Udemy Complete Web Developer</a> - Covers HTML, CSS, JS, Node, React, and more.</li>
        </ul>
        <h5 className="font-semibold">Role of a Full Stack Developer:</h5>
        <ul className="list-disc pl-5">
          <li>Building end-to-end features</li>
          <li>Integrating frontend and backend systems</li>
          <li>Managing deployments and infrastructure</li>
          <li>Working across the entire software stack</li>
        </ul>
        <h5 className="font-semibold">Career Outlook:</h5>
        <p>Full stack developers are highly valued for their versatility and ability to deliver complete solutions. Mastery of both client and server technologies opens many career paths.</p>
      </div>
    ),
    "Cybersecurity Specialist": (
      <div className="mt-4 text-sm text-left space-y-2">
        <h4 className="font-semibold text-base">What is Cybersecurity?</h4>
        <p>Cybersecurity is the practice of protecting systems, networks, and data from digital attacks. Cybersecurity specialists identify vulnerabilities, implement security measures, and respond to incidents to safeguard information and infrastructure.</p>
        <h5 className="font-semibold">Key Topics:</h5>
        <ul className="list-disc pl-5">
          <li><b>Security Protocols:</b> Standards and procedures for secure communication.</li>
          <li><b>Penetration Testing:</b> Simulating attacks to find vulnerabilities.</li>
          <li><b>Risk Assessment:</b> Evaluating and mitigating security risks.</li>
          <li><b>Incident Response:</b> Handling and recovering from security breaches.</li>
        </ul>
        <h5 className="font-semibold">Popular Courses & Resources:</h5>
        <ul className="list-disc pl-5">
          <li><a href="https://www.coursera.org/specializations/ibm-cybersecurity-analyst" target="_blank" rel="noopener noreferrer" className="text-primary underline">Coursera IBM Cybersecurity Analyst</a> - Covers security tools, network defense, and incident response.</li>
          <li><a href="https://www.cybrary.it/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Cybrary Cybersecurity Courses</a> - Free and paid hands-on labs and courses.</li>
          <li><a href="https://www.cisa.gov/resources-tools/training" target="_blank" rel="noopener noreferrer" className="text-primary underline">CISA Cybersecurity Training</a> - Official government training and resources.</li>
        </ul>
        <h5 className="font-semibold">Role of a Cybersecurity Specialist:</h5>
        <ul className="list-disc pl-5">
          <li>Monitoring and defending networks</li>
          <li>Conducting security audits</li>
          <li>Developing security policies</li>
          <li>Educating users on best practices</li>
          <li>Responding to and investigating incidents</li>
        </ul>
        <h5 className="font-semibold">Career Outlook:</h5>
        <p>Cybersecurity is a rapidly growing field with high demand for skilled professionals. Continuous learning and certifications are key to advancement.</p>
      </div>
    ),
    "Cloud Computing Engineer": (
      <div className="mt-4 text-sm text-left space-y-2">
        <h4 className="font-semibold text-base">What is Cloud Computing?</h4>
        <p>Cloud computing engineers design, deploy, and manage cloud-based infrastructure and services. They work with platforms like AWS, Azure, and Google Cloud to build scalable, reliable, and cost-effective solutions for organizations.</p>
        <h5 className="font-semibold">Key Topics:</h5>
        <ul className="list-disc pl-5">
          <li><b>AWS, Azure, Google Cloud:</b> Leading cloud service providers.</li>
          <li><b>Containers & Orchestration:</b> Docker, Kubernetes, and automation tools.</li>
          <li><b>Cloud Security:</b> Protecting cloud resources and data.</li>
          <li><b>DevOps:</b> Continuous integration and deployment in the cloud.</li>
        </ul>
        <h5 className="font-semibold">Popular Courses & Resources:</h5>
        <ul className="list-disc pl-5">
          <li><a href="https://www.aws.training/" target="_blank" rel="noopener noreferrer" className="text-primary underline">AWS Training and Certification</a> - Official AWS courses and certifications.</li>
          <li><a href="https://learn.microsoft.com/en-us/training/azure/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Microsoft Azure Training</a> - Free and paid Azure learning paths.</li>
          <li><a href="https://www.coursera.org/specializations/google-cloud" target="_blank" rel="noopener noreferrer" className="text-primary underline">Coursera Google Cloud Specialization</a> - Hands-on Google Cloud projects and labs.</li>
        </ul>
        <h5 className="font-semibold">Role of a Cloud Engineer:</h5>
        <ul className="list-disc pl-5">
          <li>Designing cloud architectures</li>
          <li>Automating infrastructure</li>
          <li>Ensuring high availability and disaster recovery</li>
          <li>Managing cloud costs and security</li>
          <li>Integrating with DevOps and CI/CD pipelines</li>
        </ul>
        <h5 className="font-semibold">Career Outlook:</h5>
        <p>Cloud engineers are in high demand as organizations migrate to the cloud. Certifications and hands-on experience are highly valued.</p>
      </div>
    ),
    "System Design Architect": (
      <div className="mt-4 text-sm text-left space-y-2">
        <h4 className="font-semibold text-base">What is System Design?</h4>
        <p>System design architects plan and create the architecture for large-scale, distributed systems. They focus on scalability, reliability, and maintainability, making decisions about data flow, storage, and communication between components.</p>
        <h5 className="font-semibold">Key Topics:</h5>
        <ul className="list-disc pl-5">
          <li><b>Architecture Patterns:</b> Monolithic, microservices, event-driven, etc.</li>
          <li><b>Scalability:</b> Designing systems to handle growth.</li>
          <li><b>Reliability:</b> Ensuring uptime and fault tolerance.</li>
          <li><b>Performance Optimization:</b> Efficient resource usage and response times.</li>
        </ul>
        <h5 className="font-semibold">Popular Courses & Resources:</h5>
        <ul className="list-disc pl-5">
          <li><a href="https://www.educative.io/courses/grokking-the-system-design-interview" target="_blank" rel="noopener noreferrer" className="text-primary underline">Grokking the System Design Interview</a> - Popular course for system design concepts and interview prep.</li>
          <li><a href="https://www.coursera.org/learn/cloud-computing" target="_blank" rel="noopener noreferrer" className="text-primary underline">Coursera Cloud Computing</a> - Learn distributed systems and cloud architecture.</li>
          <li><a href="https://www.youtube.com/playlist?list=PLTCrU9sGyburBw9wNOHebv9SjlE4Elv5a" target="_blank" rel="noopener noreferrer" className="text-primary underline">YouTube System Design Playlist</a> - Free video lectures on system design topics.</li>
        </ul>
        <h5 className="font-semibold">Role of a System Design Architect:</h5>
        <ul className="list-disc pl-5">
          <li>Designing system blueprints</li>
          <li>Choosing appropriate technologies</li>
          <li>Reviewing and optimizing architectures</li>
          <li>Mentoring engineering teams</li>
          <li>Ensuring scalability and reliability</li>
        </ul>
        <h5 className="font-semibold">Career Outlook:</h5>
        <p>System design architects are highly valued for their ability to create robust, scalable solutions. Strong communication and technical skills are essential.</p>
      </div>
    ),
    "IoT Developer": (
      <div className="mt-4 text-sm text-left space-y-2">
        <h4 className="font-semibold text-base">What is IoT Development?</h4>
        <p>IoT (Internet of Things) developers build solutions that connect physical devices to the internet, enabling data collection, automation, and remote control. They work with hardware, embedded systems, and cloud platforms to create smart devices and applications.</p>
        <h5 className="font-semibold">Key Topics:</h5>
        <ul className="list-disc pl-5">
          <li><b>Embedded Systems:</b> Programming microcontrollers and sensors.</li>
          <li><b>Connectivity:</b> Protocols like MQTT, HTTP, Bluetooth, etc.</li>
          <li><b>Edge Computing:</b> Processing data close to the source.</li>
          <li><b>Security:</b> Protecting IoT devices and networks.</li>
        </ul>
        <h5 className="font-semibold">Popular Courses & Resources:</h5>
        <ul className="list-disc pl-5">
          <li><a href="https://www.coursera.org/specializations/internet-of-things" target="_blank" rel="noopener noreferrer" className="text-primary underline">Coursera Internet of Things Specialization</a> - Covers IoT architecture, security, and cloud integration.</li>
          <li><a href="https://www.edx.org/learn/iot" target="_blank" rel="noopener noreferrer" className="text-primary underline">edX IoT Courses</a> - University-level IoT courses and labs.</li>
          <li><a href="https://www.iotforall.com/iot-education" target="_blank" rel="noopener noreferrer" className="text-primary underline">IoT For All Education</a> - Free articles, guides, and tutorials.</li>
        </ul>
        <h5 className="font-semibold">Role of an IoT Developer:</h5>
        <ul className="list-disc pl-5">
          <li>Building device firmware and software</li>
          <li>Integrating with cloud platforms</li>
          <li>Ensuring device security and reliability</li>
          <li>Developing user interfaces for device management</li>
          <li>Working with hardware and sensors</li>
        </ul>
        <h5 className="font-semibold">Career Outlook:</h5>
        <p>IoT is a fast-growing field with opportunities in smart homes, healthcare, manufacturing, and more. Hands-on experience and hardware knowledge are key.</p>
      </div>
    ),
    "Data Analyst": (
      <div className="mt-4 text-sm text-left space-y-2">
        <h4 className="font-semibold text-base">What is Data Analysis?</h4>
        <p>Data analysts collect, process, and analyze data to extract insights and support decision-making. They use tools like SQL, Python, Tableau, and Excel to visualize trends, identify patterns, and communicate findings to stakeholders.</p>
        <h5 className="font-semibold">Key Topics:</h5>
        <ul className="list-disc pl-5">
          <li><b>Data Cleaning:</b> Preparing data for analysis.</li>
          <li><b>Statistical Analysis:</b> Drawing conclusions from data.</li>
          <li><b>Data Visualization:</b> Communicating insights with charts and dashboards.</li>
          <li><b>Reporting:</b> Presenting findings to stakeholders.</li>
        </ul>
        <h5 className="font-semibold">Popular Courses & Resources:</h5>
        <ul className="list-disc pl-5">
          <li><a href="https://www.coursera.org/specializations/data-analysis" target="_blank" rel="noopener noreferrer" className="text-primary underline">Coursera Data Analysis Specialization</a> - Covers data cleaning, visualization, and reporting.</li>
          <li><a href="https://www.datacamp.com/courses/tech:data-analysis" target="_blank" rel="noopener noreferrer" className="text-primary underline">DataCamp Data Analysis Courses</a> - Interactive Python, SQL, and Excel lessons.</li>
          <li><a href="https://www.kaggle.com/learn/data-visualization" target="_blank" rel="noopener noreferrer" className="text-primary underline">Kaggle Data Visualization</a> - Free hands-on data viz tutorials.</li>
        </ul>
        <h5 className="font-semibold">Role of a Data Analyst:</h5>
        <ul className="list-disc pl-5">
          <li>Collecting and cleaning data</li>
          <li>Analyzing trends and patterns</li>
          <li>Building dashboards and reports</li>
          <li>Supporting business decisions with data</li>
          <li>Communicating insights to stakeholders</li>
        </ul>
        <h5 className="font-semibold">Career Outlook:</h5>
        <p>Data analysts are in demand across industries. Strong analytical skills and proficiency with modern tools lead to great career opportunities.</p>
      </div>
    ),
    "Prompt Engineering": (
      <div className="mt-4 text-sm text-left space-y-2">
        <h4 className="font-semibold text-base">What is Prompt Engineering?</h4>
        <p>Prompt engineering is the process of designing and refining prompts to optimize the output of AI language models. Prompt engineers experiment with phrasing, context, and structure to achieve desired results from models like GPT, Claude, and others.</p>
        <h5 className="font-semibold">Key Topics:</h5>
        <ul className="list-disc pl-5">
          <li><b>Prompt Design:</b> Crafting effective instructions for AI models.</li>
          <li><b>Model Evaluation:</b> Assessing output quality and relevance.</li>
          <li><b>Ethics & Bias:</b> Ensuring responsible AI use.</li>
          <li><b>Tooling:</b> Using frameworks like LangChain for advanced workflows.</li>
        </ul>
        <h5 className="font-semibold">Popular Courses & Resources:</h5>
        <ul className="list-disc pl-5">
          <li><a href="https://learnprompting.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Learn Prompting</a> - Free, open-source resource for prompt engineering.</li>
          <li><a href="https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/" target="_blank" rel="noopener noreferrer" className="text-primary underline">DeepLearning.AI Prompt Engineering</a> - Short course for developers using ChatGPT and LLMs.</li>
          <li><a href="https://www.promptingguide.ai/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Prompt Engineering Guide</a> - Community-driven guide to prompt design and best practices.</li>
        </ul>
        <h5 className="font-semibold">Role of a Prompt Engineer:</h5>
        <ul className="list-disc pl-5">
          <li>Designing and testing prompts</li>
          <li>Collaborating with AI researchers and developers</li>
          <li>Improving model performance and safety</li>
          <li>Documenting best practices</li>
          <li>Exploring new applications for LLMs</li>
        </ul>
        <h5 className="font-semibold">Career Outlook:</h5>
        <p>Prompt engineering is an emerging field with growing demand as AI adoption increases. Creativity and technical skills are both important for success.</p>
      </div>
    ),
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Explore Career Journeys</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Discover high-growth career opportunities across technology and discover the skills you need to succeed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerPaths.map((path, index) => {
            const IconComponent = path.icon;
            const isOpen = openIndex === index;
            return (
              <Card
                key={index}
                className={`group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-border/50 ${isOpen ? "ring-2 ring-primary" : ""}`}
                onClick={() => {
                  if (isOpen) setOpenIndex(null);
                  else setOpenIndex(index);
                }}
                tabIndex={0}
                aria-label={`Learn more about ${path.title}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    {/* Removed growth percentage */}
                  </div>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {path.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">{path.description}</p>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {path.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs px-2 py-1 bg-secondary/20 text-secondary-foreground rounded-md opacity-60 cursor-default select-none"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  {isOpen && pathDetails[path.title] && (
                    <div className="pt-4 border-t mt-4 animate-fade-in relative" onClick={e => { e.stopPropagation(); setOpenIndex(null); }}>
                      <button
                        className="absolute right-0 top-0 text-xs bg-primary text-white rounded px-2 py-1 shadow hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/50 transition md:text-sm"
                        style={{ transform: 'translateY(-50%)' }}
                        onClick={e => {
                          e.stopPropagation();
                          setOpenIndex(null);
                        }}
                        aria-label="Back"
                      >
                        Back
                      </button>
                      <div onClick={e => e.stopPropagation()}>{pathDetails[path.title]}</div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
