// import "./App.css";
// import Header from "./components/common/header/Header";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import About from "./components/about/About";
// import CourseHome from "./components/allcourses/CourseHome";
// import Team from "./components/team/Team";
// import Pricing from "./components/pricing/Pricing";
// import Blog from "./components/blog/Blog";
// import Contact from "./components/contact/Contact";
// import Footer from "./components/common/footer/Footer";
// import Home from "./components/home/Home";
// import Login from "./components/login/login";
// import Register from "./components/register/register";

// function App() {
//   return (
//     <>
//       <Router>
//         <Header />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/about" component={About} />
//           <Route exact path="/courses" component={CourseHome} />
//           <Route exact path="/team" component={Team} />
//           <Route exact path="/pricing" component={Pricing} />
//           <Route exact path="/journal" component={Blog} />
//           <Route exact path="/contact" component={Contact} />
//           <Route exact path="/Login" component={Login} />
//           <Route exact path="/Register" component={Register} />
//         </Switch>
//         <Footer />
//       </Router>
//     </>
//   );
// }

// export default App;


import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/login/login";
import Register from "./components/register/register";
import ContactAdmin from "./components/contact/ContactAdmin";
import RealBlog from './blogs/Blogs';
// import CreateCategory from "./admin/CreateCategories";
import AdminMenu from "./layout/AdminMenu";
import CreateCategories from "./admin/CreateCategories";
import CreateBlog from "./admin/CreateBlog";
import AllBlogs from "./admin/AllBlogs";
import Quiz from "./admin/Quiz";
import QuizResult from "./admin/QuizResult";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-admin" element={<ContactAdmin />} />
          <Route path="/courses" element={<CourseHome />} />
          <Route path="/team" element={<Team />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/journal" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/blog" element={<RealBlog />} />
          <Route path="/dashboard" element={<AdminMenu />} />
          <Route path="/dashboard/create-category" element={<CreateCategories />} />
          <Route path="/dashboard/create-blog" element={<CreateBlog />} />
          <Route path="/all-blog" element={<AllBlogs />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<QuizResult />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
