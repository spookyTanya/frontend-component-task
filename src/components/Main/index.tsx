import React, { useState, useEffect } from "react";
import Select from "../Select";
import { Row } from "../Row";
import { saveData } from "../../actions/saveData";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Emitter from "../../emitter";
import {ActionInterface, UserData, UserSelectedData} from "../../utils/common-types";
import './main.scss';

interface Props {
  savedData: (UserSelectedData: React.Dispatch<React.SetStateAction<UserSelectedData>>) => ActionInterface;
  currentUser: string[];
  folders: UserData;
  gems: UserData;
}

const Main: React.FC<Props> = ({ saveData, currentUser, folders, gems }) => {
  const [checkedFolders, setCheckedFolders] = useState(folders.selectedItems);
  const [checkedGems, setCheckedGems] = useState(gems.selectedItems);

  useEffect(() => {
    setCheckedFolders(folders.selectedItems);
    setCheckedGems(gems.selectedItems);
  }, [folders, gems]);

  const triggerAction = () => {
    saveData({
      folders: checkedFolders,
      gems: checkedGems,
      currentUser: currentUser,
    });
  };

  useEffect(() => {
    Emitter.once('SAVE_CHANGES', triggerAction);
    return function cleanup () {
      Emitter.off('SAVE_CHANGES', triggerAction);
    }
  }, [checkedFolders, checkedGems, currentUser]);

  return (
    <div className='wrapper'>
      <Select/>
      <Row name='folders' data={folders} checkboxArray={folders.selectedItems} checkboxSetter={setCheckedFolders}/>
      <hr/>
      <Row name='gems' data={gems} checkboxArray={gems.selectedItems} checkboxSetter={setCheckedGems}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.currentUser,
    folders: state.userData[state.currentUser.currentUser].folders,
    gems: state.userData[state.currentUser.currentUser].gems,
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({saveData: saveData}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
