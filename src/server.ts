import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { env } from './env'
import { trasactionsRoutes } from './routes/transaction'

const app = fastify()

app.register(cookie)
app.register(trasactionsRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
