# cdk-appsync-typescript-resolver

[![npm version](https://badge.fury.io/js/cdk-appsync-typescript-resolver.svg)](https://badge.fury.io/js/cdk-appsync-typescript-resolver)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/73988a5fee2a473a92ea3ecb288dfbc3)](https://app.codacy.com/gh/sudokar/cdk-appsync-typescript-resolver/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
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