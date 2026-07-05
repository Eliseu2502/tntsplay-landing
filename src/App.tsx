import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import Audience from "./components/Audience";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import BlogPage from "./blog/BlogPage";
import PostPage from "./blog/PostPage";

function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <HowItWorks />
      <Audience />
      <Faq />
      <Footer />
    </>
  );
}

function App() {
  const path = window.location.pathname;

  if (path === "/blog") {
    return <BlogPage />;
  }

  if (path.startsWith("/blog/")) {
    return <PostPage />;
  }

  return <HomePage />;
}

export default App;