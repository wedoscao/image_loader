import { FunctionComponent, PropsWithChildren, useState } from "react";

import Head from "next/head";

interface Props {
    title?: string;
}
const HeadLayout: FunctionComponent<PropsWithChildren<Props>> = ({ children, title }) => {
    const [publicPath, setPublicPath] = useState(
        "https://raw.githubusercontent.com/wedoscao/image_loader/main/public/",
    );
    return (
        <>
            <Head>
                <title>{title ? title : "Image Loader"}</title>
                <meta name="description" content="A lot of beautiful girl images" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="apple-touch-icon" sizes="180x180" href={`${publicPath}icons/apple-touch-icon.png`} />
                <link rel="icon" type="image/png" sizes="32x32" href={`${publicPath}icons/favicon-32x32.png`} />
                <link rel="manifest" href={`${publicPath}icons/site.webmanifest`} />
                <link rel="mask-icon" href={`${publicPath}icons/safari-pinned-tab.svg`} color="#5bbad5" />
            </Head>
            {children ? children : null}
        </>
    );
};
export default HeadLayout;
