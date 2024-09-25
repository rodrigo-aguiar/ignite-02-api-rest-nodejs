import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { trasactionsRoutes } from './routes/transaction'

export const app = fastify()

app.register(cookie)

app.addHook('preHandler', async (request) => {
  console.log(`[${request.method}] ${request.url}`)
})

app.register(trasactionsRoutes, {
  prefix: 'transactions',
})
