import { useState } from "react";
import { useDispatch } from "react-redux";
import { addGroup } from "../../../../helpers/localGroupManager";

const useAddModal = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch({ type: "add", payload: { name, description } });
    }

    const handleName = e => setName(e.target.value);
    const handleDescription = e => setDescription(e.target.value);
    
    return {
        name,
        description,
        handleDescription,
        handleName,
        handleAdd
    };
}

export default useAddModal;