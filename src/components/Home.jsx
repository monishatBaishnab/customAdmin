import Profile from "./Profile/Profile";

const Home = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 min-h-screen">
            <div className="bg-slate-100">
                <Profile />
            </div>
            <div className="md:col-span-2 lg:grid-cols-3">

            </div>
        </div>
    );
};

export default Home;