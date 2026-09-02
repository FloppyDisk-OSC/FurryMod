import ProjectApi from "./projectapi"

import { PUBLIC_STUDIO_URL } from "$env/static/public";

export default {
    /**
     * FurryMod's studio page
     */
    base: `${PUBLIC_STUDIO_URL}/`,

    /**
     * FurryMod's studio editor page
     */
    editor: `${PUBLIC_STUDIO_URL}/editor.html`,

    /**
     * FurryMod's credits page
     */
    credits: `${PUBLIC_STUDIO_URL}/credits.html`,
    
    /**
     * FurryMod's contact page
     */
    contact: `${PUBLIC_STUDIO_URL}/contact.html`,

    /**
     * FurryMod's terms of service page
     */
    terms: "/terms",

    /**
     * FurryMod's privacy policy page
     */
    privacy: "/privacy",

    /**
     * FurryMod's guideline pages for services
     */
    guidelines: {
        /**
         * PenguinMod's project uploading guidelines
         */
        projects: `${PUBLIC_STUDIO_URL}/PenguinMod-Guidelines/PROJECTS`
    },

    /**
     * Donation pages for sites
     */
    donate: {
        scratch: "https://www.scratchfoundation.org/donate",
        turbowarp: "https://github.com/sponsors/GarboMuffin"
    },

    /**
     * FurryMod's api url
     */
    projects: `${ProjectApi.OriginApiUrl}/`,

    /**
     * FurryMod's my stuff page
     */
    mystuff: `${ProjectApi.OriginApiUrl}/mystuff`,

    /**
     * FurryMod's home page
     */
    home: "https://furrymod.tutel.page/",

    /**
     * FurryMod's packager page
     */
    packager: `${PUBLIC_STUDIO_URL}/PenguinMod-Packager/`,

    /**
     * FurryMod's unofficial wiki
     */
    wiki: "https://wiki.penguinmod.com/wiki/Main_Page",

    /**
     * FurryMod's Discord invite
     */
    discord: "https://discord.gg/9VJhQVQZ9h",

    /**
     * Scratch's website
     */
    scratch: "https://scratch.mit.edu",

    /**
     * TurboWarp's website
     */
    turbowarp: "https://turbowarp.org",

    /**
     * FurryMod's github page
     */
    github: "https://github.com/FurryMod/",

    /**
     * FurryMod's basic API
     */
    basicApi: "https://penguinmod-basic-api.derpygamer2142.com/",

    /**
     * The admin panel for the api
     */
    adminPanel: "https://furrymod.tutel.page/panel"
}
