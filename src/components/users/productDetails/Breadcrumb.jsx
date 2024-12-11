import { Link } from "react-router-dom";

export default function Breadcrumb({ items, links }) {
  return (
    <div className="breadcrumbs mt-5 mx-4 sm:mx-8 md:mx-12 lg:mx-16">
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className={`${index === items.length - 1 ? "font-semibold text-primary-5" : ""}`}
          >
            {index === items.length - 1 ? (
              <span>{item}</span>
            ) : (
              <Link to={links[index]}>{item}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
