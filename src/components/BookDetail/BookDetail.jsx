import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToStoreWishList } from '../utility/addToDb';

const BookDetail = () => {
    const {bookId}=useParams()
    const id=parseInt(bookId)
    const data=useLoaderData()
    const book=data.find(book=>book.bookId===id)

    const {bookId :CurrentId,image,review}=book
    const handleMarkAsRead=(id)=>{
        addToStoredReadList(id)
    }
    const handleWishList=(id)=>{
        addToStoreWishList(id)
    }
    
    return (
        <div>
            <h2>book details ; {bookId}</h2>
            <img className='w-48' src={image} alt="" />
            <br />
            <button 
            onClick={()=>handleMarkAsRead(id)}
            class="btn btn-outline btn-info">Mark As Read</button>
            <button
            onClick={()=>handleWishList(id)}
            class="btn  btn-accent">Wish List</button>
        </div>
    );
};

export default BookDetail;