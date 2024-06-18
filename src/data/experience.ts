import { Position, type Experience } from '@/models/experience'
import {
  STACK_DATABASES,
  STACK_FRAMEWORKS,
  STACK_LANGUAGES,
  STACK_LIBRARIES,
  STACK_ORMS,
  STACK_PLATFORMS,
} from '@/models/stack'

const experience: Experience[] = [
  {
    companyName: 'Imagine Apps',
    lastPosition: {
      name: Position.SD,
      from: new Date('2023-03-01'),
      to: new Date('2024-01-30'),
      responsabilities: [
        {
          description:
            'Created web pages and applications using React, Angular, and various libraries',
        },
        {
          description:
            'Provided ongoing support, resolved issues, and optimized code for improved performance and maintainability',
        },
        {
          description:
            'Conducted detailed code reviews, ensuring quality, standards adherence, and issue identification',
        },
        {
          description:
            'Managed NoSQL and SQL databases, handling data modeling, query optimization, and ensuring security',
        },
        {
          description:
            'Designed and implemented APIs for seamless integration and efficient communication between components and external services',
        },
      ],
    },
    oldPositions: [],
    generalDescription:
      'I specialize in developing web pages and applications using React, Angular, and diverse libraries. I offer ongoing support, optimize code for performance, and conduct rigorous code reviews for quality assurance. I manage NoSQL and SQL databases, design APIs for seamless integration, and facilitate efficient communication between components and external services.',
    mainStack: [
      STACK_LANGUAGES.GO,
      STACK_LANGUAGES.NODE,
      STACK_LANGUAGES.TYPESCRIPT,
      STACK_FRAMEWORKS.ANGULAR,
      STACK_ORMS.MONGOOSE,
      STACK_ORMS.TYPEORM,
    ],
    restStack: [],
  },
  {
    companyName: 'Blockdemy',
    lastPosition: {
      name: Position.FD,
      from: new Date('2022-05-01'),
      to: new Date('2022-11-30'),
      responsabilities: [
        {
          description:
            'Responsible for creating the main website page and providing ongoing project support, ensuring seamless functionality and user experience',
        },
        {
          description:
            'Implemented automated systems for updating event dates on the website, ensuring accuracy and timeliness without manual intervention',
        },
        {
          description:
            'Developed efficient automated processes for delivering guides, ensuring swift and hassle-free distribution to users',
        },
        {
          description:
            'Executed comprehensive unit tests for each website component, guaranteeing the reliability and performance of individual parts of the web application',
        },
      ],
    },
    oldPositions: [],
    generalDescription:
      'In my role, I led the main website, providing ongoing support for optimal functionality and user experience. I implemented automated systems for prompt and accurate event date updates, eliminating manual intervention. I optimized guide distribution through efficient automated processes, ensuring swift delivery. Rigorous unit testing of website components guaranteed reliability and high performance throughout the web application.',
    mainStack: [
      STACK_LANGUAGES.TYPESCRIPT,
      STACK_FRAMEWORKS.EXPRESS,
      STACK_FRAMEWORKS.NEXTJS,
      STACK_LIBRARIES.REACT,
      STACK_PLATFORMS.WEBFLOW,
    ],
    restStack: [],
  },
  {
    companyName: 'Amazonias RGA',
    lastPosition: {
      name: Position.FSD,
      from: new Date('2021-01-01'),
      to: new Date('2022-02-29'),
      responsabilities: [
        {
          description:
            'Created robust APIs and web applications, focusing on functionality and user experience',
        },
        {
          description:
            'Conducted meticulous manual and unit testing for each feature, ensuring quality and reliability',
        },
        {
          description:
            'Defined project structure and selected appropriate tech stack, optimizing development workflow',
        },
        {
          description:
            'Prepared comprehensive documentation, providing clear guidelines for project understanding and future development',
        },
      ],
    },
    oldPositions: [],
    generalDescription:
      'I specialize in building robust APIs and user-centric web apps, prioritizing seamless experiences and functionality. Rigorous testing ensures top quality and reliability. I excel in structuring projects, optimizing tech stacks, and creating comprehensive documentation for efficient development and future enhancements',
    mainStack: [
      STACK_LANGUAGES.JAVA,
      STACK_LANGUAGES.GO,
      STACK_FRAMEWORKS.SPRING_BOOT,
      STACK_LANGUAGES.TYPESCRIPT,
      STACK_LANGUAGES.NODE,
      STACK_DATABASES.MYSQL,
    ],
    restStack: [],
  },
]

export default experience
