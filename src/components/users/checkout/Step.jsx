export default function Step() {
  return (
    <ol className="flex items-center justify-center w-full">
      {/* Step 1 */}
      <li>
        <div className="flex items-center mb-1">
          <img src="/user/checkout/step1.png" alt="step1" />
          <div className="h-2 w-60 bg-neutral-4" />
        </div>
        <h1 className="-ml-6">Pembelian</h1>
      </li>

      {/* Step 2 */}
      <li>
        <div className="flex items-center mb-1">
          <img src="/user/checkout/step2.png" alt="step2" />
          <div className="h-2 w-60 bg-neutral-4" />
        </div>
        <h1 className="-ml-8">Pembayaran</h1>
      </li>

      {/* Step 3 */}
      <li>
        <div className="flex items-center mb-1">
          <img src="/user/checkout/step3.png" alt="step3" />
        </div>
        <h1 className="-ml-14">Status Pembayaran</h1>
      </li>
    </ol>
  );
}
