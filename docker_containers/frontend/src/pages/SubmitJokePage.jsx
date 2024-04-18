import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SubmitJokePage = ({ submitJokeSubmit }) => {
    const [joke, setJoke] = useState('')
    const [category, setCategory] = useState('')

    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();

        const newJoke ={joke, category}

        submitJokeSubmit(newJoke);

        return navigate('/submit');
    }

    return (
        <>
            <h1 className="pageTitle">Do you have a joke to share?</h1>

            <div className="blurb">
                <h4>Please share your jokes with us.</h4>

                <p>If we like it we'll keep it and you may see it here. We also record the email associated with each joke submitted.</p>   

                {/* <p>User email: {{ user?.email}} </p> */}
            </div>

            <div className="content">

                <form onSubmit={submitForm}>
                    <div className="enterJoke">
                        <label>
                            <h3>joke:</h3>
                            <input
                                type="text"
                                id="joke"
                                name="joke"
                                placeholder="typejoke..."
                                required
                                value={joke}
                                onChange={(e) => setJoke(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="selectCategory">
                        <label>
                            <h3>joke category:</h3>
                            <select
                                id="category"
                                name="category"
                                required
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option disabled value="">joke category</option>
                                <option value="cat">cat</option>
                                <option value="animal">other animal</option>
                                <option value="plant">plant</option>
                                <option value="dad">dad</option>
                                <option value="misc">other</option>
                            </select>    
                        </label>
                    </div>
                </form>
                <div>
                    <button type="submit">
                        submit joke
                    </button>
                </div>
            </div>
        
        </>
        
    )
}
export default SubmitJokePage