import { supabase } from "@/lib/supabase";

import { getAppMode } from "@/lib/init/getAppMode";
import { getOrCreateUserId } from "@/data/getOrCreateUserId";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const date = body.date;
    const userId = await getOrCreateUserId();

    const appMode = getAppMode();
    const table = appMode === "mock" ? "mock_history_views" : "history_views";

    const { error } = await supabase.from(table).upsert(
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
