import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: "promptfoo-contrib",
    title: "PromptFoo - Open Source Contribution",
    description: "Test your prompts, agents, and RAGs. AI Red teaming, pentesting, and vulnerability scanning for LLMs. Compare performance of GPT, Claude",
    longDescription: "Forked from promptfoo/promptfoo - Active contributor focusing on improving AI model evaluation and safety testing capabilities.",
    technologies: ["Python", "HTML", "AI Safety", "Testing", "Open Source"],
    githubUrl: "https://github.com/Mantej-Singh/promptfoo",
    featured: true,
    category: "ai"
  },
  {
    id: "windows11-toolkit",
    title: "Windows 11 Fresh Install Toolkit",
    description: "🚀 Automated Windows 11 setup script - Install 20+ essential apps(My favorites), configure system settings, and restore productivity after a fresh install or SSD failure in minutes!",
    longDescription: "Comprehensive PowerShell automation suite for setting up a fresh Windows 11 installation with essential applications and optimal system configurations.",
    technologies: ["PowerShell", "Automation", "Windows", "Productivity", "DevOps"],
    githubUrl: "https://github.com/Mantej-Singh/windows11-fresh-install-toolkit",
    featured: true,
    category: "automation"
  },
  {
    id: "jarvis-assistant", 
    title: "Project Jarvis",
    description: "Using SpeechRecognition for doing simple tasks - AI Personal Assistant with voice commands and automation capabilities",
    longDescription: "AI Personal Assistant built with Python using Google Speech Recognition API for voice-controlled task automation and system interaction.",
    technologies: ["Python", "Jupyter Notebook", "Speech Recognition", "AI Assistant", "Automation"],
    githubUrl: "https://github.com/Mantej-Singh/Project-Jarvis",
    featured: true,
    category: "ai"
  },
  {
    id: "earthquakes-analysis",
    title: "Playing with Earthquakes Dataset",
    description: "Comprehensive data analysis and visualization of earthquake datasets using advanced data science techniques",
    longDescription: "In-depth analysis of global earthquake data using Jupyter notebooks, featuring statistical analysis, data visualization, and predictive modeling.",
    technologies: ["Jupyter Notebook", "Python", "Data Science", "Visualization", "Analytics"],
    githubUrl: "https://github.com/Mantej-Singh/Playing-with-Earthquakes-dataset",
    featured: true,
    category: "data-science"
  },
  {
    id: "aws-bedrock-automation",
    title: "AWS Bedrock Automation Suite",
    description: "Automation tools for deploying and managing AI models on AWS Bedrock",
    longDescription: "Built a comprehensive suite of tools for automating AI model deployment, monitoring, and scaling on AWS Bedrock platform.",
    technologies: ["Python", "AWS Bedrock", "Boto3", "CloudFormation", "Automation"],
    githubUrl: "https://github.com/Mantej-Singh/bedrock-automation",
    featured: true,
    category: "automation"
  },
  {
    id: "steganography-app",
    title: "Steganography App",
    description: "Steganography app in C#.Net — hide secret messages inside ordinary files. Inspired by cryptography, but conceals the message's very existence.",
    longDescription: "Information Hiding using C#.Net - A sophisticated steganography application that allows users to hide secret messages within ordinary image files, making the communication completely invisible.",
    technologies: ["C#", ".NET", "Image Processing", "Cryptography", "Security"],
    githubUrl: "https://github.com/Mantej-Singh/Information-Hiding-using-CSharp-.Net",
    featured: true,
    category: "cryptography"
  },
  {
    id: "loan-visualization",
    title: "Plotting Loan Amount - PlotlyD3",
    description: "Interactive data visualization using Pandas and PlotlyAPI in a Bubble Chart",
    technologies: ["Python", "Pandas", "Plotly", "D3.js", "Data Visualization"],
    githubUrl: "https://github.com/Mantej-Singh/Plotting-Loan-Amount-Plotly-D3",
    featured: false,
    category: "data-science"
  },
  {
    id: "jarvis-assistant", 
    title: "Project Jarvis",
    description: "AI Personal Assistant using Google Speech Recognition API in Python",
    technologies: ["Python", "Speech Recognition", "Google API", "AI Assistant"],
    githubUrl: "https://github.com/Mantej-Singh/Project-Jarvis",
    featured: false,
    category: "ai"
  },
  {
    id: "sql-alchemist",
    title: "The SQL Alchemist", 
    description: "SQLAlchemy ORM for data storage in SQLite with Pandas DataFrame integration",
    technologies: ["Python", "SQLAlchemy", "SQLite", "Pandas", "Database"],
    githubUrl: "https://github.com/Mantej-Singh/The-SQL-Alchemist",
    featured: false,
    category: "data-science"
  },
  {
    id: "twitter-analysis",
    title: "Twitter Analysis with Pandas",
    description: "Social media data analysis using Pandas and RegEx without Twitter OAuth",
    technologies: ["Python", "Pandas", "RegEx", "Social Media Analytics", "Data Analysis"],
    githubUrl: "https://github.com/Mantej-Singh/Tweeter-Analysis---PANDAS", 
    featured: false,
    category: "data-science"
  },
  {
    id: "google-sheets-api",
    title: "Python GoogleSheets v4 Integration",
    description: "Communication bridge between Google Spreadsheets and Python using API v4",
    technologies: ["Python", "Google Sheets API", "Automation", "Integration"],
    githubUrl: "https://github.com/Mantej-Singh/Python-Sheet-v4",
    featured: false,
    category: "automation"
  },
  {
    id: "steganography",
    title: "Steganography - Concealed Writings",
    description: "C# library for encoding and decoding text into Bitmap images", 
    technologies: ["C#", ".NET", "Image Processing", "Security", "Cryptography"],
    githubUrl: "https://github.com/Mantej-Singh/Information-Hiding-using-CSharp-.Net",
    featured: false,
    category: "other"
  },
  {
    id: "nlp-project",
    title: "Project NLP 3.0",
    description: "Advanced Natural Language Processing project with modern techniques",
    technologies: ["Python", "NLP", "Machine Learning", "Text Processing"],
    githubUrl: "https://github.com/Mantej-Singh/Project-NLP-3.0",
    featured: false,
    category: "ai"
  }
]

export const featuredProjects = projects.filter(project => project.featured)
export const projectsByCategory = (category: Project['category']) => 
  projects.filter(project => project.category === category)