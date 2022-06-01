export default () => ({
  port: parseInt(process.env.PORT),
  limit: {
    postData: process.env.LIMIT_POST_DATA,
    urlEncoded: process.env.LIMIT_URL_ENCODE,
  },
  db: {
    connexionString: process.env.DB_CONNEXION_STRING,
    options: JSON?.parse(process.env.DB_AUTH),
  },
  server: {
    authentification: '',
  },

  mail: {
    host: '',
    port: { ssl: 465, tls: 587, none: 25, mailtrap: 2525 },
    secure: { oui: true, non: false },
    tls: { ciphers: 'SSLv3' },
    auth: { user: '', pass: '' },
    from: '',
    noreply: '',
  },

  urlFront: {
    url: '',
  },

  setGlobalPrefix: 'api/v1',

  swagger: {
    title: 'STARTER MONGOOSE RESTFUL API',
    description: 'The Starter Mongoose description',
    version: '0.0.1', //a revoir apres
    contacts: {
      site_web: 'akiltechnologies.com',
      email: 'akiltechnologie@akiltechnologies.com',
      facebook: 'akiltechnologie@akiltechnologies.com',
    },
    url: 'api/docs',
  },

  aws: {
    AWS_BUCKET_NAME: '',
    AWS_BUCKET_REGION: '',
    AWS_ACCESS_KEY: '',
    AWS_SECRET_KEY: '',
  },
});
