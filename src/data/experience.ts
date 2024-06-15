import {Position, type Experience} from '@/models/experience'
import {STACK_CATEGORY, STACK_LANGUAGES} from '@/models/stack'

const experience: Experience[] = [
  {
    companyName: 'Amazonias RGA',
    currentPosition: {
      name: Position.FSD,
      from: new Date(),
      to: new Date(),
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
    mainStack: {
      [STACK_CATEGORY.LANGUAGE]: [
        STACK_LANGUAGES.JAVA,
        STACK_LANGUAGES.JAVASCRIPT,
        STACK_LANGUAGES.TYPESCRIPT,
        STACK_LANGUAGES.CSS,
        STACK_LANGUAGES.HTML,
      ],
    },
    allStack: {},
  },
]

export default experience
