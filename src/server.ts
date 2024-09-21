import fastify from 'fastify'
import { env } from './env'
import { trasactionsRoutes } from './routes/transaction'

const app = fastify()

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
