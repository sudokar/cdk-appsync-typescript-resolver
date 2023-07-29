import { Context, DynamoDBGetItemRequest, util } from '@aws-appsync/utils';
import { generateAutoId } from './utils';
import { QueryGetTaskArgs, Task } from '../types/appsync';

export function request(
  ctx: Context<QueryGetTaskArgs>,
): DynamoDBGetItemRequest {
  console.log('ctx.args.id', ctx.args.id);

  return {
    operation: 'GetItem',
    key: {
      id: util.dynamodb.toDynamoDB(ctx.args.id),
    },
  };
}

export function response(
  ctx: Context<QueryGetTaskArgs, object, object, object, Task>,
) {
  return { ...ctx.result, id: generateAutoId() };
}
