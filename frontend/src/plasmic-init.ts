import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "a4vR6PNggu8YGmD5eXQy3X", // ID of a project you are using
      token:
        "1HhuKQpL6quWAVYrVfl93kEXp6YIkfNT2iV7QEWGMa2sMIc0YxMKGNLf55KdNGtOYRVHI9bdFVyqoj4MTJ4g", // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});
