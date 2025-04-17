import React from 'react'


// you can also destructre it by passing {variable to be passed} instead of props in function Card ({variable}) and while printing it write the variable name directly like the code given below

/*
function Card({Username}){
    console.log(Username);
}
 */
function Card(props) {
    console.log(props.Username);
    
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">youngest in forbes 40: {props.Username}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-200 dark:focus:ring-blue-800">
                {/* {props.btnText || "visit me"} //this is not readable otherwise it is nice way of doing so but you have to do this if youre using props */}
                {/* {props.btnText} you will follow this if you are using destructured code as explained above*/}
                {props.btnText || "visit me"}
            </a>
        </div>
    </div>

  )
}

export default Card