import {useState} from 'react';
import Circle from './../Circle/Circle';
import st from './App.module.css';

function App() {
  const [stcol, setColor] = useState(0);
  const trligst = new Array();
  trligst[0] = "green";
  trligst[1] = "orange";
  trligst[2] = "red";
  
  const timelist = new Array();
  timelist[0] = 10000;
  timelist[1] = 3000;
  timelist[2] = 10000;
  
  const actcol = new Array();
  
  actcol[stcol] = trligst[stcol];
 if(stcol < 2)
 	{setTimeout(() => setColor(stcol +1), timelist[stcol]);}
 else
 	{setTimeout(() => setColor(0), timelist[stcol]);}
 
  return (
	<div className={st.colortraf}>
		<Circle color={actcol[2]}/>
		<Circle color={actcol[1]}/>
		<Circle color={actcol[0]}/>
	</div>
  );
}

export default App;
