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

export enum sidepanelButtons {
  profile,
  projects,
  settingsGlobal,
  back,
  map,
  sheet,
  heroes,
  location,
  analytics,
  settingsLocal,
}

export interface ISideButton {
  goTo: string; // result = current path + goTo
  clearPath: boolean;
  icon: JSX.Element;
  iconFill: boolean; // fill or stroke
}

export interface ISideButtonWithType extends ISideButton {
  type: sidepanelButtons;
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

export const states: Record<sidepanelStates, ISideButtonWithType[]> =
  {
    [sidepanelStates.hide]: [],
    [sidepanelStates.mainPage]: [
      { ...buttons.profileButton, type: sidepanelButtons.profile },
      { ...buttons.projectsButton, type: sidepanelButtons.projects },
      {
        ...buttons.settingsGlobalButton,
        type: sidepanelButtons.settingsGlobal,
      },
    ],
    [sidepanelStates.projectCreate]: [
      { ...buttons.profileButton, type: sidepanelButtons.profile },
      { ...buttons.backButton, type: sidepanelButtons.back },
      {
        ...buttons.settingsGlobalButton,
        type: sidepanelButtons.settingsGlobal,
      },
    ],
    [sidepanelStates.projectOpen]: [
      { ...buttons.backButton, type: sidepanelButtons.back },
      { ...buttons.mapButton, type: sidepanelButtons.map },
      { ...buttons.sheetButton, type: sidepanelButtons.sheet },
      { ...buttons.heroesButton, type: sidepanelButtons.heroes },
      { ...buttons.locationButton, type: sidepanelButtons.location },
      {
        ...buttons.analyticsButton,
        type: sidepanelButtons.analytics,
      },
      {
        ...buttons.settingsLocalButton,
        type: sidepanelButtons.settingsLocal,
      },
    ],
  };

export const determinantToState: Record<
  string,
  { state: sidepanelStates; button: sidepanelButtons }
> = {
  profile: {
    state: sidepanelStates.mainPage,
    button: sidepanelButtons.profile,
  },
  projects: {
    state: sidepanelStates.mainPage,
    button: sidepanelButtons.projects,
  },
  globalSettings: {
    state: sidepanelStates.mainPage,
    button: sidepanelButtons.settingsGlobal,
  },
  build: {
    state: sidepanelStates.projectCreate,
    button: sidepanelButtons.back,
  },
  map: {
    state: sidepanelStates.projectOpen,
    button: sidepanelButtons.map,
  },
  sheet: {
    state: sidepanelStates.projectOpen,
    button: sidepanelButtons.sheet,
  },
  heroes: {
    state: sidepanelStates.projectOpen,
    button: sidepanelButtons.heroes,
  },
  locations: {
    state: sidepanelStates.projectOpen,
    button: sidepanelButtons.location,
  },
  analytics: {
    state: sidepanelStates.projectOpen,
    button: sidepanelButtons.analytics,
  },
  localSettings: {
    state: sidepanelStates.projectOpen,
    button: sidepanelButtons.settingsLocal,
  },
  watchstate: {
    state: sidepanelStates.hide,
    button: sidepanelButtons.profile,
  },
};
