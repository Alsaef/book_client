import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useReadingList } from '../../hooks/Hooks';

const ListedBooks = () => {
    const { reads, wishlist } = useReadingList();

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Read</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <div>
                        <h2>Read</h2>
                        <ul>
                            {reads.map((book, index) => (
                                <li key={index}>{book.bookName}</li>
                            ))}
                        </ul>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <h2>Wishlist</h2>
                        <ul>
                            {wishlist.map((book, index) => (
                                <li key={index}>{book.bookName}</li>
                            ))}
                        </ul>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
