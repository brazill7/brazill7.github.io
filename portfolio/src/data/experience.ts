export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Systems Unlimited LLC',
    role: 'Lead Software Engineer',
    duration: 'July 2024 - Present',
    description: [
      'Co-founded a social enterprise focused on delivering technology education and basic training to tech-underserved communities, securing a $275,000 REJI grant via a high-stakes pitch to Apple executives.',
      'Led a team of 3 developers through the design and build phases, establishing internal engineering standards and Git-based collaborative workflows for scalable product iterations.',
      'Engineered a multiplatform iOS educational app using SwiftUI, integrating UX features like haptics, custom animations, and gamified sound effects to drive learner engagement.',
      'Fully designed a PostgreSQL database supporting secure user authentication and lesson content management.'
    ]
  },
  {
    company: "Rocket Companies",
    role: "iOS Engineer Intern",
    duration: "May 2024 - April 2025",
    description: [
      'Spearheaded the migration of legacy UIKit/Objective-C architecture to SwiftUI, increasing the codebase’s SwiftUI ratio from 20% to 90% during a major company-wide design overhaul.',
      'Integrated GraphQL and REST APIs to fetch, display, and seamlessly update real estate data across the application.',
      'Implemented reusable, high-performance SwiftUI components that significantly enhanced app build times and resolved a major portion of the bug backlog.',
      'Built and deployed scalable features across iOS, watchOS, visionOS, AppClips, and Widgets, leveraging Firebase Crashlytics to monitor stability and deprecate unstable modules.'
    ]
  },
  // {
  //   company: "",
  //   role: "",
  //   duration: "",
  //   description: [
      
  //   ]
  // }
];
