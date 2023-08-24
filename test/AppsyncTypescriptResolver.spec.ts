import path from 'path';
import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import {
  getTestApi,
  getTypescriptFunction,
  getTestStack,
  getAppsyncFunction,
} from './testUtils';
import { AppsyncTypescriptResolver } from '../src';

let testStack: cdk.Stack;
let testApi: appsync.GraphqlApi;

describe('AppsyncTypescriptResolver', () => {
  beforeEach(() => {
    testStack = getTestStack();
    testApi = getTestApi(testStack);
  });

  test('should generate pipeline resolver using typescript function', () => {
    const typescriptFunction = getTypescriptFunction(
      testStack,
      testApi,
      true,
    );
    new AppsyncTypescriptResolver(testStack, 'TestResolver', {
      api: testApi,
      typeName: 'Query',
      fieldName: 'hello',
      pipelineConfig: [typescriptFunction],
    });

    const template = Template.fromStack(testStack);
    template.hasResourceProperties('AWS::AppSync::Resolver', {
      TypeName: 'Query',
      FieldName: 'hello',
      Runtime: {
        Name: 'APPSYNC_JS',
        RuntimeVersion: '1.0.0',
      },
    });
    expect(template).toMatchSnapshot();
  });

  test('should generate pipeline resolver using appsync function', () => {
    const appsyncFunction = getAppsyncFunction(testStack, testApi);
    new AppsyncTypescriptResolver(testStack, 'TestResolver', {
      api: testApi,
      typeName: 'Query',
      fieldName: 'hello',
      pipelineConfig: [appsyncFunction, appsyncFunction],
      path: path.join(__dirname, 'resources', 'getTask.ts'),
    });

    const template = Template.fromStack(testStack);
    template.hasResourceProperties('AWS::AppSync::Resolver', {
      TypeName: 'Query',
      FieldName: 'hello',
      Runtime: {
        Name: 'APPSYNC_JS',
        RuntimeVersion: '1.0.0',
      },
    });
    expect(template).toMatchSnapshot();
  });
});
