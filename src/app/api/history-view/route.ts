import { supabase } from "@/lib/supabase";

import { getOrCreateUserId } from "@/data/getOrCreateUserId";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const date = body.date;
    const userId = await getOrCreateUserId();

    const { error } = await supabase.from("mock_history_views").upsert(
      {
        user_id: userId,
        date,
      },
      {
        onConflict: "user_id, date",
      },
    );

    if (error) {
      console.log(error);

      return Response.json(
        { error: "Failed to save history view" },
        { status: 500 },
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.log(error);

    return Response.json({ error: "Unexpected server error" }, { status: 500 });
  }
}
