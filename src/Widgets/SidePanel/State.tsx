import LocationIcon from "./icons/Location.svg";
import HeroesIcon from "./icons/Heroes.svg";
import BackIcon from "./icons/Back.svg";
import AnalyticsIcon from "./icons/Analytics.svg";
import SheetIcon from "./icons/Sheet.svg";
import MapIcon from "./icons/Map.svg";
import ProfileIcon from "./icons/Profile.svg";
import SettingsIcon from "./icons/Settings.svg";
import ProjectsIcon from "./icons/Projects.svg";
import { JSX } from "react";

export enum sidepanelStates {
  hide,
  mainPage,
  projectCreate,
  projectOpen,
}

export interface ISideButton {
  goTo: string; // result = current path + goTo
  clearPath: boolean;
  icon: JSX.Element;
  iconFill: boolean; // fill or stroke
}

export interface ObjectWithSideButton {
  [key: string]: ISideButton;
}

export const buttons: ObjectWithSideButton = {
  profileButton: {
    icon: <ProfileIcon />,
    iconFill: true,
    goTo: "profile",
    clearPath: true,
  },
  projectsButton: {
    icon: <ProjectsIcon />,
    iconFill: true,
    goTo: "projects",
    clearPath: true,
  },
  settingsGlobalButton: {
    icon: <SettingsIcon />,
    iconFill: false,
    goTo: "globalSettings",
    clearPath: true,
  },
  backButton: {
    icon: <BackIcon />,
    iconFill: true,
    goTo: "projects",
    clearPath: true,
  },
  mapButton: {
    icon: <MapIcon />,
    iconFill: false,
    goTo: "map",
    clearPath: false,
  },
  sheetButton: {
    icon: <SheetIcon />,
    iconFill: true,
    goTo: "sheet",
    clearPath: false,
  },
  heroesButton: {
    icon: <HeroesIcon />,
    iconFill: false,
    goTo: "heroes",
    clearPath: false,
  },
  locationButton: {
    icon: <LocationIcon />,
    iconFill: true,
    goTo: "locations",
    clearPath: false,
  },
  analyticsButton: {
    icon: <AnalyticsIcon />,
    iconFill: true,
    goTo: "analytics",
    clearPath: false,
  },
  settingsLocalButton: {
    icon: <SettingsIcon />,
    iconFill: false,
    goTo: "localSettings",
    clearPath: false,
  },
};

export const states = [
  [],
  [
    buttons.profileButton,
    buttons.projectsButton,
    buttons.settingsGlobalButton,
  ],
  [
    buttons.profileButton,
    buttons.backButton,
    buttons.settingsGlobalButton,
  ],
  [
    buttons.backButton,
    buttons.mapButton,
    buttons.sheetButton,
    buttons.heroesButton,
    buttons.locationButton,
    buttons.analyticsButton,
    buttons.settingsLocalButton,
  ],
];

export const determinantToState: Record<
  string,
  { state: sidepanelStates; button: number }
> = {
  profile: {
    state: sidepanelStates.mainPage,
    button: 0,
  },
  projects: {
    state: sidepanelStates.mainPage,
    button: 1,
  },
  globalSettings: {
    state: sidepanelStates.mainPage,
    button: 2,
  },
  build: {
    state: sidepanelStates.projectCreate,
    button: 1,
  },
  map: {
    state: sidepanelStates.projectOpen,
    button: 1,
  },
  sheet: {
    state: sidepanelStates.projectOpen,
    button: 2,
  },
  heroes: {
    state: sidepanelStates.projectOpen,
    button: 3,
  },
  locations: {
    state: sidepanelStates.projectOpen,
    button: 4,
  },
  analytics: {
    state: sidepanelStates.projectOpen,
    button: 5,
  },
  localSettings: {
    state: sidepanelStates.projectOpen,
    button: 6,
  },
  watchstate: {
    state: sidepanelStates.hide,
    button: 0,
  },
};
