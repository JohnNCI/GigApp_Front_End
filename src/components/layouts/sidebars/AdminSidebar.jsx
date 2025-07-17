import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import {
  Plus,
  Edit2,
  Music,
} from "feather-icons-react";
import {
  ADMIN_ADD_SONG_PATH,
  ADMIN_MANAGE_SONGS_PATH,
} from "../../../constants/routes";

// Define menu items dynamically
const menuItems = [
  {
    label: "Songs",
    icon: Music,
    isParent: true,
  },
  {
    path: ADMIN_ADD_SONG_PATH,
    label: "Add song",
    icon: Plus,
    isParent: false,
  },
  {
    path: ADMIN_MANAGE_SONGS_PATH,
    label: "Manage songs",
    icon: Edit2,
    isParent: false,
  },
];

const AdminSidebar = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div
      className="flex sticky top-[72px] flex-col w-[300px] h-full bg-purple-50 border-r border-purple-100 pb-4"
      style={{ height: "calc(100vh - 60px)" }}
    >
      {menuItems.map((item, index) => {
        const isActive = item.path && pathname === item.path;
        const IconComponent = item.icon;

        return (
          <Link to={item.path || "#"} key={index}>
            <div
              className={classNames(
                "flex text-sm items-center gap-2",
                item.isParent ? "px-4" : "pl-10",
                !item.path ? "bg-purple-300" : "",
                "h-[40px]",
                isActive
                  ? "bg-purple-100 border-r-4 border-purple-700 font-medium"
                  : ""
              )}
            >
              <IconComponent size={16} />
              {item.label}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default AdminSidebar;
