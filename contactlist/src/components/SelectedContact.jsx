import {useState, useEffect} from "react";


export default function SelectedContact({selectedContactId,setSelectedContactId}) {
    const [contact, setContact] = useState(null);

    useEffect (()=>{
        async function fetchSingle() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const result = await response.json();
                setContact(result);

            } catch (error) {
              console.error(error);
            }
          }
          fetchSingle();


    },[]);
    console.log(contact)

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="3">Contact List</th>
                </tr>
            </thead>
            <tbody>
            {contact && ( 
                <>
                    <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                    </tr>
                    <tr onClick={() => setSelectedContactId(contact.id)}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    </tr>
                </>
            )}
            </tbody>
        </table>
    );


  }