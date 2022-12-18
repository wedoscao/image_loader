import { FunctionComponent, PropsWithChildren, useEffect, useState } from "react";

import Head from "next/head";

interface Props {
    title?: string;
}
const HeadLayout: FunctionComponent<PropsWithChildren<Props>> = ({ children, title }) => {
    const [host, setHost] = useState("");

    useEffect(() => {
        setHost(`${window.location.protocol}//${window.location.host}${window.location.pathname}`);
    }, []);

    return (
        <>
            <Head>
                <title>{title ? title : "Image Loader"}</title>
                <meta name="description" content="A lot of beautiful girl images" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                {host ? (
                    <>
                        <link rel="apple-touch-icon" sizes="180x180" href={`${host}/icons/apple-touch-icon.png`} />
                        <link rel="icon" type="image/png" sizes="32x32" href={`${host}/icons/favicon-32x32.png`} />
                        <link rel="manifest" href={`${host}/icons/site.webmanifest`} />
                        <link rel="mask-icon" href={`${host}/icons/safari-pinned-tab.svg`} color="#5bbad5" />
                    </>
                ) : null}
            </Head>
            {children ? children : null}
        </>
    );
};
export default HeadLayout;
