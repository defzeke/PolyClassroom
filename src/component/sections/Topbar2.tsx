import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Topbar() {
    return(
        <div className="bg-gradient-to-r from-[#F8F2F2] via-[#fff] to-[#F8F2F2] w-full p-5 shadow-md outline outline-black/10">
            <div className="flex items-center justify-between">
                <button type="button" aria-label="Open sidebar" className="text-[#737373] hover:text-[#800000] transition-colors">
                    <MenuOutlinedIcon />
                </button>

                <button
                    type="button"
                    aria-label="Open profile menu"
                    className="items-center justify-center text-[#737373] mr-5"
                >
                    <AccountCircleIcon className="m-0 p-0 leading-none scale-160" />
                </button>
            </div>
        </div>
    );
}