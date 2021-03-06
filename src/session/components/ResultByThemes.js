import React from 'react';
import PropTypes from 'prop-types';

const ResultByThemes = props => {

    const renderTheme = themeResult => {
        return (
            <div key={themeResult.theme.themeId} className="row bg-light mt-1 mb-1 no-gutters">
                <div className="col-8 text-truncate border">
                    <span className="text-secondary"
                          title={"Theme #" + themeResult.theme.themeId + ": " + themeResult.theme.name}>{themeResult.theme.name}</span>
                </div>
                <div className="col-2 text-center border alert-sm alert-info">
                    <span title="Quantity of questions in this theme">{themeResult.quantity}</span>
                </div>
                <div
                    className={`col-2 text-center border alert-sm alert-${((themeResult.percent < 50) ? "danger" : "success")}`}>
                    <span title="Result on this theme">{themeResult.percent.toFixed(1) + "%"}</span>
                </div>
            </div>);
    }

    let output = [];
    props.themeResults.map(t => output.push(renderTheme(t)));
    return (
        <div className="row mt-3 mr-1 ml-1">
            <div className="col-0 col-sm-1 col-md-2"/>
            <div className="col-12 col-sm-10 col-md-8">
                <h6 className="text-center text-secondary"><u>Result by themes:</u></h6>
                {output}
            </div>
            <div className="col-0 col-sm-1 col-md-2"/>
        </div>
    );
}

ResultByThemes.propTypes = {
    themeResults: PropTypes.array.isRequired
};

export default ResultByThemes;