import TopicsList from "@/components/topics/TopicsList";

export default function Home() {
  return (
     <main className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-2xl font-semibold">Topics</h1>
      <TopicsList />
    </main>
  );
}
