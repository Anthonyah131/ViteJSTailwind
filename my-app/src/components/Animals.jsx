const Animals = () => {
    const animals = [
        { name: "Tiger", id: 1 },
        { name: "Lion", id: 2 },
        { name: "Python", id: 3 }
    ];

    return (
        <div className="flex flex-col items-center justify-center h-3/4">
            <h1 className="text-2xl mb-4">Animals</h1>
            <ul className="text-lg">
                {animals.map(animal => (
                    <li key={animal.id}>* {animal.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Animals;
