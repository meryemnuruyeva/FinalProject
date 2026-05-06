
export default function Input({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  name,
  label,
  error,
  required = false,
  className = ''
}) {
  return (
    <div className={`input-group ${error ? 'error' : ''} ${className}`}>
      {label && (
        <label htmlFor={name}>
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="input-field"
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}
