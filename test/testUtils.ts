import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import { AppsyncTypescriptFunction } from '../src';

export const getTestStack = () => new cdk.Stack(new cdk.App(), 'TestStack');

export const getTestApi = (stack: cdk.Stack) =>
  new appsync.GraphqlApi(stack, 'Api', {
    name: 'test-api',
    definition: {
      schema: appsync.SchemaFile.fromAsset(
        path.join(__dirname, 'resources', 'schema.graphql'),
      ),
    },
  });

export const getTypescriptFunction = (
  stack: cdk.Stack,
  api: appsync.GraphqlApi,
  sourceMap: boolean,
) =>
  new AppsyncTypescriptFunction(stack, 'Test', {
    name: 'TypescriptTest',
    api,
    path: path.join(__dirname, 'resources', 'getTask.ts'),
    dataSource: new appsync.NoneDataSource(stack, 'TestDataStore', {
      api,
    }),
    sourceMap,
  });

export const getAppsyncFunction = (stack: cdk.Stack, api: appsync.GraphqlApi) =>
  new appsync.AppsyncFunction(stack, 'Test', {
    name: 'TypescriptTest',
    api,
    code: appsync.Code.fromInline('const abc = "xyz"'),
    dataSource: new appsync.NoneDataSource(stack, 'TestDataStore', {
      api,
    }),
  });
