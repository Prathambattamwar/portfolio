import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SkillsSection() {
  const skillCategories = [
    {
      name: "Frontend",
      icon: "🎨",
      color: "from-pink-500 to-purple-500",
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "GraphQL",
        "Responsive Design",
      ],
    },
    {
      name: "Backend",
      icon: "⚙️",
      color: "from-blue-500 to-cyan-500",
      skills: ["Node.js",
        "Express",
        "NestJS",
        "Python",
        "Django",
        "REST APIs",
        "GraphQL",
        "WebSockets",
        "Java",
        "Spring Boot",
        "Spring MVC",],
    },
    {
      name: "Databases",
      icon: "🗄️",
      color: "from-cyan-500 to-emerald-500",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Prisma", "Sequelize"],
    },
    {
      name: "DevOps & Tools",
      icon: "🛠️",
      color: "from-amber-500 to-orange-500",
      skills: ["Git", "GitHub", "CI/CD", "Docker", "AWS", "Vercel", "Jest", "Testing Library", "Webpack", "Vite"],
    },
    {
      name: "Design & Other",
      icon: "✨",
      color: "from-purple-500 to-indigo-500",
      skills: ["Figma", "UI/UX Design", "Accessibility", "Performance Optimization", "SEO", "Technical Writing"],
    },
    {
      name: "Cloud & Platforms",
      icon: "☁️",
      color: "from-sky-500 to-blue-600",
      skills: [
        "Firebase",
        "AWS",
        "Vercel",
        "Google Cloud",
        "Heroku",
        "Netlify",
      ],
    },
  ]

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {skillCategories.map((category) => (
        <Card
          key={category.name}
          className="overflow-hidden rounded-xl border-0 shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl">{category.icon}</div>
              <h3 className="text-xl font-bold">{category.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge
                  key={skill}

                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
