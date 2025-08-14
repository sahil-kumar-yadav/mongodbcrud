"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { topicSchema, defaultTopicValues } from "@/lib/validations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function TopicForm({
  submitLabel = "Save",
  initialValues = defaultTopicValues,
  onSubmit,          // (values) => Promise<void>
  submitting = false // controlled by parent
}) {
  const form = useForm({
    resolver: zodResolver(topicSchema),
    defaultValues: initialValues,
    mode: "onChange",
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <div className="space-y-1.5">
        <label className="text-sm font-medium">Title</label>
        <Input placeholder="e.g., Learn Next.js 15" {...register("title")} />
        {errors.title && (
          <p className="text-xs text-red-500">{errors.title.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium">Description</label>
        <Textarea
          rows={4}
          placeholder="Briefly describe the topic…"
          {...register("description")}
        />
        {errors.description && (
          <p className="text-xs text-red-500">{errors.description.message}</p>
        )}
      </div>

      <div className="flex justify-end gap-2">
        <Button type="submit" disabled={!isValid || submitting}>
          {submitting ? "Saving…" : submitLabel}
        </Button>
      </div>
    </form>
  );
}
