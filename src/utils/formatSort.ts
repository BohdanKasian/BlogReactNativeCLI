import { EnumSortTypes } from "../../types/sort";

export const formatSortToOrder = (sort: EnumSortTypes) => {
  let order = {};
  if (sort === EnumSortTypes.importanceHigh || sort === EnumSortTypes.importanceLow) {
    order = {
      importance: sort === EnumSortTypes.importanceHigh ? "desc" : "asc",
    };
  } else {
    order = {
      updatedAt: sort === EnumSortTypes.dateNew ? "asc" : "desc",
    };
  }
  return order;
};
