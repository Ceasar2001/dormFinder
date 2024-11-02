import Home from "@/components/Home/Home";
import Listing from "@/components/Listing/Listing";

export default function HomePage() {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="listing">
        <Listing />
      </section>
      {/* Add other sections like Houses, Dorms, Blogs, etc. here */}
    </div>
  );
}
