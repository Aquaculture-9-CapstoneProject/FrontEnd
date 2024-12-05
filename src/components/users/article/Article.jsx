import { useEffect } from "react";
import Navbar from "../../common/Navbar";
import Insight from "./Insight";
import LatestArticles from "./LatestArticles";
import Top3 from "./Top3";
import TopicSection from "./TopicSection";

export default function Article() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 bg-neutral-5">
        <Top3 />
        <TopicSection />
        <Insight />
        <LatestArticles />
      </div>
    </div>
  );
}
