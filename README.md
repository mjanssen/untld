# Koekie 🍪

The **zero-dependency** ~_340B_ TLD manager for your Javascript projects.

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
}

// Get information about any other domain
untld({
  domain: 'https://some.domain.co.uk/esketit',
});

{
  protocol: 'https://',
  domain: 'some.domain',
  tld: 'co.uk',
}

// If you have to support other special double tlds
untld({
  domain: 'https://some.other.domain.in.ua/esketit',
  customTlds: ['in.ua'],
});

{
  protocol: 'https://',
  domain: 'some.other.domain',
  tld: 'in.ua',
}
```

# Demo

// Coming soon

# License

[MIT](https://oss.ninja/mit/mjanssen/)
