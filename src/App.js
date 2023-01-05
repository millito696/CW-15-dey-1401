import logo from './blogfa-logo.jpg';
import './App.css';
import Login from './components/login.js';
import Card from './components/Card.js';
import ContactUs from './ContactUs';

function App() {
  return (
    <div className="App">
      <div className='logo'>
        <img src={logo} alt='logo'></img>
      </div>
      <div className='header'>
        <div className='register'>
          <p>
            بلاگفا یک ابزار قدرتمند برای ساخت و مدیریت وبلاگ است . بلاگفا به شما کمک میکند تا با سرعت و سهولت اطلاعات ، خاطرات و مطالب و مقالات خود را در اینترنت منتشر کنید
          </p>
          <button className='register-button'>ثبت نام و ایجاد وبلاگ جدید</button>
        </div>
        <Login></Login>
      </div>
      <div className='legend'>
        <hr />
        <div>
          وبلاگ‌های به‌روز شده
        </div>
        <hr />
      </div>
      <div className='cards' dir='rtl'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <ContactUs></ContactUs>
    </div>
  );
}

export default App;
