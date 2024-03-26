import { useState } from 'react';

// Custom hook for managing reads and wishlist
export function useReadingList() {
  const [reads, setReads] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Function to handle adding to reads
  const handleRead = (readBooks) => {
    const newRead = [...reads, readBooks];
    setReads(newRead);
    console.log(newRead);
  };

  // Function to handle adding to wishlist
  const handleWishlist = (wishlistBooks) => {
    const existing = reads.find((rs) => rs.bookid === wishlistBooks.bookid);

    if (existing) {
      alert('Book already in reads!');
    } else {
      const newWishlist = [...wishlist, wishlistBooks];
      setWishlist(newWishlist);
      console.log(newWishlist);
    }
  };

  return { reads, wishlist, handleRead, handleWishlist };
}
