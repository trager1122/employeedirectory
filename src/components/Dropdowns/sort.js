import React from "react";

function Sort(){
    return(
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sort:
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item alpha">Alphabetically</a>
                <a class="dropdown-item dob">by Birthdate</a>
            </div>
        </div>
    )
}

export default Sort;