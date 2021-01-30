import React from "react";


export default function useFirstChange() {
    const isFirstChange = React.useRef(true);

    React.useEffect(() => {
        isFirstChange.current = false;
    });

    return isFirstChange.current;
}