import { useEffect, useState } from "react"

// api
import api from "../routes/api";


interface Animal {
    id: number;
    identification: string;
    breed: string;
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
            
            {/* Lista de animais */}
            <div>
                <ul>
                    {animals.map((animal) => (
                        <li className="flex gap-2" key={animal.id}>
                            <p>{animal.identification}</p>
                            <p>{animal.breed}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Criar novo animal */}
            <div>
                
            </div>
        </div>
    )
}