import React, { Fragment, useEffect, useState } from 'react';
import "../sass/_loading.sass"

const Loading = () => {



    return (
        <section className="sectloading">
            <div className="loading">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </section>
    )
}
export default Loading