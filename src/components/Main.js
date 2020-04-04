import React from 'react';
import '../App.css';
import Card from './Card';
import supervisorSvg from '../images/icon-supervisor.svg';
import builderSvg from '../images/icon-team-builder.svg';
import karmaSvg from '../images/icon-karma.svg';
import calculatorSvg from '../images/icon-calculator.svg';

class Main extends React.Component {
    render() {
        const supervisorIcon = supervisorSvg;
        const builderIcon = builderSvg;
        const karmaIcon = karmaSvg;
        const calculatorIcon = calculatorSvg;

        return (
            <div className="mainContainer">
                <div className="cardGrid outerCards" id="supervisorCard">
                    <Card imgSrc={supervisorIcon} title="Supervisor" text="Monitors activity to identify project roadblocks" />
                </div>
                <div className="cardGrid" id="builderCard">
                    <Card imgSrc={builderIcon} title="Team Builder" text="Scans our talent network to create the optimal team for your project" />
                </div>
                <div className="cardGrid outerCards" id="karmaCard">
                    <Card imgSrc={karmaIcon} title="Karma" text="Regularly evaluates our talent to ensure quality" />
                </div>
                <div className="cardGrid" id="calculatorCard">
                    <Card imgSrc={calculatorIcon} title="Calculator" text="Uses data from past projects to provide better delivery estimates" />
                </div>
            </div>
        );
    }

}

export default Main;