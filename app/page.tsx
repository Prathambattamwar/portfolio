import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import ContactForm from "@/components/contact-form"
import ThemeToggle from "@/components/theme-toggle"
import Image from "next/image"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-0 right-0 -z-10 transform-gpu blur-3xl sm:top-0 sm:right-0 sm:ml-48 sm:mr-0"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694]/20 to-[#776fff]/20 opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="absolute -top-40 left-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#776fff]/30 to-[#4694ff]/30 opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <span className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              Pratham Batamwar
            </span>
            <span className="hidden text-muted-foreground sm:inline-block">| Software Engineer</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#projects" className="transition-colors hover:text-foreground/80 relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#skills" className="transition-colors hover:text-foreground/80 relative group">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#experience" className="transition-colors hover:text-foreground/80 relative group">
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground/80 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 transition-all group-hover:w-full"></span>
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div className="flex flex-col gap-6">
                <div>
                  <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
                    <span className="block">Software Engineer &</span>
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                      Data Scientist
                    </span>
                  </h1>
                  <p className="mt-4 text-muted-foreground text-lg md:text-xl max-w-[600px]">
                    I build accessible, responsive, and performant web applications with modern technologies.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
                  >
                    <a href="#contact" className="px-6">
                      Get in Touch
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="rounded-full border-purple-200 dark:border-purple-800">
                    <a href="#projects" className="px-6">
                      View Projects
                    </a>
                  </Button>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex -space-x-2">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-xs text-white">
                      JS
                    </div>
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-xs text-white">
                      TS
                    </div>
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-xs text-white">
                      R
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Specialized in Data Science and modern web technologies
                  </p>
                </div>
              </div>
              <div className="relative mx-auto aspect-square max-w-sm rounded-full bg-gradient-to-b from-purple-100 to-blue-100 dark:from-purple-950/50 dark:to-blue-950/50 p-1 shadow-2xl">
                <div className="absolute inset-0 rounded-full overflow-hidden backdrop-blur-sm">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 via-transparent to-blue-500/20 animate-[spin_10s_linear_infinite]"></div>
                </div>
                <div className="relative h-full w-full rounded-full overflow-hidden bg-background">
                  <Image
                    src="/photo.jpg?height=300&width=300"
                    alt="Pratham Batamwar"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 scroll-mt-16 relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-purple-50/5 to-background dark:via-purple-950/5"></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-600 dark:text-purple-300 mb-4">
                Portfolio
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-[700px]">
                A collection of projects that showcase my skills and experience in building modern web applications.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="FarmersBuddy"
                description="A full-stack e-commerce platform with product management, cart functionality, and payment processing. Wallet for farmers"
                tags={["React", "Node.js", "Flash API", "Python", "ML"]}
                image="/farmersbuddy.png?height=200&width=400"
                demoUrl="https://farmersbuddy.netlify.app"
                repoUrl="https://github.com/Prathambattamwar/ecothon"
              />
              <ProjectCard
                title="Deepfake Detection using Xception"
                description="This project aims to detect deepfakes (fake images created using artificial intelligence) using a deep learning model based on the Xception architecture."
                tags={["Deep Learning", "Python", "Image Classification", "TensorFlow", "Keras", "Transfer Learning"]}
                image="/deepfake.png?height=200&width=400"
                demoUrl="https://colab.research.google.com/drive/18l_X5ppdH-5LXNILqqv9sevbuCQ1Wiu-?authuser=1#scrollTo=2aSQYohM0UEx"
                repoUrl="https://github.com/Prathambattamwar/DeepFake_Image_detection"
              />

            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 scroll-mt-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 dark:text-blue-300 mb-4">
                Expertise
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-[700px]">
                Technologies and tools I've worked with and am proficient in building modern web applications.
              </p>
            </div>
            <SkillsSection />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 scroll-mt-16 relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-blue-50/5 to-background dark:via-blue-950/5"></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block rounded-lg bg-cyan-100 dark:bg-cyan-900/30 px-3 py-1 text-sm text-cyan-600 dark:text-cyan-300 mb-4">
                Journey
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Professional Experience</h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-[700px]">
                My professional journey and work experience building products that users love.
              </p>
            </div>
            <ExperienceSection />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                  2
                </div>
                <p className="mt-2 text-muted-foreground">Months Experience</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                  2
                </div>
                <p className="mt-2 text-muted-foreground">Projects Completed</p>
              </div>
              {/* <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                  15+
                </div>
                <p className="mt-2 text-muted-foreground">Happy Clients</p>
              </div> */}
              {/* <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                  100%
                </div>
                <p className="mt-2 text-muted-foreground">Client Satisfaction</p>
              </div> */}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 scroll-mt-16 relative">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent"></div>
            <div className="absolute bottom-0 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
              <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694]/10 to-[#776fff]/10 opacity-30"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block rounded-lg bg-pink-100 dark:bg-pink-900/30 px-3 py-1 text-sm text-pink-600 dark:text-pink-300 mb-4">
                Let's Talk
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-[700px]">
                Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
              </p>
            </div>
            <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
              <div className="space-y-6">
                <div className="rounded-2xl border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                        <Mail className="h-5 w-5 text-purple-600 dark:text-purple-300" />
                      </div>
                      <a href="mrprathamah@gmail.com" className="hover:underline">
                        mrprathamah@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                        <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                      </div>
                      <a
                        href="https://www.linkedin.com/in/pratham-batamwar"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        linkedin.com/in/pratham-batamwar
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                        <Github className="h-5 w-5" />
                      </div>
                      <a href="https://github.com/Prathambattamwar" target="_blank" rel="noreferrer" className="hover:underline">
                        github.com/janedoe
                      </a>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Current Availability</h3>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      I'm currently available for freelance work and open to discussing new opportunities.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                      <span>Available for new projects</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border bg-card p-6 shadow-sm">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex flex-col items-center gap-2 md:items-start md:gap-1">
              <div className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                Jane Doe
              </div>
              <p className="text-center text-sm text-muted-foreground md:text-left">
                © {new Date().getFullYear()} Jane Doe. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/Prathambattamwar" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/pratham-batamwar" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mrprathamah@gmail.com" aria-label="Email">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
