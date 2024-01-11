import { GoTriangleDown } from "react-icons/go";

const Profile = () => {
    return (
        <div className="p-7 space-y-7">
            <div className="flex items-center gap-5">
                <div className="w-16 h-16 overflow-hidden rounded-full">
                    <img className="w-full h-full object-cover" src="https://i.ibb.co/J5YphPK/fb-prfile.jpg" alt="Monishat Baishnab" />
                </div>
                <div>
                    <h3 className="text-3xl font-medium">Hi Mike</h3>
                    <p className="text-slate-500">welcome back.</p>
                </div>
            </div>
            <div className="space-y-3">
                <div>
                    <h3 className="text-3xl font-medium">$19,866</h3>
                    <p className="text-slate-500">Account Balance</p>
                </div>
                <div>
                    <h4 className="text-2xl font-medium">$4251</h4>
                    <p className="text-slate-500">Year-to-Date Contributions</p>
                </div>
                <div>
                    <h4 className="text-2xl font-medium">$1551</h4>
                    <p className="text-slate-500">Total Invast</p>
                </div>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center gap-1">I want to <GoTriangleDown /></button>
            </div>
            <div>
                <h4 className="text-xl font-serif">Recent Transection</h4>
                <div>
                    <p>12-15-2023</p>
                    <h5>Withdrow Transfer to Bank-XXXX</h5>
                </div>
            </div>
        </div>
    );
};

export default Profile;