/**
 * a sample function to lint
 *
 * @param value
 */
function testEslintConfig(value: { someValue: number }): number {
    return value.someValue;
}

const magicNumber = 10;

testEslintConfig({ someValue: magicNumber });

export class Test {
    private readonly _valueTest = 0;

    public get test(): number {
        return this._valueTest;
    }
}

const a = new Test().test;

console.error(a);
