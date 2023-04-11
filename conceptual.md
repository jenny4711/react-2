### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
<!-- Javascript framework. let us handle client and server-side routing in react application. -->

- What is a single page application?
<!-- a website or web application that dynamically rewrites a current web page with new data from the web server, 
     instead of the default method of a web browser loading entire new pages. -->

- What are some differences between client side and server side routing?
<!-- server sides needs to keep making requests to the server in order for the application to rerender, 
     but client side does not need to keep make request to the server -->

- What are two ways of handling redirects with React Router? When would you use each?
<!-- Using the <Redirect to="/" /> -> Useful for error (If without login ,let them to go register.)
Calling .push method on the history object -> Useful for "you finished this, now go here" -->




- What are two different ways to handle page-not-found user experiences using React Router? 
<!-- Switch- In the <Switch></Switch> ,make 
<Route path="*" component={NotFound}> 
 or
<Route path="*" render={()=><Redirect to="/"/>/}-->

- How do you grab URL parameters from within a component using React Router?
<!-- useParams hook -->

- What is context in React? When would you use it?
<!-- Universal data across your application.
Data accessible across all components -->


- Describe some differences between class-based components and function
  components in React.
<!-- functional component is just a plain javascript function which accepts props as an argument and return a React element -->
<!-- class component requires you to extend from React.Component and create a render function which returns a React element. -->

- What are some of the problems that hooks were designed to solve?
<!-- 
We want to present an API that makes it more likely for code to stay on the optimizable path. 
To solve these problems, Hooks let you use more of React's features without classes. Conceptually,
 React components have always been closer to functions. -->