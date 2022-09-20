import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul>
            {contacts.map(({id, name, number}) => (
                <li key={id} id={id}><span>{name}:</span>{number}
                <button type='buton' onClick={()=>onDeleteContact(id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default ContactList;