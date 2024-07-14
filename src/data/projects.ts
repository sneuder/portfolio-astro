import { ProjectType, type Project, ProjectLinkType } from '@/models/project'
import {
  STACK_FRAMEWORKS,
  STACK_LANGUAGES,
  STACK_ORMS,
  STACK_TOOLS,
} from '@/models/stack'

const BASE_GIT_HUB_LINK = 'https://github.com/sneuder/'

const buildGitHubLink = (path: string) => `${BASE_GIT_HUB_LINK}${path}`

export const ProjectLinkMapper = {
  [ProjectLinkType.GIT_HUB]: 'Git Hub',
  [ProjectLinkType.WEB]: 'Web',
}

export const ProjectLinkIconMapper = {
  [ProjectLinkType.GIT_HUB]: 'github',
  [ProjectLinkType.WEB]: 'web',
}

const projects: Project[] = [
  {
    name: 'CLI Workspace',
    description:
      'Swift Workspace Creator: Simplifies Docker workspaces for teams or individuals. Crafted with Go and Docker, it ensures portable coding environments for seamless collaborations or solo projects.',
    stack: [STACK_LANGUAGES.GO, STACK_TOOLS.DOCKER],
    image:
      'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718755200&semt=ais_user',
    type: ProjectType.SASS,
    links: [
      {
        type: ProjectLinkType.WEB,
        href: 'https://workspace-page.vercel.app',
      },
      {
        type: ProjectLinkType.GIT_HUB,
        href: buildGitHubLink('cli-workspace'),
      },
    ],
  },
  {
    name: 'Uploader Service',
    description:
      'Created a backend service enabling secure file uploads while seamlessly storing associated data in the database. Implemented robust file handling and database integration for a streamlined user experience.',
    stack: [STACK_LANGUAGES.GO, STACK_ORMS.GORM],
    image:
      'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718755200&semt=ais_user',
    type: ProjectType.SASS,
    links: [],
  },
  {
    name: 'Encrypt Service',
    description:
      'Created a backend service enabling secure file uploads while seamlessly storing associated data in the database. Implemented robust file handling and database integration for a streamlined user experience.',
    stack: [
      STACK_LANGUAGES.NODE,
      STACK_LANGUAGES.TYPESCRIPT,
      STACK_FRAMEWORKS.EXPRESS,
    ],
    image:
      'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718755200&semt=ais_user',
    type: ProjectType.SASS,
    links: [],
  },
  {
    name: 'Hotel Management',
    description:
      'The hotel management app revolutionizes operations by simplifying bookings, check-ins, and guest services, ensuring seamless functionality and exceptional customer experiences.',
    stack: [
      STACK_LANGUAGES.TYPESCRIPT,
      STACK_FRAMEWORKS.NESTJS,
      STACK_ORMS.MONGOOSE,
    ],
    image:
      'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718755200&semt=ais_user',
    type: ProjectType.SASS,
    links: [],
  },
]

export default projects
