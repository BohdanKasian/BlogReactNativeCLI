import { EActiveFilter, FilterType } from "../../../types/filters";

export const filtersInitialData: FilterType[] = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    type: EActiveFilter.ACTIVE_FILTER_THEMES,
    title: "filters.theme.title",
    activeModal: false,
    activeFilter: null,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    type: EActiveFilter.ACTIVE_FILTER_TIME,
    title: "filters.time",
    activeModal: false,
    activeFilter: null,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    type: EActiveFilter.ACTIVE_FILTER_IMPORTANCE,
    title: "filters.importance",
    activeModal: false,
    activeFilter: null,
  },
  {
    id: "58694a0f-3da1-471f-bd96",
    type: EActiveFilter.ACTIVE_FILTER_STATUS,
    title: "filters.status.title",
    activeModal: false,
    activeFilter: null,
  },
];
