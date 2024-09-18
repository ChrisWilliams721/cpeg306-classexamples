
import Link from 'react'
export default function Home() {

  let linkStyles = "underline";

  return (
   <main>
    <h1>CPRG306 Class Examples</h1>
    <p>Hello World</p>
    <h2>Examples Links</h2>
    <ul>
      <li>
        <Link className={linkStyles} herf=".week 2">
        Week 2 - Intro
        </Link>
      </li>
      <li>
        <Link className={linkStyles} herf=".week 3">
        Week 3 - objects
        </Link>
      </li>
    </ul>
    
   </main>
  );
}
