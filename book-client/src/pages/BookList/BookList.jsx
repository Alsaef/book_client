import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BookList = () => {
    const [books,setBooks]=useState([]);

    useEffect(()=>{
        fetch('https://book-server-three.vercel.app/books')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
           setBooks(data)
        })
    },[])

    return (
        <div>
           <h1 className='text-3xl font-semibold text-center py-4'>Books</h1> 

           <div className='grid lg:grid-cols-3 grid-cols-1 gap-3 mt-4'>
            {
                books.map(book=>(
                    <Link to={`/book/${book.bookid}`}>
                    <div key={book.bookid} className="card  bg-base-100 shadow-xl">
                    <figure><img className='w-[60%]' src={book.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='text-green-400'>#{book.tags}</p>
                      <h2 className="card-title">
                      {book.bookName}
                      </h2>
                      <p>By: {book.author}</p>
                      <div className="flex items-center justify-between">
                        <div className="badge badge-outline">{book.category}</div> 
                        <div className="badge badge-outline">{book.rating}</div>
                      </div>
                    </div>
                  </div> 
                    </Link>
                ))
            }
           </div>
        </div>
    );
};

export default BookList;