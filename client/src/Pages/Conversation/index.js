import React, { useContext } from 'react'
import Header from '../../components/Conversations/Header'
import Message from '../../components/Conversations/Message'
import FormMessage from '../../components/Conversations/FormMessage'
import Welcome from '../../components/Conversations/Welcome'
import './Conversation.css'

import { ChatContext } from '../../Context/ChatContext'

export default function Conversation() {

    const {userSelect} = useContext(ChatContext)

    


    return (
        <div className="conversation">
            {userSelect.length === 0 ? <Welcome/> : 
            <>
            <Header/> 
            <Message/>
            <FormMessage/>
            </>
        }

        </div>
    )
}
