import { Position, type Experience } from '@/models/experience'
import {
  STACK_DATABASES,
  STACK_FRAMEWORKS,
  STACK_LANGUAGES,
  STACK_LIBRARIES,
  STACK_ORMS,
  STACK_PLATFORMS,
  STACK_SERVICES
} from '@/models/stack'

const experience: Experience[] = [
  {
    companyName: 'Mobohubb',
    lastPosition: {
      name: Position.SD,
      from: new Date('2024-07-01'),
      responsabilities: [

      ],
    },
    oldPositions: [],
    generalDescription:
      'I work on a employee monitoring software, providing bug fixes, feature development, and report generation to ensure system stability and performance. I actively contributed to project structure discussions, offering guidance on best practices and efficient feature implementation. Additionally, I supported other developers by mentoring, assigning tasks, and leading issue resolution efforts to maintain project quality and stability.',
    mainStack: [
      STACK_SERVICES.AWS,
      STACK_LANGUAGES.NODE,
      STACK_LANGUAGES.TYPESCRIPT,
      STACK_FRAMEWORKS.NESTJS,
      STACK_LIBRARIES.REDUX
    ],
    restStack: [],
    localLink: 'mobohubb',
  },
  {
    companyName: 'TorneosGG',
    lastPosition: {
      name: Position.FSD,
      from: new Date('2024-01-01'),
      to: new Date('2024-05-30'),
      responsabilities: [
        {
          description:
            'Developed a chat system for a tournament-related project',
        },
        {
          description:
            'Reworked the blog section, implementing SSR Feed and components modification',
        },
        {
          description: 'Contributed to the complete rework of the main project',
        },
        {
          description:
            'Collaborated with design and QA teams to implement changes and ensure quality',
        },
      ],
    },
    oldPositions: [],
    generalDescription:
      'I specialized in developing chat systems and reworking blog sections with SSR Feed for tournament-related projects. I participated in comprehensive reworks of main projects, provided ongoing support, optimized code for performance, and collaborated with design and QA teams to implement changes and ensure quality.',
    mainStack: [
      STACK_LANGUAGES.NODE,
      STACK_LANGUAGES.TYPESCRIPT,
      STACK_FRAMEWORKS.TAILWIND,
      STACK_LIBRARIES.SOCKETIO,
      STACK_LIBRARIES.TRPC,
    ],
    restStack: [],
    localLink: 'torneosgg',
  },
  {
    companyName: 'Imagine Apps',
    lastPosition: {
      name: Position.SD,
      from: new Date('2023-03-01'),
      to: new Date('2024-01-30'),
      responsabilities: [
        {
          description:
            'Developed web pages and applications using React, Angular, and various libraries.',
        },
        {
          description:
            'Provided ongoing support, resolved issues, and optimized code for performance.',
        },
        {
          description:
            'Conducted detailed code reviews for quality, standards adherence, and issue identification.',
        },
        {
          description:
            'Managed NoSQL and SQL databases, including data modeling, query optimization, and security.',
        },
        {
          description:
            'Designed and implemented APIs for seamless integration and communication.',
        },
      ],
    },
    oldPositions: [],
    generalDescription:
      'I specialized in developing web pages and applications using React, Angular, and diverse libraries. I offer ongoing support, optimize code for performance, and conduct rigorous code reviews for quality assurance. I manage NoSQL and SQL databases, design APIs for seamless integration, and facilitate efficient communication between components and external services.',
    mainStack: [
      STACK_LANGUAGES.GO,
      STACK_LANGUAGES.NODE,
      STACK_LANGUAGES.TYPESCRIPT,
      STACK_FRAMEWORKS.ANGULAR,
      STACK_ORMS.MONGOOSE,
      STACK_ORMS.TYPEORM,
    ],
    restStack: [],
    localLink: 'imagineapps',
  },
  {
    companyName: 'Blockdemy',
    lastPosition: {
      name: Position.FSD,
      from: new Date('2022-05-01'),
      to: new Date('2022-11-30'),
      responsabilities: [
        {
          description:
            'Created main website page and provided ongoing project support.',
        },
        {
          description:
            'Implemented automated systems for updating event dates on the website.',
        },
        {
          description:
            'Developed efficient automated processes for delivering guides to users.',
        },
        {
          description:
            'Executed comprehensive unit tests for each website component.',
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
    localLink: 'blockdemy',
  },
  {
    companyName: 'Amazonias RGA',
    lastPosition: {
      name: Position.SD,
      from: new Date('2021-01-01'),
      to: new Date('2022-02-29'),
      responsabilities: [
        {
          description:
            'Developed robust APIs and web apps, focusing on functionality and UX.',
        },
        {
          description:
            'Performed meticulous testing for each feature to ensure reliability.',
        },
        {
          description:
            'Defined project structure, selected tech stack, and optimized workflow.',
        },
        {
          description:
            'Prepared comprehensive documentation for project clarity and future development.',
        },
      ],
    },
    oldPositions: [],
    generalDescription:
      'I specialized in building robust APIs and user-centric web apps, prioritizing seamless experiences and functionality. Rigorous testing ensures top quality and reliability. I excel in structuring projects, optimizing tech stacks, and creating comprehensive documentation for efficient development and future enhancements',
    mainStack: [
      STACK_LANGUAGES.GO,
      STACK_LANGUAGES.CSHARP,
      STACK_FRAMEWORKS.DOTNET,
      STACK_LANGUAGES.TYPESCRIPT,
      STACK_LANGUAGES.NODE,
      STACK_DATABASES.MYSQL,
    ],
    restStack: [],
    localLink: 'amazoniasrga',
  },
]

export default experience
