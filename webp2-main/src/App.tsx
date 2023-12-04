/*import { Header } from './components/login/Header';
import { Container1 } from './components/login/container1';
import { Container2 } from './components/login/container2'; */
import { Container3 } from './components/Cadastrar/container3';
import { Container4 } from './components/Cadastrar/container4';
import { Header2 } from './components/Cadastrar/header2';

import styles from './App.module.css'
import './globals.css';

export default function Home() {
  return (
    <div>
        <Header2/>
      <div className={styles.wrapper}>
        <Container3/>
        <Container4/>
      </div>
    </div>
  )
}