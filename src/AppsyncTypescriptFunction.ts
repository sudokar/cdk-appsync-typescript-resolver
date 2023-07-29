import * as appsync from 'aws-cdk-lib/aws-appsync';
import type { IConstruct } from 'constructs';
import type { AppsyncTypescriptFunctionProps } from './AppsyncTypescriptFunctionProps';
import { bundle } from './bundler';

/**
 * Transpile and bundle Typescript to AWS Appsync JS function
 */
export class AppsyncTypescriptFunction extends appsync.AppsyncFunction {
  constructor(
    scope: IConstruct,
    id: string,
    props: AppsyncTypescriptFunctionProps,
  ) {
    const { path, sourceMap, replaceStrings } = props;
    super(scope, id, {
      ...props,
      code: appsync.Code.fromInline(
        bundle({
          entryPoint: path,
          sourceMap: sourceMap ?? false,
          replaceStrings,
        }),
      ),
      runtime: appsync.FunctionRuntime.JS_1_0_0,
    });
  }
}
