import Navbar from "../../common/Navbar";
import Article from "./Article";
import Carousel from "./Carousel";
import ChatbotButton from "../chatbot/ChatbotButton";
import Category from "./Category";
import CheapersProduct from "./CheapestProduct";
import PopularProduct from "./PopularProduct";
import PosterCard from "./PosterCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Category />
      <PosterCard />
      <CheapersProduct />
      <PopularProduct />
      <Article />
      <ChatbotButton />
    </>
  );
}
