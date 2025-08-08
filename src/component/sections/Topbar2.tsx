import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
    return(
        <div className="bg-gradient-to-r from-[#F8F2F2] via-[#fff] to-[#F8F2F2] w-full p-5 shadow-md outline outline-black/10">
            <div className='flex gap-250'>
                topbar
                <div>
                    <SettingsIcon />
                </div>
            </div>
        </div>
    );
}