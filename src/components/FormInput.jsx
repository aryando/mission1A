export default function FormInput({ id, label, type = "text", register, errors, validate }) {
    return (
        <div className="form">
            <label htmlFor={id}>
                {label} <span className="red-start">*</span>
            </label>
            <input
                type={type}
                id={id}
                {...register(id, { required: `${label} wajib diisi`, validate })}
                />
            
            {errors[id] && <p className="error">{errors[id].message}</p>}
        </div>
    )
}