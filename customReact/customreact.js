function customRender(what_to_render, where_to_render){
        /*
        
            // we need to create the DOM element and then we can inject it
            // const domElement = document.createElement('a') // we can directly create the tag or element but since we are creating the module and hence we need to make use of what_to_render      

            // our elemene or tag got created but it is empty
            const domElement = document.createElement(what_to_render.type) 

            // here we had added the children to the html document
            domElement.innerHTML = what_to_render.children 

            // setting the attribute
            domElement.setAttribute('href', what_to_render.props.href)
            domElement.setAttribute('target', what_to_render.props.target)

            // now we need to add our customly created element or tag in the empty container where we need to render or inject
            where_to_render.appendChild(domElement)

        */

    // making the code more optimized/modular in this version 2 of it 

    // asking the type of what we are rendering / injecting
    const domElement = document.createElement(what_to_render.type) 

    // here we had added the children to the html document
    domElement.innerHTML = what_to_render.children 

    // setting the attributes using the for loop making it the optimized version 
    for (const prop in what_to_render.props){
        if (prop === 'children') { // if key of prop is children then simply continue
            continue;
        }

        // menaing of the below line of code is we are setting the value or prop but we are taking the value from props object in what_to_render
        domElement.setAttribute(prop, what_to_render.props[prop])
    }

    // appending the child where we want to inject or render
    where_to_render.appendChild(domElement)
}

// tree / graph representation of react
const reactElement = {
    type: 'a', // type shows the type of tag or type of element 
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    }, // props shows the properties of the element or tag and props is an object containing key value pair
    children: 'CLick me to visit google'
}// this whole process or work is actually the work of react under the hood. Basically we get it through react and since we are creating are own library and hence we are providing this instead of taking the preprocessed help of react by simply importing it

// we need to write every element in the above way only

const mainContainer = document.querySelector('#root')

// now we want an element or method that can render our reactElement 
// we an render it by adding the reactElement to the root
// we will make use of customRender(what_to_render / what_to_inject, where_to_render / where_to_inject) method

customRender(reactElement, mainContainer) 