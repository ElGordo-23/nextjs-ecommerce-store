import Link from 'next/link';
import { navStyles } from '../styles/navstyle.js';

export default function Header() {
  return (
    <header css={navStyles}>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/carList">
          <a>Cars</a>
        </Link>
        <Link href="/garage">
          <a>Your Garage</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
    </header>
  );
}
