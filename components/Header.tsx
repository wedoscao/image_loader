interface Props {}
const Header = (props: Props) => {
    return (
        <div className="bg-black h-16 fixed z-50 top-0 text-white left-0 right-0 flex items-center">
            <div className="font-bold ml-8">Beautiful Girl</div>
        </div>
    );
};
export default Header;
