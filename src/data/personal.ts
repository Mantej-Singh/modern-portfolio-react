import type { PersonalInfo, ContactInfo, SocialLink } from '@/types'

export const personalInfo: PersonalInfo = {
  name: "Mantej Singh Dhanjal",
  title: "Python & AI Engineer",
  bio: `I follow 3 principles in my life: "Focus on God", "Honest Living", "Sharing with others". 
        Out of 7 days, I share 2 days volunteering in the Sikh Temple. 
        The rest of the days, I love building AI solutions and data visualization projects that make a high level of impact. 
        I am patient with people and impatient with technology.`,
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

export const contactInfo: ContactInfo = {
  email: "mdmantejsingh@gmail.com",
  location: "Harrison, New Jersey, USA",
  socialLinks,
  resumeUrl: "/assets/Resume/Mantej-Singh CV.pdf"
}