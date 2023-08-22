import { EActiveFilter, FilterType } from "../../../types/filters";
import { ThemesData } from "../../../types/themes";
import { RepeatReminderType } from "../initialStorage/initialRepeatReminder";
import { ImportanceType } from "../initialStorage/initialImportance";
import { EStatus } from "../../../types/reminder";

// export const filterReminders = (allReminders: ReminderType[], filters: FilterType[]) =>
//   allReminders.filter((reminderItem) =>
//     filters.every((filterItem) => {
//       switch (filterItem.type) {
//         case EActiveFilter.ACTIVE_FILTER_THEMES:
//           const filterThemes = filterItem.activeFilter as ThemesData;
//           return reminderItem.theme?.id === filterThemes?.id;
//         case EActiveFilter.ACTIVE_FILTER_TIME:
//           const filterRepeat = filterItem.activeFilter as RepeatReminderType;
//           return reminderItem.repeat.type === filterRepeat?.type;
//         case EActiveFilter.ACTIVE_FILTER_IMPORTANCE:
//           const filterImportance = filterItem.activeFilter as ImportanceType;
//           return reminderItem.importance.type === filterImportance?.type;
//         case EActiveFilter.ACTIVE_FILTER_STATUS:
//           const filterStatus = filterItem.activeFilter as EStatus;
//           return reminderItem.status === filterStatus;
//       }
//     })
//   );
type ReturnedFiltersTheme = (Omit<FilterType, "activeFilter"> & { activeFilter: ThemesData }) | undefined;
type ReturnedFiltersNotify = (Omit<FilterType, "activeFilter"> & { activeFilter: RepeatReminderType }) | undefined;
type ReturnedFiltersImportance = (Omit<FilterType, "activeFilter"> & { activeFilter: ImportanceType }) | undefined;
type ReturnedFiltersStatus = (Omit<FilterType, "activeFilter"> & { activeFilter: EStatus }) | undefined;

const formatFiltersTheme = (filters?: FilterType[]) =>
  filters?.find((filterItem) => filterItem.type === EActiveFilter.ACTIVE_FILTER_THEMES) as ReturnedFiltersTheme;

const formatFiltersNotify = (filters?: FilterType[]) =>
  filters?.find((filterItem) => filterItem.type === EActiveFilter.ACTIVE_FILTER_TIME) as ReturnedFiltersNotify;

const formatFiltersImportance = (filters?: FilterType[]) =>
  filters?.find(
    (filterItem) => filterItem.type === EActiveFilter.ACTIVE_FILTER_IMPORTANCE
  ) as ReturnedFiltersImportance;

const formatFiltersStatus = (filters?: FilterType[]) =>
  filters?.find((filterItem) => filterItem.type === EActiveFilter.ACTIVE_FILTER_STATUS) as ReturnedFiltersStatus;

export const formattedFilters = (filtersList?: FilterType[]) => {
  const filterStatus = formatFiltersStatus(filtersList)?.activeFilter;
  return {
    themeId: { _eq: formatFiltersTheme(filtersList)?.activeFilter?.id },
    notify: { _eq: formatFiltersNotify(filtersList)?.activeFilter?.type?.toLowerCase() },
    importance: { _eq: formatFiltersImportance(filtersList)?.activeFilter?.type?.toLowerCase() },
    status: {
      _eq: filterStatus ? (filterStatus === EStatus.active ? EStatus.active : EStatus.archive) : undefined,
    },
  };
};
