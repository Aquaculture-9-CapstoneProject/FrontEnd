import { format } from "date-fns";
import { id } from "date-fns/locale";

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return format(date, "d MMMM yyyy, HH.mm 'WIB'", { locale: id });
};
