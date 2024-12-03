import React from "react";

const TopicSection = () => {
  const topics = [
    {
      id: 1,
      label: "Panduan dan Tips",
      icon: "user/article/icon1.svg",
    },
    {
      id: 2,
      label: "Resep dan Kuliner",
      icon: "user/article/icon2.svg",
    },
    {
      id: 3,
      label: "Kesehatan",
      icon: "user/article/icon3.svg",
    },
  ];

  return (
    <section className="px-4 md:px-8">
  <h2 className="text-2xl font-semibold text-neutral-1 mb-5">
    Berbagai Topik Pilihan Untukmu
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {topics.map((topic) => (
      <button
        key={topic.id}
        className="btn btn-outline btn-primary bg-neutral-5 flex items-center gap-3 w-full h-[72px] rounded-lg border-neutral-3"
      >
        {/* Icon */}
        <img
          src={topic.icon}
          alt={topic.label}
          className="w-10 h-10 object-contain"
        />
        {/* Label */}
        <span className="text-neutral-1 font-semibold">{topic.label}</span>
      </button>
    ))}
  </div>
</section>

  );
};

export default TopicSection;