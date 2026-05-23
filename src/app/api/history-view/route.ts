import { createClient } from "@/lib/supabase/server";

import { getAppMode } from "@/lib/init/getAppMode";
import { getUserId } from "@/data/id/getUserId";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const date = body.date;
    const userId = await getUserId();

    const appMode = await getAppMode();
    const table = appMode === "mock" ? "mock_history_views" : "history_views";

    const supabase = await createClient();
    const response = await supabase.from(table).upsert(
      {
        user_id: userId,
        date,
      },
      {
        onConflict: "user_id, date",
      },
    );

    if (response.error) {
      console.log(response.error);

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
