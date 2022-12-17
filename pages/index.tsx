import { useEffect, useState } from "react";
import HeadLayout from "../components/HeadLayout";
import MainLayout from "../components/MainLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import path from "path";
import fs from "fs";

interface Image {
    id: number;
    name: string;
}

interface Props {
    data: Image[];
}
const Home = (props: Props) => {
    const [isDark, setIsDark] = useState(false);
    const router = useRouter();
    const [host, setHost] = useState("");

    useEffect(() => {
        if (typeof window !== undefined) {
            setIsDark(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
        }
        setHost(`${window.location.protocol}//${window.location.hostname}:${window.location.port}/images`);
    }, []);

    const handledClickImage = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, pathname: string) => {
        router.push(pathname);
    };
    return (
        <HeadLayout>
            <MainLayout isDark={isDark}>
                <div className="mt-16 grid h-screen w-full grid-cols-6">
                    {props.data.map((image) => {
                        return (
                            <div
                                key={image.id}
                                className="col-span-1 relative h-80 hover:opacity-90 cursor-pointer"
                                onClick={(e) => handledClickImage(e, `/images/${image.name}`)}
                            >
                                {host ? <Image alt="" src={`public/images/${image.name}`} fill /> : null}
                            </div>
                        );
                    })}
                </div>
            </MainLayout>
        </HeadLayout>
    );
};
export default Home;

export const getStaticProps = async () => {
    const fileDir = path.join(process.cwd(), "public", "images");
    const paths = fs.readdirSync(fileDir);
    const data: Image[] = paths.map((path, index): Image => {
        return {
            id: index,
            name: path,
        };
    });
    return {
        props: { data },
    };
};
