import * as appsync from 'aws-cdk-lib/aws-appsync';
import type { IConstruct } from 'constructs';
import type { TSExpressPipelineResolverProps } from './TSExpressPipelineResolverProps';

const defaultPipelineCode: string = `
// The before step
export function request() {
    return {}
}
// The after step
export function response(ctx) {
    return ctx.prev.result
}`;

/**
 * Appsync's JS pipeline resolver with default bolierplate code using AppsyncTypescriptFunction construct
 * @deprecated - Appsync now natively supports Unit resolvers. Ref: https://aws.amazon.com/about-aws/whats-new/2023/08/aws-appsync-javascript-all-resolvers-graphql-apis
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
      code: appsync.Code.fromInline(defaultPipelineCode),
      runtime: appsync.FunctionRuntime.JS_1_0_0,
    });
  }
}
