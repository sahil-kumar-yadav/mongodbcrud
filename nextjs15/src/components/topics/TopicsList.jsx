"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DeleteTopicButton from "./DeleteTopicButton";
import EditTopicDialog from "./EditTopicDialog";

export default function TopicsList() {
  const [topics, setTopics] = useState([]);

  const fetchTopics = useCallback(async () => {
    const res = await fetch("/api/topics", { cache: "no-store" });
    const data = await res.json();
    setTopics(data);
  }, []);

  useEffect(() => {
    fetchTopics();
  }, [fetchTopics]);

  // Listen for global refresh events (create/edit/delete)
  useEffect(() => {
    const handler = () => fetchTopics();
    window.addEventListener("topics:refresh", handler);
    return () => window.removeEventListener("topics:refresh", handler);
  }, [fetchTopics]);

  return (
    <div className="grid gap-4">
      <AnimatePresence>
        {topics.map(topic => (
          <motion.div
            key={topic._id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="p-4 border rounded-lg bg-card"
          >
            <h2 className="font-semibold">{topic.title}</h2>
            <p className="text-muted-foreground">{topic.description}</p>
            <div className="mt-3 flex gap-2">
              <EditTopicDialog topic={topic} />
              <DeleteTopicButton id={topic._id} onDeleted={fetchTopics} />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {topics.length === 0 && (
        <div className="text-sm text-muted-foreground">
          No topics yet. Click <span className="font-medium">New Topic</span> to add one.
        </div>
      )}
    </div>
  );
}
