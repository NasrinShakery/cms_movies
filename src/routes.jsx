import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';
import Animation from './pages/Animation/Animation';
import Users from './pages/Users/Users';
import Comments from './pages/Comments/Comments';
import Setting from './pages/Setting/Setting';
import NotFound from './pages/NotFound/NotFound';

export default [
   {path: '/', element : <Home/>, index:true},
   {path: '/Movies', element : <Movies/>},
   {path: '/Series', element : <Series/>},
   {path: '/Animation', element : <Animation/>},
   {path: '/Users', element : <Users/>},
   {path: '/Comments', element : <Comments/>},
   {path: '/Setting', element : <Setting/>},
   {path:"*", element:<NotFound/>}
]