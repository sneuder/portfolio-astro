export enum STACK_LANGUAGES {
  GO = 'GO',
  NODE = 'Node',
  JAVASCRIPT = 'JavaScript',
  TYPESCRIPT = 'TypeScript',
  JAVA = 'Java',
  HTML = 'HTML',
  CSS = 'CSS',
  CSHARP = "C#"
}

export enum STACK_ORMS {
  GORM = 'GORM',
  MONGOOSE = 'Mongoose',
  HIBERNATE = 'Hibernate',
  SEQUELIZE = 'Sequelize',
  TYPEORM = 'TypeORM',
  DRIZZEL = 'Drizzel',
}

export enum STACK_DATABASES {
  MYSQL = 'MySQL',
  MONGODB = 'MongoDB',
  POSTGRESQL = 'PostgreSQL',
  REDIS = 'Redis',
}

export enum STACK_FRAMEWORKS {
  NEXTJS = 'NextJS',
  NESTJS = 'NestJS',
  ANGULAR = 'Angular',
  SPRING_BOOT = 'Spring Boot',
  EXPRESS = 'Express',
  BOOTSTRAP = 'Bootstrap',
  TAILWIND = 'Tailwind',
  DOTNET = ".NET"
}

export enum STACK_LIBRARIES {
  REACT = 'React',
  REDUX = 'Redux',
  SOCKETIO = 'Socket.IO',
  GRAPHQL = 'GraphQL',
  TRPC = 'tRPC',
  GRPC = 'gRPC',
}

export enum STACK_TOOLS {
  DOCKER = 'Docker',
  GIT = 'Git',
  GITHUB = 'GitHub',
  BITBUCKET = 'BitBucket',
  FIGMA = 'Figma',
}

export enum STACK_PLATFORMS {
  VERCEL = 'Vercel',
  JIRA = 'Jira',
  WEBFLOW = 'Webflow',
  WORDPRESS = 'WordPress',
}

export enum STACK_SERVICES {
  AWS = 'AWS',
}

export type STACK =
  | STACK_LANGUAGES
  | STACK_ORMS
  | STACK_DATABASES
  | STACK_FRAMEWORKS
  | STACK_LIBRARIES
  | STACK_TOOLS
  | STACK_PLATFORMS
  | STACK_SERVICES

//

export enum STACK_CATEGORY {
  LANGUAGE = 'Language',
  ORM = 'ORM',
  DATABASE = 'Database',
  FRAMEWORK = 'Frame Work',
  LIBRARY = 'Library',
  TOOL = 'Tool',
  PLATFORM = 'Platform',
}

export type StackCollectionByCategory = {
  [key in STACK_CATEGORY]?: string[]
}
