import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "HashedBit Inovation",
      period: "July - september 2024",
      description:
        "Built and maintained full stack web applications in the IT Applications Development. Designed, developed, and tested front-end and back-end modules using React.js and Node.js. Integrated REST APIs for seamless client-server communication.Participated in Agile ceremonies including sprint planning and daily stand-ups.Performed code reviews, debugging, and performance tuning. Contributed to documentation and collaborated using Git and Jira.",
      technologies: ["React", "HTML", "CSS", "JavaScript", "Express", "Jira", "GitHub", "Rest API",],
      color: "from-purple-500 to-blue-500",
    }
  ]

  const education = [

    {
      degree: "Bachelor of Science in Computer Science And Engineering",
      institution: "Sipna College Of Engineering And Technology",
      period: "2022 - 2025",
      description: "Pursuing with honors. Participated in multiple hackathons and coding competitions.",
      color: "from-purple-500 to-indigo-500",
    },
  ]

  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <h3 className="text-2xl font-bold">Work Experience</h3>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 hidden md:block"></div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative md:pl-16">
                <div className="hidden md:flex absolute left-0 top-6 items-center justify-center w-16 h-16">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${exp.color} shadow-lg z-10`}></div>
                </div>
                <Card className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className={`h-1.5 bg-gradient-to-r ${exp.color}`}></div>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h4 className="text-xl font-bold">{exp.title}</h4>
                        <p className="text-lg">{exp.company}</p>
                      </div>
                      <Badge
                        variant="outline"
                        className="md:self-start whitespace-nowrap bg-gradient-to-r from-background to-background border-purple-200 dark:border-purple-800"
                      >
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="mt-4 text-muted-foreground">{exp.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold">Education</h3>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 to-purple-500 hidden md:block"></div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative md:pl-16">
                <div className="hidden md:flex absolute left-0 top-6 items-center justify-center w-16 h-16">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${edu.color} shadow-lg z-10`}></div>
                </div>
                <Card className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className={`h-1.5 bg-gradient-to-r ${edu.color}`}></div>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h4 className="text-xl font-bold">{edu.degree}</h4>
                        <p className="text-lg">{edu.institution}</p>
                      </div>
                      <Badge
                        variant="outline"
                        className="md:self-start whitespace-nowrap bg-gradient-to-r from-background to-background border-purple-200 dark:border-purple-800"
                      >
                        {edu.period}
                      </Badge>
                    </div>
                    <p className="mt-4 text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
