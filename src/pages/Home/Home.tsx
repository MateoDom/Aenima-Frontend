import React from "react";
import { Hero, Blog, Trending } from "./components";


export const Home: React.FC = () => {
    return (
        <div>
            <Hero />
            <Trending />
            <Blog />
        </div>
    )
}