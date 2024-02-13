import React, { useState } from "react";
import './App.css';
import Main from "./components/main/main";
import { BrowserRouter as Router } from "react-router-dom";
import DashBoard from "./components/header/dashboard/dashboard";
import { useFetchSubCategoryItemData, useFetchItemData } from "./api/api";



function App() {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [productsCategory, setProductsCategory] = useState([]);
  const [item, setItem] = useState([]);
  const [product, setProduct] = useState([]);
  const [productData, setProductData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [query, setQuery] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [username, setUsername] = useState("");
  // const [authToken, setAuthToken] = useState("");

  useFetchSubCategoryItemData(setItem, subCategory);
  useFetchItemData(setProductData, product);

  console.log(username);



  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Router>
      <div className="App" >
        <DashBoard
          setCategory={setCategory}
          setSubCategory={setSubCategory}
          setProductsCategory={setProductsCategory}
          subCategory={subCategory}
          setSearchData={setSearchData}
          setQuery={setQuery}
          query={query}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
          drawerOpen={drawerOpen}
          username={username}
          setUsername={setUsername}
          productData={productData}
          setProduct={setProduct}
          category={category}
          productsCategory={productsCategory}
        />
        <div
          className="main-container"
          style={{
            marginLeft: "200px", // Adjust margin based on drawer state
            transition: "margin-left 0.3s ease", // Add transition for smooth animation
          }}
        >
          <Main
            category={category}
            setSubCategory={setSubCategory}
            setProductsCategory={setProductsCategory}
            productsCategory={productsCategory}
            subCategory={subCategory}
            item={item}
            setProduct={setProduct}
            productData={productData}
            searchData={searchData}
            username={username}

            // drawerOpen={drawerOpen}
          />
        </div>

      </div>
    </Router>
  );
}

export default App;
