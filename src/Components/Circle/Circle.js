import style from './Circle.module.css';

const Circle = (props) => {
	return(
		<div className={style.circle} style={{background: props.color}}></div>
	);
}

export default Circle;
