import './Form.css'
import TextInput from '../TextInput/TextInput';
import DropDown from '../DropDown/DropDown';

const Form = () => {
    const periods = [
        'Renaissance',
        'Baroque',
        'Romanticism',
        'Impressionism',
        'Surrealism',
        'Abstract Expressionism',
        'Contemporary Art'
    ];
    return (
        <section className="form">
            <form>
                <h2>Artist Details</h2>
                <TextInput label="Name" placeholder="Insert the artist name" />
                <TextInput label="Nationality" placeholder="Insert the artist nationality" />
                <TextInput label="Image" placeholder="Insert the image path" />
                <DropDown label="Period" items={periods}/>
            </form>
        </section>
    );
}

export default Form