import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

const burger = (props) => {


    //transform key-value object to array of arrays;
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
               return <BurgerIngredient key = {igKey + i } type={igKey}></BurgerIngredient>
            });
        })//concat array in order to check after its length
        .reduce((arr, curr) => {
            return arr.concat(curr)
        }, []);

    //check if there are not ingredients
    if(transformedIngredients.length === 0 ){
        transformedIngredients = <p>Please start adding ingredients!</p>
    }



    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    );
};

export default burger;