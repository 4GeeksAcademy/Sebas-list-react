import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


const Home = () => {
	

	const [nuevaTarea, setNuevaTarea] = useState ("Ejemplo");
    const [listaTarea, setListaTarea] = useState (["Hacer la cama", "Cepillarme los dientes"]);

    const handleClick = () => {
		if (nuevaTarea !== ""){
			setListaTarea([...listaTarea, nuevaTarea]);
			setNuevaTarea("");
		}
	};
	//agregar una nueva tarea

	const borrarTarea = (index) => {
		
		const listaNueva = listaTarea.filter((tarea, i) => i !== index);
			setListaTarea(listaNueva);	
	}

	const handleChange = (event) => {
		setNuevaTarea(event.target.value)	
	}
	//mantiene actualizado
		return(
			<div className = "text-center">
				<h1 className="text-center mt-5">Todo List
				</h1>
					<div className="container w-50 mx-auto">
						<div className="d-flex gap-2">
							<input type="text"
							className="form-control" 
							onChange={handleChange}
							onKeyDown={(e) => {
							  if (e.key === "Enter"){
								 handleClick ();
							}
                            }}
							placeholder="Agregar tarea"
							/>
							
					    </div>
				
						<ul className="list-group">
						  {listaTarea.map((tarea, index) => (
						    <li 
							  className="list-group-item tarea-item d-flex justify-content-between align-items-center"
						      key={index}>{tarea} <button 
						     onClick={() => borrarTarea(index)}
						     className="btn btn btn-sm tarea-delete-btn">x</button>
						</li>
						))}
						</ul>
						</div>
			</div>
		)
	}

	export default Home;
