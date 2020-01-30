import React, {Component} from 'react';
import './Dashboard.scss';

class Dashboard extends Component{
    render(){
        return(
            <div className="container">
                <div className="input-form">
                    <input placeholder="title" className="input-title" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="content" className="input-content"  >
                    
                    </textarea>
                    <button className="save-btn" >Simpan</button>
                </div>
                <hr/>
                <div className="card-content" >
                    <p className="title"  >Title</p>
                    <p className="date"  >1 januari 2020</p>
                    <p className="content"  >Content Notes</p>
                </div>
            </div>
        )
    }
}

export default Dashboard;