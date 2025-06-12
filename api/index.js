import { hono } from 'hono';

const app = new Hono();

app.get('/api', (c) => {
  return c.text('hi');
})

app.get('*', (c) => c.env.ASSETS.fetch(c.req.raw));

export default app;