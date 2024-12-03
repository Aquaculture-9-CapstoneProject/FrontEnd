import NavbarHome from "../home/NavbarHome";
import Insight from "./Insight";
import LatestArticles from "./LatestArticles";
import Top3 from "./Top3";
import TopicSection from "./TopicSection";

export default function Article() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8">
      <NavbarHome />
      <Top3 />
      <TopicSection />
      <Insight />
      <LatestArticles />
    </div>
  );
}