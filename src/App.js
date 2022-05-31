import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {
    return (
        <BrowserRouter>
            <div className={"wrapper"}>
                <div className={"app-wrapper"}>
                    <Header/>
                    <Navbar friendsData={props.state.navbarFriendsMenu.friendsData}/>
                    <div className={"app-wrapper-content"}>
                        <Routes>
                            <Route path={"/profile"} element={<Profile postsData={props.state.profile.postsData}/>}/>
                            <Route path={"/dialogs/*"} element={<Dialogs dialogsData={props.state.dialogs.dialogsData} messagesData={props.state.dialogs.messagesData}/>}/>
                            <Route path={"/news"} element={<News/>}/>
                            <Route path={"/music"} element={<Music/>}/>
                            <Route path={"/settings"} element={<Settings/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
