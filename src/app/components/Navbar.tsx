import Link from 'next/link';

export default function Navbar() {
    return (
        <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
            <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Tasks">Tasks</Link>
        </nav>
    );
}