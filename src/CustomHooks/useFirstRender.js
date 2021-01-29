import React from "react";


export default function useFirstRender() {
    const isFirstRender = React.useRef(true);

    React.useEffect(() => {
        isFirstRender.current = false;
    });

    return isFirstRender.current;
}