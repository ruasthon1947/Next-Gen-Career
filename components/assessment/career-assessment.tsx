"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProgressBar } from "@/components/ui/progress"
import { AssessmentQuestion } from "./assessment-question"
import { AssessmentResults } from "./assessment-results"
import { Brain, Target, Code, Lightbulb } from "lucide-react"

const assessmentQuestions = [
	{
		id: 1,
		category: "interests",
		question: "What type of work environment energizes you most?",
		options: [
			{ id: "a", text: "Collaborative team settings with frequent interaction", value: "team-oriented" },
			{ id: "b", text: "Independent work with minimal supervision", value: "independent" },
			{ id: "c", text: "Fast-paced, dynamic environments with constant change", value: "dynamic" },
			{ id: "d", text: "Structured, organized environments with clear processes", value: "structured" },
		],
	},
	{
		id: 2,
		category: "skills",
		question: "Which of these activities do you find most engaging?",
		options: [
			{ id: "a", text: "Solving complex technical problems", value: "technical" },
			{ id: "b", text: "Creating visual designs and user experiences", value: "creative" },
			{ id: "c", text: "Analyzing data to find patterns and insights", value: "analytical" },
			{ id: "d", text: "Leading projects and coordinating teams", value: "leadership" },
		],
	},
	{
		id: 3,
		category: "goals",
		question: "What motivates you most in your career?",
		options: [
			{ id: "a", text: "Building innovative products that impact millions", value: "innovation" },
			{ id: "b", text: "Achieving financial success and stability", value: "financial" },
			{ id: "c", text: "Continuous learning and skill development", value: "growth" },
			{ id: "d", text: "Making a positive difference in people's lives", value: "impact" },
		],
	},
	{
		id: 4,
		category: "interests",
		question: "Which technology area interests you most?",
		options: [
			{ id: "a", text: "Web and mobile application development", value: "web-mobile" },
			{ id: "b", text: "Artificial intelligence and machine learning", value: "ai-ml" },
			{ id: "c", text: "Cybersecurity and data protection", value: "security" },
			{ id: "d", text: "Cloud computing and infrastructure", value: "cloud" },
		],
	},
	{
		id: 5,
		category: "skills",
		question: "How do you prefer to approach problem-solving?",
		options: [
			{ id: "a", text: "Break down complex problems into smaller parts", value: "systematic" },
			{ id: "b", text: "Think creatively and explore unconventional solutions", value: "creative" },
			{ id: "c", text: "Research thoroughly before taking action", value: "research-driven" },
			{ id: "d", text: "Learn by doing and iterating quickly", value: "hands-on" },
		],
	},
	{
		id: 6,
		category: "goals",
		question: "In 5 years, where do you see yourself?",
		options: [
			{ id: "a", text: "Leading a technical team or department", value: "leadership" },
			{ id: "b", text: "Being a recognized expert in my field", value: "expertise" },
			{ id: "c", text: "Starting my own company or consultancy", value: "entrepreneurship" },
			{ id: "d", text: "Working on cutting-edge research and development", value: "research" },
		],
	},
	{
		id: 7,
		category: "interests",
		question: "What type of projects excite you most?",
		options: [
			{ id: "a", text: "Building user-facing applications and interfaces", value: "frontend" },
			{ id: "b", text: "Designing scalable backend systems and APIs", value: "backend" },
			{ id: "c", text: "Working with data pipelines and analytics", value: "data" },
			{ id: "d", text: "Securing systems and preventing cyber threats", value: "security" },
		],
	},
	{
		id: 8,
		category: "skills",
		question: "Which skill would you most like to develop?",
		options: [
			{ id: "a", text: "Advanced programming and software architecture", value: "programming" },
			{ id: "b", text: "Data science and machine learning", value: "data-science" },
			{ id: "c", text: "DevOps and cloud infrastructure", value: "devops" },
			{ id: "d", text: "Product management and strategy", value: "product" },
		],
	},
]

export function CareerAssessment() {
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [answers, setAnswers] = useState<Record<number, string>>({})
	const [isComplete, setIsComplete] = useState(false)

	const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100

	const handleAnswer = (questionId: number, answer: string) => {
		setAnswers({ ...answers, [questionId]: answer })
	}

	const handleNext = () => {
		if (currentQuestion < assessmentQuestions.length - 1) {
			setCurrentQuestion(currentQuestion + 1)
		} else {
			setIsComplete(true)
		}
	}

	const handlePrevious = () => {
		if (currentQuestion > 0) {
			setCurrentQuestion(currentQuestion - 1)
		}
	}

	const handleRestart = () => {
		setCurrentQuestion(0)
		setAnswers({})
		setIsComplete(false)
	}

	if (isComplete) {
		return <AssessmentResults answers={answers} onRestart={handleRestart} />
	}

	const question = assessmentQuestions[currentQuestion]
	const hasAnswer = answers[question.id]

	return (
		<div className="container mx-auto px-4 max-w-4xl">
			<div className="text-center mb-8">
				<div className="flex items-center justify-center mb-4">
					<div className="p-3 rounded-full bg-primary/10">
						<Brain className="h-8 w-8 text-primary" />
					</div>
				</div>
				<h1 className="text-3xl lg:text-4xl font-bold mb-4">Career Assessment</h1>
				<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
					Discover your ideal career journey through our comprehensive assessment. Answer honestly to get
					personalized recommendations.
				</p>
			</div>

			<div className="mb-8">
				<div className="flex items-center justify-between mb-2">
					<span className="text-sm font-medium">Progress</span>
					<span className="text-sm text-muted-foreground">
						{currentQuestion + 1} of {assessmentQuestions.length}
					</span>
				</div>
				<ProgressBar value={progress} className="h-2" />
			</div>

			<Card className="border-border/50">
				<CardHeader>
					<div className="flex items-center space-x-3">
						<div className="p-2 rounded-lg bg-secondary/20">
							{question.category === "interests" && <Target className="h-5 w-5 text-secondary" />}
							{question.category === "skills" && <Code className="h-5 w-5 text-secondary" />}
							{question.category === "goals" && <Lightbulb className="h-5 w-5 text-secondary" />}
						</div>
						<div>
							<CardTitle className="text-xl break-words">{question.question}</CardTitle>
							<p className="text-sm text-muted-foreground capitalize">{question.category} Assessment</p>
						</div>
					</div>
				</CardHeader>
				<CardContent className="space-y-6">
					<AssessmentQuestion
						question={question}
						selectedAnswer={answers[question.id]}
						onAnswer={(answer) => handleAnswer(question.id, answer)}
						className="break-words"
					/>

					<div className="flex justify-between pt-4">
						<Button
							variant="outline"
							onClick={handlePrevious}
							disabled={currentQuestion === 0}
							className="hover:bg-secondary/10 transition-colors duration-200 bg-transparent"
						>
							Previous
						</Button>
						<Button
							onClick={handleNext}
							disabled={!hasAnswer}
							className="hover:bg-primary/90 transition-colors duration-200"
						>
							{currentQuestion === assessmentQuestions.length - 1 ? "Complete Assessment" : "Next Question"}
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
