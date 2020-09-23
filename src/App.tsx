import React from "react";
import Main from "./components/Main";
import Emitter from "./emitter";

const data = {
  currentUser: "user",
  users: ["admin", "user", "member"],
  userData: {
    admin: {
      folders: {
        availableItems: ["create", "update", "move", "delete", "view", "share"],
        selectedItems: ["create", "update", "move", "delete", "view", "share"]
      },
      gems: {
        availableItems: ["create", "update", "move", "delete", "view", "share"],
        selectedItems: ["create", "update", "move", "delete", "view", "share"]
      }
    },
    user: {
      folders: {
        availableItems: ["create", "update", "view", "share"],
        selectedItems: ["create", "update", "view", "share"]
      },
      gems: {
        availableItems: ["create", "update", "view", "share"],
        selectedItems: ["create", "update", "view", "share"]
      }
    },
    member: {
      folders: {
        availableItems: ["view", "share"],
        selectedItems: ["view", "share"]
      },
      gems: {
        availableItems: ["view", "share"],
        selectedItems: ["view", "share"]
      }
    }
  }
};

const App = () => {
  const handleClick = () => {
    Emitter.emit("SAVE_CHANGES", {});
  };

  return (
    <div>
      <Main/>
      <button type="button" onClick={handleClick}>Save</button>
    </div>
  );
};

export default App;
