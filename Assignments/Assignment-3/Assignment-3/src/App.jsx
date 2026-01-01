import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentsDetail from './components/studentsDetail'
import IsLoggedIn from './components/isLoggedIn'
import ProfileCard from './components/profileCard'
import DisplayUsername from './components/displayUsername'
import SmallForm from './components/smallForm'
import Products from './components/products'
import ListOfProduct from './components/listOfProduct'
import SearchBar from './components/searchBar'
import DataFetch from './components/dataFetch'
import UploadData from './components/uploadData'
import LoadingPage from './components/loadingPage'
import ToAddItem from './components/toAddItem'
import ToDeleteItem from './components/toDeleteItem'
import ToUpdateProfile from './components/toUpdateProfile'
import PostMethod from './components/postMethod'
import CRUD from './components/CRUD'
import Parent from './components/showalert'
import FetchDataAs5 from './components/fetchDataAs5'
import ThreePageApp from './components/threePageApp'
import AddProductPage from './components/addProductPage'

function App() {

  return (
    <>
      <StudentsDetail />
      <hr />
      <IsLoggedIn />
      <hr />
      <ProfileCard
        name={"Vignesh"}
        image={"/image1.jpg"}
        role={"Front-end Developer"}
      />
      <ProfileCard
        name={"Vignesh"}
        image={"/image1.jpg"}
        role={"Website Developer"}
      />
      <ProfileCard
        name={"Vignesh"}
        image={"/image1.jpg"}
        role={"Full Stack Developer"}
      />
      <hr />
      <DisplayUsername />
      <hr />
      <SmallForm />
      <hr />
      <Products />
      <hr />
      <ListOfProduct />
      <hr />
      <SearchBar />
      <hr />
      <DataFetch />
      <hr />
      <UploadData />
      <hr />
      <LoadingPage />
      <hr />
      <ToAddItem />
      <hr />
      <ToDeleteItem />
      <hr />
      <ToUpdateProfile />
      <hr />
      <CRUD />
      <hr />
      <PostMethod />
      <hr />
      <Parent />
      <hr />
      <FetchDataAs5 />
      <hr />
      <ThreePageApp />
      <hr />
      <AddProductPage />
      <hr />
    </>
  );
}

export default App
