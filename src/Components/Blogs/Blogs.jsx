import React from 'react';
import CommonHeader from '../CommonHeader/CommonHeader';
import CombinedTitle from '../CombinedTitle/CombinedTitle';
import DescriptionText from '../Description-text/DescriptionText';

const Blogs = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='text-center py-20'>
            <CommonHeader>Blog</CommonHeader>
            </div>
            <div>
            <div className=''>
                <div>

                        <CombinedTitle>When you should use context API?</CombinedTitle>
                        <DescriptionText> =&gt; Context API when need to manage global state that needs to be accessed by multiple components throughout application.</DescriptionText>
                </div>
                <div>
                <CombinedTitle>What is custom hook?</CombinedTitle>
                        < DescriptionText>=&gt; Custom hooks can handle a wide range of functionalities, such as data fetching, form handling, authentication, animation control, and more. </ DescriptionText>
                </div>
                <div>
                <CombinedTitle>What is useRef?</CombinedTitle>
                        < DescriptionText>=&gt; useRef hook in React provides a way to maintain mutable references across renders, making it suitable for scenarios where need to interact with DOM elements or manage values that should persist between renders without causing re-renders. </ DescriptionText>
                </div>
                <div>
                <CombinedTitle>What is useMemo?</CombinedTitle>
                        < DescriptionText>=&gt; The useMemo hook is a performance optimization in React that allows you to memoize the result of a function or an expression, ensuring that the computation is only re-run when the dependencies change. This can help prevent unnecessary calculations and improve the performance of your components. </ DescriptionText>
                </div>
                         
                    </div>
            </div>
        </div>
    );
};

export default Blogs;