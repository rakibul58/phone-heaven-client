import React from 'react';

const Blogs = () => {
    return (
        <div className=''>
            <div className='text-center'>
                <h4 className='font-bold text-accent text-xl'>Blogs</h4>
                <h1 className='font-semibold text-3xl'>These are the recent Blogs</h1>
            </div>
            <div className='px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16'>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title font-bold text-accent text-opacity-75">What are the different ways to manage a state in a React application?</h2>
                        <p>There are four main ways to manage a state in React application:
                            <br /><br />
                            (1) Local state <br />
                            (2) Global state <br />
                            (3) Server state <br />
                            (4) URL state</p>
                    </div>
                </div><div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title font-bold text-accent text-opacity-75">How does prototypical inheritance work?</h2>
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
                    </div>
                </div><div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title font-bold text-accent text-opacity-75">What is a unit test? Why should we write unit tests?</h2>
                        <p> Unit Testing is a type of software testing where individual units or components of a software are tested. <br />
                            Unit testing enable us to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in codebase.
                        </p>
                    </div>
                </div><div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title font-bold text-accent text-opacity-75">React vs. Angular vs. Vue?</h2>

                        <p>
                            React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. <br />
                            Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. <br />
                            Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;