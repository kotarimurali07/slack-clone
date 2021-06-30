import React from 'react';
import styled from 'styled-components';
import SidebarOption from './SidebarOption';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../config/firebaseConfig';
import {
  FiberManualRecord,
  Create,
  InsertComment,
  Inbox,
  Drafts,
  Bookmark,
  PeopleAlt,
  Apps,
  FileCopy,
  ExpandLess,
  ExpandMore,
  Add,
} from '@material-ui/icons';
const Sidebar = () => {
  const [channels, loading, error] = useCollection(db.collection('rooms'));

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>MURALI</h2>
          <h3>
            <FiberManualRecord />
            seshu
          </h3>
        </SidebarInfo>
        <Create />
      </SidebarHeader>
      <SidebarOption Icon={InsertComment} title="Threds" />
      <SidebarOption Icon={Inbox} title="Menctions & reactions" />
      <SidebarOption Icon={Drafts} title="Saved items" />
      <SidebarOption Icon={Bookmark} title="Channel browser" />
      <SidebarOption Icon={PeopleAlt} title="People & user groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Show more" />
      <hr />
      <SidebarOption Icon={Add} AddChannelOption title="Add channel" />
      {channels?.docs.map((doc) => (
        <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 240px;
  height: 100vh;
  background-color: var(--slack-color);
  > hr {
    margin-top: 6px;
    margin-bottom: 6px;
    border: 1px solid #49274b;
  }
  /* margin-top: 60px; */
`;
const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding-bottom: 10px;
  padding: 13px;
  > .MuiSvgIcon-root {
    border-radius: 999px;
    font-size: 20px;
    margin-left: auto;
    border-color: white;
    border-radius: 999px;
    cursor: pointer;
    border-radius: 25px;
    margin-right: 8px;
  }
`;
const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    /* color: red; */
    margin-bottom: 5px;
    /* font-weight: 900; */
  }
  > h3 {
    font-size: 13px;
    display: flex;
    font-weight: 400;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    /* margin-left: 1px; */
    margin-right: 4px;
    color: green;
  }
`;
