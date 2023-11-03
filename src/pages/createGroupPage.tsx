import { useForm } from "react-hook-form";
import { useGroup } from "../context/groupContext";
import { useNavigate } from "react-router-dom";

export default function GroupFormPage() {

    const { register, handleSubmit } = useForm();

    const { createGroup } = useGroup();

    const navigate = useNavigate();

    const onSubmit = handleSubmit((data: any) => {
        createGroup(data);
        navigate("/");
    })

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Title"
                    {...register("name")}
                    autoFocus
                />
                <button>Save</button>
            </form>
        </div>
    )
}