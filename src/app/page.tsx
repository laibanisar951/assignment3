"use client"
import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function Home() {
  const route = useRouter();
  return (
   <>
   <h1> welcome to my next.js web page</h1>
   <ul> 
   <li><Link href='/Navbar'>Navbar</Link></li>
   <li><Link href='/About'>About</Link></li>
   <li><Link href='/Contact'>Contant</Link></li>
   <li><Link href='/Footer'>Footer</Link></li>
    </ul>

    <button onClick={() => route.push('/Navbar')}>Go to Navbar page</button>
    <br></br>
    <button onClick={() => route.push('/About')}>Go to About page</button>
    <br></br>
    <button onClick={() => route.push('/Contact')}>Go to Contact page</button>
    <br></br>
    <button onClick={() => route.push('/Footer')}>Go to Footer page</button>
    <br></br>
    </>
    
  );
}
