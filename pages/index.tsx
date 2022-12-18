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
    const [host, setHost] = useState("");
    const router = useRouter();

    useEffect(() => {
        if (window !== undefined) {
            setHost(`${window.location.protocol}//${window.location.host}${window.location.pathname}`);
        }
    }, []);

    const handledClickImage = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, pathname: string) => {
        router.push(pathname);
    };

    return (
        <HeadLayout>
            <MainLayout>
                <div className="mt-16 grid h-screen w-full grid-cols-6">
                    {host
                        ? props.data.map((image) => {
                              return (
                                  <div
                                      key={image.id}
                                      className="xl:col-span-1 lg:col-span-2 sm:col-span-3 col-span-6 h-80 relative hover:opacity-90 cursor-pointer"
                                      onClick={(e) => handledClickImage(e, `/images/${image.name}`)}
                                  >
                                      <Image
                                          alt={`${image.name}`}
                                          src={`${host}images/${image.name}`}
                                          fill
                                          loading="lazy"
                                      />
                                  </div>
                              );
                          })
                        : null}
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
