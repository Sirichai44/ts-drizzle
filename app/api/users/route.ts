export async function GET() {
  return Response.json([{
    id: 1,
    name: 'John Doe',
  },{
    id: 2,
    name: 'Jane Doe',
  }]
)
}