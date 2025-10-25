import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS + ',http://localhost:3000',
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    }
  },
  modules: [
    {
      resolve: "./modules/application",
      options: {},
    },
    {
      resolve: "./modules/consent",
      options: {},
    },
    {
      resolve: "./modules/lender",
      options: {},
    },
    {
      resolve: "./modules/revenue",
      options: {},
    },
    {
      resolve: "./modules/review",
      options: {},
    },
    {
      resolve: "./modules/algolia",
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_API_KEY,
        productIndexName: process.env.ALGOLIA_PRODUCT_INDEX_NAME || "products",
      },
    },
  ],
})
