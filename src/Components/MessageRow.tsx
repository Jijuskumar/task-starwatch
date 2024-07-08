import React, { FC } from "react";
import { ReactComponent as StarChecked } from "../Assets/Images/StarChecked.svg";
import { ReactComponent as Star } from "../Assets/Images/Star.svg";
import { ReactComponent as CheckBox } from "../Assets/Images/Check-Box.svg";
import { MessageBO } from "../BOs/MessageBO";

interface MessageRowProps {
  item: MessageBO;
}

const MessageRow: FC<MessageRowProps> = ({ item }) => {
  const getProfileBg = (profile: string): string => {
    if (profile == "Work") {
      return "#FFEBDD";
    } else if (profile == "Primary") {
      return "#DDF0EB";
    } else if (profile == "Friends") {
      return "#F6DDFF";
    } else if (profile == "Social") {
      return "#DEE8FF";
    } else {
      return "#FFF";
    }
  };

  const getProfileTextColor = (profile: string): string => {
    if (profile == "Work") {
      return "#FD9A56";
    } else if (profile == "Primary") {
      return "#00B69B";
    } else if (profile == "Friends") {
      return "#D456FD";
    } else if (profile == "Social") {
      return "#5A8CFF";
    } else {
      return "#FFF";
    }
  };

  return (
    <div
      style={{
        height: 60,
        width: "100%",
        borderBottom: "1px solid #E0E0E0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          height: 60,
          borderBottom: "1px solid #E0E0E0",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <CheckBox
          style={{
            marginLeft: 20,
            marginRight: 24,
            width: 16,
            height: 16,
          }}
        />
        {item.starred ? (
          <StarChecked style={{ marginRight: 30, width: 16, height: 16 }} />
        ) : (
          <Star style={{ marginRight: 30, width: 16, height: 16 }} />
        )}
        <p style={{ width: 134, textAlign: "left" }}>{item.sender}</p>
        {item.profile && (
          <div
            style={{
              width: 66,
              height: 22,
              backgroundColor: getProfileBg(item.profile),
              marginRight: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 3,
            }}
          >
            <p
              style={{ fontSize: 12, color: getProfileTextColor(item.profile) }}
            >
              {item.profile}
            </p>
          </div>
        )}
        <p style={{ textAlign: "left" }}>{item.message}</p>
      </div>
      <p style={{ marginRight: 24 }}>{item.time}</p>
    </div>
  );
};

export default MessageRow;
