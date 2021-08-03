import React from 'react';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import HomeIMG from '../homePage/images/HomeIMG.svg';
import {Container} from 'reactstrap';
import add1 from './images/add1.svg'
import add2 from './images/add2.svg'


const Home = () => {
    return (
        <div>
            <div className="con">
                <Container>
                   <div className="main">
                       <div className="side1">
                           <p className="home-title">
                               <span>
                                   75% SAVE
                               </span>
                               For the Black Friday weekend
                           </p>
                           <h1>
                               Fastest & secure platform to invest in crypto
                           </h1>
                           <p>
                               Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.
                           </p>
                           <a href="#" className="btn btn-primary">
                               Try for FREE <ChevronRightOutlinedIcon className="rightIcon"/>
                           </a>
                       </div>
                       <div className="side2 d-lg-block d-none">
                           <img src={HomeIMG} alt=""/>
                       </div>
                   </div>
                </Container>
                <img src={add1} className="add1"></img>
                <img src={add2} className="add2"></img>
            </div>
        </div>
    );
}

export default Home;