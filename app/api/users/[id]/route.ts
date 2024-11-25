import { db } from "@/db"
import { users } from "@/db/schema"
import { eq } from "drizzle-orm"


export async function GET(req: Request, { params }: { params: {id: string} }) {
  try {
    const id = parseInt(params.id)

    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.id, id))
      .limit(1)

    if(!user) return Response.json({ error: 'User not found' }, { status: 404 })

    return Response.json(user)
  } catch (error) {
    console.log('error',error);
    return Response.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}