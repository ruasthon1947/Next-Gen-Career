"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArticleCard } from "./article-card"
import { SuccessStoryCard } from "./success-story-card"
import { Search, BookOpen, Star, TrendingUp, Users } from "lucide-react"

const articles = [
  {
    id: 1,
    title: "The Complete Guide to Landing Your First Tech Job",
    excerpt: "Essential steps and strategies for breaking into the technology industry",
    author: "Sarah Chen",
    authorRole: "Senior Software Engineer at Google",
    publishDate: "March 10, 2024",
    readTime: "8 min read",
    category: "Career Advice",
    tags: ["Job Search", "Tech Industry", "Career Change"],
    image: "/tech-job-interview.jpg",
    featured: true,
    externalUrl: "https://medium.com/%40lehenetudor/breaking-into-the-tech-industry-a-guide-to-landing-your-first-job-as-a-developer-what-tech-5b76032380d2",
  },
  {
    id: 2,
    title: "Frontend vs Backend: Which Path Should You Choose?",
    excerpt: "Compare career journeys, skills, and opportunities in frontend and backend development",
    author: "Mike Rodriguez",
    authorRole: "Full Stack Developer at Microsoft",
    publishDate: "March 8, 2024",
    readTime: "6 min read",
    category: "Career Journeys",
    tags: ["Frontend", "Backend", "Career Decision"],
    image: "/frontend-backend-development.jpg",
    featured: false,
    externalUrl: "https://www.geeksforgeeks.org/blogs/frontend-vs-backend-which-one-should-i-choose/"
  },
  {
    id: 3,
    title: "Building a Portfolio That Gets You Hired",
    excerpt: "Showcase your skills effectively with these portfolio best practices",
    author: "Emily Johnson",
    authorRole: "UX Designer at Airbnb",
    publishDate: "March 5, 2024",
    readTime: "10 min read",
    category: "Portfolio",
    tags: ["Portfolio", "Projects", "Personal Branding"],
    image: "/developer-portfolio.png",
    featured: true,
    externalUrl: "https://tietalent.com/en/blog/220/beyond-the-ats-how-to-build-a-tech-portfolio?utm_",
  },
  {
    id: 4,
    title: "Mastering Technical Interviews: A Developer's Guide",
    excerpt: "Prepare for coding interviews with proven strategies and practice tips",
    author: "David Kim",
    authorRole: "Engineering Manager at Netflix",
    publishDate: "March 3, 2024",
    readTime: "12 min read",
    category: "Interview Prep",
    tags: ["Interviews", "Coding", "Problem Solving"],
    image: "/technical-interview-coding.png",
    featured: false,
    externalUrl: "https://www.freecodecamp.org/news/master-technical-interviews?utm_",
  },
  {
    id: 5,
    title: "The Rise of AI in Software Development",
    excerpt: "How artificial intelligence is transforming the way we build software",
    author: "Lisa Wang",
    authorRole: "AI Research Scientist at OpenAI",
    publishDate: "March 1, 2024",
    readTime: "7 min read",
    category: "Technology Trends",
    tags: ["AI", "Machine Learning", "Future of Work"],
    image: "/ai-software-development.png",
    featured: false,
    externalUrl: "https://lightweightsolutions.co/how-ai-is-transforming-software-development-trends-and-tools/?utm_",
  },
  {
    id: 6,
    title: "Remote Work Best Practices for Developers",
    excerpt: "Stay productive and maintain work-life balance while working remotely",
    author: "Alex Thompson",
    authorRole: "Remote Team Lead at GitLab",
    publishDate: "February 28, 2024",
    readTime: "9 min read",
    category: "Work Life",
    tags: ["Remote Work", "Productivity", "Work-Life Balance"],
    image: "/remote-work-developer-setup.jpg",
    featured: false,
    externalUrl: "https://www.wearedevelopers.com/en/magazine/558/mastering-remote-work-tips-for-developers-558?utm_",
  },
]

const successStories = [
  {
    id: 1,
    name: "Jessica Martinez",
    previousRole: "Marketing Coordinator",
    currentRole: "Frontend Developer at Spotify",
    timeframe: "8 months",
    story:
  "After feeling unfulfilled in marketing, I discovered my passion for coding through Next Gen Careers' assessment. The structured learning path and mentorship helped me transition successfully.",
    skills: ["React", "JavaScript", "CSS"],
    image: "/professional-woman-developer.png",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    previousRole: "Retail Manager",
    currentRole: "Full Stack Developer at Shopify",
    timeframe: "10 months",
    story:
      "I never thought I could learn to code, but the personalized roadmap made it achievable. Now I'm building e-commerce solutions and loving every day of work.",
    skills: ["Node.js", "React", "MongoDB"],
    image: "/professional-man-developer.png",
  },
  {
    id: 3,
    name: "Priya Patel",
    previousRole: "Data Analyst",
    currentRole: "Machine Learning Engineer at Tesla",
    timeframe: "12 months",
    story:
      "The AI/ML learning path was exactly what I needed to advance my career. The hands-on projects and expert mentorship were game-changers.",
    skills: ["Python", "TensorFlow", "Data Science"],
    image: "/professional-woman-data-scientist.png",
  },
]

const categories = [
  "All",
  "Career Advice",
  "Career Journeys",
  "Portfolio",
  "Interview Prep",
  "Technology Trends",
  "Work Life",
]

export function GuidanceSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // const featuredArticles = articles.filter((article) => article.featured)

  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="text-center mb-8">
  <h1 className="text-3xl lg:text-4xl font-bold mb-4">Career Guidance Hub</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Expert insights, success stories, and practical advice to accelerate your career growth
        </p>
      </div>

      <div className="mb-8 space-y-4">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search articles, topics, or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 hover:border-primary/50 focus:border-primary transition-colors"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`hover:scale-105 transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary/10 bg-transparent"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <Tabs defaultValue="articles" className="space-y-6">
        <TabsList className="w-full lg:w-auto">
          <TabsTrigger value="articles" className="flex items-center space-x-2">
            <BookOpen className="h-4 w-4" />
            <span>Articles</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="articles" className="space-y-8">


          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">All Articles</h2>
              <Badge variant="secondary" className="text-sm">
                {filteredArticles.length} articles found
              </Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
