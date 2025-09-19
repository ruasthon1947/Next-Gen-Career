import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, BookOpen, Award } from "lucide-react"

interface LearningPath {
  id: number
  title: string
  description: string
  duration: string
  level: string
  skills: string[]
  modules: number
  projects: number
  certificate: boolean
  rating: number
  students: string
  youtube?: string
}

interface LearningPathCardProps {
  path: LearningPath
}

export function LearningPathCard({ path }: LearningPathCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl group-hover:text-primary transition-colors">{path.title}</CardTitle>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{path.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{path.students} students</span>
              </div>
            </div>
          </div>
          {path.certificate && (
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Award className="h-3 w-3 mr-1" />
              Certificate
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{path.description}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{path.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <span>{path.modules} modules</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Level</span>
            <Badge variant="outline" className="text-xs">
              {path.level}
            </Badge>
          </div>
          <div className="text-sm">
            <span className="font-medium">Projects: </span>
            <span className="text-muted-foreground">{path.projects} hands-on projects</span>
          </div>
        </div>

        <div className="space-y-2">
          <span className="text-sm font-medium">Skills You'll Learn:</span>
          <div className="flex flex-wrap gap-1">
            {path.skills.slice(0, 4).map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex space-x-2 pt-2">
          {path.youtube ? (
            <a
              href={path.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button size="sm" className="w-full hover:bg-primary/90 transition-colors duration-200">
                Start Path
              </Button>
            </a>
          ) : (
            <Button size="sm" className="flex-1 hover:bg-primary/90 transition-colors duration-200">
              Start Path
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            className="hover:bg-secondary/10 transition-colors duration-200 bg-transparent"
          >
            Preview
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
