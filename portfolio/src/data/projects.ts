export interface Project {
  title: string;
  appName?: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  image?: string;
  category: 'App' | 'Tool';
  icon?: string;
}

export const projects: Project[] = [
  {
    title: 'SignScribe: ASL',
    appName: 'SignScribe',
    description: 'Designed and developed an iOS app to improve accessibility for the Deaf and Hard-of-Hearing by leveraging Apple\'s Vision framework and Google MediaPipe for landmark extraction to feed a hybrid CNN-RNN model, which I engineered in TensorFlow to accurately transcribe American Sign Language (ASL) in real-time.',
    techStack: ['Swift', 'SwiftUI', 'UIKit', 'CoreML', 'Computer Vision', 'AVFoundation', 'TensorFlow'],
    category: 'App',
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ba/18/67/ba186785-5547-4114-4da7-5001037c2ccb/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg',
    link: 'https://apps.apple.com/us/app/signscribe-asl/id6474526925',
  },
  {
    title: 'GETT SMART',
    appName: 'GETT SMART',
    description: 'GETT SMART is a digital literacy initiative and iOS application designed to empower returning citizens and the tech-disadvantaged by providing a comprehensive, gamified curriculum that bridges the gap between basic computer skills and career-ready software proficiency.',
    techStack: ['Swift', 'Python', 'Supabase', 'PostgreSQL'],
    category: 'App',
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f5/6c/b3/f56cb318-c4bb-1ea0-0724-fc85772b6aae/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg',
    link: 'https://apps.apple.com/us/app/gett-smart/id6747131797'
  },
  {
    title: 'Smart-Commit',
    description: 'AI-powered Git commit generation that runs 100% locally on Mac using Apple Intelligence. Powered by the apple_fm_sdk python library.',
    techStack: ['Python', 'Git-Cli', 'Apple Intelligence', 'MacOS'],
    github: 'https://github.com/brazill7/smart-commit',
    category: 'Tool'
  },
  {
    title: 'Occasio: Annual Event Tracker',
    appName: 'Occasio',
    description: 'Occasio is an elegant, subscription-free event tracker designed to help you celebrate life\'s meaningful milestones across all Apple devices through custom event categorization, timely notifications, and versatile widgets for the Home Screen, Lock Screen, and StandBy mode.',
    techStack: ['Swift', 'SwiftUI', 'WidgetKit', 'WatchKit', 'visionOS', 'CloudKit', 'SwiftData'],
    category: 'App',
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/d1/24/6a/d1246ad2-f5cf-9d29-96d7-58cec4f24fbb/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg',
    link: 'https://apps.apple.com/us/app/occasio-annual-event-tracker/id6746110822',
  },
  {
    title: 'Camera Roll Trivia',
    appName: 'Memora',
    description: 'Camera Roll Trivia transforms your camera roll into a privacy-focused trivia experience where you can relive forgotten memories by guessing the location, date, or time of your photos, all while tracking your accuracy through local stats and smart, randomized gameplay.',
    techStack: ['Swift', 'SwiftUI', 'PhotoKit'],
    category: 'App',
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/86/75/b7/8675b702-5791-ed70-ef33-4c2799326506/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg',
    link: 'https://apps.apple.com/us/app/memora-camera-roll-trivia/id6751907273'
  },
  {
    title: 'Formula 1 DRS (Dynamic Race Simulation)',
    description: 'Developed a Random Forest regression model that predicts full-grid race finishing positions by leveraging advanced features—including driver-track averages, seasonal form, and constructor dominance metrics—and a custom forced-permutation algorithm to simulate realistic, duplicate-free finishing orders.',
    techStack: ['Python', 'Scikit-Learn', 'Pandas','FastF1','NumPy','Matplotlib','Feature Engineering', "Jupyter Notebook"],
    category: 'Tool',
    github: 'https://github.com/brazill7/F1-DRS'
  }
];
