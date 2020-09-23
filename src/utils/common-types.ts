export interface ActionInterface {
  type: string;
  payload: any;
}

export interface UserData {
  availableItems: string[];
  selectedItems: string[];
}

export interface UserSelectedData {
  folders: string[];
  gems: string[];
  currentUser: string;
}

export interface FoldersAndGems {
  folders: UserData;
  gems: UserData;
}
