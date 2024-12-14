import { useState, useEffect } from "react";
import { topCategories } from "../../../services/adminServices";

export default function CategoryTable() {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await topCategories();
        const categories = response.Produk.map((item) => ({
          id: item.ID,
          category: item.Kategori,
          productCount: item.Stok,
        }));
        setCategoryData(categories);
      } catch (err) {
        setError(err);
        console.error("Gagal mengambil data kategori:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-40">
        <p>Terjadi kesalahan: {error}</p>
      </div>
    );
  }

  return (
    <div className="flex overflow-hidden flex-col px-6 py-4 rounded-xl bg-neutral-5 max-w-[517px] max-md:px-5">
      <p className="text-sm font-semibold leading-loose text-neutral-1 max-md:max-w-full">
        Kategori dengan Produk Terbanyak
      </p>
      {/* Tabel Data Kategori */}
      <table className="table-auto w-full mt-4 leading-loose">
        <thead>
          <tr className="font-semibold text-neutral-3 border-b border-solid border-b-neutral-3 text-[10px]">
            <th className="px-4 py-2 text-center w-10">No.</th>
            <th className="px-4 py-2 text-left w-[200px]">Kategori</th>
            <th className="px-4 py-2 text-center">Jumlah Produk</th>
          </tr>
        </thead>
        <tbody>
          {categoryData.map((item, index) => (
            <tr
              key={item.id}
              className="border-b border-solid border-b-neutral-4 text-xs"
            >
              <td className="px-4 py-2 text-center">{index + 1}.</td>
              <td className="px-4 py-2 ">{item.category}</td>
              <td className="px-4 py-2 text-center">
                {item.productCount} produk
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
