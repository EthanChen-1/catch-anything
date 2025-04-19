import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1 className="text-3xl">Catch Anything?</h1>
      <Link href="posts">Show Posts</Link>
    </div>
  );
}

export default HomePage;
