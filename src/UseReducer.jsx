import { useReducer, useState } from "react";

// const reducer = (state, action) => {
// //   if (action.type === "increase") {
// //     return state + 1;
// //   } else if (action.type === "decrease") {
// //     return state - 1;
// //   } else if (action.type === "update.payload") {
// //     return state - 1;
// //   }
//   return action;
// };

// const UseReducer = () => {
//   const [data, dispatch] = useReducer(reducer, 0);
//   const [input, setInput] = useState("");

//   const increseHandler = () => {
//     dispatch(data + 1);
//   };
//   const decreseHandler = () => {
//     dispatch(data - 1);
//   };
//   const updateHandler = () => {
//     dispatch({ input });
//   };
//   console.log(typeof data);
//   console.log(data, +input);
//   return (
//       <>
//       <div className="container">
//         <div className="row mt-5 align-items-center">
//           <div className="col-4 d-flex gap-3">
//             <input
//               value={+input}
//               type="text"
//               onChange={(evt) => {
//                   setInput(evt.target.value);
//                 }}
                
//                 />
//             <button onClick={updateHandler} className="btn btn-primary">
//               Almashtirish
//             </button>
//           </div>
//           <div className="d-flex col-4 gap-3">
//             <button onClick={decreseHandler} className="btn btn-info px-4">
//               -
//             </button>
//             {data}
//             <button onClick={increseHandler} className="btn btn-info px-4">
//               +
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

const reducer = (state, action) => {
	// if (action.type === 'increase') {
	// 	return state + 1;
	// } else if (action.type === 'decrease') {
	// 	return state - 1;
	// } else if (action.type === 'update') {
	// 	return action.payload;
	// } else {
	// 	return state
	// }

	switch (action.type) {
		case 'increase':
			return state + 1;
		case 'decrease':
			return state - 1;
		case 'update':
			return action.payload;
		default:
			return state;
	}
};

function App() {
	const [data, dispatch] = useReducer(reducer, 0);
	const [input, setInput] = useState('');

	const [todos, setTodos] = useState([]);

	// fetch('https://jsonplaceholder.typicode.com/todos')
	// 	.then((res) => res.json())
	// 	.then((data) => {
	// 		console.log(data);

	// 		// setTodos(data);
	// 	});

	const increaseHandler = () => {
		dispatch({ type: 'increase' });
	};
	const decreaseHandler = () => {
		dispatch({ type: 'decrease' });
	};

	const updateHandler = () => {
		dispatch({ type: 'update', payload: +input });
	};

	return (
		<div className='container p-5'>
			{todos.map((todo, i) => (
				<div key={i}>{todo.title}</div>
			))}
			<input
				type='text'
				value={input}
				onChange={(evt) => {
					setInput(evt.target.value);
				}}
				name=''
				id=''
			/>
			<button onClick={updateHandler}>Almashtirish</button>
			<button className='mx-3' onClick={decreaseHandler}>
				-
			</button>
			{data}
			<button className='mx-3' onClick={increaseHandler}>
				+
			</button>

			{/* <ContactBook /> */}

			{/* <User name="John" /> */}
		</div>
	);
}

export default App;
