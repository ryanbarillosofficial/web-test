import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello, World</h1>
      <Link href="/users">Users</Link>
      <h2>This is test sample</h2>
      <ProductCard/>
    </main>
  );
}
