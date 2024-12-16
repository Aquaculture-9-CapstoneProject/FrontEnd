export default function ArticleCard({ title, category, image, onClick }) {
  return (
    <div
      className="rounded-[20px] relative h-[200px] min-w-[360px] w-full max-w-[400px] overflow-hidden cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
      <div className="flex flex-col justify-between h-full px-4 py-4 relative z-10">
        <p className="font-semibold text-xs w-fit text-neutral-5 bg-secondary-5 px-2 py-1 rounded-xl">
          {category}
        </p>
        <h1 className="text-neutral-5 font-semibold">{title}</h1>
      </div>
    </div>
  );
}
