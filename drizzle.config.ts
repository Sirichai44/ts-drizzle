import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: 'postgresql',
  schema: './db/schema.ts',
  dbCredentials: {
    url: 'postgresql://myuser:mypassword@localhost:5432/mydatabase'
  },
})