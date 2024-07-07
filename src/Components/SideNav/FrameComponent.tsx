import { FC, useRef, useState } from "react";
import DashStack from "../../Assets/Images/DashStack.svg";
import More from "../../Assets/Images/More.svg";
import Menu from "../../Assets/Images/menu.svg";
import Notification from "../../Assets/Images/notification.svg";
import Profile from "../../Assets/Images/profile.svg";
import { MenuItems } from "../../Helpers/Constants";
import "./SideNavCSS.css";
import { MenuItemBO } from "../../BOs/MenuItemBO";
import { ReactComponent as Search } from "../../Assets/Images/search.svg";
import { useNavigate } from "react-router-dom";

interface FrameComponentProps {
  active: string;
  children: any;
}

const FrameComponent: FC<FrameComponentProps> = (props) => {
  const [visible, setVisible] = useState<boolean>(true);

  const sideNavRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const onClickMenu = () => {
    if (sideNavRef.current?.className.includes("shrinked")) {
      setVisible(false);
      sideNavRef.current?.classList.remove("shrinked");
    } else {
      setVisible(true);
      sideNavRef.current?.classList.add("shrinked");
    }
  };

  const navigateToPage = (item: MenuItemBO) => {
    navigate("/" + item.navigateTo);
  };

  return (
    <div className="App">
      <div className="container">
        <div ref={sideNavRef} className="sidenav shrinked">
          <div className="menu-header" onClick={onClickMenu}>
            <div className="icon-wrapper">
              <img src={Menu} alt="" style={{ height: 24, width: 24 }} />
            </div>
            {!visible && (
              <img className="menu-text" src={DashStack} alt="" style={{ marginLeft: 10 }} />
            )}
          </div>
          <div style={{ flex: 1, overflow: "auto" }}>
            {MenuItems.map((item: MenuItemBO) => {
              return (
                <div
                  style={{
                    marginTop: item.name == "Logout" ? 20 : 5,
                    marginBottom: item.name == "Logout" ? 50 : 0,
                  }}
                  className="menu-items"
                  onClick={() => navigateToPage(item)}
                >
                  <div
                    style={{
                      width: 4,
                      height: "100%",
                      backgroundColor:
                        props.active === item.name ? "#4379EE" : "#fff",
                      borderTopRightRadius: 2,
                      borderBottomRightRadius: 2,
                    }}
                  ></div>
                  <div className="icon-wrapper">
                    <item.icon
                      fill={props.active === item.name ? "#4379EE" : "#B2B2B2"}
                      style={{ height: 24, width: 24, marginLeft: 10 }}
                    />
                  </div>
                  {!visible && (
                    <p className="menu-text" style={{ marginLeft: 15, overflow: "hidden" }}>
                      {item.name}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="main-container">
          <div className="header">
            <div className="search-bar">
              <Search style={{ width: 16, height: 16 }} />
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
            </div>
            <div className="profile-container">
              <div style={{ width: 70, height: 70 }} className="items-center">
                <img
                  src={Notification}
                  alt=""
                  style={{ width: 30, height: 30 }}
                />
              </div>
              <div className="profile-info">
                <img src={Profile} alt="" style={{ width: 44, height: 44 }} />
                <div
                  style={{
                    marginLeft: 20,
                    marginRight: 26,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ fontSize: 14 }}>Moni Roy</p>
                  <p style={{ fontSize: 12 , color: "#565656"}}>Admin</p>
                </div>
                <img src={More} alt="" style={{ width: 18, height: 18 }} />
              </div>
            </div>
          </div>
          <div className="context-box">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
