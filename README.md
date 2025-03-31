#hi

<!-- 
chapter 1- 3
{Functional component and all } -->

*****************************************************************

// const heading= React.createElement("h1",{id:"heading"},"Hi this is something")

const reactElement=(
  <h1>this is a react element</h1>
)
const FunctionalComponent2 = ()=>
(
    <div>
      {reactElement}
      <h1>This is a functional component inside 1</h1>
    </div>
)
const FunctionalComponent1 = ()=>
(
 
  <div id="FC">
     <FunctionalComponent2/>
    <h1 class="heading">This is a functional component</h1>
  </div>
)

//jsx -using element
const jsxHeading= <h1 id="heading">This is jsx heading</h1>

*******************************************************************
<!-- 

Swiggy app clone LLD types  -->
