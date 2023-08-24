import * as appsync from 'aws-cdk-lib/aws-appsync';
import type { IConstruct } from 'constructs';
import { defaultResolverCode } from './bundler';
import type { TSExpressPipelineResolverProps } from './TSExpressPipelineResolverProps';

/**
 * Appsync's JS pipeline resolver with default bolierplate code using AppsyncTypescriptFunction construct
 */
export class TSExpressPipelineResolver extends appsync.Resolver {
  constructor(
    scope: IConstruct,
    id: string,
    props: TSExpressPipelineResolverProps,
  ) {
    const { tsFunction: appsyncFunction, ...resolverProps } = props;
    super(scope, id, {
      ...resolverProps,
      pipelineConfig: [appsyncFunction],
      code: appsync.Code.fromInline(defaultResolverCode),
      runtime: appsync.FunctionRuntime.JS_1_0_0,
    });
  }
}
