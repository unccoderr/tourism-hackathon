import { Route, Routes } from "react-router-dom"

import { LandingPage, LocationListPage } from "../components"

import { routingConstants } from "../constants"


export const IndexRouting = () => {

    return <Routes>
        <Route
            path={'/'}
            element={<LandingPage />}
        />
        <Route
            path={`/${routingConstants.location.baseUrl}`}
            element={<LocationListPage />}
        />
        <Route
            path={`/${routingConstants.trail.baseUrl}`}
            element={'Trail'}
        />
        <Route
            path={`/${routingConstants.contacts.baseUrl}`}
            element={'Contacts'}
        />
    </Routes>
}