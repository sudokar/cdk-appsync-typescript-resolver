import * as esbuild from 'esbuild';

type BundleProps = Readonly<{
  entryPoint: string;
  sourceMap: boolean;
  replaceStrings?: { [k: string]: string };
}>;

export const bundle = (props: BundleProps) => {
  const { entryPoint, sourceMap, replaceStrings } = props;

  const buildResult = esbuild.buildSync({
    entryPoints: [entryPoint],
    external: ['@aws-appsync/utils'],
    bundle: true,
    write: false,
    platform: 'node',
    target: 'esnext',
    format: 'esm',
    sourcemap: sourceMap ? 'inline' : false,
    sourcesContent: false,
  });

  let bundledCode = buildResult.outputFiles[0].text;

  if (replaceStrings) {
    Object.entries(replaceStrings).forEach(([key, value]) => {
      const regExp = new RegExp(key, 'g');
      bundledCode = bundledCode.replace(regExp, value);
    });
  }

  return bundledCode;
};

export const defaultResolverCode: string = `
// The before step
export function request() {
    return {}
}
// The after step
export function response(ctx) {
    return ctx.prev.result
}`;
