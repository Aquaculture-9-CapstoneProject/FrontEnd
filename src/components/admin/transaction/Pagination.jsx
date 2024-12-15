export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center items-center mt-6 mb-14">
      <nav aria-label="Pagination">
        <ul className="flex gap-1">
          <li>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`w-[29px] h-[34px] flex justify-center items-center rounded-md border ${
                currentPage === 1
                  ? "bg-neutral-3 text-neutral-2 cursor-not-allowed"
                  : "border-neutral-5 bg-neutral-4 text-neutral-1 hover:text-neutral-5 hover:bg-secondary-5"
              }`}
            >
              &lt;
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index}>
              <button
                onClick={() => onPageChange(index + 1)}
                className={`w-[29px] h-[34px] flex justify-center items-center rounded-md border text-sm ${
                  currentPage === index + 1
                    ? "bg-secondary-5 text-neutral-5"
                    : "border-neutral-5 bg-neutral-4 text-neutral-1 hover:text-neutral-5 hover:bg-secondary-5"
                }`}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`w-[29px] h-[34px] flex justify-center items-center rounded-md border ${
                currentPage === totalPages
                  ? "bg-neutral-3 text-neutral-2 cursor-not-allowed"
                  : "border-neutral-5 bg-neutral-4 text-neutral-1 hover:text-neutral-5 hover:bg-secondary-5"
              }`}
            >
              &gt;
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
