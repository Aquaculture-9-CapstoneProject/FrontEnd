export default function FilterSearch() {
    return (
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold text-neutral-1">Transaksi Bulan Ini</h2>
        <div className="flex gap-2 items-center">
          <div className="flex items-center border border-neutral-3 bg-neutral-5 rounded-md">
            <input
              type="text"
              placeholder="Cari"
              className="input input-sm bg-neutral-5 text-[10.35px] border-0 focus:outline-none"
            />
            <button className="px-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.191 9.03627H9.60672L9.39964 8.83658C10.2871 7.80117 10.7457 6.38856 10.4942 4.88721C10.1466 2.83117 8.43079 1.18929 6.35995 0.937832C3.23151 0.553249 0.598598 3.18617 0.983182 6.3146C1.23464 8.38544 2.87652 10.1013 4.93256 10.4489C6.43391 10.7003 7.84651 10.2418 8.88193 9.35429L9.08162 9.56137V10.1456L12.2248 13.2889C12.5281 13.5921 13.0236 13.5921 13.3268 13.2889C13.6301 12.9856 13.6301 12.4901 13.3268 12.1869L10.191 9.03627ZM5.75349 9.03627C3.91193 9.03627 2.42537 7.54971 2.42537 5.70815C2.42537 3.86658 3.91193 2.38002 5.75349 2.38002C7.59506 2.38002 9.08162 3.86658 9.08162 5.70815C9.08162 7.54971 7.59506 9.03627 5.75349 9.03627Z"
                  fill="#A3A3A3"
                />
              </svg>
            </button>
          </div>
          <details className="dropdown dropdown-end">
            <summary className="btn btn-sm bg-neutral-5 border-neutral-4 text-neutral-1 text-xs font-semibold flex items-center gap-2">
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.66667 8H7.33333V6.66667H4.66667V8ZM0 0V1.33333H12V0H0ZM2 4.66667H10V3.33333H2V4.66667Z"
                  fill="#262626"
                />
              </svg>
              Filter
            </summary>
            <ul className="mt-2 menu dropdown-content bg-neutral-5 text-xs rounded-box z-[1] w-40 p-2 shadow">
              <li>
                <a>Berhasil</a>
              </li>
              <li>
                <a>Gagal</a>
              </li>
            </ul>
          </details>
        </div>
      </div>
    );
  }
  