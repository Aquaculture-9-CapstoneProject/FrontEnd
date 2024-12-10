import React from "react";

export default function ArticleTableHeader() {
  return (
    <tr>
      <th className="font-semibold text-neutral-3 text-[10px] border-b border-neutral-3">Gambar</th>
      <th className="font-semibold text-neutral-3 text-[10px] border-b border-neutral-3">Judul</th>
      <th className="font-semibold text-neutral-3 text-[10px] border-b border-neutral-3">Kategori</th>
      <th className="font-semibold text-neutral-3 text-[10px] border-b border-neutral-3">Tanggal dan Waktu Diunggah</th>
      <th className="font-semibold text-neutral-3 text-[10px] border-b border-neutral-3">Aksi</th>
    </tr>
  );
}
