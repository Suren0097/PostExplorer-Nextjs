import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to PostExplorer</h1>
      <p className="text-gray-600 mb-6">
        Discover interesting posts fetched from the JSON file.
      </p>
      <Link
        href="/posts"
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Explore Posts
      </Link>
    </div>
  );
}
