
import { test } from 'ava';
import { HomeBankParser } from '../src/parser'

test('The parser can run without throwing an error', async (t) => {

    const parser = new HomeBankParser();
    try {
        const result = await parser.parseFile("test.xhb");
        t.is(result.accounts.length, 2, `Expected 2 accounts be received ${result.accounts.length}`);
    } catch (e) {
        t.fail(e);
    }
});
