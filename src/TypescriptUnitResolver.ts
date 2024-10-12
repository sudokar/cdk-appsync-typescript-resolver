import * as appsync from 'aws-cdk-lib/aws-appsync';
import type { IConstruct } from 'constructs';
import { bundle } from './bundler';
import type { TypescriptUnitResolverProps } from './TypescriptUnitResolverProps';

export class TypescriptUnitResolver extends appsync.Resolver {
  constructor(scope: IConstruct, id: string, props: TypescriptUnitResolverProps) {
    const {
      path,
      sourceMap,
      replaceStrings,
      ...resolverProps
    } = props;

    super(scope, id, {
      code: appsync.Code.fromInline(
        bundle({
          entryPoint: path,
          sourceMap: sourceMap ?? false,
          replaceStrings,
        }),
      ),
      runtime: appsync.FunctionRuntime.JS_1_0_0,
      ...resolverProps,
    });
  }
}
