# Untld 👾

The **zero-dependency** ~_400B_ TLD manager for your Javascript projects.

# Install

```
npm install --save untld
```

# Usage

```
// Ex. domain: https://github.com/mjanssen

import untld from 'untld';

// Get information about the current domain
untld();

{
  protocol: 'https://',
  domain: 'github',
  tld: 'com',
  path: '/mjanssen',
  query: {},
}

// Get information about any other domain
untld({
  domain: 'https://some.domain.co.uk/this-is-the/path?q=something-here',
});

{
  protocol: 'https://',
  domain: 'some.domain',
  tld: 'co.uk',
  path: '/this-is-the/path',
  query: { q: 'something-here' },
}

// If you have to support other special double tlds
untld({
  domain: 'https://some.other.domain.in.ua/this-is-the/path',
  customTlds: ['in.ua'],
});

{
  protocol: 'https://',
  domain: 'some.other.domain',
  tld: 'in.ua',
  path: '/this-is-the/path',
  query: {},
}
```

# Demo

Code demo [can be found here](https://codesandbox.io/s/6w3wxz73vw)

# License

[MIT](https://oss.ninja/mit/mjanssen/)
