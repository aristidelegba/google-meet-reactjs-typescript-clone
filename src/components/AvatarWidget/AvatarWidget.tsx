import * as React from "react";
import Avatar from "@mui/material/Avatar";

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name), 
       width: 150, height: 150 , fontSize: 50
    },
    children: `${name.split(" ")[0][0]}`,
  };
}
interface IAvatarProps {
  imageUrl?: string;
  fullname: any;
}
const AvatarWidget = ({ imageUrl, fullname }: IAvatarProps) => {
  console.log(fullname.length);
  
  if (imageUrl) {
    return <Avatar  alt={fullname} src={imageUrl} />;
  }
  return <Avatar {...stringAvatar(fullname)} />;
};

export default AvatarWidget;
