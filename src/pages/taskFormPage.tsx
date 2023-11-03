import React, { useState, useEffect } from 'react';
import TextEditor from "../components/textEditor";
import { useForm } from "react-hook-form";
import Header from '../components/header';
import { useTask } from '../context/taskContext';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import dayjs, { Dayjs } from "dayjs";

const TaskForm = () => {
    const [date, setDate] = useState<Dayjs | null>(dayjs());
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        const handleDateChange = async (date: Dayjs | null) => {
            try {
                await setDate(date);
            } catch (error: any) {
                console.log(error);
            }
        };

        handleDateChange(date);

    }, []);

    const { _id } = useParams();
    const formattedDate = date ? date.format('YYYY-MM-DD') : '';

    const { createTask } = useTask();

    if(_id){
        console.log(_id);
    }

    const onSubmit = handleSubmit((data: any) => {

        // Enviar datos al servidor
        if(_id){
            createTask(_id, data)
                .then(() => {
                    navigate(`/groups/${_id}`);
                })
                .catch((error) => {
                    // Maneja los errores aquí
                    console.log(error);
                });
        }
    });

    return (
        <div>
            <Header />
            <div className="task-form-container">
                <form className="task-form" onSubmit={onSubmit}>
                    <label htmlFor="title">Título:</label>
                    <input
                        type="text"
                        id="title"
                        {...register("title")}
                    />

                    <label htmlFor="description">Descripción:</label>
                    <textarea
                        id="instruction"
                        {...register("instruction")}
                    />

                    <label htmlFor="date">Fecha:</label>
                    <input
                        type="date"
                        id="date"
                        {...register("date")}
                    />

                    <label htmlFor="points">Puntos:</label>
                    <input
                        type="number"
                        id="points"
                        {...register("points")}
                    />

                    <label htmlFor="lengthMin">Cantidad Caractéres:</label>
                    <input
                        type="number"
                        id="lengthMin"
                        {...register("lengthMin")}
                    />

                    <button type="submit">Guardar</button>
                </form>
            </div>

        </div>
    );
};

export default TaskForm;
