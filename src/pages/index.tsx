import Link from 'next/link';

const IndexPage = () => (
  <div>
    <h1 className="text-3xl font-bold underline">
      Hello Next.js with TypeScript and Tailwind 👋
    </h1>
    <p>
      <Link href="/about">About</Link>
    </p>
  </div>
);

export default IndexPage;
