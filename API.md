# cdk-appsync-typescript-resolver

[![npm version](https://badge.fury.io/js/cdk-appsync-typescript-resolver.svg)](https://www.npmjs.com/package/cdk-appsync-typescript-resolver.svg)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/73988a5fee2a473a92ea3ecb288dfbc3)](https://app.codacy.com/gh/sudokar/cdk-appsync-typescript-resolver/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/sudokar/nx-serverless)
![Maintained](https://img.shields.io/maintenance/yes/2023.svg)

Constructs to transpile and bundle Typescript to valid AWS Appsync's JS resolvers

[![View on Construct Hub](https://constructs.dev/badge?package=cdk-appsync-typescript-resolver)](https://constructs.dev/packages/cdk-appsync-typescript-resolver)

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
# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncTypescriptFunction <a name="AppsyncTypescriptFunction" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunction"></a>

Transpile and bundle Typescript to AWS Appsync JS function.

#### Initializers <a name="Initializers" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.Initializer"></a>

```typescript
import { AppsyncTypescriptFunction } from 'cdk-appsync-typescript-resolver'

new AppsyncTypescriptFunction(scope: IConstruct, id: string, props: AppsyncTypescriptFunctionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | *No description.* |
| <code><a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunctionProps">AppsyncTypescriptFunctionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunctionProps">AppsyncTypescriptFunctionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.fromAppsyncFunctionAttributes">fromAppsyncFunctionAttributes</a></code> | Import Appsync Function from arn. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.isConstruct"></a>

```typescript
import { AppsyncTypescriptFunction } from 'cdk-appsync-typescript-resolver'

AppsyncTypescriptFunction.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.isOwnedResource"></a>

```typescript
import { AppsyncTypescriptFunction } from 'cdk-appsync-typescript-resolver'

AppsyncTypescriptFunction.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.isResource"></a>

```typescript
import { AppsyncTypescriptFunction } from 'cdk-appsync-typescript-resolver'

AppsyncTypescriptFunction.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromAppsyncFunctionAttributes` <a name="fromAppsyncFunctionAttributes" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.fromAppsyncFunctionAttributes"></a>

```typescript
import { AppsyncTypescriptFunction } from 'cdk-appsync-typescript-resolver'

AppsyncTypescriptFunction.fromAppsyncFunctionAttributes(scope: Construct, id: string, attrs: AppsyncFunctionAttributes)
```

Import Appsync Function from arn.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.fromAppsyncFunctionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.fromAppsyncFunctionAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.fromAppsyncFunctionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_appsync.AppsyncFunctionAttributes

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.property.dataSource">dataSource</a></code> | <code>aws-cdk-lib.aws_appsync.BaseDataSource</code> | the data source of this AppSync Function. |
| <code><a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.property.functionArn">functionArn</a></code> | <code>string</code> | the ARN of the AppSync function. |
| <code><a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.property.functionId">functionId</a></code> | <code>string</code> | the ID of the AppSync function. |
| <code><a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.property.functionName">functionName</a></code> | <code>string</code> | the name of this AppSync Function. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.property.dataSource"></a>

```typescript
public readonly dataSource: BaseDataSource;
```

- *Type:* aws-cdk-lib.aws_appsync.BaseDataSource

the data source of this AppSync Function.

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

the ARN of the AppSync function.

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.property.functionId"></a>

```typescript
public readonly functionId: string;
```

- *Type:* string

the ID of the AppSync function.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunction.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

the name of this AppSync Function.

---


### TSExpressPipelineResolver <a name="TSExpressPipelineResolver" id="cdk-appsync-typescript-resolver.TSExpressPipelineResolver"></a>

Appsync's JS pipeline resolver with default bolierplate code using AppsyncTypescriptFunction construct.

#### Initializers <a name="Initializers" id="cdk-appsync-typescript-resolver.TSExpressPipelineResolver.Initializer"></a>

```typescript
import { TSExpressPipelineResolver } from 'cdk-appsync-typescript-resolver'

new TSExpressPipelineResolver(scope: IConstruct, id: string, props: TSExpressPipelineResolverProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-appsync-typescript-resolver.TSExpressPipelineResolver.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | *No description.* |
| <code><a href="#cdk-appsync-typescript-resolver.TSExpressPipelineResolver.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-appsync-typescript-resolver.TSExpressPipelineResolver.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-appsync-typescript-resolver.TSExpressPipelineResolverProps">TSExpressPipelineResolverProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-appsync-typescript-resolver.TSExpressPipelineResolver.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-appsync-typescript-resolver.TSExpressPipelineResolver.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-appsync-typescript-resolver.TSExpressPipelineResolver.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-appsync-typescript-resolver.TSExpressPipelineResolverProps">TSExpressPipelineResolverProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-appsync-typescript-resolver.TSExpressPipelineResolver.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-appsync-typescript-resolver.TSExpressPipelineResolver.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-appsync-typescript-resolver.TSExpressPipelineResolver.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-appsync-typescript-resolver.TSExpressPipelineResolver.isConstruct"></a>

```typescript
import { TSExpressPipelineResolver } from 'cdk-appsync-typescript-resolver'

TSExpressPipelineResolver.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-appsync-typescript-resolver.TSExpressPipelineResolver.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-appsync-typescript-resolver.TSExpressPipelineResolver.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-appsync-typescript-resolver.TSExpressPipelineResolver.property.arn">arn</a></code> | <code>string</code> | the ARN of the resolver. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-appsync-typescript-resolver.TSExpressPipelineResolver.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `arn`<sup>Required</sup> <a name="arn" id="cdk-appsync-typescript-resolver.TSExpressPipelineResolver.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

the ARN of the resolver.

---


## Structs <a name="Structs" id="Structs"></a>

### AppsyncTypescriptFunctionProps <a name="AppsyncTypescriptFunctionProps" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunctionProps"></a>

AppsyncTypescriptFunctionProps.

#### Initializer <a name="Initializer" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunctionProps.Initializer"></a>

```typescript
import { AppsyncTypescriptFunctionProps } from 'cdk-appsync-typescript-resolver'

const appsyncTypescriptFunctionProps: AppsyncTypescriptFunctionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunctionProps.property.api">api</a></code> | <code>aws-cdk-lib.aws_appsync.IGraphqlApi</code> | the GraphQL Api linked to this AppSync Function. |
| <code><a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunctionProps.property.dataSource">dataSource</a></code> | <code>aws-cdk-lib.aws_appsync.BaseDataSource</code> | the data source linked to this AppSync Function. |
| <code><a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunctionProps.property.name">name</a></code> | <code>string</code> | the name of the AppSync Function. |
| <code><a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunctionProps.property.path">path</a></code> | <code>string</code> | Path of typescript file that will be transpiled and bundled. |
| <code><a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunctionProps.property.description">description</a></code> | <code>string</code> | the description for this AppSync Function. |
| <code><a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunctionProps.property.replaceStrings">replaceStrings</a></code> | <code>{[ key: string ]: string}</code> | A map of replacement strings in the bundled code. |
| <code><a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunctionProps.property.requestMappingTemplate">requestMappingTemplate</a></code> | <code>aws-cdk-lib.aws_appsync.MappingTemplate</code> | the request mapping template for the AppSync Function. |
| <code><a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunctionProps.property.responseMappingTemplate">responseMappingTemplate</a></code> | <code>aws-cdk-lib.aws_appsync.MappingTemplate</code> | the response mapping template for the AppSync Function. |
| <code><a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunctionProps.property.sourceMap">sourceMap</a></code> | <code>boolean</code> | Flag to enable or disable source maps in bundled code. |

---

##### `api`<sup>Required</sup> <a name="api" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunctionProps.property.api"></a>

```typescript
public readonly api: IGraphqlApi;
```

- *Type:* aws-cdk-lib.aws_appsync.IGraphqlApi

the GraphQL Api linked to this AppSync Function.

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunctionProps.property.dataSource"></a>

```typescript
public readonly dataSource: BaseDataSource;
```

- *Type:* aws-cdk-lib.aws_appsync.BaseDataSource

the data source linked to this AppSync Function.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunctionProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

the name of the AppSync Function.

---

##### `path`<sup>Required</sup> <a name="path" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunctionProps.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path of typescript file that will be transpiled and bundled.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunctionProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* no description

the description for this AppSync Function.

---

##### `replaceStrings`<sup>Optional</sup> <a name="replaceStrings" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunctionProps.property.replaceStrings"></a>

```typescript
public readonly replaceStrings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of replacement strings in the bundled code.

e.g { ENV: "PROD" }

---

##### `requestMappingTemplate`<sup>Optional</sup> <a name="requestMappingTemplate" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunctionProps.property.requestMappingTemplate"></a>

```typescript
public readonly requestMappingTemplate: MappingTemplate;
```

- *Type:* aws-cdk-lib.aws_appsync.MappingTemplate
- *Default:* no request mapping template

the request mapping template for the AppSync Function.

---

##### `responseMappingTemplate`<sup>Optional</sup> <a name="responseMappingTemplate" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunctionProps.property.responseMappingTemplate"></a>

```typescript
public readonly responseMappingTemplate: MappingTemplate;
```

- *Type:* aws-cdk-lib.aws_appsync.MappingTemplate
- *Default:* no response mapping template

the response mapping template for the AppSync Function.

---

##### `sourceMap`<sup>Optional</sup> <a name="sourceMap" id="cdk-appsync-typescript-resolver.AppsyncTypescriptFunctionProps.property.sourceMap"></a>

```typescript
public readonly sourceMap: boolean;
```

- *Type:* boolean

Flag to enable or disable source maps in bundled code.

defaults to false

---

### TSExpressPipelineResolverProps <a name="TSExpressPipelineResolverProps" id="cdk-appsync-typescript-resolver.TSExpressPipelineResolverProps"></a>

TSExpressPipelineResolverProps.

#### Initializer <a name="Initializer" id="cdk-appsync-typescript-resolver.TSExpressPipelineResolverProps.Initializer"></a>

```typescript
import { TSExpressPipelineResolverProps } from 'cdk-appsync-typescript-resolver'

const tSExpressPipelineResolverProps: TSExpressPipelineResolverProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-appsync-typescript-resolver.TSExpressPipelineResolverProps.property.api">api</a></code> | <code>aws-cdk-lib.aws_appsync.IGraphqlApi</code> | The API this resolver is attached to. |
| <code><a href="#cdk-appsync-typescript-resolver.TSExpressPipelineResolverProps.property.fieldName">fieldName</a></code> | <code>string</code> | name of the GraphQL field in the given type this resolver is attached to. |
| <code><a href="#cdk-appsync-typescript-resolver.TSExpressPipelineResolverProps.property.tsFunction">tsFunction</a></code> | <code><a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunction">AppsyncTypescriptFunction</a></code> | Instance of AppsyncTypescriptFunction construct. |
| <code><a href="#cdk-appsync-typescript-resolver.TSExpressPipelineResolverProps.property.typeName">typeName</a></code> | <code>string</code> | name of the GraphQL type this resolver is attached to. |
| <code><a href="#cdk-appsync-typescript-resolver.TSExpressPipelineResolverProps.property.cachingConfig">cachingConfig</a></code> | <code>aws-cdk-lib.aws_appsync.CachingConfig</code> | The caching configuration for this resolver. |
| <code><a href="#cdk-appsync-typescript-resolver.TSExpressPipelineResolverProps.property.dataSource">dataSource</a></code> | <code>aws-cdk-lib.aws_appsync.BaseDataSource</code> | The data source this resolver is using. |
| <code><a href="#cdk-appsync-typescript-resolver.TSExpressPipelineResolverProps.property.maxBatchSize">maxBatchSize</a></code> | <code>number</code> | The maximum number of elements per batch, when using batch invoke. |

---

##### `api`<sup>Required</sup> <a name="api" id="cdk-appsync-typescript-resolver.TSExpressPipelineResolverProps.property.api"></a>

```typescript
public readonly api: IGraphqlApi;
```

- *Type:* aws-cdk-lib.aws_appsync.IGraphqlApi

The API this resolver is attached to.

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="cdk-appsync-typescript-resolver.TSExpressPipelineResolverProps.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

name of the GraphQL field in the given type this resolver is attached to.

---

##### `tsFunction`<sup>Required</sup> <a name="tsFunction" id="cdk-appsync-typescript-resolver.TSExpressPipelineResolverProps.property.tsFunction"></a>

```typescript
public readonly tsFunction: AppsyncTypescriptFunction;
```

- *Type:* <a href="#cdk-appsync-typescript-resolver.AppsyncTypescriptFunction">AppsyncTypescriptFunction</a>

Instance of AppsyncTypescriptFunction construct.

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="cdk-appsync-typescript-resolver.TSExpressPipelineResolverProps.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

name of the GraphQL type this resolver is attached to.

---

##### `cachingConfig`<sup>Optional</sup> <a name="cachingConfig" id="cdk-appsync-typescript-resolver.TSExpressPipelineResolverProps.property.cachingConfig"></a>

```typescript
public readonly cachingConfig: CachingConfig;
```

- *Type:* aws-cdk-lib.aws_appsync.CachingConfig
- *Default:* No caching configuration

The caching configuration for this resolver.

---

##### `dataSource`<sup>Optional</sup> <a name="dataSource" id="cdk-appsync-typescript-resolver.TSExpressPipelineResolverProps.property.dataSource"></a>

```typescript
public readonly dataSource: BaseDataSource;
```

- *Type:* aws-cdk-lib.aws_appsync.BaseDataSource
- *Default:* No datasource

The data source this resolver is using.

---

##### `maxBatchSize`<sup>Optional</sup> <a name="maxBatchSize" id="cdk-appsync-typescript-resolver.TSExpressPipelineResolverProps.property.maxBatchSize"></a>

```typescript
public readonly maxBatchSize: number;
```

- *Type:* number
- *Default:* No max batch size

The maximum number of elements per batch, when using batch invoke.

---



