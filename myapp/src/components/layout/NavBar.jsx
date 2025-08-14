"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ModeToggle from "./ModeToggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import TopicForm from "@/components/topics/TopicForm";
import { toast } from "sonner";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  async function createTopic(values) {
    try {
      setSaving(true);
      // optimistic toast
      const id = toast.loading("Creating topic…");

      const res = await fetch("/api/topics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data?.error || "Failed to create");
      }

      toast.success("Topic created", { id });
      // Close sheet and nudge the list to refresh (via a simple event)
      setOpen(false);
      window.dispatchEvent(new Event("topics:refresh"));
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="sticky top-0 z-40 border-b bg-background/60 backdrop-blur">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Link href="/" className="font-semibold tracking-tight">
            Topics Pro
          </Link>
        </motion.div>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button>New Topic</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Add Topic</SheetTitle>
              </SheetHeader>

              <div className="mt-4">
                <TopicForm submitLabel="Create" onSubmit={createTopic} submitting={saving} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
