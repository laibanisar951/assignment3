import react from "react"
import Link from "next/link";

export default function Home() {
  return (
   <>
   <h1> welcome to my Navbar web page</h1>
   <ul> 
   <li><Link href='/'>Home</Link></li>
   <li><Link href='/About'>About</Link></li>
   <li><Link href='/Contact'>Contact</Link></li>
   <li><Link href='/Footer'>Footer</Link></li>
    </ul>
    </>
  );
}


