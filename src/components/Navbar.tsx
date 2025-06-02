import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4">
      <Link href="/" className="text-xl font-bold">🎥 Movie Explorer</Link>
    </nav>
  );
}
