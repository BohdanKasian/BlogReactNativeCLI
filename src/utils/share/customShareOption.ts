import { Platform } from "react-native";
import { share_icon } from "../../constants/ShareIcon";

export const customShareOption = ({ url, title, message }: { url: string; title: string; message: string }) => {
  return Platform.select({
    ios: {
      activityItemSources: [
        {
          placeholderItem: {
            type: "text",
            content: title,
          },
          item: {
            default: {
              type: "text",
              content: `${message}: ${url}`,
            },
          },
          linkMetadata: {
            title: title,
            originalUrl: message,
          },
          thumbnailImage: {
            default: share_icon,
          },
        },
      ],
    },
    default: {
      title,
      subject: title,
      message: `${message} ${url}`,
    },
  });
};
