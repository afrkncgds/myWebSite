import type {PageId} from "../types";

export const ROUTES: Record<PageId, PageId> = {
    about: "about",
    projects: "projects",
    skills: "skills",
    contact: "contact",
} as const;

export const DEFAULT_PAGE: PageId = "about";
