import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className=" container mx-auto my-5">
            <h5 className="font-bold">How will you improve the performance of a React Application?</h5>
            <p className=" text-align: justify;">For improving the performance at first we have to Keep component state local where necessary.Then, Memoizing React components to prevent unnecessary re-renders.After that we should use Code-splitting in React using dynamic import().Then, Windowing or list virtualization in React. At the last we have to do Lazy loading images in React.</p>
            <h5 className="font-bold"> What are the different ways to manage a state in a React application?</h5>
            <p className="alignment">There are four ways to manage a state in a React application
                they are:Local state,Global state,Server state and URL state.</p>
            <h5 className="font-bold">How does prototypical inheritance work?</h5>
            <p className="alignment">The Prototypal Inheritance is a feature in javascript which is mainly used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
            <h5 className="font-bold"> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h5>
            <p className="alignment">If we update it directly, calling the setState() afterward may just replace the update we made.When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.we will lose control of the state across of all components.</p>
            <h5 className="font-bold">What is a unit test? Why should write unit tests?</h5>
            <p className="alignment">Unit test is mainly  a software development process in which the smallest testable parts of an application are called units.Units are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency. Thus, the result is reliable code. Unit tests also change the nature of the debugging process.</p>
        </div>
    );
};

export default Blogs;