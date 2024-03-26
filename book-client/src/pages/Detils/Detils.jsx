import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ListedBooks from '../ListedBooks/ListedBooks';
import { useReadingList } from '../../hooks/Hooks';

const Detils = () => {
    const bookData=useLoaderData()
    const { handleRead, handleWishlist } = useReadingList();

    const handleReadClick = () => {
        handleRead(bookData);
      };
    
      const handleWishlistClick = () => {
        handleWishlist(bookData);
      };

    return (
        <div className='mx-auto w-[95%]'>
           <div className="hero min-h-screen ">
  <div className="hero-content gap-10 flex-col lg:flex-row">
    <img src={bookData.image} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{bookData.bookName}</h1>
      <p className="py-3">By: {bookData.author}</p>
      <hr  className='border-1 border-black'/>
      <p className="py-2">{bookData.category}</p>
      <hr  className='border-1 border-black'/>
      <p className="py-2">{bookData.review}</p>
      <div>
        <p>Tags: <span className='text-green-500 bg-green-100 py-2 px-2 rounded-lg'>#{bookData.tags}</span></p>
        <hr className='border-1 border-black mt-3'/>
      </div>
      <div>

     <p>Number of Pages: <span>{bookData.totalPages}</span></p>
     <p>Publisher: <span>{bookData.publisher}</span></p>
     <p>Year of Publishing: <span>{bookData.yearOfPublishing}</span></p>
     <p>Rating: <span>{bookData.rating}</span></p>

      </div>
      <div className='mt-4'>
      <button className="btn btn-primary mr-3" onClick={()=>handleReadClick(bookData)}>Read</button>
      <button className="btn btn-primary ms-3" onClick={()=>handleWishlistClick(bookData)}>Wishlist</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Detils;