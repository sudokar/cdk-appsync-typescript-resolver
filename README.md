# cdk-appsync-typescript-resolver

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/sudokar/nx-serverless/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/sudokar/nx-serverless)
![Maintained](https://img.shields.io/maintenance/yes/2023.svg)

Constructs to transpile and bundle Typescript to valid AWS Appsync's JS resolvers

# ✨ Highlights

- [AppsyncTypescriptFunction](src%2Flib%2FAppsyncTypescriptFunction.ts) - CDK construct to transpile and bundle Typescript
- [TSExpressPipelineResolver](src%2Flib%2FJSExpressPipelineResolver.ts) - CDK construct to use AppsyncTypescriptFunction with boilerplate code

# 🚀 Usage

- AppsyncTypescriptFunction
```typescript
import { AppsyncTypescriptFunction } from 'cdk-appsync-typescript-resolver'
...
const appsyncFunction = new AppsyncTypescriptFunction(stack, "TSDemoFunction", {
    name: "TSDemoFunction",
    api: new appsync.GraphqlApi(...),
    path: path.join(__dirname, "path", "to", "file.ts"),
    dataSource: new appsync.DynamoDbDataSource(...),
    sourceMap,
});
```

- TSExpressPipelineResolver

```typescript
import { TSExpressPipelineResolver } from 'cdk-appsync-typescript-resolver'
...
const resolver = new TSExpressPipelineResolver(testStack, "DemoResolver", {
    api: new appsync.GraphqlApi(...),
    typeName: "Query",
    fieldName: "hello",
    typescriptFunction: new AppsyncTypescriptFunction(...),
});
```