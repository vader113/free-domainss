// for more details watch the file `./domains.d.ts`

addSubDomain({
  description: 'The way of Tech', // describe your project in this field
  domain: '1bt.uk', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'techngeex', // desired subdomain name
  owner: {
    repo: '<https://github.com/vader113/free-domainss>',
    email: '<saqibjarvis11+1@gmail.com>',
  },
  record: {
    CNAME: '<vader113.github.io>', // e.g.: <your-github-account>.github.io
    TXT: ['list', 'of', 'required', 'txt', 'records'],
    A: ['list', 'of', 'IPv4', 'addresses', 'like', 'a', '127.0.0.1'],
    AAAA: ['list', 'of', 'IPv6', 'addresses', 'like', 'a', '::1'],
    NS: ['ns1.byet.org', 'ns2.byet.org', 'ns3.byet.org', 'ns4.byet.org', 'ns5.byet.org'],
  },
  //proxy: false, // disable Cloudflare proxy (with is enabled by default). In this case, your origin server
                  // should provide valid a SSL certificate and protection CF will be disabled
  // nested: [{ // in addition, you may define the required nested subdomains
  //   subdomain: 'foo',
  //   record: {
  //     CNAME: '...',
  //   },
  //   proxy: false,
  // }, {
  //   subdomain: 'bar',
  //   record: {
  //     A: ['...'],
  //   },
  //   proxy: true,
  // }]
})
