import AboutMe from "components/AboutMe"
import React from "react"

type route = {
    link: string,
    text: string,
    component: React.ReactNode
}

export const routes : route[] = [
    {
        link: "/",
        text: "About Me",
        component: <AboutMe />
    }, {
        link: "resume",
        text: "Resume",
        component: ""
    }, {
        link: "projects",
        text: "Projects",
        component: ""
    }, {
        link: "contact",
        text: "Contact",
        component: ""
    }
]