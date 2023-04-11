import React,{useState} from 'react'


const AddItem = ({setAddItem,setCategory}) => {
  const ITEM={
    id: "",
    name: "",
    description: "",
    recipe: "",
    serve: "",
  }
  const [formData,setFormData]=useState(ITEM)
  const [item,setItem]=useState({})
  const cate=['category','drinks','snacks']

  const handleSelect=(e)=>{
    e.preventDefault();
    setCategory(e.target.value)
  }
  

  const handleChange=async (e)=>{
    const {name,value}=e.target;
    setItem({...item,[e.target.name]:e.target.value,});
    setFormData((formData)=>({
      ...formData,
      [name]:value,
    }));
    


  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    setAddItem({...formData});
    setFormData(ITEM);

  }
console.log(formData)
  return (
    <div>
<select name="category" onChange={handleSelect}>
  {cate.map(c=>(<option value={c}>{c}</option>))}
</select>
      <form className='AddItem-form' onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="id" value={formData.id} onChange={handleChange} type="text" placeholder='id'/>
        <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder='name'/>
        <input name="description" value={formData.description} onChange={handleChange} type="text" placeholder='description'/>
        <input name="recipe" value={formData.recipe} onChange={handleChange} type="text" placeholder='recipe'/>
        <input name="serve" value={formData.serve} onChange={handleChange} type="text" placeholder='serve'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddItem