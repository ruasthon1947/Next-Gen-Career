import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, BookOpen, Users, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"

const technologies = {
  html: {
    title: "HTML (HyperText Markup Language)",
    description: "The foundation of web development - learn to structure web content with semantic markup.",
    category: "Frontend Development",
    difficulty: "Beginner",
    learningTime: "2-4 weeks",
    marketDemand: "Very High",

    overview:
      "HTML is the standard markup language for creating web pages. It describes the structure of a web page using markup elements like headings, paragraphs, links, images, and more.",
    keyTopics: [
      "HTML5 Semantic Elements",
      "Forms and Input Types",
      "Accessibility Best Practices",
      "SEO Optimization",
      "Responsive Design Basics",
    ],
    prerequisites: ["Basic computer skills", "Text editor familiarity"],
    careerPaths: ["Frontend Developer", "Web Developer", "UI/UX Developer"],
    resources: [
      { title: "MDN HTML Documentation", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", type: "Documentation" },
      { title: "HTML5 Complete Course", url: "https://www.youtube.com/watch?v=pQN-pnXPaVg", type: "Course" },
      { title: "FreeCodeCamp HTML", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/", type: "Interactive" },
    ],
  },
  react: {
    title: "React",
    description: "A powerful JavaScript library for building user interfaces with component-based architecture.",
    category: "Frontend Development",
    difficulty: "Intermediate",
    learningTime: "3-6 months",
    marketDemand: "Extremely High",

    overview:
      "React is a JavaScript library developed by Facebook for building user interfaces. It allows developers to create reusable UI components and manage application state efficiently.",
    keyTopics: [
      "JSX and Components",
      "State and Props",
      "Hooks (useState, useEffect, etc.)",
      "Context API",
      "React Router",
      "Testing with Jest",
    ],
    prerequisites: ["JavaScript ES6+", "HTML/CSS", "Basic programming concepts"],
    careerPaths: ["Frontend Developer", "Full Stack Developer", "React Developer"],
    resources: [
      { title: "Official React Documentation", url: "https://react.dev/", type: "Documentation" },
      { title: "React Complete Guide", url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/", type: "Course" },
      { title: "React Hooks Tutorial", url: "https://www.youtube.com/watch?v=f687hBjwFcM", type: "Tutorial" },
    ],
  },
  javascript: {
    title: "JavaScript",
    description: "The programming language of the web - essential for interactive and dynamic web applications.",
    category: "Frontend Development",
    difficulty: "Beginner to Advanced",
    learningTime: "3-8 months",
    marketDemand: "Extremely High",

    overview:
      "JavaScript is a versatile programming language that enables interactive web pages. It's an essential part of web applications alongside HTML and CSS.",
    keyTopics: [
      "Variables and Data Types",
      "Functions and Scope",
      "DOM Manipulation",
      "Asynchronous Programming",
      "ES6+ Features",
      "Error Handling",
    ],
    prerequisites: ["Basic programming logic", "HTML/CSS basics"],
    careerPaths: ["Frontend Developer", "Full Stack Developer", "JavaScript Developer"],
    resources: [
      { title: "JavaScript.info", url: "https://javascript.info/", type: "Tutorial" },
      { title: "Eloquent JavaScript", url: "https://eloquentjavascript.net/", type: "Book" },
      { title: "JavaScript30", url: "https://javascript30.com/", type: "Challenge" },
    ],
  },
  css: {
    title: "CSS (Cascading Style Sheets)",
    description: "Style and layout web pages with modern CSS techniques including Flexbox, Grid, and animations.",
    category: "Frontend Development",
    difficulty: "Beginner to Intermediate",
    learningTime: "2-5 months",
    marketDemand: "Very High",
    averageSalary: "$45,000 - $85,000",
    overview:
      "CSS is used to style and layout web pages. Modern CSS includes powerful features like Flexbox, Grid, and CSS Variables that make creating responsive designs easier.",
    keyTopics: [
      "Selectors and Specificity",
      "Flexbox and Grid Layout",
      "Responsive Design",
      "CSS Animations",
      "CSS Variables",
      "Preprocessors (Sass/SCSS)",
    ],
    prerequisites: ["HTML basics", "Design fundamentals"],
    careerPaths: ["Frontend Developer", "UI Developer", "Web Designer"],
    resources: [
      { title: "CSS-Tricks", url: "#", type: "Resource" },
      { title: "Flexbox Froggy", url: "#", type: "Game" },
      { title: "Grid Garden", url: "#", type: "Game" },
    ],
  },
  typescript: {
    title: "TypeScript",
    description:
      "A typed superset of JavaScript that compiles to plain JavaScript, enhancing code quality and developer experience.",
    category: "Frontend Development",
    difficulty: "Intermediate",
    learningTime: "2-4 months",
    marketDemand: "High",
    averageSalary: "$75,000 - $140,000",
    overview:
      "TypeScript adds static type definitions to JavaScript, helping catch errors early and improving code maintainability in large applications.",
    keyTopics: [
      "Type Annotations",
      "Interfaces and Types",
      "Generics",
      "Decorators",
      "Module System",
      "Integration with React",
    ],
    prerequisites: ["JavaScript proficiency", "Object-oriented programming concepts"],
    careerPaths: ["Frontend Developer", "Full Stack Developer", "TypeScript Developer"],
    resources: [
      { title: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/", type: "Documentation" },
      { title: "TypeScript Deep Dive", url: "https://basarat.gitbook.io/typescript/", type: "Book" },
      { title: "TypeScript Exercises", url: "https://typescript-exercises.github.io/", type: "Practice" },
    ],
  },
  nodejs: {
    title: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 engine for building scalable server-side applications.",
    category: "Backend Development",
    difficulty: "Intermediate",
    learningTime: "3-6 months",
    marketDemand: "Very High",
    averageSalary: "$70,000 - $130,000",
    overview:
      "Node.js allows developers to use JavaScript for server-side programming, enabling full-stack JavaScript development.",
    keyTopics: [
      "Event Loop and Asynchronous Programming",
      "NPM and Package Management",
      "Express.js Framework",
      "File System Operations",
      "HTTP and REST APIs",
      "Database Integration",
    ],
    prerequisites: ["JavaScript proficiency", "Basic server concepts"],
    careerPaths: ["Backend Developer", "Full Stack Developer", "Node.js Developer"],
    resources: [
      { title: "Node.js Documentation", url: "#", type: "Documentation" },
      { title: "Node.js Complete Course", url: "#", type: "Course" },
      { title: "Express.js Guide", url: "#", type: "Tutorial" },
    ],
  },
  python: {
    title: "Python",
    description:
      "A versatile, high-level programming language perfect for backend development, data science, and automation.",
    category: "Backend Development",
    difficulty: "Beginner to Advanced",
    learningTime: "3-8 months",
    marketDemand: "Extremely High",
    averageSalary: "$65,000 - $125,000",
    overview:
      "Python is known for its simple syntax and powerful libraries, making it ideal for web development, data analysis, AI, and automation.",
    keyTopics: [
      "Python Syntax and Data Structures",
      "Object-Oriented Programming",
      "Web Frameworks (Django, Flask)",
      "Database Integration",
      "API Development",
      "Testing and Debugging",
    ],
    prerequisites: ["Basic programming concepts", "Command line familiarity"],
    careerPaths: ["Backend Developer", "Data Scientist", "Python Developer"],
    resources: [
      { title: "Python.org Tutorial", url: "https://docs.python.org/3/tutorial/", type: "Tutorial" },
      { title: "Automate the Boring Stuff", url: "https://automatetheboringstuff.com/", type: "Book" },
      { title: "Django Documentation", url: "https://docs.djangoproject.com/en/stable/", type: "Framework" },
    ],
  },
  databases: {
    title: "Databases",
    description: "Learn to design, implement, and manage databases including SQL and NoSQL solutions.",
    category: "Backend Development",
    difficulty: "Intermediate",
    learningTime: "4-8 months",
    marketDemand: "Very High",
    averageSalary: "$60,000 - $120,000",
    overview:
      "Databases are essential for storing and retrieving data in applications. Learn both relational (SQL) and non-relational (NoSQL) database systems.",
    keyTopics: [
      "SQL Fundamentals",
      "Database Design and Normalization",
      "Indexing and Performance",
      "NoSQL Databases (MongoDB, Redis)",
      "Database Security",
      "Backup and Recovery",
    ],
    prerequisites: ["Basic programming knowledge", "Data modeling concepts"],
    careerPaths: ["Database Administrator", "Backend Developer", "Data Engineer"],
    databaseTypes: [
      { name: "MySQL", description: "Popular open-source relational database", type: "SQL" },
      { name: "PostgreSQL", description: "Advanced open-source relational database", type: "SQL" },
      { name: "MongoDB", description: "Document-oriented NoSQL database", type: "NoSQL" },
      { name: "Redis", description: "In-memory data structure store", type: "NoSQL" },
      { name: "SQLite", description: "Lightweight embedded database", type: "SQL" },
      { name: "Cassandra", description: "Distributed NoSQL database", type: "NoSQL" },
    ],
    resources: [
      { title: "SQL Tutorial", url: "https://www.w3schools.com/sql/", type: "Tutorial" },
      { title: "MongoDB University", url: "https://university.mongodb.com/", type: "Course" },
      { title: "Database Design Course", url: "https://www.coursera.org/learn/database-management", type: "Course" },
    ],
  },
  apis: {
    title: "APIs (Application Programming Interfaces)",
    description: "Learn to design, build, and consume APIs for seamless application communication.",
    category: "Backend Development",
    difficulty: "Intermediate",
    learningTime: "2-5 months",
    marketDemand: "Very High",
    averageSalary: "$65,000 - $125,000",
    overview:
      "APIs enable different software applications to communicate with each other. Learn REST, GraphQL, and modern API development practices.",
    keyTopics: [
      "REST API Design",
      "HTTP Methods and Status Codes",
      "Authentication and Authorization",
      "GraphQL",
      "API Documentation",
      "Rate Limiting and Security",
    ],
    prerequisites: ["HTTP protocol understanding", "Backend programming knowledge"],
    careerPaths: ["API Developer", "Backend Developer", "Integration Specialist"],
    resources: [
      { title: "REST API Tutorial", url: "https://restfulapi.net/", type: "Tutorial" },
      { title: "GraphQL Documentation", url: "https://graphql.org/learn/", type: "Documentation" },
      { title: "Postman API Testing", url: "https://www.postman.com/api-platform/api-testing/", type: "Tool" },
    ],
  },
  devops: {
    title: "DevOps",
    description: "Bridge development and operations with automation, CI/CD, and infrastructure management.",
    category: "Full Stack Development",
    difficulty: "Advanced",
    learningTime: "6-12 months",
    marketDemand: "Very High",
    averageSalary: "$80,000 - $150,000",
    overview:
      "DevOps combines development and operations practices to improve collaboration and productivity through automation and monitoring.",
    keyTopics: [
      "CI/CD Pipelines",
      "Containerization (Docker)",
      "Orchestration (Kubernetes)",
      "Infrastructure as Code",
      "Monitoring and Logging",
      "Cloud Platforms (AWS, Azure, GCP)",
    ],
    prerequisites: ["System administration", "Programming knowledge", "Networking basics"],
    careerPaths: ["DevOps Engineer", "Site Reliability Engineer", "Cloud Engineer"],
    resources: [
      { title: "Docker Documentation", url: "https://docs.docker.com/", type: "Documentation" },
      { title: "Kubernetes Tutorial", url: "https://kubernetes.io/docs/tutorials/", type: "Tutorial" },
      { title: "AWS DevOps Guide", url: "https://aws.amazon.com/devops/", type: "Guide" },
    ],
  },
}

export default function TechnologyPage({ params }: { params: { slug: string } }) {
  const tech = technologies[params.slug as keyof typeof technologies]

  if (!tech) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
          <div className="mb-4">
            <Link href="/skills" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary/50 px-2 py-1 rounded transition bg-primary/10 hover:bg-primary/20">
              <ArrowLeft className="w-4 h-4" />
              Back to Skills
            </Link>
          </div>
            Back to Home
          </Link>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge variant="secondary">{tech.category}</Badge>
              <Badge variant="outline">{tech.difficulty}</Badge>
            </div>
            <h1 className="text-4xl font-bold text-balance">{tech.title}</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl">{tech.description}</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">Learning Time</div>
              <div className="font-semibold">{tech.learningTime}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">Market Demand</div>
              <div className="font-semibold">{tech.marketDemand}</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <BookOpen className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">Difficulty</div>
              <div className="font-semibold">{tech.difficulty}</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{tech.overview}</p>
              </CardContent>
            </Card>

            {/* Key Topics */}
            <Card>
              <CardHeader>
                <CardTitle>Key Topics to Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {tech.keyTopics.map((topic, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Database Types (only for databases) */}
            {"databaseTypes" in tech && (
              <Card>
                <CardHeader>
                  <CardTitle>Popular Database Types</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {tech.databaseTypes.map((db, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{db.name}</h4>
                          <Badge variant={db.type === "SQL" ? "default" : "secondary"}>{db.type}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{db.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Learning Resources */}
            <Card>
              <CardHeader>
                <CardTitle>Learning Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tech.resources.map((resource, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div>
                        <div className="font-medium">{resource.title}</div>
                        <div className="text-sm text-muted-foreground">{resource.type}</div>
                      </div>
                      <Button asChild variant="ghost" size="sm">
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" /> Start Learning
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Prerequisites */}
            <Card>
              <CardHeader>
                <CardTitle>Prerequisites</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tech.prerequisites.map((prereq, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm">{prereq}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Career Paths */}
            <Card>
              <CardHeader>
                <CardTitle>Career Paths</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {tech.careerPaths.map((path, index) => (
                    <Badge key={index} variant="outline" className="mr-2 mb-2">
                      {path}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Ready to Start Learning?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Take our career assessment to get a personalized learning path.
                </p>
                <Button className="w-full" asChild>
                  <Link href="/assessment">Start Assessment</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
