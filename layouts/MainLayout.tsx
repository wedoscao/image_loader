import { FunctionComponent, PropsWithChildren } from "react";

import Header from "../components/Header";

interface Props {}
const MainLayout: FunctionComponent<PropsWithChildren<Props>> = ({ children }) => {
    return (
        <>
            <Header />
            <div className={`w-full h-full`}>{children ? children : null}</div>
        </>
    );
};
export default MainLayout;
