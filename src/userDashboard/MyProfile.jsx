import { MdVerified } from "react-icons/md";
import useAuth from "../AuthContext/useAuth/useAuth";
import HelmetUse from "../shared/HelmetUse";

const MyProfile = () => {
  const { user } = useAuth();
  return (
    <div>
        <HelmetUse helmet={'My Profile'}/>
      <div className="flex  items-start justify-start">
        <div className="flex backdrop-blur rounded-tl-badge border border-yellow-300 p-10 bg-white/40 items-center gap-5 mt-20">
          <img
            className="border w-40 rounded-full p-2 border-yellow-500"
            src={user.photoURL}
            alt=""
          />
          <div>
            <p className="font-kdam text-lg flex items-center gap-2">
              {user.displayName}
              <MdVerified className="text-blue-600" />
            </p>
            <a href="">{user.email}</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyProfile;
