import { useState } from "react";

export default function FormInput({ id, label, type = "text", register, errors, validate }) {
    const [show, setShow] = useState(false);
    const isPassword = type === "password";
    return (
        <div className="form">
            <label htmlFor={id}>
                {label} <span className="red-start">*</span>
            </label>

            <div className="password-wrapper">
                <input
                   type={isPassword && show ? "text" : type}
                   id={id}
                   name={id}
                   {...register(id, { required: `${label} wajib diisi`, validate })}
                />
                {isPassword && (
                    <button
                        type="button"
                        className="toggle-password"
                        onClick={() => setShow((prev) => !prev)}
                    >
                        {show ? "Sembunyikan" : "Tampilkan"}
                    </button>
                )}
            </div>
            
            {errors[id] && <p className="error">{errors[id].message}</p>}
        </div>
    )
}