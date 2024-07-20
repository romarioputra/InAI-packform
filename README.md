# InAI Packform Front End Test

### Mobile UI
<p>
    First of all, I want to discuss the principle when developing this application. First principle that I use is "Duplication is far cheaper than the wrong abstraction" [Sandi Metz] (https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction)
</p>

<p>
    I believe that packform is going to score how reusable my components are. And at first, my way to doing this are to create one react component that receive "styles" object with the CSS Modules method. But after trying it, I find it not scalable. Because yes I can just pass it the class name from each css file, but what if the content of the component is far different from others (like image after/before the text)?
</p>

<p>And yes, I can use react slots (https://sandroroth.com/blog/react-slots/) but the component become too complex (for a button that have a conditional logic seems weird to me).</p>

<p>
    So I explore styled-components (first time using it) and I found it better than the method above. What I like about styled components is I still can create pure html components that I can just pass the style that I needed. So in Button.js and Card.js file, I create some sort of "configuration" that can modify our button and card component. Using styled components make me understand how UI libraries like ChakraUI and Bootstrap are made.
</p>