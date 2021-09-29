import React, { Component } from 'react';
import { render } from 'react-dom';
import { TodoApp } from './components/TodoApp';
import DataProvider from './data-provider';
import './style.css';

interface AppProps {}
interface AppState {}

class App extends Component<AppProps, AppState> {

  // constructor(props) {
  //   super(props);
  //   new DataProvider().fetch().then((data) => {
  //     this.setState({appData: data});
  //   });
  // }


  render() {

  new DataProvider().fetch().then((data) => {
    console.log("data=", data);
  });
    return (
      <></>
      // <TodoApp title="Todo app" appData={this.state.appData}/>
      // <div className="container px-3 w-screen mx-auto">
      //   <div className="bg-white rounded shadow px-4 py-4">
      //     <div className="title font-bold text-lg">Todo Application</div>
      //     <div className="flex items-center text-sm mt-2">
      //       <button>
      //         <svg
      //           className="w-3 h-3 mr-3 focus:outline-none"
      //           fill="none"
      //           strokeLinecap="round"
      //           strokeLinejoin="round"
      //           strokeWidth="2"
      //           viewBox="0 0 24 24"
      //           stroke="currentColor"
      //         >
      //           <path d="M12 4v16m8-8H4"></path>
      //         </svg>
      //       </button>
      //       <span>Click to add task</span>
      //     </div>
      //     <input
      //       type="text"
      //       placeholder="what is your plan for today"
      //       className="rounded-sm shadow-sm px-4 py-2 border border-gray-200 w-full mt-4"
      //     />

      //     <ul className="mt-4">
      //       <li className="flex justify-between items-center mt-3">
      //         <div className="flex items-center">
      //           <input type="checkbox" />
      //           <div className="capitalize ml-3 text-sm font-semibold">
      //             Not done TODO
      //           </div>
      //         </div>
      //         <div>
      //           <button>
      //             <svg
      //               className=" w-4 h-4 text-gray-600 fill-current"
      //               fill="none"
      //               strokeLinecap="round"
      //               strokeLinejoin="round"
      //               strokeWidth="2"
      //               viewBox="0 0 24 24"
      //               stroke="currentColor"
      //             >
      //               <path d="M6 18L18 6M6 6l12 12"></path>
      //             </svg>
      //           </button>
      //         </div>
      //       </li>

      //       <li className="flex justify-between items-center mt-3">
      //         <div className="flex items-center line-through">
      //           <input type="checkbox" checked />
      //           <div className="capitalize ml-3 text-sm font-semibold">
      //             DONE TODO
      //           </div>
      //         </div>
      //         <div>
      //           <button>
      //             <svg
      //               className=" w-4 h-4 text-gray-600 fill-current"
      //               fill="none"
      //               strokeLinecap="round"
      //               strokeLinejoin="round"
      //               strokeWidth="2"
      //               viewBox="0 0 24 24"
      //               stroke="currentColor"
      //             >
      //               <path d="M6 18L18 6M6 6l12 12"></path>
      //             </svg>
      //           </button>
      //         </div>
      //       </li>
      //     </ul>
      //   </div>
      // </div>
    );
  }
}

render(<App />, document.getElementById('root'));
