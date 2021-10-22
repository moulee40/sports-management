import React from "react";


import DiscussionBoard from 'react-discussion-board'

import 'react-discussion-board/dist/index.css'
import axios from "axios";




const eventBaseUrl = "http://localhost:8080/forum/discussions";
class DiscussionForum extends React.Component {
  state = {
    allPosts: []
   };

   componentWillMount(){
    const {
      allPosts
    } = this.state;
    axios.get(eventBaseUrl).then((res) => {
      const postArray=[];
      res.data.map((index)=>{
        postArray.push({name:index.username,content:index.text, date: new Date('01 Jan 2020 09:12:00 GMT')})
      })
      this.setState({allPosts:postArray})
    });
   }

    submitPost = (text) => {
      const {
        allPosts
      } = this.state;
    const curDate = new Date()
    this.setState({allPosts:[...allPosts,{name:'bala',content:text,date:curDate}]})
    const params = {
       text:text,
       username:'bala',
       userId:'123',
       time:curDate
    }

    axios.post(eventBaseUrl,params).then((res) => {
     console.log(res);
    });
  }

  render(){
   const{allPosts} = this.state;
    return (
      <div className='App'>
        <DiscussionBoard posts={allPosts} onSubmit={this.submitPost} />
      </div>
    )

  }
}

export default DiscussionForum