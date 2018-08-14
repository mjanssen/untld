const urlRegex = /^(:?\/\/|https?:\/\/)?([^/]*@)?(.+?)(:\d{2,5})?([/?].*)?$/;
let secondLevelTlds = ['co.uk'];

function checkForSecondLevelTld(url) {
  const secondExists = secondLevelTlds.filter(tld => url.indexOf(tld) > -1);
  return secondExists.length ? secondExists[0] : false;
}

function parse(urlParts) {
  const url = urlParts[3];
  const secondTld = checkForSecondLevelTld(url);
  const splittedUrl = url.split('.');
  const tld = secondTld ? secondTld : splittedUrl[splittedUrl.length - 1];
  const splittedTld = tld.split('.');
  const noTld = splittedUrl.filter(part => tld.indexOf(part) === -1);

  return {
    protocol: urlParts[1],
    second: noTld.join('.'),
    tld,
  };
}

function esketit(domain) {
  let origin = window.location.origin;
  if (typeof domain === 'object') {
    origin = typeof domain.domain !== 'undefined' ? domain.domain : origin;
    secondLevelTlds = secondLevelTlds.concat(domain.customTlds);
  }
  const urlParts = origin.match(urlRegex);
  return parse(urlParts);
}

export default esketit;
