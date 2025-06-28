import Conversation from '../Pages/Conversation'
import Sidebar from '../Pages/Sidebar'


 const routes = [
    {
        component: Conversation,
        exact: true,
        sidebar: Sidebar,
        path: '/'
    },
]

export default routes;