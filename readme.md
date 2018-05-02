# HomeBank Parser

This library provides a convenient method for accessing HomeBank data from JavaScript and TypeScript applications.

[HomeBank](http://homebank.free.fr) is a personal finance and money management software application built and maintained by Maxime Doyen.

## Installation

```
npm install homebank-parser --save
```

## Basic Usage

### From TypeScript

First, you'll need to modify your tsconfig.json to include:

```json
{
    "compilerOptions": {
        "lib": [ "es6" ]
    }
}
```

Then you can use homebank-parser like so:

```typescript
import { HomeBankParser, HomeBankData } from 'homebank-parser'
const parser = new HomeBankParser();

(async () => {
    try {
        const result: HomeBankData = await parser.parseFile('path/to/your/data.xhb');
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### From JavaScript

```javascript
const {HomeBankParser} = require('homebank-parser');
const parser = new HomeBankParser();

parser.parseFile('path/to/your/data.xhb')
    .then(result => console.log(result))
    .catch(e => console.error(e));
```