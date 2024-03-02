import React, { useState } from 'react';

export default function CreateRestaurantPage() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        foodType: '',
        location: ''
    });
    const [formVisible, setFormVisible] = useState(false);

    async function createNewRestaurant(ev) {
        ev.preventDefault();
        try {
            const response = await fetch(process.env.REACT_APP_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Restaurant created successfully!');
                setFormVisible(false);
            } else {
                console.error('Failed to create restaurant.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function toggleFormVisibility() {
        setFormVisible(!formVisible);
    }

    return (
        <div>
            <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 9999}}>
                <button onClick={toggleFormVisibility} style={{width: '35px', height: '35px', borderRadius: '50%'}}>
                    {formVisible ? '-' : '+'}
                </button>
            </div>

            {formVisible && (
                <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 9998 }}>
                    <form className='createRestaurantForm' onSubmit={createNewRestaurant} style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                        <h1>Добавить Ресторан</h1>
                        <input
                            type="text"
                            name="title"
                            placeholder="Название"
                            value={formData.title}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            name="description"
                            placeholder="Описание"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            name="foodType"
                            placeholder="Кухня"
                            value={formData.foodType}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            name="location"
                            placeholder="Локация"
                            value={formData.location}
                            onChange={handleInputChange}
                            required
                        />
                        <button style={{ marginTop: '5px' }}>Добавить ресторан</button>
                    </form>
                </div>
            )}
        </div>
    );
}
