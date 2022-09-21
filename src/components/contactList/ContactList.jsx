import React from 'react';

import { List, Item, ButtonDelete, ContactName } from '../ui/ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <List>
            {contacts.map(({id, name, number}) => (
                <Item key={id} id={id}><ContactName>{name}:</ContactName>{number}
                <ButtonDelete type='buton' onClick={()=>onDeleteContact(id)}>Delete</ButtonDelete>
                </Item>
            ))}
        </List>
    )
}

export default ContactList;