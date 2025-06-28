import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_CHATS } from '../../../gql/chat'
import useChat from '../../../hooks/useGetChat'

import ItemChat from './ItemChat'
import SPNormal from '../../Spinner/SPNormal'
import {AuthContext} from '../../../Context/AuthContext'
import './PanelSide.css'


export default function PanelSide() {




    const { listChat,refetchChats } = useChat()

    if (!listChat) return <SPNormal />
    const { getChat } = listChat
    
    console.log(getChat)


    const selectChat = (e) => {
        const chatsList = document.querySelectorAll('.item-chat')
        chatsList.forEach(chat => {
            chat.classList.remove('select-user')
        })

        const ChatTarget = e.target;
        ChatTarget.classList.add('select-user')
    }

    return (
        <div className="panel-side">

            {getChat.map((e, index) => (
                
                <ItemChat data={e} key={index} selectChat={selectChat} />

            ))}

        </div>
    )
}
