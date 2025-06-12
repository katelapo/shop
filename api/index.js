import { hono } from 'hono';

const app = new Hono();

app.get('/api', (c) => {
  return c.text('hi');
})

app.get('/api/products', async (c) => {
  let { results } = await c.env.DB.prepare("SELECT * FROM products").all()
  return c.json(results)
})

app.get('*', (c) => c.env.ASSETS.fetch(c.req.raw));

export default app;