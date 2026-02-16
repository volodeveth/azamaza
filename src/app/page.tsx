import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import CategoryButtons from "@/components/Categories/CategoryButtons";
import SearchForm from "@/components/SearchForm/SearchForm";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F0F0F0" }}>
      <main
        className="mx-auto min-h-screen bg-white shadow-xl"
        style={{ width: "390px", maxWidth: "100%" }}
      >
        <Header />
        <Hero />
        <CategoryButtons />
        <SearchForm />
      </main>
    </div>
  );
}
