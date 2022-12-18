import React from 'react';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';
// needs a logout function just on the dashboard 
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

// linking the saveGems
// jsx - same as the other pages
// declaring variable and inputing stuff that needs to be imported

const Dashboard = () => {
    const { loading, data } = useQuery(QUERY_ME)
    console.log(data); 

    const savedGems = data.me.savedGems || [];


    const loggedIn = Auth.loggedIn();

    return (
        <main>
            <div>
                <h1>GEMS</h1>
            </div>
        </main>
    );
};


export default Dashboard; 

// data.me.savedGems is the query call - may need a keyword 
// data.me.savedGems will need to be a map function OR we can use antoher type of loop


// we can add a conditional statement to do something else while the queries are loading 
// - (ex: is in the gems form and login page at the bottom)
// Just need them to show up on the page as cards or whatever but 
// for now just words (try to look at project 1)