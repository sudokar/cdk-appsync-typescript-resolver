import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import {
  getTestApi,
  getTypescriptFunction,
  getTestStack,
  getAppsyncFunction,
} from './testUtils';
import { TSExpressPipelineResolver } from '../src';

let testStack: cdk.Stack;
let testApi: appsync.GraphqlApi;

// TODO: Investigate parametrised test issue
describe('TSExpressPipelineResolver', () => {
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
    new TSExpressPipelineResolver(testStack, 'TestResolver', {
      api: testApi,
      typeName: 'Query',
      fieldName: 'hello',
      tsFunction: typescriptFunction,
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
    new TSExpressPipelineResolver(testStack, 'TestResolver', {
      api: testApi,
      typeName: 'Query',
      fieldName: 'hello',
      tsFunction: appsyncFunction,
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
