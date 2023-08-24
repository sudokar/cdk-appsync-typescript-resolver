import { CollectionKind, PrimitiveType } from '@jsii/spec';
import { ProjenStruct, Struct } from '@mrgrain/jsii-struct-builder';
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
  devDeps: ['@aws-appsync/utils', '@mrgrain/jsii-struct-builder'], /* Build dependencies for this module. */
  packageName: 'cdk-appsync-typescript-resolver',
  tsconfigDev: {
    compilerOptions: {
      lib: ['es2021'],
    },
  },
  bundledDeps: ['esbuild'],

  releaseToNpm: true,
  gitignore: ['/.idea/'],

  autoMerge: true,
  autoApproveOptions: {
    allowedUsernames: ['cdklabs-automation'],
    secret: 'GITHUB_TOKEN',
  },
  autoApproveUpgrades: true,

  stale: true,

  minNodeVersion: '18.17.0',
  workflowNodeVersion: '18.x',
});

new ProjenStruct(project, { name: 'AppsyncTypescriptFunctionProps' })
  .mixin(Struct.fromFqn('aws-cdk-lib.aws_appsync.AppsyncFunctionProps'))
  .withoutDeprecated()
  .omit('code', 'runtime')
  .add({
    name: 'path',
    type: { primitive: PrimitiveType.String },
    docs: {
      summary: 'Path of typescript file that will be transpiled and bundled',
    },
  }, {
    name: 'sourceMap',
    optional: true,
    type: { primitive: PrimitiveType.Boolean },
    docs: {
      summary: 'Flag to enable or disable source maps in bundled code. defaults to false',
    },
  },
  {
    name: 'replaceStrings',
    optional: true,
    type: { collection: { kind: CollectionKind.Map, elementtype: { primitive: PrimitiveType.String } } },
    docs: {
      summary: 'A map of replacement strings in the bundled code. e.g { ENV: "PROD" }',
      example: '{ ENV: "PROD" }',
    },
  });

new ProjenStruct(project, { name: 'TSExpressPipelineResolverProps' })
  .mixin(Struct.fromFqn('aws-cdk-lib.aws_appsync.ResolverProps'))
  .withoutDeprecated()
  .omit(
    'pipelineConfig',
    'requestMappingTemplate',
    'responseMappingTemplate',
    'code',
    'runtime')
  .add({
    name: 'tsFunction',
    type: { fqn: 'cdk-appsync-typescript-resolver.AppsyncTypescriptFunction' },
    docs: {
      summary: 'Instance of AppsyncTypescriptFunction construct',
      see: 'AppsyncTypescriptFunction',
    },
  });

new ProjenStruct(project, { name: 'AppsyncTypescriptResolverProps' })
  .mixin(Struct.fromFqn('aws-cdk-lib.aws_appsync.ResolverProps'))
  .withoutDeprecated()
  .omit(
    'requestMappingTemplate',
    'responseMappingTemplate',
    'code',
    'runtime')
  .add({
    name: 'path',
    optional: true,
    type: { primitive: PrimitiveType.String },
    docs: {
      summary: 'Path of typescript file that will be transpiled and bundled',
    },
  }, {
    name: 'sourceMap',
    optional: true,
    type: { primitive: PrimitiveType.Boolean },
    docs: {
      summary: 'Flag to enable or disable source maps in bundled code. defaults to false',
    },
  },
  {
    name: 'replaceStrings',
    optional: true,
    type: { collection: { kind: CollectionKind.Map, elementtype: { primitive: PrimitiveType.String } } },
    docs: {
      summary: 'A map of replacement strings in the bundled code. e.g { ENV: "PROD" }',
      example: '{ ENV: "PROD" }',
    },
  });

project.synth();
