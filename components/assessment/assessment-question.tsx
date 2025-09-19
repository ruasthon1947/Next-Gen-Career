"use client"

import { Button } from "@/components/ui/button"

interface QuestionOption {
  id: string
  text: string
  value: string
}

interface Question {
  id: number
  category: string
  question: string
  options: QuestionOption[]
}

interface AssessmentQuestionProps {
  question: Question
  selectedAnswer?: string
  onAnswer: (answer: string) => void
}

export function AssessmentQuestion({ question, selectedAnswer, onAnswer }: AssessmentQuestionProps) {
  return (
    <div className="space-y-3">
      {question.options.map((option) => (
        <Button
          key={option.id}
          variant={selectedAnswer === option.value ? "default" : "outline"}
          className={`w-full text-left justify-start p-4 h-auto hover:scale-105 transition-all duration-200 break-words overflow-hidden ${
            selectedAnswer === option.value
              ? "bg-primary text-primary-foreground"
              : "hover:bg-secondary/10 bg-transparent"
          }`}
          onClick={() => onAnswer(option.value)}
        >
          <div className="flex items-center space-x-3">
            <div
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                selectedAnswer === option.value
                  ? "border-primary-foreground bg-primary-foreground"
                  : "border-muted-foreground"
              }`}
            >
              {selectedAnswer === option.value && <div className="w-2 h-2 rounded-full bg-primary" />}
            </div>
            <span className="text-sm leading-relaxed break-words whitespace-normal">{option.text}</span>
          </div>
        </Button>
      ))}
    </div>
  )
}
