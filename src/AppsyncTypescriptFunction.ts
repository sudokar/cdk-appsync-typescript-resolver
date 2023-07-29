import * as appsync from 'aws-cdk-lib/aws-appsync';
import type { IConstruct } from 'constructs';
import { bundle } from './bundler';

export interface AppsyncTypescriptFunctionProps extends appsync.AppsyncFunctionProps {
  /**
   * Path of typescript file that will be transpiled and bundled
   */
  readonly path: string;
  /**
   * Flag to enable or disable source maps in bundled code, defaulted to false
   */
  readonly sourceMap?: boolean;
  /**
   * A map of replacement strings in the bundled code. Example: { "ENV", "prod" }
    */
  readonly replaceStrings?: Record<string, string>;
}

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
