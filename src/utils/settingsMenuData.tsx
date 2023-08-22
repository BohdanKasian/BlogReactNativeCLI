import * as React from "react";
import {
  ArrowRightIcon,
  BellSmallicon,
  FacebookIcon,
  HeadPhoneIcon,
  InstagramIcon,
  LaptopIcon,
  LockIcon,
  NoteAcceptIcon,
  NoteIcon,
  PenIcon,
  PeopleSmallIcon,
  ProfileIcon,
  StarIcon,
  TicketIcon,
  TwitterIcon,
} from "../assets/images/icons";
import { ScreensList } from "../navigation/types";
import { SettingsItemProps } from "../components/SettingsItem";
import { FACEBOOK_LINK, INSTAGRAM_LINK, TWITTER_LINK, WEB_SITE_LINK } from "../constants/socialLinks";
import { END_USER_LICENSE_AGREEMENT, PRIVACY_LINK, TERMS_LINK } from "../constants/termsPrivacyLinks";

type arrItemType = Omit<SettingsItemProps, "arrLength" | "index">;
export type settingsMenuDataType = { title: string; items: arrItemType[] }[];

export const settingsMenuData: settingsMenuDataType = [
  {
    title: "screens.settings.general.title",
    items: [
      {
        leftIcon: PenIcon,
        text: "screens.settings.general.edit-theme",
        rightIcon: <ArrowRightIcon />,
        link: ScreensList.Themes,
      },
      {
        leftIcon: ProfileIcon,
        text: "screens.settings.general.edit-profile",
        rightIcon: <ArrowRightIcon />,
        link: ScreensList.EditProfile,
      },
      {
        leftIcon: BellSmallicon,
        text: "screens.settings.general.notifications",
        rightIcon: <ArrowRightIcon />,
        link: ScreensList.Notifications,
      },
      {
        leftIcon: TicketIcon,
        text: "screens.settings.general.subscription",
        rightIcon: <ArrowRightIcon />,
      },
    ],
  },
  {
    title: "screens.settings.support.title",
    items: [
      {
        leftIcon: HeadPhoneIcon,
        text: "screens.settings.support.contact",
        link: ScreensList.ContactSupport,
        rightIcon: <ArrowRightIcon />,
      },
      {
        leftIcon: PenIcon,
        text: "screens.settings.support.request",
        link: ScreensList.RequestFeature,
        rightIcon: <ArrowRightIcon />,
      },
    ],
  },
  {
    title: "screens.settings.about.title",
    items: [
      {
        leftIcon: LaptopIcon,
        text: "screens.settings.about.website",
        ...WEB_SITE_LINK,
      },
      {
        leftIcon: PeopleSmallIcon,
        text: "screens.settings.about.share-friend",
        share: true,
      },
      {
        leftIcon: StarIcon,
        text: "screens.settings.about.rate-us",
        openAppStore: true,
      },
      {
        leftIcon: FacebookIcon,
        text: "screens.settings.about.follow-fb",
        ...FACEBOOK_LINK,
      },
      {
        leftIcon: InstagramIcon,
        text: "screens.settings.about.follow-insta",
        ...INSTAGRAM_LINK,
      },
      {
        leftIcon: TwitterIcon,
        text: "screens.settings.about.follow-twitter",
        ...TWITTER_LINK,
      },
    ],
  },
  {
    title: "screens.settings.legal.title",
    items: [
      {
        leftIcon: LockIcon,
        text: "privacy.link.privacy",
        openAppLink: PRIVACY_LINK,
        openAppLinkCatch: PRIVACY_LINK,
      },
      {
        leftIcon: NoteAcceptIcon,
        text: "privacy.link.terms",
        openAppLink: TERMS_LINK,
        openAppLinkCatch: TERMS_LINK,
      },
      {
        leftIcon: NoteIcon,
        text: "privacy.link.user-license",
        openAppLink: END_USER_LICENSE_AGREEMENT,
        openAppLinkCatch: END_USER_LICENSE_AGREEMENT,
      },
    ],
  },
];
