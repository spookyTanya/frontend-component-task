import {FoldersAndGems} from '../utils/common-types';

interface State {
  admin: FoldersAndGems;
  member: FoldersAndGems;
  user: FoldersAndGems;
}

const initialState: State = {
  admin: {
    folders: {
      availableItems: ['create', 'update', 'move', 'delete', 'view', 'share'],
      selectedItems: ['create', 'update', 'move', 'delete', 'view', 'share']
    },
    gems: {
      availableItems: ['create', 'update', 'move', 'delete', 'view', 'share'],
      selectedItems: ['create', 'update', 'move', 'delete', 'view', 'share']
    }
  },
  user: {
    folders: {
      availableItems: ['create', 'update', 'view', 'share'],
      selectedItems: ['create', 'update', 'view', 'share']
    },
    gems: {
      availableItems: ['create', 'update', 'view', 'share'],
      selectedItems: ['create', 'update', 'view', 'share']
    }
  },
  member: {
    folders: {
      availableItems: ['view', 'share'],
      selectedItems: ['view', 'share']
    },
    gems: {
      availableItems: ['view', 'share'],
      selectedItems: ['view', 'share']
    }
  }
};

export default function (state = initialState, action): State {
  if (action.type === 'DATA_SAVED') {
    return {
      ...state,
      [action.payload.currentUser]: {
        folders: {
          availableItems: [...state[action.payload.currentUser].folders.availableItems],
          selectedItems: action.payload.folders
        },
        gems: {
          availableItems: [...state[action.payload.currentUser].gems.availableItems],
          selectedItems: action.payload.gems
        }
      }
    };
  }

  return state;
}
