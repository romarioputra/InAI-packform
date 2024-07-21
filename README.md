# InAI Packform Front End Test

### Setup

<p>
I used Vite to speed up my development time. I chose React for this task because I wanted to learn more about it. Tailwind is installed, but only for utility classes (margin, padding, spacing, etc.). The main library I used is styled-components, which helped me create reusable components.
</p>

### Mobile UI
<p>
    Because this is a simple app (with no code logic in the task), I would like to discuss the principle of reusability. The principle I used is "Duplication is far cheaper than the wrong abstraction" [Sandi Metz](https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction).
</p>

<p>
    I believe that Packform is going to evaluate how reusable my components are. Initially, my approach was to create a single React component that receives a "styles" object using the CSS Modules method. However, I found this approach not scalable. While I could pass the class names from each CSS file, this method fails when the content of the component differs significantly (such as an image appearing before or after the text).
</p>

<p>Although using React slots (https://sandroroth.com/blog/react-slots/) was an option, I found that it made the components too complex (especially for a button with conditional logic, which seemed odd to me)</p>

<p>
    Therefore, I explored styled-components (using it for the first time) and found it more effective than the previous method. What I like about styled-components is that I can still create pure HTML components and simply pass the necessary styles to them. In the Button.js and Card.js files, I created a sort of "configuration" that modifies our button and card components. Using styled-components helped me understand how UI libraries like ChakraUI and Bootstrap are made.
</p>

### Large Screen UI

<p>
Because this is a complex app (investment apps usually contain a lot of complex numbers, configurations, and calculations), I want to convert the mobile UI into a significantly different UI for desktop/laptop screens. I don't want to just "make the cards, buttons, and text bigger" because that is not helpful.
</p>

<p>
 There is a programming pattern called "backend for frontend" (https://learn.microsoft.com/en-us/azure/architecture/patterns/backends-for-frontends), which essentially means providing different responses (I believe now graphQL is the more popular option) for each frontend that uses the data from the server. This is because there is different information that can be displayed on mobile and large screens. For example, in the mobile UI, users might only need to know if their investment is profitable or not. However, on the desktop screen, users might need to see more detailed information, such as the sources of their investments.
</p>

<p>
UI/UX is only good if it fits the purpose of the web. Since this is an investment app, I assume that the user will be an investor. What an investor needs is a lot of digestible information on the same page. I am an active investor in my country's stock market as well, and I use some apps that help me invest, such as Stockbit (which will be my UI/UX inspiration). These are the examples I use for this task.

*Note: Stockbit is more of a broker application rather than an "investment dashboard" app, but I think they still have the same purpose: providing a lot of digestible information on the same page. From the screenshot, what I see is that layout is very important in an investment app. The layout indirectly guides us to what we want to see.
</p>

![Stockbit Dashboard Layout](/documentation-assets/stockbit_dashboard_layout.png)

#### Web Design Philosophies

<p>
I am trying to implement a Z-shaped layout (https://uxplanet.org/z-shaped-pattern-for-reading-web-content-ce1135f92f1c). The reason for this is that the Z-shaped layout allows users to scan the web and quickly find the main information they are looking for, such as net assets, gross income, or their gains. As the article said, scanning means they only stop to read when something catches the eye.
</p>

