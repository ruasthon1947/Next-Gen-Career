import { notFound } from "next/navigation";

const articles = [
  {
    id: 1,
    title: "The Complete Guide to Landing Your First Tech Job",
    content: `Essential steps and strategies for breaking into the technology industry.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi.`,
  },
  {
    id: 2,
    title: "Frontend vs Backend: Which Path Should You Choose?",
    content: `Compare career journeys, skills, and opportunities in frontend and backend development.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi.`,
  },
  {
    id: 3,
    title: "Building a Portfolio That Gets You Hired",
    content: `Showcase your skills effectively with these portfolio best practices.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi.`,
  },
  {
    id: 4,
    title: "Mastering Technical Interviews: A Developer's Guide",
    content: `Prepare for coding interviews with proven strategies and practice tips.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi.`,
  },
  {
    id: 5,
    title: "The Rise of AI in Software Development",
    content: `How artificial intelligence is transforming the way we build software.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi.`,
  },
  {
    id: 6,
    title: "Remote Work Best Practices for Developers",
    content: `Stay productive and maintain work-life balance while working remotely.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi.`,
  },
];

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articles.find((a) => a.id === Number(params.id));
  if (!article) return notFound();
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
      <div className="prose prose-lg text-foreground">
        {article.content.split("\n\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}
