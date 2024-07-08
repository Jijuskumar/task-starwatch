import React, { useEffect, useState } from "react";
import FrameComponent from "../../Components/SideNav/FrameComponent";
import { ReactComponent as Search } from "../../Assets/Images/search.svg";
import { ReactComponent as Delete } from "../../Assets/Images/Delete.svg";
import { ReactComponent as Info } from "../../Assets/Images/Info.svg";
import { ReactComponent as Download } from "../../Assets/Images/Download.svg";
import { ReactComponent as Next } from "../../Assets/Images/Front.svg";
import { ReactComponent as Prev } from "../../Assets/Images/backward.svg";
import { ReactComponent as Checkbox } from "../../Assets/Images/Messages/mask-circle.svg";
import MessageRow from "../../Components/MessageRow";
import { MessageBO } from "../../BOs/MessageBO";
import { getMessages } from "../../Services/ApiServices";
import { cursorTo } from "readline";
import { EmailOptions, PER_PAGE } from "../../Helpers/Constants";
import { EmailOptionBO } from "../../BOs/EmailOptionBO";

const MessagesPage = () => {
  const [messages, setMessages] = useState<MessageBO[]>([]);
  const [allMessages, setAllMessages] = useState<MessageBO[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [choice, setChoice] = useState<
    "Inbox" | "Starred" | "Sent" | "Darft" | "Spam" | "Important" | "Bin"
  >("Inbox");

  useEffect(() => {
    init();
  }, [page]);

  const init = async () => {
    const response = await getMessages("", page);
    if (response.items) {
      setMessages(response.items);
    }

    setAllMessages(response.messages);

    setTotal(response.total);
  };

  const getMessageCount = (
    type: "Inbox" | "Starred" | "Sent" | "Darft" | "Spam" | "Important" | "Bin"
  ) => {
    if (type == "Inbox") {
      return total;
    } else if (type == "Starred") {
      const count = allMessages.filter(
        (item: MessageBO) => item.starred == true
      );
      console.log("count", count);
      return count.length;
    } else if (type == "Sent") {
      return 24532;
    } else if (type == "Darft") {
      return 9;
    } else if (type == "Spam") {
      return 14;
    } else if (type == "Important") {
      return 18;
    } else {
      return 9;
    }
  };

  const labels = [
    {
      name: "Primary",
      color: "#00B69B",
    },
    {
      name: "Social",
      color: "#5A8CFF",
    },
    {
      name: "Work",
      color: "#FD9A56",
    },
    {
      name: "Friends",
      color: "#D456FD",
    },
  ];

  return (
    <FrameComponent active="Messages">
      <div style={{ ...Style.container, ...{ flexDirection: "column" } }}>
        <h3 style={{ fontSize: 32, color: "#202224" }}>Inbox</h3>
        <div
          style={{
            display: "flex",
            width: "100%",
            marginTop: 29,
          }}
        >
          <div
            style={{
              width: 226,
              backgroundColor: "#fff",
              borderRadius: 12,
              padding: 25,
              border: "1px solid #B9B9B9",
              marginBottom: 20
            }}
          >
            <div style={Style.composeButton}>
              <p style={{ color: "#fff", fontWeight: "800" }}>+ Compose</p>
            </div>

            <p style={{ ...Style.labelText, ...{ textAlign: "left" } }}>
              My Email
            </p>

            {EmailOptions.map((option) => {
              return (
                <div
                  onClick={() => setChoice(option.name)}
                  style={{
                    height: 43,
                    display: "flex",
                    alignItems: "center",
                    backgroundColor:
                      option.name !== choice ? "#FFF" : "#E7EEFF",
                    justifyContent: "space-between",
                    borderRadius: 6,
                    paddingLeft: 16,
                    paddingRight: 16,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {option.name !== choice ? (
                      <option.icon />
                    ) : (
                      <option.activeIcon />
                    )}

                    <p
                      style={{
                        marginLeft: 16,
                        fontSize: 14,
                        color: option.name !== choice ? "#202224" : "#4880FF",
                      }}
                    >
                      {option.name}
                    </p>
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      color: option.name !== choice ? "#202224" : "#4880FF",
                    }}
                  >
                    {getMessageCount(option.name)}
                  </p>
                </div>
              );
            })}

            <p style={{ ...Style.labelText, ...{ textAlign: "left" } }}>
              Label
            </p>

            {labels.map((label) => {
              return (
                <div
                  style={{
                    paddingLeft: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    height: 43
                  }}
                >
                  <Checkbox
                    stroke={label.color}
                    style={{ height: 15, width: 15 }}
                  />
                  <p style={{ marginLeft: 16, fontSize: 14 }}>{label.name}</p>
                </div>
              );
            })}

            <p
              style={{
                ...Style.labelText,
                ...{
                  color: "#8F9091",
                  textAlign: "left",
                  marginLeft: 16,
                },
              }}
            >
              + Create New Label
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flex: 1,
              marginLeft: 30,
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                backgroundColor: "#fff",
                borderRadius: 12,
                flexDirection: "column",
                overflow: "auto",
                border: "1px solid #B9B9B9",
              }}
            >
              <div
                style={{
                  height: 88,
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    ...Style.menuWrapper,
                    ...{
                      width: "30%",
                      marginLeft: 24,
                      borderRadius: 20,
                      justifyContent: "flex-start",
                    },
                  }}
                >
                  <Search style={{ marginLeft: 15 }} />
                  <input
                    type="text"
                    placeholder="Search Email"
                    style={{
                      border: "none",
                      marginLeft: 1,
                      padding: 10,
                      borderColor: "white",
                      background: "#F5F6FA",
                    }}
                  />
                </div>
                <div style={Style.menuWrapper}>
                  <div
                    style={{
                      ...Style.optionsInfoWrapper,
                      ...{ borderRight: "1px solid #D5D5D5" },
                    }}
                  >
                    <Download />
                  </div>
                  <div
                    style={{
                      ...Style.optionsInfoWrapper,
                      ...{ borderRight: "1px solid #D5D5D5" },
                    }}
                  >
                    <Info />
                  </div>
                  <div style={Style.optionsInfoWrapper}>
                    <Delete />
                  </div>
                </div>
              </div>
              {messages.map((item: MessageBO) => {
                return <MessageRow item={item} key={item.id} />;
              })}
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                marginTop: 10,
                alignItems: "center", 
                marginBottom: 20
              }}
            >
              <p style={{ color: "#75777A", fontSize: 14 }}>
                Showing {(page - 1) * PER_PAGE}-{page * PER_PAGE} of {total}
              </p>
              <div style={Style.paginationWrapper}>
                <div
                  onClick={() => {
                    if (page > 1) {
                      setPage((prev) => prev - 1);
                    }
                  }}
                  style={{
                    ...Style.paginationComatiner,
                    ...{
                      borderRight: "1px solid #D5D5D5",
                      cursor: page === 1 ? "not-allowed" : "pointer",
                    },
                  }}
                >
                  <Prev />
                </div>
                <div
                  style={{
                    ...Style.paginationComatiner,
                    ...{
                      cursor:
                        page >= Number((total / PER_PAGE).toFixed())
                          ? "not-allowed"
                          : "pointer",
                    },
                  }}
                  onClick={() => {
                    if (page < Number((total / PER_PAGE).toFixed())) {
                      setPage((prev) => prev + 1);
                    }
                  }}
                >
                  <Next />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FrameComponent>
  );
};

const Style = {
  container: {
    display: "flex",
    flex: 1,
    paddingLeft: 30,
    paddingTop: 30,
    paddingRight: 30,
    alignItems: "flex-start",
    overflow: "auto",
  },
  labelText: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 24,
    marginBottom: 16,
  },
  menuWrapper: {
    height: 40,
    width: 131,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5F6FA",
    marginRight: 24,
    borderRadius: 15,
    borderWidth: 1,
    border: "1px solid #D5D5D5",
    overflow: "hidden",
  },
  composeButton: {
    height: 43,
    width: "100%",
    backgroundColor: "#4880FF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
  optionsInfoWrapper: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    height: 40,
  },
  paginationComatiner: {
    display: "flex",
    flex: 1,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  paginationWrapper: {
    width: 86,
    height: 30,
    display: "flex",
    backgroundColor: "#fff",
    border: "1px solid #D5D5D5",
    borderRadius: 10,
  },
};

export default MessagesPage;
