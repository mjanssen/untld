const urlRegex = /^(:?\/\/|https?:\/\/)?([^/]*@)?(.+?)(:\d{2,5})?([/?].*)?$/;
let secondLevelTlds = ['co.uk'];

function checkForSecondLevelTld(url) {
  const secondExists = secondLevelTlds.filter(tld => url.indexOf(tld) > -1);
  return secondExists.length ? secondExists[0] : false;
}

function parse(urlParts) {
  const pathname = urlParts[5] || ''
  const [path] = pathname.split('?');
  const url = urlParts[3];
  const secondTld = checkForSecondLevelTld(url);
  const splittedUrl = url.split('.');
  const tld = secondTld ? secondTld : splittedUrl[splittedUrl.length - 1];
  const noTld = splittedUrl.filter(part => tld.indexOf(part) === -1);
  const querySplit = pathname.split('?');
  const query = {};
  if (querySplit.length > 0) {
    querySplit[querySplit.length - 1].split('&').forEach(q => {
      const [p, v] = q.split('=');
      if (p !== '/' && v) query[p] = v;
    });
  }

  return {
    protocol: urlParts[1],
    domain: noTld.join('.'),
    tld,
    path,
    query,
  };
}

function untld(domain = {}) {
  if (typeof window === 'undefined' && typeof domain.domain === 'undefined') return null;
  const origin = typeof domain.domain !== 'undefined' ? domain.domain : window.location.href;
  secondLevelTlds = secondLevelTlds.concat(domain.customTlds || []);
  const urlParts = origin.match(urlRegex);
  return parse(urlParts);
}

export default untld;
