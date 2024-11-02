import { toast } from "react-toastify"

const getStoreReadList=()=>{
    // read list
    const storeReadListStr=localStorage.getItem('read-list')
    if(storeReadListStr){
        const storedList=JSON.parse(storeReadListStr)
        return storedList
    }
    else{
        return []
    }
}

const addToStoredReadList=(id)=>{
    const storedList =getStoreReadList()
    if(storedList.includes(id)){
        // already exit not to add it
        console.log(id,'already exit ') 
    }
    else{
       storedList.push(id) 
       const storeReadListStr=JSON.stringify(storedList)
       localStorage.setItem('read-list',storeReadListStr)
       toast('Mark as Read added ')
    }
}
// add To Wish List Data
const getStoreWishList=()=>{
    const storeWishListStr=localStorage.getItem('wish-List')
    if(storeWishListStr){
        const storedWishList=JSON.parse(storeWishListStr)
        return storedWishList
    }
    else{
        return []
    }

}
const addToStoreWishList=(id)=>{
    const wishList=getStoreWishList()
    if(wishList.includes(id)){
        console.log(id, 'already exit in wishList ')
    }
    else{
        wishList.push(id)
        const storedWishListStr=JSON.stringify(wishList)
        localStorage.setItem('wish-List',storedWishListStr)
       
    }
}

export {addToStoredReadList,addToStoreWishList,getStoreReadList}