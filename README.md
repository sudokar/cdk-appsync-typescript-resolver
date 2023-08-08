# cdk-appsync-typescript-resolver

[![npm (scoped)](https://img.shields.io/npm/v/cdk-appsync-typescript-resolver)](https://www.npmjs.com/package/cdk-appsync-typescript-resolver)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/73988a5fee2a473a92ea3ecb288dfbc3)](https://app.codacy.com/gh/sudokar/cdk-appsync-typescript-resolver/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/sudokar/cdk-appsync-typescript-resolver/release.yml?branch=main&label=release&style=flat-square)](https://github.com/sudokar/cdk-appsync-typescript-resolver/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/release/sudokar/cdk-appsync-typescript-resolver?sort=semver&style=flat-square)](https://github.com/sudokar/cdk-appsync-typescript-resolver/releases)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/sudokar/nx-serverless)
![Maintained](https://img.shields.io/maintenance/yes/2023.svg)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod&style=flat-square)](https://gitpod.io/#https://github.com/sudokar/cdk-appsync-typescript-resolver)

Constructs to transpile and bundle Typescript to valid AWS Appsync's JS resolvers

[![View on Construct Hub](https://constructs.dev/badge?package=cdk-appsync-typescript-resolver)](https://constructs.dev/packages/cdk-appsync-typescript-resolver)

# ✨ Constructs

- [AppsyncTypescriptFunction](src%2Flib%2FAppsyncTypescriptFunction.ts) - To transpile and bundle Typescript
- [TSExpressPipelineResolver](src%2Flib%2FJSExpressPipelineResolver.ts) - To use AppsyncTypescriptFunction with boilerplate code

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
    sourceMap: true,
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
    tsFunction: new AppsyncTypescriptFunction(...),
});
```

> Tip: Use [GraphQL Code Generator](https://the-guild.dev/graphql/codegen) to generate Typescript types from GraphQL schema(s) to use in resolvers

Checkout the demo project for examples [cdk-appsync-typescript-resolver-demo](https://github.com/sudokar/cdk-appsync-typescript-resolver-demo)

# References

[JavaScript resolvers overview](https://docs.aws.amazon.com/appsync/latest/devguide/resolver-reference-overview-js.html)

[Bundling, TypeScript, and source maps](https://docs.aws.amazon.com/appsync/latest/devguide/resolver-reference-overview-js.html#additional-utilities)

[GraphQL Code Generator](https://the-guild.dev/graphql/codegen)
