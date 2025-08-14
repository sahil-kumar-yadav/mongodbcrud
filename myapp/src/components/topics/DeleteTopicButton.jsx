"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function DeleteTopicButton({ id, onDeleted }) {
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!confirm("Delete this topic?")) return;

    setLoading(true);
    const res = await fetch(`/api/topics/${id}`, { method: "DELETE" });

    if (res.ok) {
      toast.success("Topic deleted");
      onDeleted?.();
    } else {
      toast.error("Failed to delete");
    }
    setLoading(false);
  }

  return (
    <Button variant="destructive" size="sm" onClick={handleDelete} disabled={loading}>
      {loading ? "Deleting..." : "Delete"}
    </Button>
  );
}
