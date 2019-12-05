import React from 'react';
import {FaExchangeAlt} from "react-icons/fa";
import PropTypes from 'prop-types';


const Admin = props => {

    const {affiliation} = props;
    let affiliationTitle='';
    if (affiliation) {
        if (affiliation.org) {
            affiliationTitle= `Org: ${affiliation.org.label}`;
        }
        if (affiliation.fac) {
            affiliationTitle= affiliationTitle + `Fac: ${affiliation.fac.label}`;
        }
        if (affiliation.dep) {
            affiliationTitle= affiliationTitle + `Dep: ${affiliation.dep.label}`;
        }
    }
    return (
        <div className="text-dark bg-light text-truncate pt-1 pb-1">
                <span>
                    <button className="badge badge-danger pl-2 pr-2 mr-2" title="Switch department?"
                            onClick={() => props.activateModal()}>
                        Switch&nbsp;<FaExchangeAlt/>
                    </button>
                    &nbsp;
                    {
                        !affiliation ?
                            <span>
                                <strong>You are querying your own department!</strong>
                            </span> :
                            <span title={affiliationTitle}>
                                <strong>
                                    <u>{affiliation.org ? affiliation.org.label+' / ': ''}</u>
                                    <u>{affiliation.fac ? affiliation.fac.label+' / ': ''}</u>
                                    <u>{affiliation.dep ? affiliation.dep.label: ''}</u>
                                </strong>
                            </span>
                    }
                </span>
        </div>
    );
};

Admin.propTypes = {
    affiliation: PropTypes.object.isRequired,
    activateModal: PropTypes.func.isRequired
};

export default Admin;