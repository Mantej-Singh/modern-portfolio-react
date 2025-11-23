import type { PersonalInfo, ContactInfo, SocialLink } from '@/types'

export const personalInfo: PersonalInfo = {
  name: "Mantej Singh Dhanjal",
  title: "Python & AI Engineer",
  bio: `I follow 3 principles in my life: "Focus on God", "Honest Living", "Sharing with others".
        Each week, I try to volunteer at the Sikh Temple, dedicating Sunday to community service.
        The rest of the days, I love building AI solutions and data visualization projects that make a high level of impact.
        I am patient with people and impatient with technology.`,
  hobbiesText: `I enjoy woodworking (crafted picnic bench, pantry, and slatted wooden bench for our home), running a home tech lab with Proxmox hosting Home Assistant and AdGuard Home for network-wide ad blocking, and my favorite mind-bending movie is Predestination along with superhero and Disney movies like Wall-E.`,
  tagline: `👋 Hi! I'm Mantej Singh- turning data chaos into AI magic @ Verizon

🎯 What I do: AI red teaming • Prompt engineering • Data pipelines • Automation scripts
🏆 Proud of: PromptFoo contributions • Windows11 toolkit • 10+ data viz projects
💻 Daily drivers: Python • AWS Bedrock • Pandas • Prompt Engineering (and occasionally PowerShell wizardry)


📈 From ETL pipelines to LLM security - explore 48 repos of my data/AI journey below!`,
  location: "New Jersey, USA",
  email: "mdmantejsingh@gmail.com",
  image: "/images/pic01-min.jpg"
}

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/Mantej-Singh",
    icon: "fa-github",
    label: "GitHub Profile"
  },
  {
    platform: "LinkedIn", 
    url: "https://www.linkedin.com/in/mantejsingh-dhanjal",
    icon: "fa-linkedin",
    label: "LinkedIn Profile"
  },
  {
    platform: "X",
    url: "https://twitter.com/mdmantejsingh", 
    icon: "fa-twitter",
    label: "X Profile"
  },
  {
    platform: "Email",
    url: "mailto:mdmantejsingh@gmail.com?subject=Let's collaborate!",
    icon: "fa-envelope",
    label: "Send Email"
  }
]

// UPDATED [2025-11-22]: Changed to new 2025 DOCX resume
export const contactInfo: ContactInfo = {
  email: "mdmantejsingh@gmail.com",
  location: "Harrison, New Jersey, USA",
  socialLinks,
  resumeUrl: "/Mantej-Singh-Resume-2025.docx"
}
// DEPRECATED - OLD CODE:
// resumeUrl: "/assets/Resume/Mantej-Singh CV.pdf"