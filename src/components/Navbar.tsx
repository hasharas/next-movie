import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black flex justify-between items-center text-white p-4">
      <Link href="/" className="text-xl font-bold">🎥 Movie Explorer</Link>
      <ul className="flex space-x-4 items-center text-sm text-gray-300">
        <li>
          <Link href="/" className="hover:underline">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline">About</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </li>     
      </ul>
    </nav>
  );
}
