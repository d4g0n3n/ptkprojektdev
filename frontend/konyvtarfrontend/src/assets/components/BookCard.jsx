import PropTypes from 'prop-types';


function BookCard(props) {
    const { book } = props
    const url = "http://localhost:8000/api/books";
    const rent = async () => {
        const response = await fetch(url + "/" + book.id + "/rent", {
            method: "POST",
            headers: {
                "Accept": "application/json",
            }
        });

        if (response.ok) {
            alert("sikeres foglalás")
        }
        else {
            const data = await response.json();
            alert(data.message);

        }
    }
    return (
        <main>
            <div className="cols-lg-3 cols-md-6 cols-sm-12 md-4">
                <div className="card">
                    <div className="card-body">
                        <h2>{book.title}</h2>
                        <h2>{book.author}</h2>
                        <p>{book.publish_year}</p>
                        <p>{book.page_count}</p>
                        <img className='img-fluid' src={"szerzok/" + encodeURIComponent(book.author) + ".jpg"} alt={book.author} />
                        <button className='btn btn-success' onSubmit={() => rent()}>Kölcsönzés</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

BookCard.propTypes = {
    book: PropTypes.object.isRequired
}
export default BookCard;