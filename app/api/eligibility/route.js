
export async function POST(request) {
  const data = await request.json();
  console.log("ELIGIBILITY_FORM", data);
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
