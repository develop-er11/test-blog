import React from 'react'
import Cards from './Cards';
import { connect } from 'react-redux';
import '../css/Navbar.css';
import '../css/Button.css';

const LandingPage = (props) => {
    return ( <
        div className = "main-wrap" >
        <
        div className = "container" >
        <
        div id = "root" > < nav class = "navbar" > < div class = "navbar-container" > < a class = "navbar-logo"
        href = "/" > HACKKEEN < /a><div class="menu-icon"><i class="fas fa-bars"></i > < /div><ul class="nav-menu"><li class="
        nav - item "><a class="
        nav - links " href=" / home ">Home</a></li><li class="
        nav - item "><a class="
        nav - links " href=" / stories ">Stories</a></li><li class="
        nav - item "><a class="
        nav - links " href=" / login ">Login</a></li></ul><a class="
        btn - mobile " href=" / register "><button class="
        btn btn--outline btn--medium ">REGISTER</button></a></div></nav> </div>  

        <
        h1 > Books Diary < /h1> <
        p > " Gabriel.s small cottage was lit by a single candle that cast light on a collection of weapons along one wall and a few books on a bookshelf on another " < /p> < /
        div >

        <
        h2 className = "cards-title" > Favourite < /h2> <
        Cards booksList = { props.booksList }
        />   < /
        div >


    )
}
const mapStateToProps = (state) => {
    return {
        booksList: state.books
    }
}
export default connect(mapStateToProps)(LandingPage)