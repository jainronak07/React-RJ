
const Contact = () => {
    return (
  
      <div className="flex flex-col items-center px-10 py-5">
        <h1 className="font-bold text-4xl my-10 underline">CONTACT US</h1>
        <p>Name</p>
        <input placeholder=" Enter Name"className="border-2 w-29 placeholder-gray-500 rounded"></input>
        <input placeholder=" Enter Query"className="border-2 w-[290px] h-[100px] m-5 text-center placeholder-gray-500 rounded"></input>
        
        <button className="border-2 bg-amber-500 p-1 m-5 rounded-2xl w-30 text-xl font-bold">Submit</button>
      </div>
    );
  };
  
  export default Contact;