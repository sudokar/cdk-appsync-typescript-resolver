import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'sudokar',
  authorAddress: 'sudokar@yahoo.com',
  cdkVersion: '2.67.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'cdk-appsync-typescript-resolver',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/sudokar/cdk-appsync-typescript-resolver.git',
  keywords: ['appsync', 'typescript', 'resolver', 'javascript'],

  description: 'AWS CDK construct to build AppSync JS resolvers using Typescript',
  devDeps: ['@aws-appsync/utils'], /* Build dependencies for this module. */
  packageName: 'cdk-appsync-typescript-resolver',
  tsconfigDev: {
    compilerOptions: {
      lib: ['es2021'],
    },
  },
  bundledDeps: ['esbuild'],

  releaseToNpm: true,
  gitignore: ['/.idea/'],
});
project.synth();
