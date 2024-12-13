import useUserStore from "../../../store/useUsersStore";

export default function AddressCard() {
  const { user } = useUserStore();

  return (
    <div className="p-3 rounded-lg border-[1px] border-solid border-neutral-3 w-full">
      <div className="flex flex-wrap">
        <h1 className="font-semibold text-base md:text-lg sm:text-sm text-neutral-1">
          {user?.name} -
        </h1>
        <p className="text-base md:text-lg sm:text-sm text-neutral-1">
          {user?.phone}
        </p>
      </div>
      <p className="text-base md:text-lg sm:text-sm text-neutral-1">
        {user?.address}
      </p>
    </div>
  );
}
