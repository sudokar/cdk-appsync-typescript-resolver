import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { getTestApi, getTypescriptFunction, getTestStack } from './testUtils';

let testStack: cdk.Stack;

describe('AppsyncTypescriptFunction', () => {
  beforeEach(() => {
    testStack = getTestStack();
  });

  test.each([true, false])(
    'should output cfn template with TypescriptFunction and sourceMap',
    (sourceMap) => {
      const testApi = getTestApi(testStack);

      getTypescriptFunction(testStack, testApi, sourceMap);

      const template = Template.fromStack(testStack);
      template.hasResourceProperties(
        'AWS::AppSync::FunctionConfiguration',
        {
          Name: 'TypescriptTest',
          Runtime: {
            Name: 'APPSYNC_JS',
            RuntimeVersion: '1.0.0',
          },
        },
      );
      expect(template).toMatchSnapshot();
    },
  );
});
