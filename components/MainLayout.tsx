import { FunctionComponent, PropsWithChildren } from "react";

import Header from "./Header";

interface Props {
    isDark?: boolean;
}
const MainLayout: FunctionComponent<PropsWithChildren<Props>> = ({ children, isDark = false }) => {
    return (
        <>
            <Header />
            <div className={`w-full h-screen ${isDark ? `text-white bg-slate-900` : `text-black bg-white`}`}>
                {children ? children : null}
            </div>
        </>
    );
};
export default MainLayout;
