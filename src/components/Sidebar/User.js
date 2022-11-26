import React, { memo } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "./style.css";
const User = ({ username, fullName, avatarSrc }) =>
  !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <Link
      to={`/${username}`}
      className=" grid p-4 grid-cols-4 gap-4 mr-5 mb-6 items-center shadow-2xl bg-info"
    >
      <div className="flex items-center justify-between p-1  rounded-full border-2  border-rose-600 col-span-1 w-20 h-20">
        <img
          className="rounded-full w-full h-full"
          src={avatarSrc}
          alt=""
          onError={(e) => {
            e.target.src = "/images/avatars/default/.jpg";
          }}
        />
      </div>

      <div className="px-4 col-span-3">
        <p className="font-bold text-lg">{username}</p>
        <p className="text-lg">{fullName}</p>
      </div>
    </Link>
  );

export default memo(User);
