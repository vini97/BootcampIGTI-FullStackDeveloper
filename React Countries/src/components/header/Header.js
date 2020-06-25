import React, { Component } from 'react'
import { formatNumber } from '../../helpers/formatHelpers';
import css from './header.module.css'

export default class Header extends Component {

    handleInputChange = (event) => {
        const newText = event.target.value;
        this.props.onChangeFilter(newText); //Chama a função de App.js
    };

    render() {
        const {filter, countryCount, totalPopulation} = this.props;

        return (
            <div className={css.flexRow}>
                <input placeholder="Insira o nome do país" type='text' value={filter} onChange={this.handleInputChange} /> |
                <span className={css.country}>
                    Países: <strong>{countryCount}</strong>{' '}
                    </span>{' '}
                    |
                <span className={css.population}>
                    População: <strong> {formatNumber(totalPopulation)} </strong>{' '}
                    </span>
            </div>
        );
    }
}
