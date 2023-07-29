import * as path from 'path';
import { bundle } from '../src/bundler';

describe('bundler', () => {
  test.each([true, false])(
    'should bundle ts to js with sourcemap set to %s',
    (sourceMap) => {
      const result = bundle({
        entryPoint: path.join(__dirname, 'resources', 'getTask.ts'),
        sourceMap,
      });

      expect(result).toMatchSnapshot();
    },
  );

  test('should bundle ts to js with replace strings', () => {
    const result = bundle({
      entryPoint: path.join(
        __dirname,
        'resources',
        'bundlerReplaceTest.ts',
      ),
      sourceMap: false,
      replaceStrings: {
        __buildVersion: '1.0.0',
        __STAGE: 'test',
      },
    });

    expect(result).toStrictEqual(
      '// test/resources/bundlerReplaceTest.ts\n' +
                'var getBuildVersion = () => {\n' +
                '  return "test::test::1.0.0";\n' +
                '};\n' +
                'export {\n' +
                '  getBuildVersion\n' +
                '};\n',
    );
  });
});
