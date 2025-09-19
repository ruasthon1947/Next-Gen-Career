"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, DollarSign } from "lucide-react"

interface Mentor {
  id: number
  name: string
  title: string
  company: string
  expertise: string[]
  experience: string
  rating: number
  reviews: number
  hourlyRate: number
  languages: string[]
  timezone: string
  image: string
  bio: string
  availability: string
}

interface MentorCardProps {
  mentor: Mentor
  onBookSession: () => void
}

export function MentorCard({ mentor, onBookSession }: MentorCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50">
      <CardHeader className="space-y-4">
        <div className="flex items-start space-x-4">
          <img
            src={mentor.image || "/placeholder.svg"}
            alt={mentor.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{mentor.name}</h3>
            <p className="text-sm text-muted-foreground">{mentor.title}</p>
            <p className="text-sm font-medium text-primary">{mentor.company}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{mentor.rating}</span>
            <span className="text-sm text-muted-foreground">({mentor.reviews})</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <DollarSign className="h-4 w-4" />
            <span>${mentor.hourlyRate}/hr</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">{mentor.bio}</p>

        <div className="space-y-2">
          <h4 className="text-sm font-medium">Expertise:</h4>
          <div className="flex flex-wrap gap-1">
            {mentor.expertise.slice(0, 3).map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{mentor.experience}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{mentor.timezone}</span>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">Languages: {mentor.languages.join(", ")}</p>
          <p className="text-xs text-muted-foreground">Available: {mentor.availability}</p>
        </div>

        <Button
          onClick={onBookSession}
          className="w-full hover:bg-primary/90 transition-colors duration-200 group-hover:scale-105"
        >
          Book Session
        </Button>
      </CardContent>
    </Card>
  )
}
