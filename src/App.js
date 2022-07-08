
import './App.css';


import Filter from './components/Filter';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Category from './components/Category';
// import Product from './components/Product';
function App() {
  return (
    <>
   
      <Navbar />
      <Hero />
      <Category/>
      <Filter/>
      {/* <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
