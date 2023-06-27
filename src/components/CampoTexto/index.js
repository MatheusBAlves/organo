import './CampoTexto.css';

const CampoTexto = (props) => {
  const placeholderModificado = `${props.placeholder}...`;

  const aoDigitado = (e) => {
    props.aoAlterado(e.target.value);
  };

  return (
    <div className='campo-texto'>
      <label htmlFor=''>{props.label}</label>
      <input
        type=''
        placeholder={placeholderModificado}
        required={props.obrigatorio}
        onChange={aoDigitado}
        value={props.valor}
      />
    </div>
  );
};

export default CampoTexto;
