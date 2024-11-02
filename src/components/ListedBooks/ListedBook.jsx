import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreReadList } from "../utility/addToDb";
import Book from "../Book/Book";

const ListedBook = () => {
  const allbooks = useLoaderData();
  const [readList, setReadList] = useState([]);
  
  const [sortType,setSortType]=useState(' ')
  useEffect(() => {
    const storedReadList = getStoreReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    console.log(storedReadList, storedReadListInt, allbooks);
    const readBookList = allbooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, []);
//   function for sort button
  const handleSort=sortType=>{
    setSortType(sortType)
    if(sortType==='No of pages'){
        const sortedReadList=[...readList].sort((a,b)=>a.totalPages-b.totalPages)
        console.log(sortedReadList)
        setSortType(sortedReadList)
        
    }
    if(sortType==="Ratings"){
        const sortedList=[...readList].sort((a,b)=>a.rating-b.rating)
        setReadList(sortedList)
    }
    
  }
  console.log(readList)
  return (
    <div>
      <h3 className="text-3xl m-8 ">Listed Book</h3>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          {
          sortType? `sort by ${sortType}`:'Sort by'
          }
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a onClick={()=>handleSort('Ratings')}>Ratings</a>
          </li>
          <li>
            <a onClick={()=>handleSort('No of pages')}>Number of Pages</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List </Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Read content : {readList.length}</h2>
          {readList.map((book) => (
            <Book book={book} key={book.bookId}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Wish content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBook;
