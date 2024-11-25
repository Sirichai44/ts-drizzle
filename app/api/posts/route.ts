import { db } from "@/db"
import { posts } from "@/db/schema"


export async function GET() {
  try {
    const allUsers = await db.select().from(posts)
    return Response.json(allUsers)
  } catch (error) {
    console.log('error',error);
    return Response.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}


interface CreatePost {
  title: string
  content: string
  userId: number
}
export async function POST(request: Request) {
  try {
    const body: CreatePost = await request.json()
    const {title, content, userId} = body

    if (!title || !content || !userId) {
      return Response.json({ error: 'Invalid input' }, { status: 400 })
    }

    const [newPost] = await db.insert(posts).values({ title, content, userId }).returning()
    return Response.json(newPost)
    
  } catch (error) {
    console.log('error',error);
    return Response.json({ error: 'Failed to create user' }, { status: 500 })
  }
}
