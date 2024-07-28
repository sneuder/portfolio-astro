import {
  ProjectType,
  type Project,
  ProjectLinkType,
  ProjectLevel,
} from '@/models/project'
import {
  STACK_FRAMEWORKS,
  STACK_LANGUAGES,
  STACK_LIBRARIES,
  STACK_ORMS,
  STACK_TOOLS,
} from '@/models/stack'

import { getImageProjectFromLocal } from '@/services/dataGetter'

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
    name: 'Project Builder',
    description:
      'Streamlines file system operations in Go. With functions for creating, reading, writing, and managing files, this package enhances file handling efficiency for developers.',
    stack: [STACK_LANGUAGES.GO, STACK_TOOLS.DOCKER, STACK_LIBRARIES.GRPC],
    image: await getImageProjectFromLocal('process'),
    type: ProjectType.SASS,
    links: [
      {
        type: ProjectLinkType.GIT_HUB,
        href: buildGitHubLink('projects-builder'),
      },
    ],
    level: ProjectLevel.PRIMARY,
    localLink: 'project-builder',
  },
  {
    name: 'File System Go',
    description:
      'Streamlines file system operations in Go. With functions for creating, reading, writing, and managing files, this package enhances file handling efficiency for developers.',
    stack: [STACK_LANGUAGES.GO, STACK_TOOLS.DOCKER],
    image: await getImageProjectFromLocal('file-system'),
    type: ProjectType.PACKAGE,
    links: [
      {
        type: ProjectLinkType.GIT_HUB,
        href: buildGitHubLink('filesystem'),
      },
    ],
    level: ProjectLevel.PRIMARY,
    localLink: 'file-system-go',
  },
  {
    name: 'CLI Workspace',
    description:
      'Swift Workspace Creator: Simplifies Docker workspaces for teams or individuals. Crafted with Go and Docker, it ensures portable coding environments for seamless collaborations or solo projects.',
    stack: [STACK_LANGUAGES.GO, STACK_TOOLS.DOCKER],
    image: await getImageProjectFromLocal('cli-workspace'),
    type: ProjectType.TOOL,
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
    level: ProjectLevel.PRIMARY,
    localLink: 'cli-workspace',
  },
  {
    name: 'Uploader Service',
    description:
      'Created a backend service enabling secure file uploads while seamlessly storing associated data in the database. Implemented robust file handling and database integration for a streamlined user experience.',
    stack: [STACK_LANGUAGES.GO, STACK_ORMS.GORM],
    image: await getImageProjectFromLocal('uploader-service'),
    type: ProjectType.SASS,
    links: [
      {
        type: ProjectLinkType.GIT_HUB,
        href: buildGitHubLink('uploader-service'),
      },
    ],
    level: ProjectLevel.PRIMARY,
    localLink: 'uploader-service',
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
    image: await getImageProjectFromLocal('encrypt-service'),
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
    level: ProjectLevel.SECONDARY,
    localLink: 'encrypt-service',
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
    image: await getImageProjectFromLocal('hotel-management'),
    type: ProjectType.SASS,
    links: [
      {
        type: ProjectLinkType.GIT_HUB,
        href: buildGitHubLink('hotel-management'),
      },
    ],
    level: ProjectLevel.SECONDARY,
    localLink: 'hotel-management',
  },
  {
    name: 'Weather',
    description: '',
    stack: [
      STACK_LANGUAGES.TYPESCRIPT,
      STACK_LIBRARIES.REACT,
      STACK_LIBRARIES.REDUX,
    ],
    image: await getImageProjectFromLocal('weather'),
    type: ProjectType.TOOL,
    links: [
      {
        type: ProjectLinkType.WEB,
        href: 'https://weather-sneuder.vercel.app',
      },
      {
        type: ProjectLinkType.GIT_HUB,
        href: buildGitHubLink('weather'),
      },
    ],
    level: ProjectLevel.SECONDARY,
    localLink: 'weather',
  },
  {
    name: 'Rick and Morty Random',
    description: '',
    stack: [
      STACK_LANGUAGES.TYPESCRIPT,
      STACK_LIBRARIES.REACT,
      STACK_LIBRARIES.GRAPHQL,
    ],
    image: await getImageProjectFromLocal('rick-morty'),
    type: ProjectType.TOOL,
    links: [
      {
        type: ProjectLinkType.WEB,
        href: 'https://rick-and-morty-random.vercel.app',
      },
      {
        type: ProjectLinkType.GIT_HUB,
        href: buildGitHubLink('rick_and_morty_random'),
      },
    ],
    level: ProjectLevel.SECONDARY,
    localLink: 'rick-morty-random',
  },
  {
    name: 'Chairá Login',
    description: '',
    stack: [STACK_LANGUAGES.JAVASCRIPT, STACK_LIBRARIES.REACT],
    image: await getImageProjectFromLocal('login-chaira'),
    type: ProjectType.PROPOSAL,
    links: [
      {
        type: ProjectLinkType.WEB,
        href: 'https://chaira-login.vercel.app/',
      },
      {
        type: ProjectLinkType.GIT_HUB,
        href: buildGitHubLink('chaira_login'),
      },
    ],
    level: ProjectLevel.SECONDARY,
    localLink: 'chaira-login',
  },
]

export default projects
