const ProfileField = ({ label, value }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="text-base text-neutral-3">{label}</div>
      <div className="mt-2 text-xl font-semibold leading-snug text-neutral-2">
        {value}
      </div>
    </div>
  );
};

const ProfileData = () => {
  const profileFields = [
    { label: "Nama Lengkap", value: "Amelia Putri" },
    { label: "Email", value: "ameliaputri@gmail.com" },
    { label: "Nomor Telepon", value: "0851-1234-5678" },
    { label: "Alamat", value: "Perumahan Harmoni Indah, Blok C5" },
    { label: "Password", value: "*********" },
  ];

  return (
    <div className="flex flex-col py-6 px-4 w-full max-w-full sm:max-w-[816px]">
      {profileFields.map((field, index) => (
        <div key={field.label} className={index > 0 ? "mt-6" : ""}>
          <ProfileField label={field.label} value={field.value} />
        </div>
      ))}
      <div className="flex gap-2 items-center mt-6 w-full text-base font-semibold text-neutral-50 justify-end">
        <button
          className="overflow-hidden px-6 py-3.5 my-auto bg-sky-800 rounded-md min-h-[52px]"
          onClick={() => {}}
          tabIndex={0}
        >
          Ubah Data Diri
        </button>
      </div>
    </div>
  );
};

export default ProfileData;
