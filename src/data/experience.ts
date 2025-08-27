import type { Experience } from '@/types'

export const experiences: Experience[] = [

  {
    id: "current",
    company: "Verizon",
    role: "Python & AI Engineer",
    period: "2019 - Present",
    location: "Basking Ridge, NJ",
    description: [
      "Specializing in AI red teaming and prompt engineering for enterprise clients",
      "Contributing to open source projects including PromptFoo for AI safety testing", 
      "Building automation solutions using AWS Bedrock for AI model deployment",
      "Data wrangling and visualization for complex datasets using Python ecosystem"
    ],
    technologies: ["Python", "AWS Bedrock", "Prompt Engineering", "AI Red Teaming", "Data Visualization", "Automation"],
    image: "/images/optimizilla/VZ.png",
    achievements: [
      "Open source contributor to PromptFoo",
      "AI safety and red teaming expertise",
      "AWS Bedrock solutions",
      "Streamlit web Apps"
    ]
  },
  {
    id: "adp",
    company: "ADP",
    role: "Data Engineer",
    period: "2018 - 2019",
    location: "Parsippany, NJ",
    description: [
      "Data reporting, data migration, and creating dictionaries to catalog the data for ADP's DataCloud & GSS Team",
      "Built comprehensive data reporting solutions for DataCloud platform users",
      "Performed large-scale data migration projects ensuring data integrity and minimal downtime",
      "Created and maintained data dictionaries and catalogs to improve data discoverability"
    ],
    technologies: ["Python", "SQL", "Data Migration", "ETL", "Data Cataloging", "Data Warehousing", "Reporting"],
    image: "/images/optimizilla/ADPlogo.png",
    achievements: [
      "POC on Alation for Data Lineage"
    ]
  },
  {
    id: "citi",
    company: "Citi",
    role: "AML Advisory - Machine Learning Engineer", 
    period: "2016 - 2017",
    location: "Jersey City, NJ",
    description: [
      "Solely handling a POC for the Citi's AML Discovery Analytics Program",
      "Analyzing Customer, Account and Transaction data to identify & predict unusual behaviors using Apache Spark MLlib, H2O Flow and Alpine Data",
      "Implemented machine learning models for anti-money laundering detection",
      "Built scalable data pipelines for real-time transaction monitoring"
    ],
    technologies: ["Apache Spark MLlib", "H2O Flow", "Alpine Data", "HIVE SQL", "Python", "R", "DataRobot"],
    image: "/images/jerseycity-min.png",
    achievements: [
      "Led AML Discovery Analytics POC",
    ]
  },
  {
    id: "alpha-it",
    company: "Alpha IT Partners",
    role: "Data Analyst",
    period: "2016 - 2017", 
    location: "Boston, MA",
    description: [
      "Responsible for performing and checking regularly scheduled tasks such as usage processing, generating customer bills, and troubleshooting any issues that arise",
      "Assisting in compiling data for financial, marketing, taxing, and regulatory reporting",
      "Automated reporting processes reducing manual work by 60%",
      "Built dashboards for executive reporting and KPI tracking"
    ],
    technologies: ["Python", "SQL", "Excel", "Tableau", "Data Pipeline", "ETL"],  
    image: "/images/Boston-mini.jpg",
    achievements: [
      "Reduced report generation time from days to hours"
    ]
  },
  {
    id: "bluefly",
    company: "Bluefly, NYC",
    role: "Business Intelligence Analyst",
    period: "2016 - 2016",
    location: "New York, NY", 
    description: [
      "Social Media Analyzer: Developed a program in R to gather, analyze and find trends in Bluefly's unstructured user comments on Twitter & Facebook",
      "Provided 10 actionable insights on how Bluefly could use Social Media to boost sales",
      "Wrote complex SQL queries to extract relevant data from customer feedback, sales and stock datasets",
      "Implemented Joins, Data Blending, Custom SQL in Tableau, created dashboards & pivots"
    ],
    technologies: ["R", "SQL", "Tableau", "Social Media Analytics", "Data Blending", "Excel"],
    image: "/images/NYC-min.jpg", 
    achievements: [
      "Built social media sentiment analysis tool",
      "Delivered 10 strategic recommendations for sales growth",
      "Created executive dashboards used company-wide"
    ]
  },
  {
    id: "accenture",
    company: "Accenture, India",
    role: "Associate Software Engineer/BI Developer",
    period: "2013 - 2015",
    location: "India",
    description: [
      "Worked with VMware and EMC clients building dashboards, automated reports and ad hoc reports based on agile business requirements",
      "Developed and overhauled ETL mappings and mapplets to extract data from source systems into Staging area", 
      "Formulated automated SQL queries showing statistics of Informatica sessions/workflows, saving 2+ hours of Production time daily",
      "Mentored junior developers on best practices for BI development"
    ],
    technologies: ["Informatica", "SQL", "ETL", "Data Warehousing", "Business Intelligence", "VMware", "EMC"],
    image: "/images/a1-min.jpg",
    achievements: [
      "Saved 2+ hours daily through automation",
      "Helped in ETL optimization projects",
      "Mentored 3 junior developers"
    ]
  }
]