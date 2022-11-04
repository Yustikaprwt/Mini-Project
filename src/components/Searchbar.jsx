import React from "react";

const SearchBar = () => {
    return(
            <div className="addReview">
                <form className="row g-3 d-flex justify-content-center" style={{padding: 35}}>
                    <div className="col-auto" style={{marginTop: 80}}>
                        <label for="inputId" className="visually-hidden">ID</label>
                        <input type="text" className="form-control text-center" id="inputId" placeholder="ID Product"/>
                    </div>
                </form>
            </div>
    );
};

export default SearchBar;
