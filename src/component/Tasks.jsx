import React, {useState} from "react";

const Tasks = ({data,setData}) => {
  const [text, setText] = useState("")
  const [day, setDay] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    setData([
      ...data,
      {
        text: text,
        day: day.split('T')[0],
        time: day.split('T')[1],
        id: data.lenght + 1,
        clicked: true,
      },
    ]);
  };
  return (
    <div className="m-auto text-center">
      <form onSubmit={(e)=>handleSubmit(e)}>
        <p>Task</p>
        <input class="form-control " type="text" onChange={(e)=> setText(e.target.value)}></input>
        <p>Day & Time</p>
        <input class="form-control" type="datetime-local" onChange={(e)=> setDay(e.target.value)}></input>
        <input
          className="input-btn rounded-2"
          type="submit"
          value="Save Task"
        ></input>
      </form>
      <p className="text-center">No task to show...</p>
    </div>
  );
};

export default Tasks;