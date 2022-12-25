import HeadLayout from "../layouts/HeadLayout";
import MainLayout from "../layouts/MainLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import path from "path";
import fs from "fs";

interface Image {
    id: number;
    image: string;
}

interface Props {
    data: Image[];
}
const Home = (props: Props) => {
    const router = useRouter();

    return (
        <HeadLayout>
            <MainLayout>
                <div className="mt-16 grid h-screen w-full grid-cols-6">
                    {props.data.map((image) => {
                        return (
                            <div
                                key={image.id}
                                className="xl:col-span-1 lg:col-span-2 sm:col-span-3 col-span-6 h-80 relative hover:opacity-90 cursor-pointer text-white"
                            >
                                <a href={image.image}>
                                    <Image alt={`ERROR`} src={`${image.image}`} fill loading="lazy"></Image>
                                </a>
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
    const publicPath = path.join(process.cwd(), "public");
    const data: Image[] = JSON.parse(fs.readFileSync(path.join(publicPath, "image.json"), "utf-8"))["images"];
    return {
        props: { data },
    };
};
