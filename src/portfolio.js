const header = {
  // all the properties are optional - can be left empty or deleted
  "homepage": "https://djbrown227.github.io/portfolio_minimal",
  title: 'DB.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Daniel Brown',
  role: 'Data Analyst',
  description:
    'I hold a Bachelor of Science in Applied Mathematics and am currently pursuing a Master’s degree in Data Science. I have hands-on experience acquiring, exploring, cleaning, and modeling data to solve complex problems. I am excited to join an organization that values data-driven decision-making.',
  resume: 'https://djbrown227.github.io/resume_website/',
  social: {
    linkedin: 'https://www.linkedin.com/in/daniel-brown-203288146/',
    github: 'https://github.com/djbrown227',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1 - A/B Test Saves Grady’s Cold Brew $20,000 Annually',
    description:
      'I ran an A/B test comparing UPS Ground and SurePost that saved Grady’s Cold Brew $15,000–$20,000 annually on shipping costs. By showing no significant difference in delivery success rates, I was able to justify switching to the more cost-effective SurePost service.',
    stack: ['Python', 'Jupyter Notebook', 'SQL'],
    sourceCode: 'https://github.com/djbrown227/shipping-ab-test',
    livePreview: 'https://djbrown227.github.io/shipping-ab-test/',
  },
  {
    name: 'Project 2 - Anomaly Detection for Citi Bike Station Flipping',
    description:
      'I built a Python and Go-based tool to detect anomalies in Citi Bike station data, helping identify suspicious patterns like station flipping. By monitoring real-time bike availability and flagging irregular activity, the system improves operational oversight and protects against reward program abuse.',
    stack: ['Python', 'Go', 'Tableau'],
    sourceCode: 'https://github.com/djbrown227/citibike_anomaly_detection',
    livePreview: 'https://djbrown227.github.io/citibike_anomaly_detection/',
  },
  {
    name: 'Project 3 - Optimized Seating Arrangements with Simulated Annealing',
    description:
      'This web app optimizes seating arrangements using the simulated annealing algorithm, maximizing friendship scores based on uploaded data.',
    stack: ['Python', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/djbrown227/seating_optimizer_app',
    livePreview: 'https://djbrown227.github.io/seating_optimizer_app/',
  },
  {
    name: 'Project 4 - Tableau Portfolio: Visual Data Stories',
    description:
      'A collection of interactive Tableau dashboards showcasing data-driven insights across topics like urban issues, global trends, and sports. Each project combines clean design with clear storytelling to highlight patterns, outliers, and key takeaways.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://public.tableau.com/app/profile/daniel.brown5983/vizzes',
    livePreview: 'https://public.tableau.com/app/profile/daniel.brown5983/vizzes',
  },
  {
    name: 'Project 5 - Data Stories in Motion',
    description:
      'This Instagram page transforms Tableau dashboards into dynamic scrollytelling stories—bringing data to life with animated charts, bite-sized insights, and bold visuals. Each post distills complex topics into clear, compelling narratives designed for mobile-first viewing.',
    stack: ['Tableau', 'Python', 'Capcut', 'GIMP'],
    sourceCode: 'https://www.instagram.com/tuai.rim/',
    livePreview: 'https://www.instagram.com/tuai.rim/',
  },
  {
    name: 'Project 6',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'SQL',
  'Excel',
  'Tableau',
  'Github',
  'Data Storytelling',
  'Google Cloud',
  'Basic Full Stack Developement',
  'Problem Solving',
  'Web Scraping',
  '',
  'Project Management',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'djbrown227@gmail.com',
}

export { header, about, projects, skills, contact }
