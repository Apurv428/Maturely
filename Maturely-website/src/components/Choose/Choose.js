import React from 'react';
import styles from './Choose.module.css';
import one from './1.png';
import two from './2.png';
import three from './3.png';
import { Link } from 'react-router-dom';

export default function Choose() {
    return (
        <div className={styles.outer_layout} id="Cards">
        <h1 className={styles.Question}>Which age group do you belong to?</h1>
            <div className = {styles.cards_layout}>
            <a href="/preteen">
                <div className = {styles.leftbox}>
                    <h2>Pre-Teen</h2>
                    <img src={one} className={styles.one} alt="" />
                </div>
            </a>
            <a href="/teen">
            <div className = {styles.middlebox}>
                <h2>Teen</h2>
                <img src={two} className={styles.two} alt="" />
            </div>
            </a>
            <a href="/adult">
            <div className = {styles.rightbox}>
                <h2>Adult</h2>
                <img src={three} className={styles.three} alt="" />
            </div>
            </a>
            </div>
        </div>
    )
}
