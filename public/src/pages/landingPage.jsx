import React from "react";

import MoiAsDuck from "../img/MoiAsDuck.jpg"

import { Title } from "../components/title";

import { Welcome } from "../components/welcome";

import { Intro } from "../components/intro";

import { Adios } from "../components/bye";

function LandingPage() {
    return (
        <>
            <Title />,
            <Welcome />,
            <MoiAsDuck />,
            <Intro />,
            <Adios />
        </>
    )

};

export {LandingPage};