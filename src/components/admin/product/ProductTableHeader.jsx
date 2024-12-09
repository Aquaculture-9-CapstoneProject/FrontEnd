import React from "react";

export default function ProductTableHeader() {
  return (
    <tr>
      <th className="font-semibold text-neutral-3 text-[10px] border-b border-neutral-3">ID Produk</th>
      <th className="font-semibold text-neutral-3 text-[10px] border-b border-neutral-3">Gambar</th>
      <th className="font-semibold text-neutral-3 text-[10px] border-b border-neutral-3">Produk</th>
      <th className="font-semibold text-neutral-3 text-[10px] border-b border-neutral-3">Kategori</th>
      <th className="font-semibold text-neutral-3 text-[10px] border-b border-neutral-3">Harga</th>
      <th className="font-semibold text-neutral-3 text-[10px] border-b border-neutral-3">Stok</th>
      <th className="font-semibold text-neutral-3 text-[10px] border-b border-neutral-3">Aksi</th>
    </tr>
  );
}
