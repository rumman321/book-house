import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Book = ({ book }) => {
  const handleToast=()=>{
    toast('book added to the bookList')
  }
  const { bookId,bookName, author, image, review, tags, rating ,category,totalPages} = book;
  return (
    <Link to={`/books/${bookId}`}>
      
    <div onClick={handleToast}>
      
      <div className="card bg-base-100 w-96 shadow-xl p-6">
        <figure className="bg-gray-400 py-8 rounded-lg">
          <img className="w-52 h-40 " src={image} alt={bookName} />
        </figure>
        <div className="card-body">
            <div className="flex gap-10">
            {
                tags.map((tag ,i)=> <button key={i} className="btn btn-xs">{tag}</button>)
            }
            </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By : {author}</p>
          <div className="border-t-2 border-dashed"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">{rating}</div>
            <div className="badge badge-outline">p:{totalPages}</div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Book;
