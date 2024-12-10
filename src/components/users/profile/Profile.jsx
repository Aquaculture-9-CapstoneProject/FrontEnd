import Navbar from "../../common/Navbar";
import ProfileData from "./ProfileData";

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-10 md:px-20 mt-4">
        <h1 className="text-[24px] sm:text-[28px] font-semibold text-neutral-1">
          Profil Saya
        </h1>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
          <div className="flex flex-col px-4 py-6 rounded-2xl shadow-md bg-neutral-5 max-w-full md:max-w-[312px] w-full text-neutral-1">
            <img
              loading="lazy"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt=""
              className="object-contain w-full aspect-[0.9]"
            />
            <button
              className="flex overflow-hidden flex-col justify-center px-0.5 mt-6 w-full text-base font-semibold rounded-md border-2 border-solid border-neutral-200 min-h-[52px]"
              tabIndex="0"
              aria-label="Choose photo"
            >
              <div className="gap-2.5 self-stretch px-6 py-3.5 w-full rounded-md min-h-[52px]">
                Pilih Foto
              </div>
            </button>
            <div className="mt-6 text-xs leading-5" role="note">
              Besar file: maksimum 100 Megabytes. Ekstensi file yang
              diperbolehkan: .JPG .JPEG .PNG
            </div>
          </div>
          <ProfileData />
        </div>
      </div>
    </>
  );
}
