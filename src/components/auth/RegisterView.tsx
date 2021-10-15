
import { Link } from 'react-router-dom'

// import { RemoveError, setError } from '../../actions/ui';
import { useDispatch, useSelector } from 'react-redux'
// import { startRegisterWithEmailPassword } from '../../actions/auth';


//React Forms
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    password: string,
    password2: string,
};

export const RegisterView = () => {

    //Desectructuramos los elemetos del form
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    const state = useSelector(state => state);
    // const { ui } = state;

    const dispatch = useDispatch();

    return (
        <>
            {/* {
                (ui.msgError !== null) ?
                    (<div className="alert alert-error mt-5 mx-5">
                        <div className="flex-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current">
                            </svg>
                            <label>{ui.msgError}</label>
                        </div>
                    </div>)
                    :
                    (
                        (ui.msgError == null) ? ''
                            :
                            (<div className="alert alert-success mt-5 mx-5">
                                <div className="flex-1">
                                    <div className="px-2"><i className="far fa-check-circle"></i></div>
                                    <label>Registro Completado</label>
                                </div>
                            </div>)
                    )
            } */}

            <div className="hero min-h-screen">

                <div className="hero-content w-96 bg-base-200 rounded">
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="p-5 w-full animate__animated animate__fadeIn animate__faster">
                        <h1 className=" text-5xl py-3 font-bold">
                            Registro
                        </h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"><i className="fas fa-user mr-2"></i>Nombre</span>
                            </label>
                            <input type="text" placeholder="Introduzca su Email" className={(errors.name) ? 'input input-error' : 'input'} {...register("name", { required: "Cannot be empty" ,maxLength:4})} />
                            {errors.name && <label className="label"><span className='label-text-alt text-red-500'>{errors.name.message}</span></label>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"><i className="far fa-envelope mr-2"></i>Email</span>
                            </label>
                            <input type="text" placeholder="Introduzca su Email" className={(errors.email) ? 'input input-error' : 'input'} {...register("email", { required: "Cannot be empty" ,maxLength:4})} />
                            {errors.email && <label className="label"><span className='label-text-alt text-red-500'>{errors.email.message}</span></label>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"><i className="fas fa-key mr-2"></i>Contraseña</span>
                            </label>
                            <input type="password" placeholder="Introduzca contraseña" className={(errors.password) ? 'input input-error' : 'input'} {...register("password", { required: "Cannot be empty" ,maxLength:4})} />
                            {errors.password && <label className="label"><span className='label-text-alt text-red-500'>{errors.password.message}</span></label>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"><i className="fas fa-key mr-2"></i>Repita Contraseña</span>
                            </label>
                            <input type="password" placeholder="Introduzca contraseña" className={(errors.password2) ? 'input input-error' : 'input'} {...register("password2", { required: "Cannot be empty" ,maxLength:4})} />
                            {errors.password2 && <label className="label"><span className='label-text-alt text-red-500'>{errors.password2.message}</span></label>}
                        </div>

                        <Link to="/auth/login" className="link link-primary">Ya estás registrado</Link>

                        <div className="flex justify-between">
                            <div className="flex-initial">
                            <input type="reset" className="btn btn-warning  mt-5"/>
                            </div>
                            <div className="w-full">
                                <button type="submit" className="btn btn-primary w-full ml-1 mt-5">Registrar</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>

    )
}
