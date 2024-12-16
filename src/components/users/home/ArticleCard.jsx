export default function ArticleCard({ title, category, image, onClick }) {
  return (
    <div
      className="rounded-[20px] relative h-[200px] w-[360px] bg-cover bg-no-repeat bg-center cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
      style={{
        backgroundImage: `linear-gradient(224deg, rgba(0, 0, 0, 0) 21.94%, rgba(0, 0, 0, 0.32) 56.76%), url(${image})`,
      }}
      onClick={onClick}
    >
      <div className="flex flex-col justify-between h-full px-4 py-4">
        <p className="font-semibold text-xs w-fit text-neutral-5 bg-secondary-5 px-2 py-1 rounded-xl">
          {category}
        </p>
        <h1 className="text-neutral-5 font-semibold">{title}</h1>
      </div>
    </div>
  );
}
