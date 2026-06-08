import { useEffect, useState } from "react"

// api
import api from "../routes/api";


interface Animal {
    id: number;
    identification: string;
}


export default function HomePage() {
    const [animals, setAnimals] = useState<Animal[]>([]);

    useEffect(() => {
        async function getAnimals() {
            try {
                const response = await api.get<Animal[]>('/animals');

                setAnimals(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        getAnimals();
    }, []);

    return (
        <div className="flex w-6xl bg-green-900 p-2 shadow-md">
            <ul>
                {animals.map((animal) => (
                    <li key={animal.id}>
                        {animal.identification}
                    </li>
                ))}
            </ul>
        </div>
    )
}