// import React, { useEffect } from "react";
// import "./main.css";

// const List = (user) => {
//   useEffect(() => {
//     console.log(user.props);
//   }, []);

//   // const goanother = () => {
//   //   window.location.href = `https://www.joinclubhouse.com/event/${user.props.url}`;
//   //   console.log("you clicked!!");
//   // };

//   return (
//     <>
//       <div className="my-2 w-full md:w-5/6 mx-auto bg-white p-2 shadow rounded-md hover:bg-gray-200">
//         <div className="m-3">
//           <div className="text-left">
//             <p className="m-0" style={{ fontSize: "12px" }}>
//               {user.props.tags.map((tag) => `#${tag}`)}
//             </p>
//             <p className="ff" style={{ fontSize: "12px" }}>
//               {user.props.eventdate}
//             </p>

//             <h4 className="text-3xl ff font-bold">{user.props.title}</h4>
//             <div
//               className="m-0"
//               style={{
//                 display: "flex",
//                 verticalAlign: "middle",
//                 fontSize: "12px",
//               }}
//             >
//               <img
//                 src="https://clublink.to/storage/avatar/bcbc57df.jpeg"
//                 alt="avatar"
//                 className="avatar"
//               ></img>
//               <div>Devrick</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default List;
