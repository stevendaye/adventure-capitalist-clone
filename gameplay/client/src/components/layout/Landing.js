import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Redirect to = "/gameplay"/>
    }

    return (
        <Fragment>
            <section className = "landing">
                <div className = "landing-inner">
                    <h1 className = "large">
                        Good fortunes awaits incredible adventurers
                    </h1>
                    <p className = "small my-1">
                        Start a business and get started with an amazing capitalist
                        experience in buying and upgrading businesses to make more money.
                    </p>
                    <span className = "btn btn-primary">
                        <Link to = "/gameplay">
                            Start Game
                            <i className = "fa fas-arrow"></i>
                        </Link>
                    </span>
                </div>

            </section>
        </Fragment>
    );
};

Landing.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToPropsLanding = state => ({
    isAuthenticated: state.authState.isAuthenticated
});

const ConnectedLanding = connect(mapStateToPropsLanding)(Landing);

export default ConnectedLanding;
