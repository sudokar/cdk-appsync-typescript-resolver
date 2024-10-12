import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import {
  getTestApi,
  getTestStack,
} from './testUtils';
import { TypescriptUnitResolver } from '../src';

let testStack: cdk.Stack;
let testApi: appsync.GraphqlApi;

describe('TypescriptUnitResolver', () => {
  beforeEach(() => {
    testStack = getTestStack();
    testApi = getTestApi(testStack);
  });

  test('should create JS unit resolver for typescript file path', () => {
    new TypescriptUnitResolver(testStack, 'TestResolver', {
      api: testApi,
      typeName: 'Query',
      fieldName: 'hello',
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
