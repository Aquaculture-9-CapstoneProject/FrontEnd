import Article from "./Article";
import Carousel from "./Carousel";
import CartButton from "./CartButton";
import Category from "./Category";
import CheapersProduct from "./CheapestProduct";
import NavbarHome from "./NavbarHome";
import PopularProduct from "./PopularProduct";
import PosterCard from "./PosterCard";

export default function Home() {
  return (
    <>
      <NavbarHome />
      <Carousel />
      <Category />
      <PosterCard />
      <CheapersProduct />
      <PopularProduct />
      <Article />
      <CartButton />
    </>
  );
}
