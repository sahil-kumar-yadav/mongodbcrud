"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TopicForm from "./TopicForm";

export default function EditTopicDialog({ topic }) {
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  async function updateTopic(values) {
    try {
      setSaving(true);
      const id = toast.loading("Updating topic…");

      const res = await fetch(`/api/topics/${topic._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data?.error || "Failed to update");
      }

      toast.success("Topic updated", { id });
      setOpen(false);
      window.dispatchEvent(new Event("topics:refresh"));
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setSaving(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Topic</DialogTitle>
        </DialogHeader>
        <div className="mt-2">
          <TopicForm
            submitLabel="Save changes"
            initialValues={{ title: topic.title, description: topic.description }}
            onSubmit={updateTopic}
            submitting={saving}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
