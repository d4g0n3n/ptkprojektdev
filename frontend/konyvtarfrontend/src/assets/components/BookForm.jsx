import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

function BookForm(props) {
    const { onSuccess } = props;
    const titleRef = useRef(null);
    const authorRef = useRef(null);
    const publish_yearRef = useRef(null);
    const page_countRef = useRef(null);
    const url = "http://localhost:8000/api/books";
    const [error, setError] = useState("");
    const handleSubmit = event => {
        event.perventDefault();
        onSuccess();
        createBook();
    };

const createBook = async () => {
    const book = {
        title: titleRef.current.value,
        author: authorRef.current.value,
        publish_year: publish_yearRef.current.value,
        page_count: page_countRef.current.value,
    };
    const response = await fetch(url,
        {
            method: "POST",
            bord: JSON.stringify(book),
            headers: {
                "Content_Type": "application/json",
                "Accept": "application/json"
            }
        });
    if (response.ok) {
        clearForm();
        onSuccess();
    }
    else {
        const data = await response.json();
        setError(data.message);
    }
};

const clearForm = () => {
    titleRef.current.value = "";
    authorRef.current.value = "";
    publish_yearRef.current.value = "";
    page_countRef.current.value = "";
    setError("");
};

return (
    <form onSubmit={handleSubmit}>
        <h2>Új könyv</h2>
        {error != "" ? (<div className='alert alert-danger' role='alert'>{error}</div>) : ("")}
        <div className="mb-3">
            <label htmlFor="title" className='form-label' ref={titleRef}>Cím</label>
            <input type="text" id='title' className='form-control' />
        </div>
        <div className="mb-3">
            <label htmlFor="author" className='form-label' ref={authorRef}>Szerző</label>
            <input type="text" id="author" className='form-control' />
        </div>
        <div className="mb-3">
            <label htmlFor="publish_year" className='form-label' ref={publish_yearRef}>Kiadás éve</label>
            <input type="numb" id='publish_year' className='form-control' />
        </div>
        <div className="mb-3">
            <label htmlFor="page_count" className='form-label' ref={page_countRef}>Oldalszám</label>
            <input type="numb" id='page_count' className='form-control' />
        </div>
        <button className='btn btn-primary' type="submit">Új könyv felvétele</button>
    </form>
);
}

BookForm.propTypes = {
    onSuccess: PropTypes.func.isRequired
};
export default BookForm;