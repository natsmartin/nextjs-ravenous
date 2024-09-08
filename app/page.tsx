'use client'
import Header from "@components/Header";
import Footer from "@components/Footer";
import Search from "@sections/Search";


export default function Home() {
  return (
    <div className="md:flex md:flex-col justify-center text-white">
      <Header />
      <main className="h-full">
        <Search />
      </main>
      <Footer />
    </div>
  );
}
