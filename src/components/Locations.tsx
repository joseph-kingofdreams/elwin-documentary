import React, { useState, useEffect } from "react";
import Icon from "./Icon";

interface Props {
    children: React.ReactNode;
}

const Locations = (props: Props) => {
    const [left, setLeft] = useState(false);
    const [right, setRight] = useState(true);

    function slide(direction: string) {
        const locations = document.getElementById('locations');
        const total = locations.scrollWidth;
        const index = locations.scrollLeft;
        const width = locations.clientWidth;
        const scroll = (total - index) > width ? width : (total - index);

        if (direction == 'right') {
            locations.scrollTo({ top: 0, left: index + scroll, behavior: 'smooth' });
            !left && setLeft(true);
            (index == total - scroll) && setRight(false);
        } else {
            locations.scrollTo({ top: 0, left: index - scroll, behavior: 'smooth' });
            !right && setRight(true);
            index == 0 && setLeft(false);
        }

        function arrows() {
            console.log("test")
            if (direction == 'right') {
                !left && setLeft(true);
                (index == total - scroll) && setRight(false);
            } else {
                !right && setRight(true);
                index == 0 && setLeft(false);
            }
        }

        locations.addEventListener('scrollend', arrows)
    };

    return (<div className="relative">
        <div className="absolute z-10 bg-gradient-to-r from-black to-transparent h-full w-24 -left-24 flex justify-center items-center cursor-pointer" onClick={() => slide('left')}>
            {left && <Icon
                name="arrow"
                size="96"
                style="fill-white"
                className="rotate-180"
            />}
        </div>
        <div
            id="locations"
            className="-mx-16 flex snap-x snap-mandatory gap-4 overflow-auto px-16 no-scrollbar max-sm:-mx-6 max-sm:px-6 lg:-mx-24 lg:gap-8 lg:px-24 pt-4 lg:pt-8 relative"
        >
            {props.children}

        </div>
        <div className="absolute z-10 bg-gradient-to-l from-black to-transparent h-full w-24 top-0 -right-24 flex justify-center items-center cursor-pointer" onClick={() => slide('right')}>
            {right && <Icon
                name="arrow"
                size="96"
                style="fill-white"
                className=""
            />}
        </div>
    </div>)
}
export default Locations;