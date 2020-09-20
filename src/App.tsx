import React from "react";
import Main from "./components/Main";

const data = {
  currentUser: "admin",
  users: ["admin", "user", "member"],
  checkboxes: ["create", "update", "move", "delete", "view", "share"],
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
      fol: {
        availableItems: ["create", "update", "view", "share"],
        selectedItems: ["create", "update", "view", "share"]
      },
      gems: {
        availableItems: ["create", "update", "view", "share"],
        selectedItems: ["create", "update", "view", "share"]
      }
    },
    member: {
      fol: {
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

const App = () => (
  <div>
    <Main data={data}/>
    <button type="button">Save</button>
  </div>
);

export default App;
