// ~~ Generated by projen. To modify, edit .projenrc.ts and run "npx projen".
import { aws_appsync } from 'aws-cdk-lib';
import { AppsyncTypescriptFunction } from './';

/**
 * TSExpressPipelineResolverProps
 */
export interface TSExpressPipelineResolverProps {
  /**
   * The API this resolver is attached to.
   * @stability stable
   */
  readonly api: aws_appsync.IGraphqlApi;
  /**
   * The data source this resolver is using.
   * @default - No datasource
   * @stability stable
   */
  readonly dataSource?: aws_appsync.BaseDataSource;
  /**
   * The maximum number of elements per batch, when using batch invoke.
   * @default - No max batch size
   * @stability stable
   */
  readonly maxBatchSize?: number;
  /**
   * The caching configuration for this resolver.
   * @default - No caching configuration
   * @stability stable
   */
  readonly cachingConfig?: aws_appsync.CachingConfig;
  /**
   * name of the GraphQL type this resolver is attached to.
   * @stability stable
   */
  readonly typeName: string;
  /**
   * name of the GraphQL field in the given type this resolver is attached to.
   * @stability stable
   */
  readonly fieldName: string;
  /**
   * Instance of AppsyncTypescriptFunction construct
   */
  readonly tsFunction: AppsyncTypescriptFunction;
}
