import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import CategoryButtons from "@/components/Categories/CategoryButtons";
import SearchForm from "@/components/SearchForm/SearchForm";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-[1280px] bg-white">
      <Header />
      <Hero />
      <CategoryButtons />
      <SearchForm />
    </main>
  );
}
