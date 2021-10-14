import Cookies from 'js-cookie';
import Link from 'next/link';
import { navStyles } from '../styles/navstyle.js';

export default function Header() {
  function cartCount() {
    try {
      return JSON.parse(Cookies.get('cart'));
    } catch (err) {
      return '';
    }
  }
  return (
    <div css={navStyles}>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/carMenu">
          <a>Cars</a>
        </Link>
        <Link href="/garage">
          <a className="Garage">
            Your Garage
            {cartCount().length > 0 && <div>{cartCount().length}</div>}
          </a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
    </div>
  );
}
