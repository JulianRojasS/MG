export async function POST() {
    const res = await fetch('http://localhost:8080/data', {
      method: 'POST',
      body: JSON.stringify({ time: new Date().toISOString() }),
    })
   
    const data = await res.json()
   
    return Response.json(data)
  }