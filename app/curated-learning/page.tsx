import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Target, Users, TrendingUp, Award, Clock } from "lucide-react"

const learningFeatures = [
  {
    icon: Target,
    title: "Personalized Curation",
    description:
      "Our AI analyzes your career goals, current skills, and learning preferences to recommend the most relevant courses and resources.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "Every resource is vetted by industry experts and rated by our community to ensure you're learning from the best content available.",
  },
  {
    icon: TrendingUp,
    title: "Industry-Aligned Content",
    description:
      "Stay ahead with courses that match current industry demands and emerging technology trends in your field.",
  },
  {
    icon: Clock,
    title: "Flexible Learning Paths",
    description:
      "Choose from intensive bootcamps, part-time courses, or self-paced learning modules that fit your schedule and learning style.",
  },
  {
    icon: Users,
    title: "Community Learning",
    description:
      "Join study groups, participate in peer reviews, and learn alongside professionals with similar career aspirations.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Resources",
    description:
      "Access a mix of video tutorials, interactive coding challenges, documentation, books, and hands-on projects.",
  },
]

const learningProcess = [
  {
    step: "1",
    title: "Assessment & Goal Setting",
  description: "Complete our career assessment to identify your strengths, interests, and target career journey.",
  },
  {
    step: "2",
    title: "Personalized Recommendations",
    description: "Receive curated learning resources tailored to your specific goals and current skill level.",
  },
  {
    step: "3",
    title: "Structured Learning Path",
    description: "Follow a step-by-step roadmap with milestones, projects, and skill checkpoints.",
  },
  {
    step: "4",
    title: "Hands-on Practice",
    description: "Apply your knowledge through real-world projects and coding challenges.",
  },
  {
    step: "5",
    title: "Community & Mentorship",
    description: "Get support from peers and mentors throughout your learning journey.",
  },
  {
    step: "6",
    title: "Career Advancement",
    description: "Leverage your new skills for job opportunities, promotions, or career transitions.",
  },
]

export default function CuratedLearningPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Curated Learning Experience</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how our platform delivers personalized, high-quality learning resources tailored to your career
            goals and learning preferences
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Why Our Curated Learning Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">How Curated Learning Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {learningProcess.map((process, index) => (
                <Card key={index} className="hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                          {process.step}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                        <p className="text-muted-foreground">{process.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center bg-secondary/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Curated Learning Journey?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Take our career assessment to receive personalized learning recommendations and start building the skills
            you need for your dream career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              ✓ Personalized recommendations
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              ✓ Expert-vetted content
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              ✓ Community support
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}
