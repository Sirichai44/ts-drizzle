import { db } from "@/db"
import { users } from "@/db/schema"


export async function GET() {
  try {
    const allUsers = await db.select().from(users)
    return Response.json(allUsers)
  } catch (error) {
    console.log('error',error);
    return Response.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const {name, email} = await request.json()
  try {
    const [newUser] = await db.insert(users).values({ name, email })
    .returning()
    return Response.json(newUser)
  } catch (error) {
    console.log('error',error);
    return Response.json({ error: 'Failed to create user' }, { status: 500 })
  }
}
