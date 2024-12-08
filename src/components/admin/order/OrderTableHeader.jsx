import React from "react";

export default function OrderTableHeader() {
  return (
    <tr>
      <th className="font-semibold text-neutral-3 text-[10px] border-b border-neutral-3">ID</th>
      <th className="font-semibold text-neutral-3 text-[10px] border-b border-neutral-3">Nama Pengguna</th>
      <th className="font-semibold text-neutral-3 text-[10px] border-b border-neutral-3">Produk</th>
      <th className="font-semibold text-neutral-3 text-[10px] border-b border-neutral-3">
        Tanggal dan Waktu Pemesanan
      </th>
      <th className="font-semibold text-neutral-3 text-[10px] border-b border-neutral-3">Alamat</th>
      <th className="font-semibold text-neutral-3 text-[10px] border-b border-neutral-3">Nominal</th>
      <th className="font-semibold text-neutral-3 text-[10px] border-b border-neutral-3">Status</th>
      <th className="font-semibold text-neutral-3 text-[10px] border-b border-neutral-3">Aksi</th>
    </tr>
  );
}
