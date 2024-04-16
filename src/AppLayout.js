import React, { useState } from 'react';
import { useNavigate,Link,Routes,Route } from 'react-router-dom';
import Posts from "./Posts";
import PostLists from './PostLists';
import Post from "./Post";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import Stats from "./Stats";
import NewPost from "./NewPost";
function Home() {
return (
<div style={{ padding: 20 }}>
<h2>Home View</h2>
<p>Lorem ipsum dolor sit amet, consectetur adip.</p>
</div>
);
}
function About() {
return (
<div style={{ padding: 20 }}>
<h2>About View</h2>
<p>Lorem ipsum dolor sit amet, consectetur adip.</p>
</div>
);
}
function NoMatch() {
  return (
  <div style={{ padding: 20 }}>
  <h2>404: Page Not Found</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
  </div>
  );
  }
export default function AppLayout() {
    const [user, setUser] = useState();
    const navigate = useNavigate();
    function logOut() { setUser(null); navigate("/"); }
    return (
        <>
        <nav style={{margin: 10}}>
        <Link to="/" style={{padding: 5}}> Home </Link>
        <Link to="/posts" style={{padding: 5}}> Posts </Link>
        <Link to="/about" style={{padding: 5}}> About </Link>
        <span> | </span>
        {user && <Link to="/stats" style={{padding: 5}}> Stats 
        </Link>}
        {user && <Link to="/newpost" style={{padding: 5}}> New Post 
        </Link>}
        {!user && <Link to="/login" style={{padding: 5}}> Login 
        </Link>}
        {user && <span onClick={logOut} style={{padding: 5, cursor:
        'pointer'}}> Logout </span>}
        </nav>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/posts" element={<Posts/>}>
<Route index element={<PostLists/>}/>
<Route path=":slug" element={<Post/>}/>
</Route> <Route path="/about" element={<About/>}/>
<Route path="/login" element={<Login onLogin={setUser}/>}/>
<Route path="/stats" element={<ProtectedRoute
user={user}><Stats/></ProtectedRoute>} />
<Route path="/newpost" element={<ProtectedRoute
user={user}><NewPost/></ProtectedRoute>} />
<Route path="*" element={<NoMatch/>}/>
</Routes>
</>
)
}

    