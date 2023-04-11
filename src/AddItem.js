import React,{useState,useEffect} from 'react'
import SnackOrBoozeApi from './Api'


const AddItem = () => {
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
  const [category,setCategory]=useState("")
console.log(item)
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

  const handleSubmit=async(e)=>{
    e.preventDefault();

    setFormData(ITEM);
    if(category === 'snacks'){
      await SnackOrBoozeApi.addSnacks(formData);
    }else if(category === 'drinks'){
      await SnackOrBoozeApi.addDrinks(formData);

  }
}


  

  return (
    <div className='AddItem'>
      <h2>Add Item</h2>
<select name="category" onChange={handleSelect}>
  {cate.map(c=>(<option value={c}>{c}</option>))}
</select>
      <form className='AddItem-form' onSubmit={handleSubmit}>
        <label>ID</label>
        <input name="id" value={formData.id} onChange={handleChange} type="text" placeholder='id'/>
        <label>Name</label>
        <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder='name'/>
        <label>Description</label>
        <input name="description" value={formData.description} onChange={handleChange} type="text" placeholder='description'/>
        <label>Recipe</label>
        <input name="recipe" value={formData.recipe} onChange={handleChange} type="text" placeholder='recipe'/>
        <label>Serve</label>
        <input name="serve" value={formData.serve} onChange={handleChange} type="text" placeholder='serve'/>
        <button className='AddItem-Submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddItem;