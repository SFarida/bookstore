import React from 'react';

const Form = ({ books }) => {
    const optionStyle = {
        fontFamily: '"Montserrat" sans-serif',
        fontSize: '1rem',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '-0.15px',
        color: '#c4c4c4'
    }
    return (
        <div className='container'>
            <h3 className="new_book">ADD NEW BOOK</h3>
            <form className="form">
                <div className='row'>
                    <div className='col-6'>
                        <input
                            className="w-100 input_book"
                            placeholder="Book title"
                        />
                    </div>
                    <div className='col-3'>
                        <select className="w-100 select">
                            {
                                books.map((book) => (
                                    <option value={book.author} style={optionStyle}>
                                        {book.author}
                                    </option>
                                ))
                            }

                        </select>
                    </div>
                    <div className='col-3'>
                        <button className="btn btn-primary w-100" type="submit">ADD BOOK</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;