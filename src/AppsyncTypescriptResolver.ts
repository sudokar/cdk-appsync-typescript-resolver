import * as appsync from 'aws-cdk-lib/aws-appsync';
import type { IConstruct } from 'constructs';
import type { AppsyncTypescriptResolverProps } from './AppsyncTypescriptResolverProps';
import { bundle, defaultResolverCode } from './bundler';

/**
 * Transpile and bundle Typescript to AWS Appsync JS resolver
 */
export class AppsyncTypescriptResolver extends appsync.Resolver {
  constructor(
    scope: IConstruct,
    id: string,
    props: AppsyncTypescriptResolverProps,
  ) {
    const { path, sourceMap, replaceStrings, ...resolverProps } = props;
    super(scope, id, {
      ...resolverProps,
      code: appsync.Code.fromInline(
        path ? bundle({
          entryPoint: path,
          sourceMap: sourceMap ?? false,
          replaceStrings,
        }) : defaultResolverCode,
      ),
      runtime: appsync.FunctionRuntime.JS_1_0_0,
    });
  }
}
