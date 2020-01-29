import React, { Fragment, useEffect, useState } from 'react';
import "../sass/_loading.sass"

const Loading=()=>{



    return(
        <section className="sectloading">
        <div class="loader">
	<div class="loader__ball"></div>
	<div class="loader__ball"></div>
	<div class="loader__ball"></div>
</div></section>
    )
}
export default Loading